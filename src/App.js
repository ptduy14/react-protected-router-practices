import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import DefaultLayout from "./components/layout/default-layout";
import NoneLayout from "./components/layout/none-layout";
import ProtectedRoute from "./components/protected-route";

function App() {
  return (
    <Routes>
      {/* public routes */}
      {publicRoutes.map((route, index) => {
        const Component = route.component;
        const Layout = route.isUseLayout ? DefaultLayout : NoneLayout;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}

      {privateRoutes.map((route, index) => {
        const Component = route.component;
        const Layout = route.isUseLayout ? DefaultLayout : NoneLayout;
        return (
          <Route key={index} element={<ProtectedRoute />}>
            <Route
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          </Route>
        );
      })}
    </Routes>
  );
}

export default App;
