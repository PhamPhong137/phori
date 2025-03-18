import Map from "./Map";

const bestSellers = [
  { name: "Gấu bông dân tộc Thái", price: "230.000", image:"/public/product.jpg" },
  { name: "Gấu bông dân tộc Mông", price: "230.000", image:"/public/product.jpg" },
  { name: "Gấu bông dân tộc Kinh", price: "230.000", image:"/public/product.jpg" },
];

export default function MapAndProducts() {
  return (
    <section className="bg-white h-[1000px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            style={{ marginLeft: "-350px", marginRight:"400px" }}
            className="w-2/3 md:w-2/3 relative h-[400px]"
          >
            <Map />
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Bán chạy</h2>
            <ul className="space-y-4">
              {bestSellers.map((toy, index) => (
                <li key={index} className="flex items-center space-x-4 align-middle">
                  <div className="relative w-32 h-36 pt-3">
                    <img
                      src="/public/product.jpg"
                      alt={toy.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{toy.name}</h3>
                    <p className="text-gray-600">{toy.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
