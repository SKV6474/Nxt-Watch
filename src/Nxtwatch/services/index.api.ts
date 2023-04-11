import Cookies from "js-cookie";
import { GAMING_API, TRENDING_API } from "../constants/ApiCalls";
import { ApiStatus } from "../interface";
import { GameListFixtureDataList } from "../stores/GameListStore/index.fixture";
import { fixtureHomeDataList } from "../stores/HomeListStore/index.fixture";
import { TrendingFixtureList } from "../stores/TrendingListStore/index.fixture";

const handleResponse = async (response: any) => {
  if (response.ok) {
    const data = await response.json();
    const Response = {
      data: data,
      ApiStatus: ApiStatus.success,
    };
    return Response;
  } else {
    const Response = {
      data: "none",
      ApiStatus: ApiStatus.failure,
    };
    return Response;
  }
};

export const CallGameApi = async () => {
  const response = await fetch(GAMING_API, {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });
  return handleResponse(response);
};

export const fixtureGameApiCall = () => {
  return GameListFixtureDataList;
};

export const CallHomeApi = async (input: string) => {
  const response = await fetch(
    `https://apis.ccbp.in/videos/all?search=${input}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
    }
  );
  return handleResponse(response);
};

export const fixtureHomeApiCall = () => {
  return fixtureHomeDataList;
};

export const CallTrendingApi = async () => {
  const response = await fetch(TRENDING_API, {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });
  return handleResponse(response);
};

export const fixtureTrendingApiCall = () => {
  return TrendingFixtureList;
};

export const CallVideoApi = async (id: string) => {
  const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });
  return handleResponse(response);
};
