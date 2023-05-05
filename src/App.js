import './App.css';
import DetailView from './components/DetailView';
import Header from './components/Header';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/user/:userId",
      element: <DetailView/>,
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
