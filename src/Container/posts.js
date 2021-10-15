import axios from "axios";


const usePostsContainer = () => {

  const create = async ({ image, title, description }, token) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("description", description);

      const res = await axios({
        method: 'post',
        url: 'https://social-media-uit.herokuapp.com/posts',
        data: formData,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (
        res?.status === 200 &&
        res?.data?.message === 'Post created successfully'
      ) {
        return {
          isSuccess: true,
          data: {
            post: res.data.post,
            message: res.data.message,
          },
        };
      }
      throw new Error("");
    } catch (error) {
      console.log({ error });
      return {
        isSuccess: false,
        message: error?.data?.message || 'Failed',
      };
    }
  }

  const getPosts = async (token) => {
    try {
      const res = await axios({
        method: "get",
        url: "https://social-media-uit.herokuapp.com/posts",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      if (res?.status === 200 && res?.data?.posts) {
        return {
          isSuccess: true,
          data: {
            posts: res.data.posts
          }
        }
      }
      throw new Error("");
    } catch (error) {
      console.log(error);
      return {
        isSuccess: false,
        message: error?.data?.message || "Failed"
      }
    }
  }

  return {
    getPosts,
    create,
  }
}

export default usePostsContainer;