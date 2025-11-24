import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.card}>
            <div>
                <img src={image} alt="User avatar" className={css.avatar} />
                <p className={css.name}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>

            <ul className={css["stats-list"]}>
                {Object.keys(stats).map((statName) => {
                    return (
                        <li key={statName} className={css["stats-item"]}>
                            <span>{statName}</span>
                            <span className={css["stats-value"]}>{stats[statName]}</span>   
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
