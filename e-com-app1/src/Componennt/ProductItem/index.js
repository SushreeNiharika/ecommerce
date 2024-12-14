import "./index.css";

const ProductItem = (props) => {
  const { product } = props;
  return (
    <li className="productItem">
      <img src={product.imageURL} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.brand}</h3>
      <p> {product.price}</p>
      <div className="add-cart-container">
        <button type="button" className="add-cart-btn">
          Add to cart
        </button>
      </div>
    </li>
  );
};
export default ProductItem;
