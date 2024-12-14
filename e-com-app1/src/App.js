import { Component } from "react";
import NavigationBar from "./Componennt/NavigationBar";
import Banner from "./Componennt/Banner";
import "./App.css";
import ProductItem from "./Componennt/ProductItem";
import Footer from "./Componennt/Footer";

const dealProducts = [
  {
    imageURL:
      "https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/happi_mobiles_vivo_t3x_5g_crimson%20Bliss_main_image.webp",
    name: "vivo T3x 5G (Crimson Bliss, 128 GB)  (6 GB RAM)",
    brand: " Vivo",
    price: "₹14,999",
    id: "1",
  },
  {
    imageURL:
      "https://www.reliancedigital.in/medias/OnePlus-12-Emrld-494352274-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3ODQ2MXxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaDZlLzEwMTA0MTc5NTU2MzgyLmpwZ3wyYTFmMmNiMTk2MmQ1MWQ1MzFiMzJiYWIwYTZhNDM1MGQ5NTAzMzNjM2M2NGE3N2Y0NGJlYTMyNWFkMDgwMmE1",
    name: "OnePlus 12 (Flowy Emerald, 512 GB)  (16 GB RAM)",
    brand: "OnePlus",
    price: "₹62,995",
    id: "2",
  },
  {
    imageURL:
      "https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691140898",
    name: "Apple iPhone 14 Plus (Starlight, 128 GB)",
    brand: "Apple ",
    price: "₹57,999",
    id: "3",
  },
  {
    imageURL:
      "https://m.media-amazon.com/images/I/610Q2I5Or8L._AC_UF1000,1000_QL80_.jpg",
    name: "SAMSUNG Galaxy S23 FE (Purple, 256 GB)  (8 GB RAM)",
    brand: "SAMSUNG",
    price: "₹59,999",
    id: "4",
  },
];

const allProducts = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D",
    name: "PROWARP PRODART Original EHS61 ",
    brand: "PROWARP  ",
    price: "₹224",
    id: "1",
  },
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEvt33qrG9DhB_GDN9FxhsMZr06Ypipoy4A&s",
    name: "Soundbar, Fort S100 with 2 in-built subwoofers",
    brand: " Mivi",
    price: "₹3,999",
    id: "2",
  },
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDR3oDGu4oH3UphqPorr0XEc_obiY8PrIYNg&s",
    name: "1  Flip Essential, Micro USB Cable",
    brand: " JBL",
    price: "₹4,999",
    id: "3",
  },
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaCVKZMGOm9ojUfH5XrrwlODgHrVSRFrw_w&s",
    name: "HT-S20R 5.1ch Home Theatre with Dolby Digital",
    brand: " SONY",
    price: "₹15,900",
    id: "4",
  },
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHI2WCchGZWKx1lUUVocF6QPXQF31VjFznw&s",
    name: " Nirvana Ion 32dB ",
    brand: " boAt ",
    price: "₹2,599",
    id: "5",
  },
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiADK3xaoeYMWqTCcJVtHqlwj9leNpWVch3g&s",
    name: " EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV ",
    brand: "MOTOROLA ",
    price: "₹39,249",
    id: "6",
  },
  {
    imageURL:
      "https://s3.ap-south-1.amazonaws.com/happimobiles/product-main-images/happi_mobiles_vivo_t3x_5g_crimson%20Bliss_main_image.webp",
    name: "vivo T3x 5G (Crimson Bliss, 128 GB)  (6 GB RAM)",
    brand: " Vivo",
    price: "₹14,999",
    id: "7",
  },
  {
    imageURL:
      "https://www.reliancedigital.in/medias/OnePlus-12-Emrld-494352274-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3ODQ2MXxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaDZlLzEwMTA0MTc5NTU2MzgyLmpwZ3wyYTFmMmNiMTk2MmQ1MWQ1MzFiMzJiYWIwYTZhNDM1MGQ5NTAzMzNjM2M2NGE3N2Y0NGJlYTMyNWFkMDgwMmE1",
    name: "OnePlus 12 (Flowy Emerald, 512 GB)  (16 GB RAM)",
    brand: "OnePlus",
    price: "₹62,995",
    id: "8",
  },
  {
    imageURL:
      "https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691140898",
    name: "Apple iPhone 14 Plus (Starlight, 128 GB)",
    brand: "Apple ",
    price: "₹57,999",
    id: "9",
  },
  {
    imageURL:
      "https://m.media-amazon.com/images/I/610Q2I5Or8L._AC_UF1000,1000_QL80_.jpg",
    name: "SAMSUNG Galaxy S23 FE (Purple, 256 GB)  (8 GB RAM)",
    brand: "SAMSUNG",
    price: "₹59,999",
    id: "10",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D",
    name: "PROWARP PRODART Original EHS61 ",
    brand: "PROWARP  ",
    price: "₹224",
    id: "11",
  },
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEvt33qrG9DhB_GDN9FxhsMZr06Ypipoy4A&s",
    name: "Soundbar, Fort S100 with 2 in-built subwoofers",
    brand: " Mivi",
    price: "₹3,999",
    id: "12",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <NavigationBar />
          <Banner />
        </div>
        <div className="product-section">
          <h2 className="title"> Deal of the Day</h2>
          <ul className="product-row-list">
            {dealProducts.map((eachObj) => (
              <ProductItem product={eachObj} key={eachObj.id} />
            ))}
          </ul>
        </div>
        <div className="product-section">
          <h2 className="title"> Deal of the Day</h2>
          <ul className="product-row-list">
            {allProducts.map((eachObj) => (
              <ProductItem product={eachObj} key={eachObj.id} />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
