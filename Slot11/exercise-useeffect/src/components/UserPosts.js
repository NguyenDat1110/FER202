import React, { useState, useEffect } from "react";

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error("Lỗi khi lấy dữ liệu");
        }

        const data = await response.json(); 
        setPosts(data); 
      } catch (error) {
        console.error("Có lỗi xảy ra:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, [userId]); 

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Có lỗi xảy ra: {error}</p>;

  return (
    <div>
      <h2>Bài viết của User {userId}</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Không có bài viết nào.</p>
      )}
    </div>
  );
};

export default UserPosts;