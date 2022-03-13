import Search from "@mui/icons-material/Search";
import { memo, VFC } from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "./Widgets.css"

type Props = {};

export const Widgets: VFC<Props> = memo((props) => {
  const {} = props;
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>いまどうしてる</h2>
        {/* ライブラリを追加 */}
        {/* Twitterの固定ツイートの追加 */}
        <TwitterTweetEmbed tweetId={"1490335700272566276"} />
        {/* Twitterのタイムラインの表示 */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="tani_web"
          options={{ height: 400 }}
        />
        {/* Twitterのツイートボタンの追加 URL必須 */}
        <TwitterShareButton url="https://twitter.com/tani_web"
        options={{text: 'React勉強中', via: 'tani_web'}}
        />
      </div>
    </div>
  );
});
