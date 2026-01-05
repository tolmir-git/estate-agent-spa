function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>MyEstateAgent</h4>
          <p style={styles.footerText}>Find your dream home with ease</p>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Quick Links</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>
              <a href="/#section1" style={styles.footerLink}>Browse Properties</a> {/*the only working part in the footer, leading to the id of section1*/}
            </li>
            <li style={styles.footerListItem}>
              <a href="/" style={styles.footerLink}>About Us</a>
            </li>
            <li style={styles.footerListItem}>
              <a href="/" style={styles.footerLink}>Contact</a>
            </li>
          </ul>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Contact</h4>
          <p style={styles.footerText}>Email: info@myestateagent.com</p>
          <p style={styles.footerText}>Phone: +44 20 1234 5678</p>
        </div>
      </div>
      
      <div style={styles.footerBottom}>
        <p style={styles.footerBottomText}>&copy; 2025 MyEstateAgent. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#1e293b',
    color: '#e2e8f0',
    marginTop: 'auto',
    borderTop: '4px solid #2563eb',
  },
  footerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '3rem 2rem 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  footerSection: {
    // No specific styles needed
  },
  footerHeading: {
    color: 'white',
    fontSize: '1.1rem',
    marginBottom: '1rem',
    fontWeight: 600,
  },
  footerText: {
    color: '#cbd5e1',
    fontSize: '0.9rem',
    margin: '0.5rem 0',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
  },
  footerListItem: {
    margin: '0.5rem 0',
  },
  footerLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  },
  footerBottom: {
    borderTop: '1px solid #334155',
    padding: '1.5rem 2rem',
    textAlign: 'center',
  },
  footerBottomText: {
    color: '#94a3b8',
    fontSize: '0.85rem',
    margin: 0,
  },
};

export default Footer;