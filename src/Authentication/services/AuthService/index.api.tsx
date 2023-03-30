import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { Props, UserDeatailsType } from "../../../Nxtwatch/interface";
import { LOGIN_API } from "../../constants/ApiCalls";

export const LoginApi = async (userDetails: UserDeatailsType, props: Props) => {
  const response = await fetch(LOGIN_API, {
    method: "POST",
    body: JSON.stringify(userDetails),
  });

  const data = await response.json();

  if (response.ok) {
    const { history } = props;
    history.replace("/");
    Cookies.set("jwt_token", data.jwt_token, { expires: 1 });
    <Redirect to="/" />;
  } else {
    (
      document.getElementById("Error") as HTMLInputElement
    ).innerHTML = `*${data.error_msg}`;
  }
};
