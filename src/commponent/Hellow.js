import World from "./World";
import styles from "./Hellow.module.css"

export default function Hellow() {
    return (
        <div>
            <h1 style={
                {
                    color: "red",
                    borderRight: "12px solid #000",
                    marginBottom: "50px",
                    opacity: 0.5
                }
            }

            >Hellow</h1>
            <div className={styles.box}>Hellow</div>
        </div>
    )
}