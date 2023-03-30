import React from "react";
import { observer } from "mobx-react";

import HeaderComponent from "../../components/Header";
import { Props } from "../../interface/index";

import {
  Container,
  AppDiv,
  SideWithContentContainer,
} from "../../styledComponent";

const WithHeader = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType<any> => {
  @observer
  class Header extends React.Component<Props> {
    render() {
      return (
        <AppDiv>
          <Container className="Container">
            <HeaderComponent {...this.props} />
            <SideWithContentContainer className="sideWithContentContainer">
              <WrappedComponent {...this.props} />
            </SideWithContentContainer>
          </Container>
        </AppDiv>
      );
    }
  }
  return Header;
};
export default WithHeader;
