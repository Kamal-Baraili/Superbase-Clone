interface ProductCard {
  setProductHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductCard: React.FC<ProductCard> = ({ setProductHover }) => {
  return (
    <>
      <div
        onMouseEnter={() => setProductHover(true)}
        onMouseLeave={() => setProductHover(false)}
        className="w-[500px] h-[300px] p-2 border border-zinc-700 rounded-2xl ease-in-out duration-1000"
      >
        asdfsadfasdfsd
      </div>
    </>
  );
};

export default ProductCard;
