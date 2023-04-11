import HomeList from ".";

describe("HomeList Store Testing", () => {
  it("Intialisation Test", () => {
    const store = new HomeList();

    expect(store.ApiStatus).toBe("loading");
    expect(store.HomeList.length).toBe(0);
  });

  it("Fetching of API Calls", async () => {
    const store = new HomeList();

    store.fetchFixtureList();
    expect(store.HomeList.length).toBe(60);
    expect(store.ApiStatus).toBe("success");
  });
});
