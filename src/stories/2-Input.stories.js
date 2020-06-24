import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "../components/BookList";

export default {
  title: "Input",
  component: BookList,
};

export const Input = () => (
  <div className="input-group">
    <input
      type="text"
      name="keyword"
      className="form-control shadow-none"
      placeholder="Nhập từ khoá..."
    />
    <div className="input-group-append">
      <button
        className="btn btn-primary shadow-none"
        type="button"
      >
        Tìm
      </button>
    </div>
  </div>
);
