import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import Logo from "./Logo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Logo />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
