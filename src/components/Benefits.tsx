import React from "react";
import { FaDumbbell, FaChartLine, FaUserCheck } from "react-icons/fa";

const benefitsData = [
  {
    id: 1,
    icon: <FaDumbbell className="text-[var(--color-fitness)] text-4xl" />,
    title: "Programmes Personnalisés",
    description:
      "Des entraînements adaptés à ton niveau et à tes objectifs pour progresser efficacement.",
  },
  {
    id: 2,
    icon: <FaChartLine className="text-[var(--color-fitness)] text-4xl" />,
    title: "Suivi de tes Progrès",
    description:
      "Analyse et visualisation de ta progression avec des statistiques détaillées.",
  },
  {
    id: 3,
    icon: <FaUserCheck className="text-[var(--color-fitness)] text-4xl" />,
    title: "Coaching & Motivation",
    description:
      "Un coach pour te guider, te motiver et t'aider à atteindre tes objectifs.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[var(--color-fitness)]">
          Pourquoi choisir notre app ?
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Atteins tes objectifs plus rapidement grâce à une application conçue
          pour maximiser tes performances.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{benefit.title}</h3>
              <p className="text-gray-400 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
