import Image from "next/image";
import { cartProductPrice } from "../AppContext";
import Trash from "../Icons/Trash";

export default function CartProduct({ product, onRemove }) {
  return (
    <div className="flex items-center gap-8 border-b py-2 ">
      <div className="w-24">
        <Image
          src={product?.image}
          alt={product?.name}
          width={240}
          height={240}
        />
      </div>
      <div className="grow">
        <h1 className="font-semibold">{product?.name}</h1>
        {product?.size && (
          <div className="text-sm ">
            Size : <span>{product?.size?.name}</span>
          </div>
        )}
        {product?.extras.length > 0 && (
          <div className="text-sm text-gray-500">
            Extras :
            {product?.extras.map((extras) => (
              <div key={extras.price}>
                {extras?.name} ₹ {extras?.price}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-lg font-semibold whitespace-nowrap">
        {" "}
        ₹ {cartProductPrice(product)}
      </div>
      {!!onRemove && (
        <div className="ml-2">
          <button
            type="button"
            className="p-2"
            onClick={() => {
              onRemove(index);
              console.log(index);
            }}
          >
            <Trash />
          </button>
        </div>
      )}
    </div>
  );
}
