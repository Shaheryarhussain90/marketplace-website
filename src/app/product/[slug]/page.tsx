
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface productPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      _type,
      price,
      description,
      discountpercentage,
      productImage
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: productPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <h1>{product.inNew}</h1>
          <p className="text-2xl font-sans">{product.price}</p>
          <p className="text-semi-bold">{product.description}</p>
          <p>{product.tags}</p>
          <p>{product.discountpercentage}</p>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  );
}











// import { client } from "@/sanity/lib/client";
// import { Product } from "../../../../types/products";
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";


// interface productPageProps { 
//     params : Promise<{slug : string}>
// }

// async function getProduct (slug : string) : Promise<Product>{
//     return client.fetch(
//         groq`*[_type == "product" && slug.current == $slug][6]{
//         _id,
//         title,
//         _type,
//         price,
//         discription,
//         discountpercentage,
//         productImage
//         }`, {slug}
//     )
// }

// export default async function ProductPage({params} : productPageProps){
// const {slug} = await params;
// const product = await getProduct(slug)
// return(
//     <div className="max-w-7xl- mx-auto px-4">
//         <div className="grig grid-cols-1 sm:grid-cols-2 gap-12">
// <div className="aspect-sequare ">
// {product.productImage && (
//     <Image
//     src={urlFor(product.productImage? )  .  url()}
//     alt={product.title}
//     width={500}
//     height={500}
//     className="rounded-lg sadow-md"
//     />
// )}
// </div>
// <div className="flex flex-col gap-8">
//     <h1 className="text-4xl font-bold">
//         {product.title}
//     </h1>
//     <p className="text-2xl font-sans">
//         {product.price}
//     </p>
// </div>
//         </div>
//     </div>
// )

// }