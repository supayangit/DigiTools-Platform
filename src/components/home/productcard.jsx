import React from 'react';
import {
    LuFileText,
    LuSparkles,
    LuLayoutTemplate,
    LuCalendar,
    LuCopyCheck,
    LuUser,
    LuBox,
    LuMail,
    LuReceipt
} from "react-icons/lu";

const iconMap = {
    FileText: LuFileText,
    Sparkles: LuSparkles,
    LayoutTemplate: LuLayoutTemplate,
    Calendar: LuCalendar,
    CheckSquare: LuCopyCheck,
    User: LuUser,
    Box: LuBox,
    Mail: LuMail,
    Receipt: LuReceipt
};

const productcard = ({ product, selectBuyItem, setSelectBuyItem, cartCount, setCartCount }) => {
    const { name, description, price, period, tag, tagType, features, icon } = product;

    const tagStyles = {
        "best-seller": "bg-orange-100 text-orange-600",
        "popular": "bg-purple-100 text-purple-600",
        "new": "bg-green-100 text-green-600"
    };

    const iconStyles = {
        "best-seller": "bg-orange-100 text-orange-600",
        "popular": "bg-purple-100 text-purple-600",
        "new": "bg-green-100 text-green-600"
    };

    const handleBuyNow = () => {
        setSelectBuyItem([...selectBuyItem, product]);
        console.log("buy button clicked");
        let newCartCount = cartCount + 1;
        setCartCount(newCartCount);
        console.log("cartCount", newCartCount)
    };

    const Icon = iconMap[icon] || LuBox;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">

                <div className="w-full flex justify-end">
                    <div>
                        {
                        tagType && (
                            <span className={`badge badge-sm ${tagStyles[tagType]}`}>
                                {tag}
                            </span>
                        )
                    }
                    </div>
                </div>

                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconStyles[tagType]}`}>
                    <Icon className="text-3xl" />
                </div>

                <h2 className="text-[24px] font-bold">{name}</h2>

                <p>{description}</p>

                <div>
                    <span className="text-xl">${price}</span>
                    <span className="text-sm text-gray-500">/ {period}</span>
                </div>

                <ul className="flex flex-col gap-2 text-xs text-left">
                    {
                        features.map((feature, index) => <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{feature}</span>
                        </li>)
                    }
                </ul>

                <div className="mt-4">
                    <button className="btn btn-primary btn-block" onClick={handleBuyNow}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default productcard;