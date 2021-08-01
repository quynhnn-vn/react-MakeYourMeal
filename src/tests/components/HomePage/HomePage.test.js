import { HomePage } from "../../../components/HomePage/HomePage";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const tags = {
  breakfast: ["breakfast", "brunch"].join("%2C"),
  appetizer: ["appetizer", "snack"].join("%2C"),
  lunch: ["lunch", "dinner"].join("%2C"),
  desserts: ["desserts"],
  drinks: ["drinks"],
};
beforeEach(() => {
  const history = createMemoryHistory();
  const path = "/";
  history.push(path);
  act(() => {
    render(
      <Router history={history}>
        <HomePage tags={tags} />
      </Router>
    );
  });
});
test("should render 3 collections", () => {
  const collections = screen.getAllByLabelText("collection");
  expect(collections.length).toEqual(3);
});
test("should render 3 banners and 3 view-more buttons", () => {
  const banners = screen.getAllByLabelText("banner");
  const buttons = screen.getAllByLabelText("view-more");
  expect(banners.length).toEqual(3);
  expect(buttons.length).toEqual(3);
});
test("should render 9 recipes in Home Page", () => {
  act(async () => {
    const recipesList = await screen.findAllByRole("img");
    expect(recipesList.length).toBeGreaterThanOrEqual(9);
  });

});
test("should render 9 breakfast recipes when clicking first view-more button", () => {
  act(async () => {
    const button = screen.getByText("view more breakfast / brunch");
    userEvent.click(button);
    const header = await screen.findByText("BREAKFAST / BRUNCH");
    expect(header).toBeInTheDocument();
    const recipesList = await screen.findAllByRole("img");
    expect(recipesList.length).toBeGreaterThanOrEqual(9);
  });
});
