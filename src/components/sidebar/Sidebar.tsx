import { memo, VFC } from "react"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { SideBarOption } from "./SideBarOption";
import { Button } from "@mui/material";
import './Sidebar.css'


export const SideBar: VFC = memo(() => {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <TwitterIcon className="sidebar__twitterIcon"/>

      {/* sidebarOption */}
      <SideBarOption text='ホーム' icon={<HomeIcon />}/>
      <SideBarOption text='話題を検索' icon={<SearchIcon />}/>
      <SideBarOption text='通知' icon={<NotificationsNoneIcon />}/>
      <SideBarOption text='メッセージ' icon={<MailOutlineIcon />}/>
      <SideBarOption text='ブックマーク' icon={<BookmarkBorderIcon />}/>
      <SideBarOption text='リスト' icon={<ListAltIcon />}/>
      <SideBarOption text='プロフィール' icon={<PermIdentityIcon />}/>
      <SideBarOption text='もっと見る' icon={<MoreHorizIcon />}/>


      {/* ツイートボタン */}
      <Button variant="outlined" className="sidebar__tweet">ツイートする</Button>
    </div>
  )
})
