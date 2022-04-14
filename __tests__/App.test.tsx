/* global describe it*/
import App from "../src/taskpane/components/App";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import { build, fake } from "test-data-bot";
import "@testing-library/jest-dom/extend-expect";

describe("App.tsx has mounted", () => {
  it("App render", () => {
    const {} = render(<App />);
  });
});
