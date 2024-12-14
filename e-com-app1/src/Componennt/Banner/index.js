import "./index.css";

const Banner = () => (
  <div className="banner-container">
    <div className="text-container">
      <h1>
        THE PUJA SALE
        <br />
        is now back!
      </h1>
      <p>
        Get your device now
        <br />
        Discount available on all products!!!
      </p>
      <button className="btn">Explore Now</button>
    </div>
    <img
      className="banner-image"
      src="https://plus.unsplash.com/premium_photo-1671076131210-5376fccb100b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="banner"
    />
  </div>
);

export default Banner;
