import { Popup } from "semantic-ui-react";

function ToolTip({ content, children }) {
  return <Popup inverted content={content} trigger={children} />;
}

export default ToolTip;
