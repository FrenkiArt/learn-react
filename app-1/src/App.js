import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/counter/Counter";
import InputValue from "./components/InputValue";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "New title", descr: "New description" },
    { id: 2, title: "AAA title", descr: "AAA description" },
    { id: 3, title: "Ddd title", descr: "DDD description" },
    { id: 4, title: "FFF title", descr: "FFF description" },
  ]);

  const [selectedSort, setSelectedsort] = useState("");

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

  const sortPosts = (sort) => {
    console.log(sort);
    setSelectedsort(sort);

    if (Number(sort === "id")) {
      setPosts([...posts.sort((a, b) => a.id - b.id)]);
    } else {
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    }
  };

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

        <div>
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка"
            options={[
              { value: "title", name: "Сортировка по названию" },
              { value: "descr", name: "Сортировка по описанию" },
              { value: "id", name: "Сортировка по номеру" },
            ]}
          />
        </div>

        <hr />

        {posts.length !== 0 ? (
          <Posts
            removePost={removePost}
            posts={posts}
            title="Новый список постов"
          />
        ) : (
          <h2>Нет постов</h2>
        )}

        <Form addPost={addPost} makeNewIdForPost={makeNewIdForPost} />

        <hr />
      </main>
    </div>
  );
}

export default App;
