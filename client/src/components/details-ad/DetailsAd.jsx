import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import marketService from "../../services/marketService.js";
import { UserContext } from "../../context/UserContext";

export default function DetailsAd() {
    const navigate = useNavigate();
    const { email } = useContext(UserContext);
    const [ad, setAd] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        marketService.getOne(itemId).then(setAd);
    }, [itemId]);

    const adDeleteClickHandler = async () => {
        const hasConfirm = confirm(
            `Are you sure you want to delete ${ad.item} advertisement?`
        );

        if (!hasConfirm) {
            return;
        }

        await marketService.delete(itemId);

        navigate("/market");
    };

    return (
        <section id="details">
            <div id="details-wrapper">
                <div>
                    <img id="details-img" src={ad.imageUrl} alt="example1" />
                    <p id="details-title">{ad.item}</p>
                </div>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p className="details-price">Price: $ {ad.price}</p>
                        <p className="details-availability">
                            {ad.availability}
                        </p>
                        <p className="type">Type: {ad.type}</p>
                        <p id="item-description">{ad.description}</p>
                    </div>
                    {/* <!--Edit and Delete are only for creator--> */}
                    <div id="action-buttons">
                        <Link id="edit-btn" to={`/market/${itemId}/edit`}>
                            Edit
                        </Link>
                        <button onClick={adDeleteClickHandler} id="delete-btn">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
