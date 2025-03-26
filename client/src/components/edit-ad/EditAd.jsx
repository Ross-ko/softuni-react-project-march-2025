import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import marketService from "../../services/marketService.js";

export default function EditAd() {
    const navigate = useNavigate();
    const { itemId } = useParams();
    const [ad, setAd] = useState({});

    useEffect(() => {
        marketService.getOne(itemId).then(setAd);
    }, [itemId]);

    const formAction = async (formData) => {
        const adData = Object.fromEntries(formData);

        await marketService.edit(itemId, adData);

        navigate(`/market/${itemId}/details`);
    };

    return (
        <section id="edit">
            <div className="form form-item">
                <h2>Edit Your Item</h2>
                <form action={formAction} className="edit-form">
                    <input
                        type="text"
                        name="item"
                        id="item"
                        placeholder="Item"
                        defaultValue={ad.item}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="item-image"
                        placeholder="Your item Image URL"
                        defaultValue={ad.imageUrl}
                    />
                    <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Price in Euro"
                        defaultValue={ad.price}
                    />
                    <input
                        type="text"
                        name="availability"
                        id="availability"
                        placeholder="Availability Information"
                        defaultValue={ad.availability}
                    />
                    <input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Item Type"
                        defaultValue={ad.type}
                    />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="More About The Item"
                        rows="10"
                        cols="50"
                        defaultValue={ad.description}
                    ></textarea>
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}
