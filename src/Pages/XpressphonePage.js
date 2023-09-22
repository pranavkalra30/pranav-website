import "../App.css";
import React from "react";
import { styled } from "@mui/system";

function XpressphonePage() {
  const TabHeader = styled("Typography")({
    color: "aliceblue",
    fontSize: "62px",
    textAlign: "center",
    paddingLeft: "80px",
    paddingTop: "80px",
  });
  return (
    <div>
      <TabHeader>Xpressphone</TabHeader>
      <br />
      <br />
    </div>
  );
}
export default XpressphonePage;
