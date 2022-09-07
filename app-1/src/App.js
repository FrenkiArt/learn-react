import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/counter/Counter";
import InputValue from "./components/InputValue";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "New title", descr: "New description" },
    { id: 2, title: "New title", descr: "New description" },
    { id: 3, title: "New title", descr: "New description" },
    { id: 4, title: "New title", descr: "New description" },
  ]);

  const makeNewIdForPost = () => {
    return posts.length + 1;
  };

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: makeNewIdForPost() }]);
    console.log("Пост добавлен!");
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

        <Posts posts={posts} title="Новый список постов" />

        <Form addPost={addPost} makeNewIdForPost={makeNewIdForPost} />

        <hr />
      </main>
    </div>
  );
}

export default App;
