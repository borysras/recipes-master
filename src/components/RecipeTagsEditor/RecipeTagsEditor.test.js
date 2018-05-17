import React from "react";
import ReactDOM from "react-dom";
import RecipeTagsEditor from "./RecipeTagsEditor";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <RecipeTagsEditor
      field={{
        value: []
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
