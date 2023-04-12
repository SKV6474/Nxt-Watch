import HomeList from "./HomeListStore";
import HomeVideoService from "../services/HomeVideoApi/index.api";

import TrendingList from "./TrendingListStore";
import TrendingListService from "../services/TrendingList/index.api";

import GameList from "./GameListStore";
import GameListService from "../services/GameList/index.api";

import SaveList from "./SaveListStore";

import ThemeStore from "./ThemeStore";

export const homeList = new HomeList(new HomeVideoService());

export const gameList = new GameList(new GameListService());

export const trendingList = new TrendingList(new TrendingListService());

export const saveList = new SaveList();

export const Themes = new ThemeStore();
