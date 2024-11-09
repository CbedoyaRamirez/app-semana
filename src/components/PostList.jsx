import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import Post from './Post';
import sytle from "../css/PostList.module.css";


const PostList = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setFilteredPosts(postsData);
    };

    fetchPosts();
  }, []);


  return (
    <div className={sytle.containerInitial} >
      <h1 className={sytle.titlePage} >Listado de peliculas</h1>
      <div className={sytle.container}>
        {filteredPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
