import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  Verified,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { memo, VFC } from "react";

import "./Post.css";

type Props = {};

export const Post: VFC<Props> = memo((props) => {
  const {} = props;
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header-text">
            <h3>
              プログラミングチュートリアル
              <span className="post__headerSpecial">
                <Verified className="post__badge" />
                @tani_Enginner
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Reactなう</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" alt="画像" />
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
