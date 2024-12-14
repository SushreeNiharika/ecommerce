import "./index.css";
const Footer = () => (
  <div className="footer">
    <div className="row">
      <div className="foot-col-1">
        <h3>Download Our App</h3>
        <p>Download available for Ios mobile phone and Android</p>
        <div className="app-logo">
          <img
            src="https://media.istockphoto.com/id/918663760/photo/om-good-energy-symbol-3d-render-illustration.jpg?s=1024x1024&w=is&k=20&c=gNAk23cr9yT9EHrW_ge6aEqnQmqnQN3MhhwcrMiiR_k="
            alt="play store"
          />
          <img src="" alt="play store" />
        </div>
      </div>
      <div className="footer-col-2">
        <img src="" alt="website logo" />
        <p>More ways to shop : Find a retailer or call to 000011110123</p>
      </div>
      <div className="footer-col-3">
        <h3>useful links</h3>
        <ul>
          <li>Coupons</li>
          <li>Blog Post</li>
          <li>Return Policies</li>
          <li>Join Affiliate</li>
        </ul>
      </div>
      <div className="footer-col-4">
        <h3>Follow Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="copyright">Copyright @2023 Spark Inc. All rights reserved.</p>
  </div>
);

export default Footer;
