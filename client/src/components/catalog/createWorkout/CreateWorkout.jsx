import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import workoutService from "../../../service/service";
import "./createWorkout.css";


export default function CreateWorkout() {
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

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await workoutService.create({
        ...formData,
        owner: user._id,
      });
      navigate("/catalog");
    } catch (err) {
      console.error("Error creating workout:", err);
      alert("Error creating workout.");
    }
  };

  return (
    <div className="create-form-container">
      <h2>Create workout</h2>
      <form onSubmit={handleSubmit} className="create-form">
        <input
          type="text"
          name="imageUrl"
          placeholder="Pic (URL)"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Workout type (example: Crossfit)"
          value={formData.type}
          onChange={handleChange}
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
          placeholder="Trainer"
          value={formData.coach}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (euro)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (example: 1h 30m)"
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <select name="level" value={formData.level} onChange={handleChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
