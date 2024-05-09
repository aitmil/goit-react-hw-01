import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.box}>
      <div className={css.card}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.text}>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
