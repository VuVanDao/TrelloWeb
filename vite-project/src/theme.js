import { createTheme } from "@mui/material/styles";
import {
  red,
  blue,
  yellow,
  brown,
  pink,
  blueGrey,
  orange,
} from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// const theme = createTheme({
//   cssVariables: true,
//   palette: {
//     mode: "dark",
//     primary: {
//       main: red.A400,
//     },
//     secondary: {
//       main: blue[200],
//     },
//     error: {
//       main: red.A400,
//     },
//     text: {
//       secondary: red.A100,
//     },
//   },
// });
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "70px",
    boardBarHeight: "80px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: yellow[100],
        },
        secondary: {
          main: blueGrey[100],
        },
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    },
    dark: {
      palette: {
        primary: {
          main: red[400],
        },
        secondary: {
          main: orange[300],
        },
      },
      spacing: (factor) => `${0.25 * factor}rem`,
    },
  },
});
export default theme;
