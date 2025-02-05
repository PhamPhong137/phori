import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#ff852f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Toy Brand</h3>
            <p className="mb-4">Bringing joy to children through innovative and educational toys.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800  text-blue-600">
                <Facebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400  text-pink-8800">
                <Instagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300  text-cyan-700">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300 text-amber-950">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300  text-amber-950">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300  text-amber-950">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300  text-amber-950">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300  text-amber-950">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:info@toybrand.com" className="hover:text-gray-300  text-amber-950">
                  info@toybrand.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={18} />
                <a href="tel:+1234567890" className="hover:text-gray-300  text-amber-950">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1" size={18} />
                <span>123 Toy Street, Fun City, TC 12345, Country</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay up to date with our latest news and products!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="text-gray-800 bg-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-[#612e0a] hover:bg-[#d56819] px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Phơriri Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

