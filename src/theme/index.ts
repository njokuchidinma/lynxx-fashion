// import getConfig from "next/config";
import { usePathname } from "next/navigation";
import getThemeOptions from "./themeOptions";

export interface ThemeProps {
  theme: {
    space: number[];
    fontSizes: number[];
    colors: {
      blue: string;
      navy: string;
      black: string;
      white: string;
      primary: string;
    };
  };
}

const theme = () => {
  const pathname = usePathname();
  // const { publicRuntimeConfig } = getConfig();

  const theme = getThemeOptions({ theme: "DEFAULT" }, pathname as string);

  return theme;
};

export default theme;
