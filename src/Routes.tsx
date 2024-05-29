import { Layout } from "antd";
import { styles } from "./styles";
import Login from "./views/Auth/Login";
import { ROUTES } from "./utils/constant";
import PrivateRoute from "./ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header";
import PublicRoute from "./PublicRoute";
import Dashboard from "./views/Dashboard";

const Router = () => {
  return (
    <Layout>
      <PrivateRoute>
        <Layout.Header style={styles.header}>
          <HeaderComponent />
        </Layout.Header>
      </PrivateRoute>
      <Layout.Content style={styles.content}>
        <Routes>
          <Route
            path={ROUTES.ROOT}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </Layout.Content>
    </Layout>
  );
};

export default Router;
