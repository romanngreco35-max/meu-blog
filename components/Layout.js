export default function Layout({ children }) {
  return (
    <div>
      <header className="container">
        <h1 style={{margin:0}}>QuebraCódigoOculto</h1>
      </header>

      <main className="container">{children}</main>

      <footer className="container">
        <p>© {new Date().getFullYear()} — Conteúdo do blog.</p>
      </footer>
    </div>
  );
}
