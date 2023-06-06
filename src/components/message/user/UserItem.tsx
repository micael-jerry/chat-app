import avatar from "../../../ressources/avatar.webp";
import Image from "next/image";
import Link from "next/link";
import { UserItemGetUsersType } from "@/types/User";

export const UserItem: React.FC<{ userItem: UserItemGetUsersType }> = ({
  userItem,
}) => {
  const { name, email, id } = userItem;
  return (
    <li className="p-2 border-bottom">
      <Link href={`/message/${id}`} className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div>
            <Image
              src={avatar}
              alt="avatar"
              className="d-flex align-self-center me-3"
              width="60"
            />
            <span className="badge bg-success badge-dot"></span>
          </div>
          <div className="pt-1">
            <p className="fw-bold mb-0">{name}</p>
            <p className="small text-muted">{email}</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">{id}</p>
          {/* <span className="badge bg-danger rounded-pill float-end">{id}</span> */}
        </div>
      </Link>
    </li>
  );
};
