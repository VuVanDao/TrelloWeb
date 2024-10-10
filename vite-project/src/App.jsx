import { useState } from "react";
import {
  AccessAlarm,
  AccessTimeFilled,
  AirlineSeatFlat,
  ThreeDRotation,
} from "@mui/icons-material";

import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Button variant="text">Hello world</Button>
      <Button variant="contained">Hello world</Button>
      <Button variant="outlined">Hello world</Button>
      <AccessAlarm />
      <AccessTimeFilled />
      <ThreeDRotation />
      <AirlineSeatFlat />
    </>
  );
}

export default App;
