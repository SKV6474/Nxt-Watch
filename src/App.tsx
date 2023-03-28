import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import { NxtWatchRouteContainer } from "./Nxtwatch/routes";
import { AuthenticationRoute } from "./Authentication/routes";

import { toggleTheme } from "./Nxtwatch/stores";
import { saveList } from "./Nxtwatch/stores";

import { Provider } from "mobx-react";

const App = () => {
  return (
    <Provider saveList={saveList} toggleTheme={toggleTheme}>
      <>
        <BrowserRouter>
          <Switch>
            {AuthenticationRoute}
            {NxtWatchRouteContainer}
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </>
    </Provider>
  );
};

export default App;
