import { render } from "@testing-library/react";
import Home_Content from "../components/Home_Content/Home_Content";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

test("renders the correct content", () => {
  const { getByText } = render(
  <BrowserRouter>
    <Home_Content />
  </BrowserRouter>);

  getByText("UCSB Food Bank");
  getByText("Come and find out what's in our Inventory today!");
});

test("should navigate to /inventory when button is clicked", () => {
  const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Home_Content />
      </Router>
    );
    getByText(/Inventory/);
});

