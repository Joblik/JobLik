import React from 'react'
import axios from 'axios'
function Posts() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
      async function fetchPosts() {
        const response = await axios.get("http://localhost:3000/post/getAllPosts");
        setPosts(response.data);
        setFilteredPosts(response.data);
      }
        console.log("🚀 ~ file: Posts.js:13 ~ fetchPosts ~ data", data)
      fetchPosts();
    }, []);
  return (
    <div>Posts</div>
  )
}

export default Posts