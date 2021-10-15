import { createContext } from "react";


const PostsContext = createContext({
  isLoading: false,
  handleGetAllPosts: async () => { },
  posts: [],
  createPost: async () => { },
})

export { PostsContext };