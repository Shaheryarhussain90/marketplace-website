"use client";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


const page = () => {

    const [CartItems,setCartItems] = useState<Product[]>([])
    const [discount, setdiscount] = useState<number>(0)
const [formvalues, setformvalue] = useState ({
    firstName: "",
    lastName: "",
    email : "",
    phone : "",
    address : "",
    zipcode: "",
    city: "",
})
    const [formErrors, setformErrors] = useState ({ 
    firstName: false,
    lastName: false,
    email : false,
    phone : false,
    address : false,
    zipcode: false,
    city: false,
}, )
useEffect(() => {
    setCartItems(getCartItems())
    const appliedDiscount = localStorage.getItem("appliedDiscount")
    if(appliedDiscount) {
        setdiscount(Number(appliedDiscount))
    }
}, [])
const subTotal = CartItems.reduce(
    (total, item ) => total + item.price * item.Inventory,0) 

const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformvalue({
        ...formvalues,
        [e.target.value]: e.target.value
    })
}
const validateForm = () =>{
    const errors ={
        firstName:!formvalues.firstName,
        lastName: !formvalues.lastName,
        email : !formvalues.email,
        phone : !formvalues.phone,
        address : !formvalues.address,
        zipcode: !formvalues.zipcode,
        city: !formvalues.city,
    }
    setformErrors(errors);
    return Object.values(errors).every((error) => !error)
}
const handlePlaceOrder = () => {
    if(validateForm()){
        localStorage.removeItem("appliedDiscount")
    }
}

  return (
    <div>
      <div className="min-h-screen bg-grey-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<nav>
    <link href="/cart">
    Cart
    </link>
    <span> 
        CheckOut
    </span>
</nav>
</div>
      </div>
      <div className="main">
<div className="order">
    <div>
        <h2>
            Order Summary
        </h2>
        {CartItems.length > 0 ? (
            CartItems.map((item) => (
                <div key={item._id}>
                    <div className="image">

{item.productImage &&(
<Image
src={urlFor(item.productImage).url()}
alt="image"
width={50}
height={50}
className="bjective object-cover"
/>
) }
                    </div>
                    <div>
                        <h3>
                            {item.title}  </h3>
                            <p>Quantity : {item.Inventory}</p>
                           
                       
                        </div>
                        <p>${item.price * item.Inventory}</p>
                    </div>
            ))
        ) :( 
            <p>No items in Cart</p>
        ) }
    </div>

</div>
      </div>
    </div>
  )
}

export default page
