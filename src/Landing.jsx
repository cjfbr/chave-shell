import { useNavigate } from "react-router-dom";
import "./Landing.css";

function KeyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" {...props}>
      <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...props}>
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}

function SchemaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...props}>
      <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z" />
    </svg>
  );
}

export default function Landing({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing__inner">
        <div className="landing__badge">
          <KeyIcon />
        </div>
        <h1 className="landing__title">Chave</h1>
        <p className="landing__subtitle">Plataforma de gestão</p>

        <div className="landing__cards">
          <button className="landing__card" onClick={() => navigate("/usuarios")}>
            <span className="landing__cardIcon landing__cardIcon--users">
              <UsersIcon />
            </span>
            <span className="landing__cardTitle">Usuários</span>
            <span className="landing__cardDesc">
              Gerencie contas, perfis e permissões dos usuários.
            </span>
          </button>

          <button className="landing__card" onClick={() => navigate("/competencias")}>
            <span className="landing__cardIcon landing__cardIcon--comp">
              <SchemaIcon />
            </span>
            <span className="landing__cardTitle">Competências</span>
            <span className="landing__cardDesc">
              Cadastre competências, sub-competências e seus níveis.
            </span>
          </button>
        </div>

        {onLogout && (
          <button className="landing__logout" onClick={onLogout}>
            Sair
          </button>
        )}
      </div>
    </div>
  );
}
