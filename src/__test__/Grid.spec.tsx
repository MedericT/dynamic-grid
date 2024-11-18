import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Grid from "../component/Grid";

test("it renders 4 cells when 2 lines and 2 columns", () => {
  render(<Grid lines={2} columns={2} />);

  expect(screen.getAllByRole("cell").length).toBe(4);
});
