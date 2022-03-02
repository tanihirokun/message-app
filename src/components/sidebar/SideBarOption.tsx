import { memo, VFC } from "react";
import './SideBarOption.css'

type Props = {
  text: string;
  icon: any;
}


export const SideBarOption: VFC<Props> = memo((props) => {
  const {text, icon} = props;
  return (
    <div className="sidebarOption">
      {icon}
      <h2>{text}</h2>
    </div>
  );
});
