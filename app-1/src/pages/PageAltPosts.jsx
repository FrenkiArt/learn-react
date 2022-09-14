import "../App.css";
import { useState, useMemo, useEffect, useRef } from "react";
import Posts from "../components/posts/Posts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";

function PageAltPosts() {
  const lastEl = useRef();

  const [posts, setPosts] = useState([]);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
    console.log("Пост  удалён!");
  };

  useObserver(lastEl, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="App">
      <main>
        {postError && <h2>Произошла ошибка {postError}</h2>}

        {isPostsLoading ? <Loader /> : ""}

        <Posts
          removePost={removePost}
          posts={posts}
          title="Бесконечная лента"
        />

        <div ref={lastEl} style={{ height: 20, background: "green" }}>
          Триггер подгрузки постов
        </div>

        <hr />
      </main>
    </div>
  );
}

export default PageAltPosts;
