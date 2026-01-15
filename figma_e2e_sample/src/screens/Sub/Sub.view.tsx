import styles from "./Sub.module.css";
import { useNavigate } from "react-router-dom";

export const SubView = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.subText}>Sub</div>
            <img
                className={styles.kappaImage}
                src="/img/youkai_kappa 1.png"
                alt="kappa"
            />
            <button className={styles.mainButton} onClick={() => navigate("/")}>
                Main
            </button>
        </div>
    );
};
