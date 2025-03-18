import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#ff852f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Phơ ri</h3>
            <p className="mb-4">Tôn vinh bản sắc văn hóa và trang phục dân tộc Việt Nam.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572796863985" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800  text-blue-600">
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
            <h3 className="text-xl font-bold mb-4">Đường dẫn</h3>
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
            <h3 className="text-xl font-bold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:info@toybrand.com" className="hover:text-gray-300  text-amber-950">
                  phori@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={18} />
                <a href="tel:+1234567890" className="hover:text-gray-300  text-amber-950">
                  0934647837
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1" size={18} />
                <span>Hoà Lạc,Thạch Thất, Hà Nội, VietNam</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gửi email cho chúng tôi</h3>
            <p className="mb-4">Theo dõi những thông tin và sản phẩm mới độc đáo từ Phơ ri</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="text-gray-800 bg-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-[#612e0a] hover:bg-[#d56819] px-4 py-2 rounded-r-md transition duration-300"
              >
                Gửi 
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Phơri Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

