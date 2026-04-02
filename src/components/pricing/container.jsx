import React from 'react';
import PricingCard from './pricingcard';

const Container = ({ pricings }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {pricings.map((pricing, index) => (
          <PricingCard
            key={pricing.id}
            pricing={pricing}
            isFeatured={index === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;