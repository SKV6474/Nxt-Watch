import { LoaderContainer } from "../../../../Nxtwatch/styledComponent";
import Loader from "../../Loader";
import SideBarHeader from "../../sideBarHeader";

const RenderLoadingsView = (routeType: string, css: string) => {
  return (
    <>
      {routeType !== "home" && routeType !== "video" && (
        <SideBarHeader type={routeType} />
      )}
      <LoaderContainer css={css}>
        <Loader />
      </LoaderContainer>
    </>
  );
};

export default RenderLoadingsView;
