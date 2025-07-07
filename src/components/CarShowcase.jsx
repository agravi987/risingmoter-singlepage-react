import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";

export default function CarShowcase() {
  const cars = [
    {
      name: "Electric Beast",
      image: car1,
      desc: "A silent revolution of speed and efficiency.",
    },
    {
      name: "Luxury Cruiser",
      image: car2,
      desc: "Feel the premium comfort on every journey.",
    },
    {
      name: "Urban Smart",
      image: car3,
      desc: "Designed for city life and tight turns.",
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Featured Cars
      </h2>
      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {cars.map((car) => (
          <div
            key={car.name}
            className="bg-[#1e293b] rounded-xl shadow-lg hover:shadow-blue-600/40 transition duration-300 p-6 text-center"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-contain mb-6 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
            <p className="text-gray-300 text-sm">{car.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
