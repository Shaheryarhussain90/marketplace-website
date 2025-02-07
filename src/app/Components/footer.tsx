import React from 'react'

const footer = () => {
  return (
    <div>
      <footer className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Company Info</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Features</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#">Business Marketing</a></li>
                <li><a href="#">User Analytics</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Unlimited Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#">iOS & Android</a></li>
                <li><a href="#">Watch a Demo</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Get In Touch</h3>
              <form className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded w-full text-gray-800"
                />
                <button className="bg-white text-blue-600 px-4 py-2 rounded">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <p className="text-center mt-8 text-sm">Made With Love By Finland @| All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default footer
