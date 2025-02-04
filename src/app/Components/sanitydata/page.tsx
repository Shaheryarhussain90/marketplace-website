"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { allproduct, four } from "@/sanity/lib/qureries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from 'sweetalert2'

export default function page() {
  const [product, setproduct] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchproduct() {
      const fetchedproduct: Product[] = await client.fetch(allproduct);
      setproduct(fetchedproduct);
    }
    fetchproduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
Swal.fire({
  position: "top-right",
  icon: "success",
  title: `${product.title} added to cart`,
  showConfirmButton: false,
  timer: 1000
})
    addToCart(product);
    // alert('ok')
    // console.log(handleAddToCart)
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Our latest product
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  ">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded shadow-md p-4 
hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out
"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.productImage && (
                <Image
                  src={urlFor(product.productImage).url()}
                  alt="image"
                  width={200}
                  height={200}
                  className=" w-full h-64 object-cover rounded-md"
                />
              )}
              <h1 className="text-lg font-semibold mt-4">{product.title}</h1>
              <p className="text-gray-500 mt-2">
                {product.price ? `$${product.price}` : "price not avaiblr"}
              </p>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out "
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out
