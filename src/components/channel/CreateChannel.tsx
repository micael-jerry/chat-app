import { CreateChannelInputType } from "@/types/inputs/InputChannel";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateChannelSchema from "@/schema/CreateChannelSchema";
import { ShowError } from "../ShowError";
import { UserItemGetUsersType, UserSelectOptionType } from "@/types/User";
import { selectOptionUsers } from "@/utils/selectOptionUsers";
import Select, { MultiValue } from "react-select";

export const CreateChannel: React.FC<{
  submitHandler: (createChannelInput: CreateChannelInputType) => void;
  users: UserItemGetUsersType[];
}> = ({ submitHandler, users }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(CreateChannelSchema),
  });
  const options: UserSelectOptionType[] = selectOptionUsers(users);
  const typeValue = watch("type") === undefined ? "private" : watch("type");

  return (
    <div>
      <div>
        <div className="container">
          <form name="createChannelForm" onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
              <h1>Create Channel</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="channelName" className="form-label">
                Channel Name
              </label>
              <input
                type="text"
                className="form-control"
                id="channelName"
                {...register("channelName")}
              />
              {errors.channelName && <ShowError>{errors.channelName.message}</ShowError>}
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type (public / private)
              </label>
              <select id="type" className="form-select" {...register("type")}>
                <option defaultChecked={true} value="private">
                  Private
                </option>
                <option value="public">Public</option>
              </select>
              {errors.type && <ShowError>{errors.type.message}</ShowError>}
            </div>
            {typeValue === "private" && (
              <div className="mb-3">
                <label htmlFor="members" className="form-label">
                  Members
                </label>
                <Controller
                  name="members"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      isMulti
                      options={options}
                      value={options.find(
                        (option: UserSelectOptionType) => option.value === value
                      )}
                      onChange={(
                        optionsValues: MultiValue<UserSelectOptionType>
                      ) =>
                        onChange(optionsValues.map((option) => option.value))
                      }
                    />
                  )}
                />
                {errors.members && (
                  <ShowError>{errors.members.message}</ShowError>
                )}
              </div>
            )}
            <div className="mb-3">
              <button className="createChannelButton btn btn-primary" type="submit">
                Create Channel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
