"use client";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from 'next/link';

const Page = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipcode: "",
        city: "",
    });
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipcode: false,
        city: false,
    });

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCartItems();
                setCartItems(items);
            } catch (error) {
                console.error("Failed to fetch cart items:", error);
            }
        };
        fetchCartItems();

        if (typeof window !== "undefined") {
            const appliedDiscount = localStorage.getItem("appliedDiscount");
            if (appliedDiscount) {
                setDiscount(Number(appliedDiscount));
            }
        }
    }, []);

    const subTotal = cartItems.length > 0 ? cartItems.reduce(
        (total, item) => total + item.price * (item.Inventory || 1), 0
    ) : 0;

    const total = subTotal - discount;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email),
            phone: !formValues.phone || !/^\d{10}$/.test(formValues.phone),
            address: !formValues.address,
            zipcode: !formValues.zipcode || !/^\d{5}$/.test(formValues.zipcode),
            city: !formValues.city,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            localStorage.removeItem("appliedDiscount");
            // Implement order placement logic here
            console.log("Order placed successfully!");
        } else {
            console.log("Form validation failed");
        }
    };

    return (
        <div>
            <div className="min-h-screen bg-grey-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav>
                        <Link href="/cart">Cart</Link>
                        <span>CheckOut</span>
                    </nav>
                </div>
            </div>
            <div className="main">
                <div className="order">
                    <div>
                        <h2>Order Summary</h2>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id}>
                                    <div className="image">
                                        {item.productImage && (
                                            <Image
                                                src={urlFor(item.productImage).url() || "/default-image.jpg"}
                                                alt={item.title || "Product Image"}
                                                width={50}
                                                height={50}
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>Quantity: {item.Inventory || 1}</p>
                                    </div>
                                    <p>${item.price * (item.Inventory || 1)}</p>
                                </div>
                            ))
                        ) : (
                            <p>No items in Cart</p>
                        )}
                    </div>
                    <div>
                        <h2>Total: ${total.toFixed(2)}</h2>
                        <button onClick={handlePlaceOrder}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;