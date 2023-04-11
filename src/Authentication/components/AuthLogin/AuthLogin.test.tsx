import { fireEvent, render, screen } from "@testing-library/react";
import AuthLogin from ".";
import { UserDeatailsType } from "../../../Nxtwatch/interface";

const handleAuth = jest.fn();
const handleSubmit = jest.fn();

describe("Auth Login", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("To check showPassword Function", () => {
    const { container } = render(
      <AuthLogin onSubmitForm={handleAuth} onLoginEvent={handleSubmit} />
    );

    const showPasswordElement = container.querySelector("#IsShowPasswordId");

    if (showPasswordElement !== null) {
      fireEvent.click(showPasswordElement);
    }

    const passwordElement = container.querySelector("#passwordId");

    expect(passwordElement?.getAttribute("type")).toBe("none");
  });
});
