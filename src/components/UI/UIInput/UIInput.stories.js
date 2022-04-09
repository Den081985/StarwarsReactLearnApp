import { useState } from "react";
import UIInput from "./UIInput";

export default {
  title: "UI-kit/UIInput",
  component: UIInput,
};

const Template = (args) => {
  const [value, setValue] = useState("");

  const inputChange = (value) => {
    setValue(value);
  };

  return <UIInput {...args} value={value} inputChange={inputChange} />;
};

const props = {
  value: "",
  inputChange: () => console.log("Input changed"),
  placeholder: "placeholder",
  classes: "",
};

export const Default = Template.bind({});

Default.args = {
  ...props,
};
