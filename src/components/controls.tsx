import React from "react";

type ControlPanelProps = {
  name: string;
  greeting: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};


const ControlPanel = ({ name, greeting, onChange}: ControlPanelProps) => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">{greeting} {name}</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ControlPanel;
