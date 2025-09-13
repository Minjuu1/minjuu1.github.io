import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Minju Yoo.
        </div>
        <div className="footer-updated">
          Last updated: Sep 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;