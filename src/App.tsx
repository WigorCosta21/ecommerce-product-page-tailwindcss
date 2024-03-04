import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { products } from "./data/products";

export const App = () => {
  return (
    <div className="relative pb-4">
      <Header />
      {products.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </div>
  );
};
