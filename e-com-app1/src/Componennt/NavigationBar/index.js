import { Component } from "react";
import "./index.css";

const NavigationBar = () => (
  <nav>
    <img
      src="https://media.istockphoto.com/id/918663760/photo/om-good-energy-symbol-3d-render-illustration.jpg?s=1024x1024&w=is&k=20&c=gNAk23cr9yT9EHrW_ge6aEqnQmqnQN3MhhwcrMiiR_k="
      alt="website logo"
      className="logo"
    />
    <ul className="nav-menu">
      <li>
        {" "}
        <a href="https://www.amazon.in/gp/yourstore?ie=UTF8&ref=ox_checkout_redirects_yourstore">
          Home
        </a>
      </li>
      <li>Products</li>
      <li className="cart-menu-con">
        Cart <span className="cart-count">0</span>
      </li>
      <li>About Us</li>
    </ul>
  </nav>
);

export default NavigationBar;
export class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
