import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Todo from "../pages/Todo";
import Signin from "../pages/Signin";
import PrivateRoute from "./PrivateRoute";
import { TodoProvider } from "../contexts/TodoContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "signup",
        element: (
          <PrivateRoute onlyAuth={false}>
            <Signup />
          </PrivateRoute>
        ),
      },
      {
        path: "signin",
        element: (
          <PrivateRoute onlyAuth={false}>
            <Signin />
          </PrivateRoute>
        ),
      },
      {
        path: "todo",
        element: (
          <PrivateRoute onlyAuth={true}>
            <TodoProvider>
              <Todo />
            </TodoProvider>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
