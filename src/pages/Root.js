import { Outlet, ScrollRestoration } from "react-router-dom";

import ButtonAppBar from "../components/AppBar";

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <ButtonAppBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
