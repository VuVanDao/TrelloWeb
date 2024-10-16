import ModeSelect from "../ModeSelect";
import { Box } from "@mui/material";

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect></ModeSelect>
    </Box>
  );
}
export default AppBar;
