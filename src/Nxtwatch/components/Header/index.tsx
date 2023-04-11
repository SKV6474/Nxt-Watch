import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import LogoImg from "../../../Common/components/logoImg";
import { RemoveCookies } from "../../../Authentication/utils";

// import { Props } from "../../interface";
import { Themes } from "../../stores";

import LogOutPopup from "../PopupDesignPage/logOut";
import Menu from "../PopupDesignPage/menuBox";

import {
  LOGOUT_DARK_THEME,
  LOGOUT_LIGHT_THEME,
  MENU_BAR_DARK_THEME,
  MENU_BAR_LIGHT_THEME,
  MOON_LIGHT_THEME,
  NXT_WATCH_PROFILE,
  TORCH_DARK_THEME,
} from "../../constants/Images";

import {
  DarkImg,
  HeaderDiv,
  HeaderMenu,
  HeaderStyle,
  LightImg,
  LogoutBtn,
  Logoutimg,
  MenuImg,
  Profile,
  ProfileImg,
  ThemeImgContainer,
} from "../../styledComponent";

import {
  getFromLocalStorage,
  removeAllDataFromLocalStorage,
  sendToLocalStorage,
} from "../../utils";

const HeaderComponent = (props: any) => {
  const { history, t, i18n } = props;
  const location = useLocation();

  const [isLinkPop, setIsLinkPop] = useState(false);
  const [isLogoutPop, setIsLogoutPop] = useState(false);
  const value = getFromLocalStorage("i18nextLng");

  useEffect(() => {
    if (value === "en" || value === "hindi") {
      (document.getElementById("Language") as HTMLInputElement).value = value;
      i18n.changeLanguage(value);
    }
  }, [value, i18n]);

  const handleThemeChange = () => {
    Themes.toggleThemeMode();
  };

  const handleConfirmedLogout = () => {
    history.replace("/login");
    RemoveCookies();
    sendToLocalStorage("lastPath", location.pathname);
    removeAllDataFromLocalStorage();
  };

  const handleToggleLogoutCancel = () => {
    setIsLogoutPop(!isLogoutPop);
  };

  const handleToggleMenuShow = () => {
    setIsLinkPop(!isLinkPop);
  };

  const handleLanguageChange = () => {
    const Language = (document.getElementById("Language") as HTMLInputElement)
      .value;
    if (Language === "en") {
      i18n.changeLanguage(Language);
    } else if (Language === "hindi") {
      i18n.changeLanguage(Language);
    }
    sendToLocalStorage("i18nextLng", Language);
  };

  return (
    <HeaderDiv>
      <div>
        <LogoImg css={HeaderStyle} />
      </div>
      <HeaderMenu>
        <select id="Language" onClick={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hindi">हिंदी</option>
        </select>
        <ThemeImgContainer
          style={{
            marginLeft: Themes.Theme === "light" ? "5px" : "0",
          }}
        >
          <DarkImg
            id="DarkImgId"
            onClick={handleThemeChange}
            src={MOON_LIGHT_THEME}
            alt="Dark Theme"
          ></DarkImg>

          <LightImg
            id="LightImgId"
            onClick={handleThemeChange}
            src={TORCH_DARK_THEME}
            alt="Light Theme"
          />
        </ThemeImgContainer>
        <Profile>
          <ProfileImg src={NXT_WATCH_PROFILE} alt="profile"></ProfileImg>
          {Themes.Theme === "light" ? (
            <MenuImg
              id="MenuPopUpTracker"
              onClick={handleToggleMenuShow}
              src={MENU_BAR_LIGHT_THEME}
              alt="Menu"
            />
          ) : (
            <MenuImg
              id="MenuPopUpTracker"
              onClick={handleToggleMenuShow}
              src={MENU_BAR_DARK_THEME}
              alt="Menu"
            />
          )}
        </Profile>
        <div>
          {Themes.Theme === "light" ? (
            <Logoutimg
              className="LogOutBtn"
              onClick={handleToggleLogoutCancel}
              src={LOGOUT_LIGHT_THEME}
              alt="logout"
            />
          ) : (
            <Logoutimg
              className="LogOutBtn"
              onClick={handleToggleLogoutCancel}
              src={LOGOUT_DARK_THEME}
              alt="logout"
            />
          )}
          <LogoutBtn id="LogOutBtnId" onClick={handleToggleLogoutCancel}>
            <b>{t("logout")}</b>
          </LogoutBtn>
        </div>
        {isLogoutPop && (
          <LogOutPopup
            onCancel={handleToggleLogoutCancel}
            onConfirm={handleConfirmedLogout}
          />
        )}
        {isLinkPop && <Menu onChange={handleToggleMenuShow} />}
      </HeaderMenu>
    </HeaderDiv>
  );
};

export default withTranslation()(HeaderComponent);
