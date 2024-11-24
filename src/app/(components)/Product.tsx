import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="m-10 py-10 flex flex-wrap gap-4 sm:justify-center md:justify-center lg:justify-center">
      <div className="w-full sm:w-1/3 lg:w-3/12  border p-5 mt-5">
        <div className="flex justify-center p-5">
          <Image
            src="/card-image2.jpg"
            alt="product1"
            width={300}
            height={200}
          />
        </div>
        <p className="text-center py-2">Card-1</p>
        <p className="text-center py-2">RS: 500</p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white py-2 w-20 rounded-md m-5">
            Buy Now
          </button>
        </div>
      </div>

      <div className="w-full sm:w-1/3 lg:w-3/12 border p-5 mt-5">
        <div className="flex justify-center p-5">
          <Image
            src="/card-image2.jpg"
            alt="product1"
            width={300}
            height={200}
          />
        </div>
        <p className="text-center py-2">Card-2</p>
        <p className="text-center py-2">RS: 500</p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white py-2 w-20 rounded-md m-5">
            Buy Now
          </button>
        </div>
      </div>

      <div className="w-full sm:w-1/3 lg:w-3/12 border p-5 mt-5">
        <div className="flex justify-center p-5">
          <Image
            src="/card-image2.jpg"
            alt="product1"
            width={300}
            height={200}
          />
        </div>
        <p className="text-center py-2">Card-3</p>
        <p className="text-center py-2">RS: 500</p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white py-2 w-20 rounded-md m-5">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
