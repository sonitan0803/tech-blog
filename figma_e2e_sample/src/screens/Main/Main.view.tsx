import styles from "./Main.module.css";
import { useNavigate } from "react-router-dom";

export const MainView = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainText}>Main</div>
            <img
                className={styles.kappaImage}
                src="/img/youkai_kappa 1.png"
                alt="kappa"
            />
            <button
                className={styles.subButton}
                onClick={() => navigate("/sub")}
            >
                Sub
            </button>
        </div>
    );
};
