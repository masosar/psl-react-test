import React from "react";
import { render, screen } from "@testing-library/react";
import { store } from "../store";
import { Provider } from "react-redux";
import Users from "../components/Users";

describe("Users", () => {
  it("should render component <Users>", async () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
  });
});
