//фаил для экспорта компонента в сторибук
import React from "react";
import UIButton from "./UIButton";

export default {
  title: "UI-Kit/UIButton",
  component: UIButton,
};

const props = {
  text: "Button",
  onClick: () => console.log("Button clicked"),
  disabled: false,
  theme: "dark",
  classes: "",
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UIButton {...args} />;

//👇 Each story then reuses that template
export const Light = Template.bind({});
Light.args = {
  ...props,
  theme: "dark",
};

export const Dark = Template.bind({});
Dark.args = {
  ...props,
  theme: "dark",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...props,
  disabled: true,
};
