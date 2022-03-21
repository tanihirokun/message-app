import { Avatar, Button } from "@mui/material";
import { memo, useState, VFC } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

import "./TweetBox.css";

export const TweetBox: VFC = memo(() => {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e: { preventDefault: () => void }) => {
    // Firebaseに追加する
    // preventDefaultをしないとボタンを押したときに全ての画面がリロードされる
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "たに＠React勉強中",
      username: "tani_web",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          {/* 人型のアイコンが表示 */}
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
});
