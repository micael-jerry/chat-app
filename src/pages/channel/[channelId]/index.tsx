import { getChannelById, getChannels } from "@/api/channel";
import { NavBar } from "@/components/NavBar";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import styles from "../../../styles/styles.module.css";
import Link from "next/link";
import { ChannelListRenderer } from "@/components/channel/ChannelListRenderer";
import { GetChannelType, GetChannelsType } from "@/types/Channel";
import { getMessagesByChannelId, sendMessage } from "@/api/message";
import { GetChannelMessagesType, Message } from "@/types/Message";
import { MessageRenderer } from "@/components/message/MessageRenderer";
import { MessageInput } from "@/components/message/MessageInput";
import { CreateMessageInput } from "@/types/inputs/InputMessage";
import { inputToCreateMessage } from "@/mapper/MessageMapper";

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
  let channel = await getChannelById(user?.token!, Number(channelId));
  let channels = await getChannels(user?.token!);
  let messages = await getMessagesByChannelId(user?.token!, Number(channelId));
  return {
    props: { session, channel, channels, messages: { ...messages, channelId } },
  };
}

const MessageChannel = ({
  session,
  channel,
  channels,
  messages,
}: {
  session: GetSessionType;
  channel: GetChannelType;
  channels: GetChannelsType;
  messages: GetChannelMessagesType;
}) => {
  const user: User = session?.user;

  const submitMessage = async (createMessageInput: CreateMessageInput) => {
    await sendMessage(user?.token!, inputToCreateMessage(createMessageInput));
    window.location.reload();
  };
  const messageList: Message[] = messages.messages.reverse();

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
                      <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                          <div className="navbar-brand">
                            {channel.channel.name}
                          </div>
                          <div className="d-flex">
                            <div className="me-2 ms-2">
                              <Link
                                href={`/channel/edit/${channel.channel.id}`}
                                className="btn btn-outline-secondary"
                              >
                                Edit
                              </Link>
                            </div>
                          </div>
                        </div>
                      </nav>
                      <MessageRenderer
                        userLogedId={user?.id!}
                        messages={messageList}
                      />
                      <MessageInput
                        submitMessage={submitMessage}
                        channelId={messages.channelId}
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
  );
};

export default MessageChannel;
