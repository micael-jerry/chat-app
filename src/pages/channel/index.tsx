import { getChannels } from "@/api/channel";
import { NavBar } from "@/components/NavBar";
import { GetSessionType } from "@/types/Session";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import styles from "../../styles/channel.module.css";
import Link from "next/link";
import { ChannelListRenderer } from "@/components/channel/ChannelListRenderer";
import { GetChannelsType } from "@/types/Channel";

export async function getServerSideProps(context: any) {
  const session: GetSessionType = await getSession(context);
  const user: User = session?.user;
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  let channels = await getChannels(user?.token!);
  return {
    props: { session, channels },
  };
}

const Channel = ({
  session,
  channels,
}: {
  session: GetSessionType;
  channels: GetChannelsType;
}) => {
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
                        <div id={styles.gauche}>
                          <ChannelListRenderer channels={channels.channels} />
                        </div>
                      </div>
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

export default Channel;
