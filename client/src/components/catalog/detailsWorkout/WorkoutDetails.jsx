import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import workoutService from "../../../service/service.js";
import { UserContext } from "../../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import "./WorkoutDetails.css";

export default function WorkoutDetails() {
    const { workoutId } = useParams();
    const [workout, setWorkout] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        workoutService
            .getOne(workoutId)
            .then(setWorkout)
            .catch((err) => console.error("Error loading workout:", err));
    }, [workoutId]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete that Workout?"
        );
        if (!confirmDelete) return;

        try {
            await workoutService.delete(workoutId);
            navigate("/catalog");
        } catch (err) {
            console.error("Грешка при изтриване:", err);
            alert("Неуспешно изтриване: " + err.message);
        }
    };

    if (!workout) return <p>Loading...</p>;

    return (
        <section className="details-section">
            <div className="container">
                <h2>{workout.type}</h2>
                <img
                    src={workout.imageUrl}
                    alt={workout.type}
                    style={{ maxWidth: "100%" }}
                />
                <p>
                    <strong>Date:</strong> {workout.date}
                </p>
                <p>
                    <strong>Time:</strong> {workout.time}
                </p>
                <p>
                    <strong>Trainer:</strong> {workout.coach}
                </p>
                <p>
                    <strong>Level:</strong> {workout.level}
                </p>
                <p>
                    <strong>Duration:</strong> {workout.duration}
                </p>
                <p>
                    <strong>Price:</strong> {workout.price} euro
                </p>
                {user && workout.owner === user._id && (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <Link
                            to={`/catalog/${workout._id}/edit`}
                            className="btn-back"
                        >
                            ✏️ Edit Workout
                        </Link>
                    </div>
                )}
                {user && workout.owner === user._id && (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="btn-back"
                        >
                            🗑️ Delete Workout
                        </button>
                    </div>
                )}
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <Link to="/catalog" className="btn-back">
                        ← Back to Workouts
                    </Link>
                </div>
            </div>
        </section>
    );
}
