import { useState, useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log("getSortedPosts()");
    if (sort) {
      if (sort === "id") {
        return [...posts.sort((a, b) => a.id - b.id)];
      } else {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
      }
    } else {
      return posts;
    }
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
