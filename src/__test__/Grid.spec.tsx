import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Grid from "../component/Grid";

test("it renders multiple cells", () => {
  render(<Grid rows={2} cells={2} />);

  expect(screen.getAllByRole("cell").length).toBe(4);
});
