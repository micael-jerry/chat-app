import { Channel } from "@/types/Channel";

export const ChannelItem: React.FC<{ channel: Channel }> = ({ channel }) => {
  const { name, type, owner, id } = channel;
  return (
    <li className="p-2 border-bottom">
      <a href="#!" className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              alt="avatar"
              className="d-flex align-self-center me-3"
              width="60"
            />
            <span className="badge bg-success badge-dot"></span>
          </div>
          <div className="pt-1">
            <p className="fw-bold mb-0">{name}</p>
            <p className="small text-muted">owner: {owner.name}</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">{type}</p>
          <span className="badge bg-danger rounded-pill float-end">{id}</span>
        </div>
      </a>
    </li>
  );
};