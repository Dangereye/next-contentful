import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>
      <div className="page-content">{children}</div>
      <footer className="footer">
        <p>&copy; 2021 Just Add Marmite</p>
      </footer>
    </div>
  );
};

export default Layout;
