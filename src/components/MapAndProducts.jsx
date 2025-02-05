import Map from "./Map";

const bestSellers = [
  { name: "Toy 1", price: "$19.99" },
  { name: "Toy 2", price: "$24.99" },
  { name: "Toy 3", price: "$14.99" },
];

export default function MapAndProducts() {
  return (
    <section className="bg-white h-[1000px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            style={{ marginLeft: "-150px", marginRight:"200px" }}
            className="w-2/3 md:w-2/3 relative h-[400px] bg-slate-500"
          >
            <Map />
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
            <ul className="space-y-4">
              {bestSellers.map((toy, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <img
                      src={`/placeholder.svg?height=64&width=64&text=Toy+${
                        index + 1
                      }`}
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
