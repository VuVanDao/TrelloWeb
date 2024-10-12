import { useState } from "react";
import {
  AccessAlarm,
  AccessTimeFilled,
  AirlineSeatFlat,
  ThreeDRotation,
  AddHomeSharp,
} from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useColorScheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  // console.log("prefersDarkMode:", prefersDarkMode);
  // console.log("prefersLightMode:", prefersLightMode);
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}
function App() {
  return (
    <>
      <ModeToggle></ModeToggle>
      <Button variant="text" color="secondary">
        Hello world
      </Button>
      <Button variant="contained" color="primary">
        Hello world
      </Button>
      <Button variant="outlined" color="secondary">
        Hello world
      </Button>
      <AccessAlarm />
      <Typography variant="body2" color="text.secondary">
        vu van dao
      </Typography>
      <AccessTimeFilled />
      <ThreeDRotation />
      <AirlineSeatFlat />
      <AddHomeSharp />
    </>
  );
}

export default App;
