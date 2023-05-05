import "./App.css";
import DetailView from "./components/DetailView";
import ListView from "./components/ListView";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListView />,
    },
    {
      path: "/user/:userId",
      element: <DetailView />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
