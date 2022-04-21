import React from "react";
import { render } from "@testing-library/react";
import { store } from "../store";
import { Provider } from "react-redux";
import Header from "../components/Users";

describe("Header", () => {
  it("should render component <Header>", async () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });
});
