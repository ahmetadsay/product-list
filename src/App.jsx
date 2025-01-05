import ProductCard from "./components/productCard";

function App() {
  return (
    <div>
      <h1 className=" font-bold text-2xl my-4">Desserts</h1>
      <div className="flex flex-wrap">
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
