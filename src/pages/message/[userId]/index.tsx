import styles from "../../../styles/styles.module.css";
import { getMessageByUser, sendMessage } from "@/api/message";
import { NavBar } from "@/components/NavBar";
import { MessageInput } from "@/components/message/MessageInput";
import { MessageRenderer } from "@/components/message/MessageRenderer";
import { CreateMessage, GetPrivateMessageType } from "@/types/Message";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: any) {
  const regexUserId = /^\d+$/;
  const session: GetSessionType = await getSession(context);
  const user: User = session?.user;

  const userId: string = context.query.userId;
  if (!session || !regexUserId.test(userId)) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  let messageByUser = await getMessageByUser(user?.token!, Number(userId));
  return {
    props: { session, messageByUser: { ...messageByUser, userId } },
  };
}

const PrivateMessage = ({ session, messageByUser }: { session: GetSessionType, messageByUser: GetPrivateMessageType }) => {
  const userLoged: User = session?.user;
  const { userId } = messageByUser;

  const submitMessage = async (message: CreateMessage) => {
    await sendMessage(userLoged?.token!, message);
    window.location.reload();
  };

  return (
    <>
      <NavBar />
      <section id={styles.section}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card" id={styles.chat3}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                      <div className="p-3">
                        <div id={styles.leftSide}>
                          User List
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-7 col-xl-8">
                      <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                          <div className="navbar-brand">
                            Id user: {userId}
                          </div>
                        </div>
                      </nav>
                      <MessageRenderer
                        userLogedId={userLoged?.id!}
                        messages={messageByUser.messages.reverse()}
                      />
                      <MessageInput
                        submitMessage={submitMessage}
                        recipientId={messageByUser.userId}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivateMessage;