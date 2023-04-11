import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import NoSearchResults from ".";

const handleRetrySearch = jest.fn();

describe("NoSearch Video", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("NoSearch Video renders correctly", () => {
    const tree = renderer
      .create(<NoSearchResults onChange={handleRetrySearch} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("No Search Retry function Search", () => {
    const { container } = render(
      <NoSearchResults onChange={handleRetrySearch} />
    );

    const NoSeachRetryElement = container.querySelector("#NoSearchRetryId");

    expect(NoSeachRetryElement).toBeInTheDocument();
  });
});
