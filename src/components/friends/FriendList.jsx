import css from './FriendList.module.css'

export const FriendList = ({ friend }) => {
  return (
    <ul className={css.friendList}>
      {friend.map(({ avatar, name, id, isOnline }) => (
        <li className={css.friendListLi} key={id}>
          <span
  className={css.onlineStatus}
  style={{
    backgroundColor: isOnline ? 'green' : 'red',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
  }}
></span>
          <img src={avatar} alt="User avatar" width="40" height="40" />
          <h2 className={css.nameText}>{name}</h2>
        </li>
      ))}
    </ul>
  );
};