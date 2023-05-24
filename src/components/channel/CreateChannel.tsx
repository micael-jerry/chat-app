import { CreateChannelInputType } from "@/types/Channel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateChannelSchema from "@/schema/CreateChannelSchema";
import { ShowError } from "../ShowError";

export const CreateChannel: React.FC<{
  submitHandler: (channel: CreateChannelInputType) => void;
}> = ({ submitHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(CreateChannelSchema),
  });
  const typeValue = watch("type");
  return (
    <div>
      <div>
        <div className="container">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
              <h1>Create Channel</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...register("name")}
              />
              {errors.name && <ShowError>{errors.name.message}</ShowError>}
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type (public / private)
              </label>
              <select id="type" className="form-select" {...register("type")}>
                <option value="public">public</option>
                <option value="private">private</option>
              </select>
              {errors.type && <ShowError>{errors.type.message}</ShowError>}
            </div>
            {typeValue === "private" && (
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
            )}
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
