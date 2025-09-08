const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>Created with React + Vite</p>
        <p className="copyright">© {new Date().getFullYear()} Mindful Tasks</p>
      </div>
    </footer>
  );
};

export default Footer;