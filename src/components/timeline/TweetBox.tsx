import { Avatar, Button } from "@mui/material";
import { memo, VFC } from "react";

import "./TweetBox.css"

type Props = {};

export const TweetBox: VFC<Props> = memo((props) => {
  const {} = props;
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          {/* 人型のアイコンが表示 */}
          <Avatar />
          <input placeholder="いまどうしてる" type='text'/>
        </div>
        <input className="tweetBox__imageInput" placeholder="画像のURLを入力してください" type='text'/>
        <Button className="tweetBox__tweetButton" type="submit">ツイートする</Button>

      </form>
    </div>
  );
});
