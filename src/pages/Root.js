import { Outlet } from "react-router-dom";

import ButtonAppBar from "../components/AppBar";

function RootLayout() {
  return (
    <>
      <ButtonAppBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
