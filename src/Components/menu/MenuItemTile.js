import AddToCartButton from "./AddToCartButton";

export default function MenuItemTIle({ onAddTOCart, ...item }) {
  const { image, name, description, sizes, basePrice, extrsIngredientPrices } =
    item;

  const hasSizesOrExtras =
    sizes?.length > 0 || extrsIngredientPrices?.length > 0;

  return (
    <>
      <div
        className="bg-gray-200 p-4 rounded-lg text-center
    group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
      >
        <div className="text-center">
          <img
            src={image}
            className="max-h-auto max-h-24 block mx-auto"
            alt="pizza"
          />
        </div>

        <h4 className="font-semibold text-xl my-3">{name}</h4>
        <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
        <AddToCartButton
          hasSizesOrExtras={hasSizesOrExtras}
          onClick={onAddTOCart}
          basePrice={basePrice}
          image={image}
        />
      </div>
    </>
  );
}
