import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
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

const selectedcard = ({ product, handleDeleteSelectedProduct }) => {

    const Icon = iconMap[product.icon] || LuBox;

    const iconStyles = {
        "best-seller": "bg-orange-100 text-orange-600",
        "popular": "bg-purple-100 text-purple-600",
        "new": "bg-green-100 text-green-600"
    };

    return (
        <div>
            <div className='flex items-center gap-6 justify-between p-8 rounded-2xl border'>
                <div className='flex items-center gap-4'>
                    <div className={`w-15 h-15 rounded-full flex items-center justify-center ${iconStyles[product.tagType]}`}>
                        <Icon className="text-3xl" />
                    </div>
                    <div>
                        <h2 className='flex items-center gap-2.5 font-bold text-3xl'>{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                </div>


                <button className='btn text-red-400' onClick={() => handleDeleteSelectedProduct(product)}>
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
};

export default selectedcard;