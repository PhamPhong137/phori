import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react"
// import logo from "/assets/logo.png";

const navItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Bộ sưu tập", href: "/collection" },
  { name: "Video chia sẻ", href: "/video" },
  { name: "Blog", href: "/blog" },
  { name: "Thử thách nhận quà", href: "/challenge" },
  { name: "Về chúng tôi", href: "/about-us" },
]
const Header= () => {
  return (
    <header className="bg-[#ff852f] shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 underline-none">
              <img src="/logo_1.png
              " alt="Logo" width={64} height={64} className="rounded-full " />
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium no-underline "
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary">
              <span className="sr-only">Account</span>
              <UserCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

