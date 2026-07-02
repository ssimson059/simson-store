import { useEffect, useState } from "react";

function FlashSale() {
  const [time, setTime] = useState(6 * 60 * 60); // 6 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <section className="bg-red-600 text-white py-16">
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-5xl font-bold">
          ⚡ FLASH SALE
        </h1>

        <p className="mt-5 text-xl">
          Ends In
        </p>

        <div className="flex justify-center gap-5 mt-8">

          <div className="bg-white text-black px-8 py-5 rounded-xl">
            <h2 className="text-4xl font-bold">{hours}</h2>
            <p>Hours</p>
          </div>

          <div className="bg-white text-black px-8 py-5 rounded-xl">
            <h2 className="text-4xl font-bold">{minutes}</h2>
            <p>Minutes</p>
          </div>

          <div className="bg-white text-black px-8 py-5 rounded-xl">
            <h2 className="text-4xl font-bold">{seconds}</h2>
            <p>Seconds</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FlashSale;