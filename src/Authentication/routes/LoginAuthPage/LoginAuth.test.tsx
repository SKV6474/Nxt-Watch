import { fireEvent, render } from "@testing-library/react";
import Cookies from "js-cookie";
import { MemoryRouter, Route } from "react-router-dom";
import LoginRoute from ".";

describe("Login Auth Route", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("For getting API Response", () => {
    const { container } = render(
      <MemoryRouter>
        <Route exact path="/" component={LoginRoute} />
      </MemoryRouter>
    );

    (document.getElementById("usernameId") as HTMLInputElement).value = "rahul";
    (document.getElementById("passwordId") as HTMLInputElement).value =
      "rahul@2021";

    const LoginBtnElement = container.querySelector("#loginBtnId");
    if (LoginBtnElement !== null) {
      fireEvent.click(LoginBtnElement);
    }
    expect(window.location.pathname).toBe("/");
  });
});
