import {useContext} from 'react'
import { PostsContext } from '../Provider/Posts/Context'


const usePostsContext = () => {
  const data = useContext(PostsContext);
  return data;
}

export { usePostsContext };