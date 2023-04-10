import React, { useEffect } from "react";
import {
  GameObject,
  TrendingOrSaved,
  VideosList,
} from "../../../Nxtwatch/interface";
import {
  getFromLocalStorage,
  getTime,
  sendToLocalStorage,
} from "../../../Nxtwatch/utils";

const FilterList = (props: any) => {
  const { List, onAction, isDisabled, type } = props;

  useEffect(() => {
    let typeValue: undefined | string = getFromLocalStorage(type);

    if (typeValue === undefined) {
      typeValue = "ALL";
    }
    (document.getElementById("filter") as HTMLInputElement).value = typeValue;
    handleFilteration();
  }, [List, type]);

  const FilterData = (
    l: number,
    m: number
  ): VideosList[] | TrendingOrSaved[] | GameObject[] => {
    const list: VideosList[] | TrendingOrSaved[] | GameObject[] = [];
    List.forEach((ele: VideosList) => {
      let value = Number(ele.title.slice(0, 1).charCodeAt(0));
      if (value >= l && value <= m) {
        list.push(ele);
      }
    });
    return list;
  };

  const handleFilteration = () => {
    const value = (document.getElementById("filter") as HTMLInputElement).value;
    switch (value) {
      case "ALL":
        sendToLocalStorage(type, "ALL");
        onAction(List);
        return;
      case "ATOI":
        sendToLocalStorage(type, "ATOI");
        onAction(FilterData(65, 73));
        return;
      case "JTOR":
        sendToLocalStorage(type, "JTOR");
        onAction(FilterData(74, 82));
        return;
      case "STOZ":
        sendToLocalStorage(type, "STOZ");
        onAction(FilterData(83, 90));
        return;

      case "LASTPUBLISHED":
        sendToLocalStorage(type, "LASTPUBLISHED");
        const lastpublishedList: VideosList[] | TrendingOrSaved[] = [];
        const date: number[] = [];

        List.forEach((ele: VideosList) => {
          date.push(getTime(ele.published_at));
        });

        const uniquedates = date.filter((year, pos) => {
          return date.indexOf(year) === pos;
        });

        uniquedates.sort();
        const bigYear = uniquedates[0];
        uniquedates.splice(0, 1);
        uniquedates.push(bigYear);

        uniquedates.forEach((year) => {
          List.forEach((ele: VideosList) => {
            if (year === getTime(ele.published_at)) {
              lastpublishedList.push(ele);
            }
          });
        });
        onAction(lastpublishedList);
        return;
    }
  };

  return (
    <div>
      <select id="filter" onClick={handleFilteration}>
        <option value="ALL">All</option>
        <option value="ATOI">A to I</option>
        <option value="JTOR">J to R</option>
        <option value="STOZ">S to Z</option>
        {!isDisabled && <option value="LASTPUBLISHED">Last Published</option>}
      </select>
    </div>
  );
};

export default FilterList;
