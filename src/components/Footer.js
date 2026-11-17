import './Footer.css';

// Set at build time by the build script in package.json.
const lastUpdated =
  process.env.REACT_APP_BUILD_DATE ||
  new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Minju Yoo.
        </div>
        <div className="footer-updated">
          Last updated: {lastUpdated}
        </div>
      </div>
    </footer>
  );
};

export default Footer;