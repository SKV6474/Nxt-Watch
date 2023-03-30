import { LoadingWrapperProp } from "../../../Nxtwatch/interface";
import FailureUi from "../RenderView/FailureView";
import RenderLoadingsView from "../RenderView/LoadingView";

const LoadingWrapper = (props: LoadingWrapperProp): any => {
  const { apiStatus, renderSuccessUi, type, css } = props;

  const renderRespectiveViewOfLoading = () => {
    switch (apiStatus) {
      case "initial":
      case "loading":
        return RenderLoadingsView(type, css);
      case "success":
        return renderSuccessUi();
      case "failure":
        return FailureUi();
    }
  };
  return renderRespectiveViewOfLoading();
};

export default LoadingWrapper;
