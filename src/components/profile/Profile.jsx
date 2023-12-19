import css from './Profile.module.css'

export const Profile = props => {
    const { username, tag, location, avatar, stats: { followers, views, likes }, } = props;

return <div className={css.profile}>
    <div className={css.description}>
        <div className={css.imageContainer}>
            <img style={{
            padding: 16,
      }}
      src={avatar}
      alt="User avatar"
            class="avatar"
            width="108"
            height="108"
            />
        </div>
        <p className={css.p__name}>{username}</p>
        <p className={css.p__text}>@{tag}</p>
    <p className={css.p__text}>{location}</p>
  </div>

    <ul className={css.stats}>
        <li className={css.statsList}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
</div>
}
