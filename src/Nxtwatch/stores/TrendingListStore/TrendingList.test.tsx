import TrendingList from ".";

describe("TrendingList Store Testing", () => {
  it("Intialisation Test", () => {
    const store = new TrendingList();

    expect(store.ApiStatus).toBe("loading");
    expect(store.TrendingList.length).toBe(0);
  });

  it("Fetching of API Calls", async () => {
    const store = new TrendingList();

    store.fetchFixtureList();
    expect(store.TrendingList.length).toBe(30);
    expect(store.ApiStatus).toBe("success");
  });
});
