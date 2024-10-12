import { createTheme } from "@mui/material/styles";
import { red, blue, yellow } from "@mui/material/colors";
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
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: yellow[200],
        },
        secondary: {
          main: blue[200],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: red[400],
        },
      },
    },
  },
});
export default theme;
