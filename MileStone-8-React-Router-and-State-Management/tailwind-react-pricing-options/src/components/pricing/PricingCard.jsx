import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingCard = ({ pricing }) => {
  const {
    planName,
    pricePerMonth,
    features,
    color,
    buttonText,
    popular,
    shortDescription,
  } = pricing;
  return (
    <div className="flex justify-between duration-500 hover:shadow-2xl flex-col flex-1 space-y-2 hover:border-1 border-green-400 bg-gray-200  rounded-xl p-5 ">
      <div className="flex justify-end">
        {popular && (
          <button className="btn w-[100px]  rounded-4xl bg-amber-600 text-white fixed border-none shadow-none">
            Popular
          </button>
        )}
      </div>
      <h1 style={{ color: `${color}` }} className=" font-bold text-3xl mb-5 ">
        {planName}
      </h1>
      <p className="p-2">{shortDescription}</p>
      <div className=" bg-gray-100 p-3 rounded-2xl flex justify-between flex-col flex-1 ">
        {features.map((feature) => (
          <p className="flex gap-2 mb-3 ">
            {" "}
            <CircleCheckBig></CircleCheckBig>
            {feature}
          </p>
        ))}
      </div>
      <h2 className="text-2xl font-bold my-4 ">Price : ${pricePerMonth}</h2>
      <button
        style={{ backgroundColor: `${color}` }}
        className="btn w-full border-none"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
