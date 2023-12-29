import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/home/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
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
