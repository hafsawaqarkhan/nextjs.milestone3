import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#A77D54] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-xl">
              We are passionate about delivering the finest coffee straight to your door.
               Savor the aroma and taste of freshly roasted beans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/Shop" className="hover:underline">Shop</a></li>
              <li><a href="/About" className="hover:underline">About</a></li>
              <li><a href="/Contact" className="hover:underline">Contact</a></li>
             </ul>
          </div>

      
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-xl">Email: support@coffeehub.com</p>
            <p className="text-xl">Phone: +1 234 567 890</p>
            <p className="text-xl">Address: 123 Coffee Street, Bean City</p>
          </div>
        </div>

        <div className="border-t bg-[#A77D54] mt-8 pt-4 text-center">
          <p className="text-xl">&copy; {new Date().getFullYear()} CoffeeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
