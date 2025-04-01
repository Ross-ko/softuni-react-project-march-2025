import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import workoutService from "../../../service/service.js";

export default function EditWorkout() {
    const { workoutId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        imageUrl: "",
        type: "",
        date: "",
        time: "",
        coach: "",
        price: "",
        duration: "",
        level: "beginner",
    });

    useEffect(() => {
        workoutService.getOne(workoutId).then(setFormData);
    }, [workoutId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((state) => ({ ...state, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            imageUrl: formData.imageUrl.trim(),
            type: formData.type.trim(),
            date: formData.date,
            time: formData.time,
            coach: formData.coach.trim(),
            price: formData.price.trim(),
            duration: formData.duration.trim(),
            level: formData.level,
            owner: formData.owner,
        };

        try {
            await workoutService.edit(workoutId, dataToSend);
            navigate(`/catalog/${workoutId}`);
        } catch (err) {
            console.error("Error:", err);
            alert("Error: " + err.message);
        }
    };

    return (
        <div className="create-form-container">
            <h2>Edit Workout</h2>
            <form onSubmit={handleSubmit} className="create-form">
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="Pic (URL)"
                    required
                />
                <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Workout type (example: Crossfit)"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="coach"
                    value={formData.coach}
                    onChange={handleChange}
                    placeholder="Trainer"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />
                <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Duration"
                    required
                />
                <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}
