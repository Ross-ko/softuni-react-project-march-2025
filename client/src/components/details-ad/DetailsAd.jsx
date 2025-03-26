import { useEffect, useState } from "react";
import { useParams } from "react-router";
import marketService from "../../services/marketService.js";

export default function DetailsAd() {
    const [ad, setAd] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await marketService.getOne(itemId);
            setAd(result);
        })();
    }, [itemId]);

    return (
        <section id="details">
            <div id="details-wrapper">
                <div>
                    <img
                        id="details-img"
                        src={ad.imageUrl}
                        alt="example1"
                    />
                    <p id="details-title">{ad.item}</p>
                </div>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p className="details-price">Price: $ {ad.price}</p>
                        <p className="details-availability">
                            {ad.availability}
                        </p>
                        <p className="type">Type: {ad.type}</p>
                        <p id="item-description">
                            {ad.description}
                        </p>
                    </div>
                    {/* <!--Edit and Delete are only for creator--> */}
                    <div id="action-buttons">
                        <a href="" id="edit-btn">
                            Edit
                        </a>
                        <a href="" id="delete-btn">
                            Delete
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
