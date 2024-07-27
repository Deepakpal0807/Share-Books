// App.jsx

import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectRoute from "./components/auth/ProtectRoute";
import NotFound from "./pages/NotFound";

// Lazy load components
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const User = lazy(() => import("./pages/User"));

function App() {
  // Get the user state from the Redux store
  const user = useSelector((state) => state.user.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/login"
              element={
                <ProtectRoute user={!user} redirect="/">
                  <Login />
                </ProtectRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectRoute user={user} redirect="/login">
                  <Dashboard />
                </ProtectRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectRoute user={user} redirect="/login">
                  <User />
                </ProtectRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
