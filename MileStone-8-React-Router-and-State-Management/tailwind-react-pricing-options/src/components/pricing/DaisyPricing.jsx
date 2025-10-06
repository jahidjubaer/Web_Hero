import React from "react";

const DaisyPricing = ({ pricing }) => {
  const { planName, pricePerMonth, features, color, popular } = pricing;
  return (
    <div className="card duration-100 hover:animate-pulse bg-base-100 shadow-sm">
      <div className="card-body">
        {popular && (
          <span className="badge badge-xs badge-warning">Most Popular</span>
        )}
        <div className="flex justify-between">
          <h2 style={{ color: `${color}` }} className="text-3xl font-bold">
            {planName}
          </h2>
          <span className="text-xl">${pricePerMonth}/mo</span>
        </div>

        <div className="mt-6  gap-2 text-xs flex justify-between flex-col flex-1 ">
          {features.map((feature) => (
            <p className="flex gap-2 mb-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </p>
          ))}
        </div>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default DaisyPricing;
