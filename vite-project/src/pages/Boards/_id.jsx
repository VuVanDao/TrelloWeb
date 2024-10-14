import React from "react";
import { Box, Container, useColorScheme } from "@mui/material";
import ModeSelect from "../../components/ModeSelect";
import AppBar from "../../components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
function Board() {
  return (
    <Container maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar></AppBar>
      <BoardBar />
      <BoardContent />
    </Container>
  );
}
export default Board;
