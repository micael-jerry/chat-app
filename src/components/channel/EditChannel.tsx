import { Channel } from "@/types/Channel";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EditChannelSchema from "@/schema/EditChannelSchema";
import { ShowError } from "../ShowError";
import Select, { MultiValue } from "react-select";
import { UserItemGetUsersType, UserSelectOptionType } from "@/types/User";
import { selectOptionUsers } from "@/utils/selectOptionUsers";

export const EditChannel: React.FC<{
  channel: Channel;
  submitHandler: ({ members }: { members?: number[] }) => void;
  users: UserItemGetUsersType[];
}> = ({ channel, submitHandler, users }) => {
  const {
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    resolver: yupResolver(EditChannelSchema),
  });
  const options: UserSelectOptionType[] = selectOptionUsers(users);

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
