import React, { use } from "react";
import PricingCard from "./PricingCard";
import DaisyPricing from "./DaisyPricing";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div className="w-10/12 mx-auto my-10">
      <h1 className="text-4xl font-bold mb-10">Get our MemberShip</h1>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {pricingData.map((pricing, index) => (
          //   <PricingCard key={index} pricing={pricing}></PricingCard>
          <DaisyPricing key={index} pricing={pricing}></DaisyPricing>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
