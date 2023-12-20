import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friend }) => {
  return (
    <ul className={css.friendList}>
      {friend.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};