import { Avatar, Button } from "@mui/material";
import { memo, useState, VFC } from "react";
import { collection, addDoc} from "firebase/firestore"
import db from '../../firebase'

import "./TweetBox.css";

type Props = {};

export const TweetBox: VFC<Props> = memo((props) => {
  const {} = props;

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e: { preventDefault: () => void; }) => {
    // Firebaseに追加する
    // preventDefaultをしないとボタンを押したときに全ての画面がリロードされる
    e.preventDefault();

    addDoc(collection(db, 'posts'), {
      displayName: 'プログラミングチュートリアル',
      username: 'tani_web',
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
    })
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          {/* 人型のアイコンが表示 */}
          <Avatar />
          <input
            placeholder="いまどうしてる"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button className="tweetBox__tweetButton" type="submit"
        onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
});
