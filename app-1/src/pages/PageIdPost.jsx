import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

function PageIdPost() {
  const params = useParams();
  const [post, setpost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setpost(response.data);
  });
  const [fetchComments, isCommentsLoading, errorComments] = useFetching(
    async () => {
      const response = await PostService.getCommentByPostId(params.id);
      console.log(response.data);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
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

      <h2>Comments</h2>

      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((item) => {
            return (
              <div className="comment">
                <h5>Name - {item.name}</h5>
                <h5>Email - {item.email}</h5>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PageIdPost;
