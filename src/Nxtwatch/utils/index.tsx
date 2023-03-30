const getTime = (date: string | undefined) => {
  return 2023 - Number(date?.slice(-4));
};

export { getTime };

export const sendToLocalStorage = (
  key: string,
  value: boolean | string | number
) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
};

export const getFromLocalStorage = (key: string) => {
  let LoacalString: string | null = localStorage.getItem(key);
  if (LoacalString !== null) {
    let localTodoList = JSON.parse(LoacalString);
    return localTodoList;
  } else {
    return;
  }
};

export const RemoveFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const removeAllDataFromLocalStorage = () => {
  RemoveFromLocalStorage("Banner");
  // RemoveFromLocalStorage("Theme");
  RemoveFromLocalStorage("TrendingFilter");
  RemoveFromLocalStorage("HomeFilter");
  RemoveFromLocalStorage("GamingFilter");
  RemoveFromLocalStorage("SplitPane");
};
