import { memo, VFC } from "react";
import "./Timeline.css";

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

      {/* Post*/}
    </div>
  );
});
