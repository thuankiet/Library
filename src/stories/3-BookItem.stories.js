import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "../components/BookList";

export default {
  title: "Item",
  component: BookList,
};

export const Item = () => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Cover</th>
        <th scope="col">Name</th>
        <th scope="col">Rent</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img
            src="http://res.cloudinary.com/dpy2iegdk/image/upload/v1589521240/nknnc804bcdei47ueto1.jpg"
            alt="cover"
            width={"64px"}
          />
        </td>
        <td className="align-middle">Harry Potter</td>
        <td className="align-middle">
          <button type="button" class="btn btn-primary shadow-none">
            Borrow
          </button>
        </td>
      </tr>
    </tbody>
  </table>
);
