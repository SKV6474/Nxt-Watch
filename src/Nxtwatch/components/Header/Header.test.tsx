import { fireEvent, render, waitFor } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route } from "react-router-dom";
import HeaderComponent from ".";

const handleToggleLogoutCancel = jest.fn();

describe("Header Component", () => {
  it("Test for LogoutPopup", async () => {
    const { container } = render(
      <MemoryRouter>
        <Route exact path="*" component={HeaderComponent} />
      </MemoryRouter>
    );
    await waitFor(() => {
      const myElement = container.querySelector("#LogOutBtnId") as Element;

      if (myElement !== null) {
        fireEvent.click(myElement);
      }

      const LogoutPopup = container.querySelector("#LogOutPopUp");
      expect(LogoutPopup).toBeInTheDocument();
    });
  });

  it("Test for Menu Pop Up", async () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderComponent />
      </MemoryRouter>
    );

    await waitFor(() => {
      const myElement = container.querySelector("#MenuPopUpTracker");

      if (myElement !== null) {
        fireEvent.click(myElement);
      }
      const MenuPopup = container.querySelector("#MenuPopUp");
      expect(MenuPopup).toBeInTheDocument();
    });
  });
});
