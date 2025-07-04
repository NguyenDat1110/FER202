import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";  // Thêm useNavigate để chuyển hướng sau khi xóa

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // Khởi tạo useNavigate để chuyển hướng sau khi xóa bài viết

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data); // Lưu dữ liệu vào state
        setLoading(false); // Đánh dấu việc tải xong
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false); // Dừng trạng thái tải nếu có lỗi
      }
    };

    fetchData();
  }, []); // Chạy 1 lần khi component được mount

  if (loading) {
    return <div>Đang tải...</div>; // Hiển thị thông báo đang tải
  }

  if (!data || data.length === 0) {
    return <div>Không có bài viết nào!</div>; // Hiển thị thông báo nếu không có bài viết
  }

  // Hàm để xóa bài viết
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setData(data.filter((post) => post.id !== id)); // Cập nhật danh sách bài viết sau khi xóa
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <button>
        <Link to="/create">Tạo bài viết mới</Link>  {/* Button Create dẫn đến trang CreatePost */}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
              {/* Link đến trang chỉnh sửa bài viết */}
              <Link to={`/edit/${post.id}`}>Chỉnh sửa</Link>
              <button onClick={() => handleDelete(post.id)}>Xóa</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
