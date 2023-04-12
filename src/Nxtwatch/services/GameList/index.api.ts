import Cookies from "js-cookie";
import { GAMING_API } from "../../constants/ApiCalls";
import { handleResponse } from "../index.api";
import { GameListFixtureDataList } from "./index.fixture";

class GameListService {
  callGameApi = async () => {
    const response = await fetch(GAMING_API, {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    });
    return handleResponse(response);
  };

  fixtureGameApiCall = () => {
    return GameListFixtureDataList;
  };
}

export default GameListService;
