import React from "react";
import ReactDOM from "react-dom";
import RecipeTextEditor from "./RecipeTextEditor";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <RecipeTextEditor
      field={{
        value: ""
      }}
      form={{
        touched: {},
        errors: {}
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
