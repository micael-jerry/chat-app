import { getChannels } from "@/api/channel";
import { NavBar } from "@/components/NavBar";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import styles from "../../../styles/styles.module.css";
import Link from "next/link";
import { ChannelListRenderer } from "@/components/channel/ChannelListRenderer";
import { GetChannelsType } from "@/types/Channel";
import { getMessagesByChannelId } from "@/api/message";
import { GetMessagesType } from "@/types/Message";
import { MessageRenderer } from "@/components/message/MessageRenderer";
import { MessageInput } from "@/components/message/MessageInput";

export async function getServerSideProps(context: any) {
  const regexChannelId = /^\d+$/;
  const session: GetSessionType = await getSession(context);
  const user: User = session?.user;

  const channelId: string = context.query.channelId;
  if (!session || !regexChannelId.test(channelId)) {
    return {
      redirect: {
        destination: "/channel",
        permanent: false,
      },
    };
  }
  let channels = await getChannels(user?.token!);
  let messages = await getMessagesByChannelId(user?.token!, Number(channelId));
  return {
    props: { session, channels, messages },
  };
}

const MessageChannel = ({
  session,
  channels,
  messages,
}: {
  session: GetSessionType;
  channels: GetChannelsType;
  messages: GetMessagesType;
}) => {
  const user: User = session?.user;
  console.log(messages);
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
                        <div className="input-group rounded mb-3">
                          <Link
                            href={"channel/create"}
                            className="btn btn-outline-secondary"
                          >
                            Create Channel
                          </Link>
                        </div>
                        <div id={styles.leftSide}>
                          <ChannelListRenderer channels={channels.channels} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-7 col-xl-8">
                      <MessageRenderer
                        userLogedId={user?.id!}
                        messages={messages.messages}
                      />
                      <MessageInput/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageChannel;
