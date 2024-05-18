import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  Checkout,
  HomeLayout,
  Landing,
  Login,
  Register,
  SingleProduct,
  Headphones,
  Earphones,
  Speakers,
  Error,
} from "./pages";
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { ProtectedRotes } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authReady, login } from "./features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
function App() {
  const { user, authReadyState } = useSelector((state) => state.userState);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRotes user={user}>
          <HomeLayout />
        </ProtectedRotes>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          // loader: FeaturedLoader,
        },
        {
          path: "/headphones",
          element: <Headphones />,
          // loader: ProductsLoader,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },

        {
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
          // loader: SingleLoader,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      errorElement: <Error />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      errorElement: <Error />,
      action: RegisterAction,
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(authReady());
    });
  }, []);
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
