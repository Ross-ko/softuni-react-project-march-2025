import { useEffect, useState } from "react";
import marketService from "../../services/marketService.js";
import MarketItem from "./market-item/MarketItem.jsx";

export default function Market() {
    const [advertisements, setAd] = useState([]);

    useEffect(() => {
        marketService.getAll().then(setAd);
    }, []);

    return (
        <>
            <h3 className="heading">Market</h3>
            <section id="dashboard">
                {advertisements.length > 0 ? (
                    advertisements.map((ad) => (
                        <MarketItem key={ad._id} {...ad} />
                    ))
                ) : (
                    <h3 className="empty">No Items Yet</h3>
                )}
            </section>
        </>
    );
}
