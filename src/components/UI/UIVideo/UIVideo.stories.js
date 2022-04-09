import UIVideo from "./UIVideo";
import video from "./video/han-solo.mp4";

export default {
  title: "UI-kit/UIVideo",
  component: UIVideo,
};

const Template = (args) => <UIVideo {...args} />;

const props = {
  classes: "",
  src: video,
  playbackRate: 1.0,
};

export const Default = Template.bind({});

Default.args = {
  ...props,
};
