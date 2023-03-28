import ProtectedRoute from "../../Authentication/components/ProtectedRoute";

import HomeRoute from "./HomePage/index";
import VideoItemDetailsRoute from "./VideoItemDetailsPage/index";
import TrendingRoute from "./TrendingPage/index";
import GamingRoute from "./GamingPage/index";
import SavedVideosRoute from "./SavedVideosPage/index";
import NotFoundPage from "../../Common/components/NotFoundPage";

const NxtWatchRouteContainer = [
  <ProtectedRoute key="/" exact path="/" component={HomeRoute} />,
  <ProtectedRoute
    key="/videos/:id"
    exact
    path="/videos/:id"
    component={VideoItemDetailsRoute}
  />,
  <ProtectedRoute
    key="/trending"
    exact
    path="/trending"
    component={TrendingRoute}
  />,
  <ProtectedRoute key="/gaming" exact path="/gaming" component={GamingRoute} />,
  <ProtectedRoute
    key="/saved-videos"
    exact
    path="/saved-videos"
    component={SavedVideosRoute}
  />,
  <ProtectedRoute
    key="/not-found"
    exact
    path="/not-found"
    component={NotFoundPage}
  />,
];

export { NxtWatchRouteContainer };
