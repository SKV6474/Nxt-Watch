import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "mobx-react";
import { MemoryRouter } from "react-router-dom";
import VideoDetail from ".";
import { saveList } from "../../stores";
import { VideoDetailObjectFixture } from "./index.fixture";

describe("VideoDetail", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("isLiked ", async () => {
    const promise = Promise.resolve();
    const { container } = render(
      <Provider saveList={saveList}>
        <MemoryRouter>
          <VideoDetail videoDetails={VideoDetailObjectFixture} index={1} />
        </MemoryRouter>
      </Provider>
    );

    const myElement = container.querySelector("#LikeBtnId");
    if (myElement !== null) {
      fireEvent.click(myElement);
    }

    const myElemen = container.querySelector("#LikeBtnId");
    if (myElemen !== null) {
      const style = window.getComputedStyle(myElemen);
      expect(style.color).toBe("rgb(59, 130, 246)");
    }

    await act(() => promise);
  });
});
