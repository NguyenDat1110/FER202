import React from "react";
import MyForm from "./components/MyForm";
import AdvancedForm from "./components/AdvancedForm";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Dữ liệu đã gửi:", data);
  };

  return (
    <div className="App">
      <h1 className="text-center my-4">Demo Form Validation</h1>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
      <AdvancedForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
