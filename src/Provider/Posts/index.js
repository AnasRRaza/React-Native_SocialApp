import React, { useState } from 'react';
import { useAuthContext } from '../../Hooks/auth';
import { PostsContext } from './Context';
import usePostsContainer from "../../Container/posts"

const PostsProvider = (props) => {

  const { create, getPosts } = usePostsContainer();
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [posts, setPosts] = useState([]);

  const createPost = ({ title, description, image }) => {
    setIsLoading(true);
    const res = create({ title, description, image }, token);
    if (res?.isSuccess) {
      setPosts(currentPosts => {
        const copy = [...currentPosts];
        copy.unshift(res.data.post);
        return copy;
      });
      alert(res.data.message);
    }
    setIsLoading(false);
  }

  const handleGetAllPosts = async () => {
    const res = await getPosts(token);
    if (res?.isSuccess) {
      setPosts(res.data.posts);
    }
  }

  const providerValues = {
    createPost,
    handleGetAllPosts,
    posts,
  }

  return (
    <PostsContext.Provider value={providerValues}>
      {props.children}
    </PostsContext.Provider>
  )
}

export default PostsProvider;
