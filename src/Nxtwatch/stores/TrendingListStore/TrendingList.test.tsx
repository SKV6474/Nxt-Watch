import TrendingList from ".";
import TrendingListService from "../../services/TrendingList/index.api";

describe("TrendingList Store Testing", () => {
  it("Intialisation Test", () => {
    const store = new TrendingList(new TrendingListService());

    expect(store.ApiStatus).toBe("loading");
    expect(store.TrendingList.length).toBe(0);
  });

  it("Fetching of API Calls", async () => {
    const store = new TrendingList(new TrendingListService());

    store.fetchFixtureList();
    expect(store.TrendingList.length).toBe(30);
    expect(store.ApiStatus).toBe("success");
  });
});
