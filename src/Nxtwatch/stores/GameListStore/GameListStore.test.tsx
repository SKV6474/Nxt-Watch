import GameList from ".";

describe("GameList Store Testing", () => {
  it("Intialisation Test", () => {
    const store = new GameList();

    expect(store.ApiStatus).toBe("loading");
    expect(store.GamingList.length).toBe(0);
  });

  it("Fetching of API Calls", async () => {
    const store = new GameList();

    store.fetchFixtureList();
    expect(store.GamingList.length).toBe(30);
    expect(store.ApiStatus).toBe("success");
  });
});
