import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

function PageIdPost() {
  const params = useParams();
  const [post, setpost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);

    setpost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  return (
    <div>
      <h1>Это страница PageIdPost c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <h2>
          {post.id}. {post.title}
          <br />
          {post.body}
        </h2>
      )}
    </div>
  );
}

export default PageIdPost;
