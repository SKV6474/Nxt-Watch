import { fireEvent, render } from "@testing-library/react";
import HomeRoute from ".";
import { MemoryRouter, Route } from "react-router-dom";

describe("Home Page", () => {
  it("First Test For Home Banner", () => {
    const handleRemoveBanner = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <HomeRoute handleCloseEvent={handleRemoveBanner} />
      </MemoryRouter>
    );

    const myDiv = container.querySelector("#CloseIcon");

    if (myDiv !== null) {
      fireEvent.click(myDiv);
    }

    expect(myDiv).not.toBeInTheDocument();
  });
});
