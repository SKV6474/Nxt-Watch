import { ThreeDots } from "react-loader-spinner";

import { LoaderContainer } from "../../../../Nxtwatch/styledComponent";

import SideBarHeader from "../../sideBarHeader";

const RenderLoadingsView = (routeType: string, css: string) => {
  return (
    <>
      {routeType !== "home" && routeType !== "video" && (
        <SideBarHeader type={routeType} />
      )}
      <LoaderContainer css={css}>
        <div className="loader-container" data-testid="loader">
          <ThreeDots color="#3b82f6" height={50} width={50} />
        </div>
      </LoaderContainer>
    </>
  );
};

export default RenderLoadingsView;
