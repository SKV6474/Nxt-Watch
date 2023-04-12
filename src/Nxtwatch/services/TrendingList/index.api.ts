import Cookies from "js-cookie";
import { TRENDING_API } from "../../constants/ApiCalls";
import { handleResponse } from "../index.api";
import { TrendingFixtureList } from "./index.fixture";

class TrendingListService {
  callTrendingApi = async () => {
    const response = await fetch(TRENDING_API, {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    });
    return handleResponse(response);
  };

  fixtureTrendingApiCall = () => {
    return TrendingFixtureList;
  };
}

export default TrendingListService;
