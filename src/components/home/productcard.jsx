import React from 'react';
/*
"id": 1,
    "name": "Pro Resume Builder",
    "description": "Create ATS-friendly resumes with professionally designed templates.",
    "price": 19,
    "period": "one-time",
    "tag": "Popular",
    "tagType": "popular",
    "features": [
      "100+ templates",
      "ATS optimization",
      "Export to PDF",
      "Custom sections"
    ],
    "icon": "FileText"
*/
const productcard = ({ product, selectBuyItem, setSelectBuyItem, cartCount, setCartCount }) => {
    const { name, description, price, period, tag, tagType, features, icon } = product;

    const tagStyles = {
        "best-seller": "bg-orange-100 text-orange-600",
        "popular": "bg-purple-100 text-purple-600",
        "new": "bg-green-100 text-green-600"
    };

    //    const handleDeleteSelectedPlayer = (player) => {
    //     console.log("clicked")
    //     const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name != player.name);
    //     console.log(filteredPlayers);
    //     setSelectedPlayers(filteredPlayers);
    //     setCoin(coin + player.price);
    // };

    
    // const handleChoosePlayer = () => {
    //     let newCoin = coin - price;
    // 
    //     toast.success(`${name} is selected`);
    //     setIsSelected(true);
    //     setSelectedPlayers([...selectedPlayers, player]);
    // }

    const handleBuyNow = () => {
        setSelectBuyItem([...selectBuyItem, product]);
        console.log("buy button clicked");
        let newCartCount = cartCount + 1;
        setCartCount(newCartCount);
        console.log("cartCount", newCartCount)
    };

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">

                {
                    tagType && (
                        <span className={`badge badge-sm ${tagStyles[tagType]}`}>
                            {tag}
                        </span>
                    )
                }

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