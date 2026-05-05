import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage";

function Login() {
  return (
    <main className="login-screen">
      <section className="login-panel" aria-labelledby="login-title">
        <p className="eyebrow">Lexfirma</p>
        <h1 id="login-title">Acceso al producto</h1>
        <p>La ruta de login sigue disponible para usuarios del despacho.</p>
        <a className="inline-link" href="/">
          Volver a la landing
        </a>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
