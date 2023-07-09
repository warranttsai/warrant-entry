import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      123
      <Outlet /> {/* Renders the nested routes */}
      456
    </div>
  );
}

export default Layout;
