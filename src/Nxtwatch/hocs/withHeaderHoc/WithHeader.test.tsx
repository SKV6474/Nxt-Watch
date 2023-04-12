import { render } from "@testing-library/react";
import WithHeader from ".";

describe("Header Hoc", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  const MockWithHeaderComponent = WithHeader(() => <div>Test Header</div>);
  it("Sanp Shot Test for Header", () => {
    const { container } = render(<MockWithHeaderComponent />);
    expect(container).toMatchSnapshot();
  });
});
