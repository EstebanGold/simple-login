import React from "react";
import { render, fireEvent } from "@testing-library/react";

import LoginCard from "./LoginCard";

describe("Testing LoginCard", () => {
  let component;
  beforeEach(() => {
    component = render(<LoginCard />);
  });
  test("should render the TextFields", () => {
    expect(component.container).toHaveTextContent("Username");
    expect(component.container).toHaveTextContent("Password");
  });
});
