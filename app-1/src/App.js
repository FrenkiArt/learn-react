import logo from "./logo.svg";
import "./App.css";
import { useState, useMemo } from "react";
import Counter from "./components/counter/Counter";
import InputValue from "./components/InputValue";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import PostFilter from "./components/post-filter/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "New title", descr: "New description" },
    { id: 2, title: "AAA title", descr: "AAA description" },
    { id: 3, title: "Ddd title", descr: "DDD description" },
    { id: 4, title: "FFF title", descr: "FFF description" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const makeNewIdForPost = () => {
    return posts.length + 1;
  };

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: makeNewIdForPost() }]);
    console.log("Пост добавлен!");
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
    console.log("Пост  удалён!");
  };

  const sortedPosts = useMemo(() => {
    console.log("getSortedPosts()");
    if (filter.sort) {
      if (filter.sort === "id") {
        return [...posts.sort((a, b) => a.id - b.id)];
      } else {
        return [...posts].sort((a, b) =>
          a[filter.sort].localeCompare(b[filter.sort])
        );
      }
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(filter.query) ||
        post.descr.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

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

        <PostFilter filter={filter} setFilter={setFilter} />

        <hr />

        <Posts
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title="Новый список постов"
        />

        <Form addPost={addPost} makeNewIdForPost={makeNewIdForPost} />

        <hr />
      </main>
    </div>
  );
}

export default App;
