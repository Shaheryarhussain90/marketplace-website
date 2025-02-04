import React from "react";

const ContactPage = () => {
  return (
    <div id="contact" className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white py-6 shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Product</a>
            <a href="#" className="hover:text-blue-600">Pricing</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="space-x-4">
            <button className="text-blue-600">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Become a member</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Get in touch today!</h2>
            <p className="text-gray-500 mb-6">
              We know how large objects will act, but things on a small scale behave very differently.
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +451 215 215<br />
              <strong>Fax:</strong> +451 215 215
            </p>
            <div className="flex space-x-4 text-blue-600">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">📸</a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="image/family.png"
              alt="Contact Us"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">We help small businesses with big ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Phone", "Office", "Email"].map((type, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  index === 1 ? "bg-blue-600 text-white" : "bg-white shadow"
                }`}
              >
                <p className="mb-2">
                  georgia.young@example.com<br />
                  georgia.young@pile.com
                </p>
                <p className="font-bold mb-4">Get Support</p>
                <button className={`px-4 py-2 rounded ${
                  index === 1 ? "bg-white text-blue-600" : "bg-blue-600 text-white"
                }`}>
                  Submit Request
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
          <p className="text-gray-500 mb-8">We can't wait to meet you!</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded">Try it free now</button>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;