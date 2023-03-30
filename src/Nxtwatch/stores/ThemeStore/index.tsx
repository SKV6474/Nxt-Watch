import { action, observable } from "mobx";
import { getFromLocalStorage, sendToLocalStorage } from "../../utils";

class ThemeStore {
  theme: string | null = getFromLocalStorage("Theme");

  @observable Theme = this.theme === undefined ? "light" : this.theme;

  @action
  toggleThemeMode = () => {
    if (this.Theme === "light") {
      this.Theme = "dark";
      sendToLocalStorage("Theme", "dark");
    } else {
      console.log(this.Theme);
      this.Theme = "light";
      sendToLocalStorage("Theme", "light");
    }
  };
}

export default ThemeStore;
