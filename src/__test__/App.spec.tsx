import App from "../component/App";
import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../component/Form";

test("it renders initialy 1 cell", () => {
  render(<App />);

  expect(screen.getAllByRole("cell").length).toBe(1);
});
