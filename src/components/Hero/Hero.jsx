import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-8 py-24 flex items-center justify-between">

        <div>
          <h1 className="text-6xl font-bold leading-tight">
            BIG SALE <br />
            UP TO 70% OFF
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Mobiles • Laptops • Fashion • Watches
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/electronics"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold"
            >
              Shop Electronics
            </Link>

            <Link
              to="/fashion"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Shop Fashion
            </Link>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
          alt="Hero"
          className="w-[450px] rounded-2xl shadow-2xl"
        />

      </div>
    </section>
  );
}

export default Hero;