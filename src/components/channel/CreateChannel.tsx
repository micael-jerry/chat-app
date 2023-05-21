import { CreateChannelType } from "@/types/Channel";
import { ChangeEvent } from "react";

export const CreateChannel: React.FC<{
  channel: CreateChannelType;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  submitHandler: (e: any) => void;
}> = ({ channel, handleChange, submitHandler }) => {
  const { name, type, members } = channel;
  return (
    <div>
      <div>
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <h1>Login</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type (public / private)
              </label>
              <select
                name="type"
                id="type"
                value={type}
                onChange={handleChange}
              >
                <option value="public">public</option>
                <option value="private">private</option>
              </select>
            </div>
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
