import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "mobx-react";
import { MemoryRouter } from "react-router-dom";
import VideoDetail from ".";
import { saveList } from "../../stores";
import { VideoDetailObjectFixture } from "./index.fixture";

describe("VideoDetail", () => {
  it("isLiked ", async () => {
    const { container } = render(
      <Provider saveList={saveList}>
        <MemoryRouter>
          <VideoDetail videoDetails={VideoDetailObjectFixture} index={1} />
        </MemoryRouter>
      </Provider>
    );

    console.log("Container >>", document.body.innerHTML);
    let myElement;

    // await waitFor(() => {
    myElement = container.querySelector("#LikeBtnId");
    // if (myElement !== null) {
    //   fireEvent.click(myElement);
    // }
    // });
    // const myElemen = container.querySelector("#LikeBtnId");
    // if (myElemen !== null) {
    //   const style = window.getComputedStyle(myElemen);
    //   expect(style.color).not.toBe("#3b82f6");
    expect(myElement).toBeInTheDocument();
  });
  // });
});
