import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/routes";
import Error from "common/Error";
import ErrorBoundary from "container/ErrorBoundary";
import Header from "common/Header";
import AuthPage from "pages/Auth";
import Home from "pages/Home";
import PrivateRoute from "./PrivateRoute";

const CreateRoutes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback="load...">
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route
              path={ROUTES.home.path}
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path={ROUTES.auth.path} element={<AuthPage />} />
            <Route
              path={ROUTES.notFound.path}
              element={<Error text="Страница не найдена" />}
            />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};

export default CreateRoutes;
