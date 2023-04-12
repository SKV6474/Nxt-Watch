import Cookies from "js-cookie";

import { handleResponse } from "../index.api";
import { fixtureHomeDataList } from "./index.fixture";

class HomeVideoService {
  callHomeApi = async (input: string) => {
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${input}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
      }
    );
    return handleResponse(response);
  };

  fixtureHomeApiCall = () => {
    return fixtureHomeDataList;
  };
}

export default HomeVideoService;
