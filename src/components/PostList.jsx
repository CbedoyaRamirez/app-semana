import { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import Post from './Post';
import sytle from "../css/PostList.module.css";
import Header from './Header';


const PostList = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [image, setImage] = useState('');
  const [loadding, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setLoading(false);
      setFilteredPosts(postsData);
    };

    fetchPosts();
    setImage(sessionStorage.getItem('image'))
  }, []);

  

  return (
    <div className={sytle.containerInitial} >
      <Header image={image} />
      {
        loadding && <h2>Cargando...</h2>
      }
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
