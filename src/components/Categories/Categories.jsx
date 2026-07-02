import { Link } from "react-router-dom";

const data = [
  { name: "Electronics", icon: "📱", link: "/electronics" },
  { name: "Fashion", icon: "👕", link: "/fashion" },
  { name: "Laptops", icon: "💻", link: "/electronics" },
  { name: "Shoes", icon: "👟", link: "/fashion" },
];

function Categories() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;