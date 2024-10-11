import { useState } from "react";
import {
  AccessAlarm,
  AccessTimeFilled,
  AirlineSeatFlat,
  ThreeDRotation,
} from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Button variant="text">Hello world</Button>
      <Button variant="contained">Hello world</Button>
      <Button variant="outlined">Hello world</Button>
      <AccessAlarm />
      <CssBaseline></CssBaseline>
      <AccessTimeFilled />
      <ThreeDRotation />
      <AirlineSeatFlat />
    </>
  );
}

export default App;
