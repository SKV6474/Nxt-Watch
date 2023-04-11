import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginComponent, UserDeatailsType } from "../../../Nxtwatch/interface";
import {
  Check,
  ErrorP,
  Input,
  InputDiv,
  Label,
  LoginBtn,
  ShowDiv,
  UserInput,
} from "../../../Nxtwatch/styledComponent";
import LanguageChangeComponent from "./LanguageContainer";

const AuthLogin = (props: LoginComponent): any => {
  const { onSubmitForm, onLoginEvent } = props;
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [userDetails, setUserDeatail] = useState<UserDeatailsType>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await onSubmitForm(userDetails);
    onLoginEvent(response);
  };

  const handleUserName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserDeatail({
      username: e.target.value,
      password: userDetails.password,
    });
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserDeatail({
      username: userDetails.username,
      password: e.target.value,
    });
  };

  const handleCheckEvent: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsShowPassword(e.target.checked);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* UserName input */}
        <InputDiv>
          <Label>{t("username")}</Label>
          <UserInput
            id="usernameId"
            style={{
              backgroundColor: userDetails.username.length > 0 ? "#e2e8f0" : "",
              caretColor: userDetails.username.length > 0 ? "#000" : "",
            }}
            placeholder={t("username") + ""}
            onChange={handleUserName}
          />
        </InputDiv>

        {/* Password Input */}
        <InputDiv>
          <Label>{t("password")}</Label>
          <Input
            id="passwordId"
            placeholder={t("password") + ""}
            type={isShowPassword ? "none" : "password"}
            onChange={handlePassword}
          />
        </InputDiv>

        <ShowDiv>
          <Check
            id="IsShowPasswordId"
            type="checkbox"
            onChange={handleCheckEvent}
          />
          <div>{t("show_password")}</div>
        </ShowDiv>

        <LoginBtn id="loginBtnId" type="submit">
          <b>{t("login")}</b>
        </LoginBtn>
        <LanguageChangeComponent />
        <ErrorP id="Error"></ErrorP>
      </form>
    </>
  );
};

export default AuthLogin;
