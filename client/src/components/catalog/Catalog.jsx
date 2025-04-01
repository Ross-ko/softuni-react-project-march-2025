import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import workoutService from "../../service/service";
import "./catalog.css"

export default function Catalog() {
    const [trainings, setTrainings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        workoutService
            .getAll()
            .then((result) => setTrainings(result))
            .catch((err) => {
                console.error("Error:", err);
                setTrainings([]);
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <p className="loading">Loading...</p>;

    return (
        <section className="catalog_section layout_padding">
            <div className="container">
                <h2 className="heading_container">Workouts</h2>

                {user && (
                    <div
                        className="create-btn-container"
                        style={{ marginBottom: "20px" }}
                    >
                        <Link to="/catalog/create" className="btn btn-primary">
                            Create Workout
                        </Link>
                    </div>
                )}

                {trainings.length === 0 ? (
                    <p className="no-trainings">No available classes.</p>
                ) : (
                    <ul className="training-list">
                        {trainings.map((item) => (
                            <li key={item._id} className="training-card">
                                <Link to={`/catalog/${item._id}`}>
                                    <img src={item.imageUrl} alt={item.type} />
                                    <h4>{item.type}</h4>
                                    <p>{item.date}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
