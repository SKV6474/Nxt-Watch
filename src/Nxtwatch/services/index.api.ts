import Cookies from "js-cookie";

import { ApiStatus } from "../interface";

export const handleResponse = async (response: any) => {
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

export const CallVideoApi = async (id: string) => {
  const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${Cookies.get("jwt_token")}` },
  });
  return handleResponse(response);
};
