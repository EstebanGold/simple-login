import React from "react";
import { render, screen } from "@testing-library/react";

import LoginDialog from "./LoginDialog";

describe("Testing LoginDialog", () => {
  test("should render the content", () => {
    const user = "Roberto";
    const open = true;

    render(<LoginDialog userName={user} open={open} />);

    expect(screen.getByText(user)).toHaveTextContent(user);
  });
});
