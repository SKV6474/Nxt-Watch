import renderer from "react-test-renderer";
import NoSavedVideosRoute from ".";

beforeEach(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

it("NoSaved Video renders correctly", () => {
  const tree = renderer.create(<NoSavedVideosRoute />).toJSON();
  expect(tree).toMatchSnapshot();
});
