import logo from "./logo.svg";
import "./App.css";
import { useState, useMemo, useEffect } from "react";
import Counter from "./components/counter/Counter";
import InputValue from "./components/InputValue";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import PostFilter from "./components/post-filter/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "New title", body: "New description" },
    { id: 2, title: "AAA title", body: "AAA description" },
    { id: 3, title: "Ddd title", body: "DDD description" },
    { id: 4, title: "FFF title", body: "FFF description" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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

  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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

        <Posts
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title="Новый список постов"
        />

        <hr />
      </main>

      <MyModal visible={modal} setVisible={setModal}>
        <Form addPost={addPost} makeNewIdForPost={makeNewIdForPost} />
      </MyModal>
    </div>
  );
}

export default App;
