import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Landing from "./Landing";

// Imports lazy dos microfrontends remotos
const LoginPage = lazy(() => import("mfe_auth/LoginPage"));
const SignUpPage = lazy(() => import("mfe_auth/SignUpPage"));
const DashboardPage = lazy(() => import("mfe_auth/DashboardPage"));
const CompetenciesPage = lazy(() => import("mfe_competency/CompetenciesPage"));

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

function logout(navigate) {
  localStorage.clear();
  navigate("/login", { replace: true });
}

function Login() {
  const navigate = useNavigate();
  return (
    <LoginPage
      onLogin={() => (window.location.href = "/")}
      onGoToSignUp={() => navigate("/cadastro")}
    />
  );
}

function SignUp() {
  const navigate = useNavigate();
  return (
    <SignUpPage
      onSignUp={() => navigate("/login", { replace: true })}
      onGoToLogin={() => navigate("/login")}
    />
  );
}

function Home() {
  const navigate = useNavigate();
  return <Landing onLogout={() => logout(navigate)} />;
}

function Users() {
  const navigate = useNavigate();
  return (
    <DashboardPage onLogout={() => logout(navigate)} onHome={() => navigate("/")} />
  );
}

function Competencies() {
  const navigate = useNavigate();
  return (
    <CompetenciesPage onLogout={() => logout(navigate)} onHome={() => navigate("/")} />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Carregando...</p>}>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/cadastro"
            element={<SignUp />}
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/usuarios"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="/competencias"
            element={
              <PrivateRoute>
                <Competencies />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
