export default function Navbar() {
  return (
    <>
      <header>
        <div className="header-topo">
          <a href="#inicio" className="logo" aria-label="W.A Moraes - início">
            <div className="logo-texto"><img src="/img/W_AMORAESLOGO.png" alt="W.A Moraes" className="logo-imagem" />
              <span>W.A Moraes</span>
              <small>Peças e Acessórios Automotivos</small>
            </div>
          </a>
        </div>
      </header>

      <nav className="navbar-landing" aria-label="Navegação principal">
        <ul>
          <li><a href="#inicio" className="ativo">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#destaques">Destaques</a></li>
          <li><a href="#freios">Sistema de Freios</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </>
  );
}
