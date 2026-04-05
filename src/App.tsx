import { Outlet } from "react-router";

function App() {
  return (
    <div className="text-white bg-primary">
      <Outlet />
    </div>
  );
}

export default App;
