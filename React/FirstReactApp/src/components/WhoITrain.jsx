import { useEffect, useRef, useState } from "react";

export default function WhoITrain() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const cards = [
    "Kids & beginners",
    "Adult lap swimmers",
    "Triathletes / swimmers",
  ];

  return (
    <section ref={ref} className="px-10 py-20 bg-gray-100 h-1000">
      <h1 className="text-6xl mb-10">Who I Train</h1>

      <div className="grid grid-cols-3 gap-10">
        {cards.map((item, i) => (
          <div key={i} className="overflow-hidden">
            {/* Top Grey Box */}
            <div className="bg-gray-200 h-56 p-6 relative">
              <p className="text-4xl absolute bottom-6 left-6">{item}</p>
            </div>

            {/* Fill Loading Reveal */}
            <div className="h-64 overflow-hidden mt-4">
              <img
                src="https://picsum.photos/400/300"
                className={`w-full h-full object-cover transition-all duration-1000 ease-out
                ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
                style={{
                  transitionDelay: `${i * 250}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
