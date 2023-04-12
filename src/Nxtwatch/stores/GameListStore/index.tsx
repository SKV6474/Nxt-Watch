import { action, observable } from "mobx";
import { ApiStatus, GameObject } from "../../interface";
class GameList {
  @observable GamingList: GameObject[] = [];
  @observable ApiStatus: ApiStatus = ApiStatus.loading;
  GamingListContainer: GameObject[] = [];
  GameListService: any;

  constructor(service: any) {
    this.GameListService = service;
  }

  @action.bound
  fetchGameData = async () => {
    try {
      const Response = await this.GameListService.callGameApi();

      this.ApiStatus = Response.ApiStatus;
      if (Response.data !== "none") {
        this.GamingList = Response.data.videos;
        this.GamingListContainer = Response.data.videos;
      }
    } catch (e) {
      console.log("hiii");
      this.ApiStatus = ApiStatus.failure;
    }
  };

  @action.bound
  fetchFixtureList = () => {
    const response = this.GameListService.fixtureGameApiCall();
    this.GamingList = response;
    this.ApiStatus = ApiStatus.success;
  };

  @action.bound
  filterList = (list: GameObject[]) => {
    this.GamingList = [...list];
  };
}

export default GameList;
