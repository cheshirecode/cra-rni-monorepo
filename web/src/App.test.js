import React from "react";
import ReactDOM from "react-dom";
// manual mock - currently auto-mocked in __mocks__ folder
// jest.mock("core/component", () => ({ children }) =>
//   children({ value: "value", c: 1 })
// );
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
