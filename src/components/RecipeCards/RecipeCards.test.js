import React from "react";
import ReactDOM from "react-dom";
import RecipeCards from "./RecipeCards";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RecipeCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
