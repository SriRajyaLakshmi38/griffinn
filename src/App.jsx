import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component Imports
import RootLayout from "./pages/RootLayout";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery.jsx";
import ContactUs from "./components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contactus", element: <ContactUs /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
