import SaveList from ".";
import { saveListFixtureObject } from "./index.fixture";

describe("Save List Store", () => {
  it("Intialisation Test", () => {
    const store = new SaveList();
    expect(store.SavedVideoList.length).toBe(0);
  });

  it("Functions Test", () => {
    const store = new SaveList();

    store.addNewSaveList(saveListFixtureObject);
    expect(store.SavedVideoList.length).toBe(1);

    store.removeSavedVideo(0);
    expect(store.SavedVideoList.length).toBe(0);
  });
});
