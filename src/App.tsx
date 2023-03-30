import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import { NxtWatchRouteContainer } from "./Nxtwatch/routes";
import { AuthenticationRoute } from "./Authentication/routes";

import { Themes } from "./Nxtwatch/stores";
import { saveList } from "./Nxtwatch/stores";

import { observer, Provider } from "mobx-react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./Nxtwatch/constants/Color";

const App = observer(() => {
  return (
    <Provider saveList={saveList}>
      <ThemeProvider theme={Themes.Theme === "light" ? LightTheme : DarkTheme}>
        <>
          <BrowserRouter>
            <Switch>
              {AuthenticationRoute}
              {NxtWatchRouteContainer}
              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
        </>
      </ThemeProvider>
    </Provider>
  );
});
export default App;
