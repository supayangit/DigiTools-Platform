import React from 'react';

const PricingCard = ({ pricing, isFeatured }) => {
    const { name, subtitle, description, price, period, features } = pricing;

    const handleBuyItem = () => {
        
    }

    return (

        <div
            className={`card shadow-sm ${isFeatured
                    ? "bg-purple-600 text-white"
                    : "bg-base-100"
                }`}
        >
            <div className="card-body">

                <div className="space-y-3">
                    <h2 className="text-[24px] font-bold">{name}</h2>
                    <p className={`text-sm ${isFeatured ? "text-purple-100" : "text-gray-500"}`}>
                        {subtitle}
                    </p>
                </div>

                <p>{description}</p>

                <div>
                    <span className="text-xl">${price}</span>
                    <span className={`text-sm ${isFeatured ? "text-purple-200" : "text-gray-500"}`}>
                        / {period}
                    </span>
                </div>

                <ul className="flex flex-col gap-2 text-xs text-left">
                    {features.map((feature, index) => (
                        <li key={index}>
                            ✓ <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-4">
                    <button
                        onClick={handleBuyItem}
                        className={`btn btn-block ${isFeatured ? "bg-white text-purple-600 border-none" : "btn-primary"
                            }`}
                    >
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PricingCard;