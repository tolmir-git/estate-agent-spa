import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header" style={styles.header}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.brandLink}>    {/*house*/}         
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={styles.logoSvg}>
                
                <path 
                  d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
                <path 
                  d="M9 22V12h6v10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            </svg>
          <h1 style={styles.title}>MyEstateAgent</h1>
        </Link>
        <nav>
           {/*leads to properties in the section1 of the page on the searchpage*/}
          <Link to="/#section1" style={styles.navLink}>Browse Properties</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    borderBottom: '1px solid #e5e7eb',
    background: '#ffffff',
    padding: '0.75rem 0',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
  },
  brandLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
  },
  navLink: {
    marginLeft: '1rem',
    color: '#374151',
    textDecoration: 'none',
  },
  logoSvg: {
    marginRight: '0.5rem',
    color: '#2563eb',
  },
};

export default Header;