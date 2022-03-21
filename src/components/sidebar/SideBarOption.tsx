import { memo, VFC } from "react";
import './SideBarOption.css'

type Props = {
  text: string;
  icon: any;
  active?: any,
}


export const SideBarOption: VFC<Props> = memo((props) => {
  const {text, icon, active} = props;
  return (
    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      {icon}
      <h2>{text}</h2>
    </div>
  );
});
