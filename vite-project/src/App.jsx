import { Box, Container, useColorScheme } from "@mui/material";
import Board from "./pages/Boards/_id";

import Button from "@mui/material/Button";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();

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
      <Board></Board>
    </>
  );
}

export default App;
