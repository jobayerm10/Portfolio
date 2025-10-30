import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar></Navbar>,
//   },
//   {
//     path: "/about",
//     element: <Header></Header>,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router}>
//       <App></App>
//     </RouterProvider>
//   </StrictMode>
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar></Navbar>,
//   },
//   {
//     path: "/about",
//     element: <Header></Header>,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
