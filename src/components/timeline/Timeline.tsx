import { memo, VFC } from "react";
import { Post } from "./Post";
import "./Timeline.css";
import { TweetBox } from "./TweetBox";

type Props = {};

export const Timeline: VFC<Props> = memo((props) => {
  const {} = props;
  return (
    <div className="timeline">
      {/* Header*/}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      {/* tweetBox*/}
      <TweetBox/>
      {/* Post*/}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
});
