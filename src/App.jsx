import "./App.css";
import Layout from "./layout/Layout";
import InnerLayout from "./layout/InnerLayout";
import Home from "./pages/home/Home";
import WebDesign from "./pages/design/web/WebDesign";
import AppDesign from "./pages/design/app/AppDesign";
import GraphicDesign from "./pages/design/graphic/GraphicDesign";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        errorElement: (
          <div className="error-page">
            <h1>Error 404: Page not found</h1>
          </div>
        ),
        children: [
          {
            path: "/",
            element: <InnerLayout />,
            errorElement: (
              <div className="error-page">
                <h1>Error 404: Page not found</h1>
              </div>
            ),
            children: [
              { index: true, element: <Home /> },
              {
                path: "/web",
                element: <WebDesign />,
              },
              {
                path: "/app",
                element: <AppDesign />,
              },
              {
                path: "/graphic",
                element: <GraphicDesign />,
              },
            ],
          },
        ],
      },
    ],
    {
      basename: "/designo",
    }
  );
  return <RouterProvider router={router} />;
}

export default App;
