import { UserDeatailsType } from "../../../Nxtwatch/interface";
import { LOGIN_API } from "../../constants/ApiCalls";
import { LoginData } from "../../interface";

export const LoginApi = async (
  userDetails: UserDeatailsType
): Promise<LoginData> => {
  const response = await fetch(LOGIN_API, {
    method: "POST",
    body: JSON.stringify(userDetails),
  });

  const data = await response.json();

  return data;
};
