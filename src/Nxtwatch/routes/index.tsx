import ProtectedRoute from "../../Authentication/components/ProtectedRoute";
import NotFoundPage from "../../Common/components/NotFoundPage";

import {
  GAMING_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  SAVED_VIDEO_ROUTE,
  TRENDING_ROUTE,
  VIDEO_DETAILS_ROUTE,
} from "../constants/RoutePath";

import HomeRoute from "./HomePage/index";
import VideoItemDetailsRoute from "./VideoItemDetailsPage/index";
import TrendingRoute from "./TrendingPage/index";
import GamingRoute from "./GamingPage/index";
import SavedVideosRoute from "./SavedVideosPage/index";

const NxtWatchRouteContainer = [
  <ProtectedRoute
    key={HOME_ROUTE}
    exact
    path={HOME_ROUTE}
    component={HomeRoute}
  />,
  <ProtectedRoute
    key={VIDEO_DETAILS_ROUTE}
    exact
    path={VIDEO_DETAILS_ROUTE}
    component={VideoItemDetailsRoute}
  />,
  <ProtectedRoute
    key={TRENDING_ROUTE}
    exact
    path={TRENDING_ROUTE}
    component={TrendingRoute}
  />,
  <ProtectedRoute
    key={GAMING_ROUTE}
    exact
    path={GAMING_ROUTE}
    component={GamingRoute}
  />,
  <ProtectedRoute
    key={SAVED_VIDEO_ROUTE}
    exact
    path={SAVED_VIDEO_ROUTE}
    component={SavedVideosRoute}
  />,
  <ProtectedRoute
    key={NOT_FOUND_ROUTE}
    exact
    path={NOT_FOUND_ROUTE}
    component={NotFoundPage}
  />,
];

export { NxtWatchRouteContainer };
