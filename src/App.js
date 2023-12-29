import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/home/Home/Home';
import About from './page/about/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
