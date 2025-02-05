import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "Video", href: "/video" },
  { name: "Blog", href: "/blog" },
  { name: "Challenge", href: "/challenge" },
  { name: "About Us", href: "/about-us" },
]
const Header= () => {
  return (
    <header className="bg-[#ff852f] shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Logo" width={32} height={32} />
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
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

