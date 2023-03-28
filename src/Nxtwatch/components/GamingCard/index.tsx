import React from "react";
import { useTranslation } from "react-i18next";

import {
  GameCard,
  GameDataCardDiv,
  GameThumbUrl,
  GameVideoLink,
  ShortDataGame,
  ShortDataGamUpper,
} from "../../../Nxtwatch/styledComponent";

import { GameObject } from "../../interface";

const GamingCard = (props: { GameData: GameObject }) => {
  const { t } = useTranslation();
  const { GameData } = props;

  return (
    <GameVideoLink to={`/videos/${GameData.id}`}>
      <GameCard>
        <GameThumbUrl
          src={GameData.thumbnail_url}
          alt="ThumbUrl"
        ></GameThumbUrl>
        <GameDataCardDiv>
          <div>{GameData.title}</div>
          <ShortDataGame>
            <ShortDataGamUpper>
              {GameData.view_count} {t("Watching")}
            </ShortDataGamUpper>
            <div> {t("Worldwide")}</div>
          </ShortDataGame>
        </GameDataCardDiv>
      </GameCard>
    </GameVideoLink>
  );
};

export default GamingCard;
