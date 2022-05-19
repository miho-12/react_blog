const Footer = ({ posts }) => {
  return (
    <footer className="Footer">
      <p>{posts.length} poszt van a blogban.</p>
    </footer>
  );
};

export default Footer;
