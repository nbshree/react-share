/* eslint-disable @typescript-eslint/naming-convention,@typescript-eslint/no-explicit-any */
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: 500, borderRight: "1px solid" }}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/useTransition1">useTransition1</Link>
        </div>
        <div>
          <Link to="/UseTransition2">UseTransition2</Link>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
