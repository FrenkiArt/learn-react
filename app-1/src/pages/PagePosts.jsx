import logo from "../logo.svg";
import "../App.css";
import { useState, useMemo, useEffect } from "react";
import Counter from "../components/counter/Counter";
import InputValue from "../components/InputValue";
import Posts from "../components/posts/Posts";
import Form from "../components/form/Form";
import PostFilter from "../components/post-filter/PostFilter";
import MyModal from "../components/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import MyPagination from "../components/UI/MyPagination/MyPagination";

function PagePosts() {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let pagesArray = getPagesArray(totalPages);

  const makeNewIdForPost = () => {
    return posts.length + 1;
  };

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: makeNewIdForPost() }]);
    setModal(false);
    console.log("Пост добавлен!");
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
    console.log("Пост  удалён!");
  };

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>хе-хе</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>

      <main>
        <Counter />

        <InputValue />

        <p>
          <MyButton onClick={fetchPosts}>Получить посты</MyButton>
        </p>

        <p>
          <MyButton
            onClick={() => {
              setModal(true);
            }}
          >
            Создать пост
          </MyButton>
        </p>

        <PostFilter filter={filter} setFilter={setFilter} />

        {postError && <h2>Произошла ошибка {postError}</h2>}
        {isPostsLoading ? (
          <Loader />
        ) : (
          <Posts
            removePost={removePost}
            posts={sortedAndSearchedPosts}
            title="Новый список постов"
          />
        )}

        <MyPagination
          pagesArray={pagesArray}
          page={page}
          changePage={changePage}
        />

        <hr />
      </main>

      <MyModal visible={modal} setVisible={setModal}>
        <Form addPost={addPost} makeNewIdForPost={makeNewIdForPost} />
      </MyModal>
    </div>
  );
}

export default PagePosts;
