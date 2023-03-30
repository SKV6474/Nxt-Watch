import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import AuthLogin from "../../../Authentication/components/AuthLogin";
import LogoImg from "../../../Common/components/logoImg";

import { LoginComponentProp } from "../../interface";

import {
  AppDiv,
  LoginDiv,
  LoginWrapper,
  LogoImgContainer,
} from "../../styledComponent";
import { getFromLocalStorage } from "../../utils";

const LoginComponent = (props: LoginComponentProp) => {
  const { onSubmitForm, HistoryProp } = props;
  const { history } = HistoryProp;

  const handleAuth = (data: any) => {
    if (data.jwt_token) {
      Cookies.set("jwt_token", data.jwt_token, { expires: 1 });
      const lastLocation = getFromLocalStorage("lastPath");
      if (lastLocation === undefined) {
        history.replace("/");
        <Redirect to="/" />;
      } else {
        history.replace(lastLocation);
        <Redirect to={lastLocation} />;
      }
    } else {
      (
        document.getElementById("Error") as HTMLInputElement
      ).innerHTML = `*${data.error_msg}`;
    }
  };

  return (
    <AppDiv>
      <LoginWrapper>
        <LoginDiv>
          <LogoImgContainer>
            <LogoImg css={""} />
          </LogoImgContainer>
          <AuthLogin onSubmitForm={onSubmitForm} onLoginEvent={handleAuth} />
        </LoginDiv>
      </LoginWrapper>
    </AppDiv>
  );
};

export default LoginComponent;
