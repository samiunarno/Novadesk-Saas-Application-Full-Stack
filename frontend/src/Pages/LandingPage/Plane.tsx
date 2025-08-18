// PricingCards.tsx
import React from "react";
import { FaCheck } from "react-icons/fa";

const pricingData = [
  {
    title: "Free",
    price: "$0",
    period: "Always free",
    features: ["Title Generation", "Article Generation"],
  },
  {
    title: "Premium",
    price: "$16",
    period: "Billed annually",
    features: [
      "Title Generation",
      "Article Generation",
      "Generate Images",
      "Remove Background",
      "Remove Object",
      "Resume Review",
    ],
  },
];

const PricingCards: React.FC = () => {
  return (
    <div className="px-3 md:px-20 xl:px-32">
      {/* Title Section */}
      <h2 className="mt-6 text-center text-4xl font-bold text-[#3B3B3B]">
       Choose Your Plan
      </h2>
      <p className="mt-2 mb-8 text-lg text-center text-[#858585]">
        Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
      </p>

      {/* Cards Grid */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {pricingData.map((card, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{card.title}</h3>
            <p className="text-3xl font-bold mt-2">{card.price}</p>
            <p className="text-sm text-gray-500 mb-4">{card.period}</p>

            <ul className="space-y-2">
              {card.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

           {
            pricingData.title === "Free" ? <> <button  className="mt-6 hidden w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Free
            </button></> : <> <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Subscribe
            </button></>
           }
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
