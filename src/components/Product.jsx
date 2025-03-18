import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

const products = [
  { id: 1, name: "Trọng phục dân tộc Dao", price: 250000, image: "/public/product.jpg" },
  { id: 2, name: "Trọng phục dân tộc Kinh", price: 300000, image: "/public/product.jpg" },
  { id: 3, name: "Trọng phục dân tộc H'Mong", price: 150000, image: "/public/product.jpg" },
  { id: 4, name: "Trọng phục dân tộc Thái Đỏ", price: 200000, image: "/public/product.jpg" },
  { id: 5, name: "Trọng phục dân tộc Hoa", price: 350000, image: "/public/product.jpg" },
]

export default function Product() {
  const [activeIndex, setActiveIndex] = useState(2)

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? products.length - 1 : current - 1))
  }

  const handleNext = () => {
    setActiveIndex((current) => (current === products.length - 1 ? 0 : current + 1))
  }

  const getCardClassName = (position) => {
    const baseClass =
      "absolute transition-all duration-300 cursor-pointer w-[200px] rounded-lg bg-white shadow-lg overflow-hidden"

    if (position === 0) return `${baseClass} z-30 scale-100`
    if (Math.abs(position) === 1) return `${baseClass} z-20 scale-[0.85] opacity-60`
    if (Math.abs(position) === 2) return `${baseClass} z-10 scale-[0.7] opacity-30`
    return `${baseClass} scale-[0.5] opacity-0`
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Sản phẩm</h2>
        <div className="relative">
          <div className="flex justify-center items-center gap-4 h-[300px]">
            {products.map((product, idx) => {
              const position = idx - activeIndex
              return (
                <div
                  key={product.id}
                  className={getCardClassName(position)}
                  style={{
                    transform: `translateX(${position * 220}px) scale(${1 - Math.abs(position) * 0.15})`,
                  }}
                >
                  <div className="relative">
                    <img 
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={170}
                      height={350}
                      className="w-full h-[150px] object-cover"
                    />
                    <button className="absolute top-2 right-2 text-red-500">
                      <Heart className="w-5 h-12" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                    <p className="text-gray-600">{product.price.toLocaleString()} đ</p>
                  </div>
                </div>
              )
            })}
          </div>
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

