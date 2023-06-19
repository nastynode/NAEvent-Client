import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserView } from './pages/UserView';
import { ModView } from './pages/ModView';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserView />
    },
    {
      path: "/imamod",
      element: <ModView />
    }
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
