import { render } from "@testing-library/react";
import Login from "../components/Login/Login";

test("renders the correct content", () => {
  const { getByText } = render(<Login />);

  getByText("Log in");
});