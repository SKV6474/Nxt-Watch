import GameList from ".";
import GameListService from "../../services/GameList/index.api";

describe("GameList Store Testing", () => {
  it("Intialisation Test", () => {
    const store = new GameList(new GameListService());

    expect(store.ApiStatus).toBe("loading");
    expect(store.GamingList.length).toBe(0);
  });

  it("Fetching of API Calls", async () => {
    const store = new GameList(new GameListService());

    store.fetchFixtureList();
    expect(store.GamingList.length).toBe(30);
    expect(store.ApiStatus).toBe("success");
  });
});
