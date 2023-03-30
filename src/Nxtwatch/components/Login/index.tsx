import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import LogoImg from "../../../Common/components/logoImg";

import { LoginSubmit, UserDeatailsType } from "../../interface";

import {
  AppDiv,
  Check,
  ErrorP,
  Input,
  InputDiv,
  Label,
  LoginBtn,
  LoginDiv,
  LoginWrapper,
  LogoImgContainer,
  ShowDiv,
  UserInput,
} from "../../styledComponent";

import LanguageChangeComponent from "./LanguageContainer";

const LoginComponent = (props: LoginSubmit) => {
  const { onSubmitForm } = props;
  const { t } = useTranslation();

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [userDetails, setUserDeatail] = useState<UserDeatailsType>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmitForm(userDetails);
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
    <AppDiv>
      <LoginWrapper>
        <LoginDiv>
          <LogoImgContainer>
            <LogoImg css={""} />
          </LogoImgContainer>
          <form onSubmit={handleSubmit}>
            {/* UserName input */}
            <InputDiv>
              <Label>{t("username")}</Label>
              <UserInput
                style={{
                  backgroundColor:
                    userDetails.username.length > 0 ? "#e2e8f0" : "",
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
                placeholder={t("password") + ""}
                type={isShowPassword ? "none" : "password"}
                onChange={handlePassword}
              />
            </InputDiv>

            <ShowDiv>
              <Check type="checkbox" onChange={handleCheckEvent} />
              <div>{t("show_password")}</div>
            </ShowDiv>

            <LoginBtn type="submit">
              <b>{t("login")}</b>
            </LoginBtn>

            <LanguageChangeComponent />
            <ErrorP id="Error"></ErrorP>
          </form>
        </LoginDiv>
      </LoginWrapper>
    </AppDiv>
  );
};

export default LoginComponent;
