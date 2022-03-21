import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  Verified,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import {  memo, VFC } from "react";

import "./Post.css";

type Props = {
  displayName: string;
  username: string;
  verified: boolean;
  text: string;
  avatar: string;
  image: string;
};


export const Post: VFC<Props> =  memo((props) => {
  const { displayName, username, text, avatar, image } = props;
  return (
    <div className="post" >
      <div className="post__avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header-text">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                <Verified className="post__badge" />
                @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt=""/>
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
});
