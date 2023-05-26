import { Channel } from "@/types/Channel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EditChannelSchema from "@/schema/EditChannelSchema";
import { ShowError } from "../ShowError";

export const EditChannel: React.FC<{
  channel: Channel;
  submitHandler: ({ members }: { members?: string }) => void;
}> = ({ channel, submitHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(EditChannelSchema),
  });
  return (
    <div>
      <div>
        <div className="container">
          <form name="editChannelForm" onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
              <h1>Edit Channel {channel.name}</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="members" className="form-label">
                Members
              </label>
              <input
                type="text"
                className="form-control"
                id="members"
                {...register("members")}
              />
              {errors.members && (
                <ShowError>{errors.members.message}</ShowError>
              )}
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
