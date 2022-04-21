import React from "react";
import { render } from "@testing-library/react";
import { store } from "../store";
import { Provider } from "react-redux";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("should render component <Footer>", async () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
  });
});
