import { memo, useEffect, useState, VFC } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { Post } from "./Post";
import "./Timeline.css";
import { TweetBox } from "./TweetBox";
import db from "../../firebase";

export const Timeline: VFC = memo(() => {


  const [posts, setPosts] = useState<any>([]);

  // getDocsは非同期処理(promise型)なので、thenでつなぐ
  useEffect(() => {
    const postData = collection(db, "posts");
    // ツイート順に並び替える
    // queryでとこからデータを取るか、orderByでその中の何からデータを取ってどうするか、決める
    const q = query(postData, orderBy("timestamp", "desc"));

    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header*/}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      {/* tweetBox*/}
      <TweetBox />
      {/* Post*/}
        {posts.map(
          (post: {
            displayName: string;
            username: string;
            verified: boolean;
            text: string;
            avatar: string;
            image: string;
          }) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          )
        )}
    </div>
  );
});
