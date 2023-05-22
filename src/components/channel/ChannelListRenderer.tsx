import { Channel } from "@/types/Channel";
import { ChannelItem } from "./ChannelItem";

export const ChannelListRenderer: React.FC<{ channels: Channel[] }> = ({
  channels,
}) => {
  return (
    <ul className="list-unstyled mb-0">
      {channels.map((channel: Channel) => {
        return <ChannelItem key={channel.id} channel={channel} />;
      })}
    </ul>
  );
};
