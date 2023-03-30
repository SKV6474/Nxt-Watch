import "styled-components/macro";

import { ImgDiv, Logoimg } from "../../../Nxtwatch/styledComponent";
import { Themes } from "../../../Nxtwatch/stores";
import {
  NXT_WATCH_LOGO_DARK_THEME,
  NXT_WATCH_LOGO_LIGHT_THEME,
} from "../../../Nxtwatch/constants/Images";

const LogoImg = (props: { css: string }) => {
  const { css } = props;
  return (
    <ImgDiv css={css}>
      {Themes.Theme === "light" ? (
        <Logoimg src={NXT_WATCH_LOGO_LIGHT_THEME} alt="logo"></Logoimg>
      ) : (
        <Logoimg src={NXT_WATCH_LOGO_DARK_THEME} alt="logo dark"></Logoimg>
      )}
    </ImgDiv>
  );
};

export default LogoImg;
