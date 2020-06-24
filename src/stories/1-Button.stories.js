import React from "react";
import { Button } from "@storybook/react/demo";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Button",
  component: Button,
};

export const Borrow = () => (
  <button type="button" class="btn btn-primary shadow-none">
    Borrow
  </button>
);
