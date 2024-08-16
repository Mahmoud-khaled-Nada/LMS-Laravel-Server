import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import Trustees from "../pages/Trustees";
import Home from "../pages/Home";
import ResetPassword from "../pages/ResetPassword";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import NotFound from "@/pages/404";
import Cart from "@/pages/Cart";
import Courses from "@/pages/Courses";
import Lessons from "@/pages/Lessons";
import SingleCourse from "@/pages/SingleCourse";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
// import AuthenticationRouter from "./guard/AuthenticationRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          //   <AuthenticationRouter>
          <Home />
          //   </AuthenticationRouter>
        ),
      },
      { path: "/trustees", element: <Trustees /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/courses", element: <Courses /> },
      { path: "/lesson", element: <Lessons /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/singleCourse", element: <SingleCourse /> },
      { path: "/cart", element: <Cart /> },

      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms/> },
      
      { path: "*", element: <NotFound/> },

    ],
  },
]);

export default routes;
