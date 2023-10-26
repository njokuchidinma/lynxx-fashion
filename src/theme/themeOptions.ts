import { deviceSize } from "@/utils/constants";
import merge from "lodash/merge";
import { colors } from "./colors";
import shadows from "./shadows";

const breakpoints: any = Object.keys(deviceSize).map(
  (key) => deviceSize[key] + "px"
);

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const THEMES = {
  GIFT: "GIFT",
  HEALTH: "HEALTH",
  DEFAULT: "DEFAULT",
  GROCERY: "GROCERY",
  FURNITURE: "FURNITURE",
};

const themesOptions = {
  [THEMES.DEFAULT]: { colors, shadows, breakpoints },
  [THEMES.GROCERY]: { shadows, breakpoints, colors },
  [THEMES.FURNITURE]: {
    shadows,
    breakpoints,
    colors: {
      ...colors,
      primary: { ...colors.primary, main: colors.paste.main },
    },
  },
  [THEMES.HEALTH]: {
    shadows,
    breakpoints,
    colors: {
      ...colors,
      primary: { ...merge({ ...colors.primary }, { ...colors.blue }) },
    },
  },
  [THEMES.GIFT]: {
    shadows,
    breakpoints,
    colors: {
      ...colors,
      primary: { ...colors.primary, main: colors.marron.main },
    },
  },
};

function getThemeOptions(publicRuntimeConfig: any, pathname: string) {
  let themeOption: any;

  /*
      YOU CAN ALSO REMOVE updateTheme function
      AND FOLLOWING ENTIRE switch case BLOCK.
    */
  const updateTheme = (themeName: string) => {
    publicRuntimeConfig.theme = themeName;
    themeOption = themesOptions[publicRuntimeConfig.theme];
  };

  switch (pathname) {
    case "/furniture-shop":
      updateTheme(THEMES.FURNITURE);
      break;

    case "/health-beauty":
      updateTheme(THEMES.HEALTH);
      break;

    case "/gift-shop":
      updateTheme(THEMES.GIFT);
      break;

    case "/":
      updateTheme(THEMES.DEFAULT);
      break;

    case "/grocery1":
      updateTheme(THEMES.DEFAULT);
      break;

    case "/grocery2":
      updateTheme(THEMES.DEFAULT);
      break;

    case "/grocery3":
      updateTheme(THEMES.DEFAULT);
      break;

    case "/gadget-shop":
      updateTheme(THEMES.DEFAULT);
      break;

    case "/fashion-shop-1":
      updateTheme(THEMES.DEFAULT);
      break;

    case "/market-1":
      updateTheme(THEMES.DEFAULT);
      break;

    default:
      themeOption = themesOptions[THEMES.DEFAULT];
      break;
  }

  return themeOption;
}

export default getThemeOptions;
