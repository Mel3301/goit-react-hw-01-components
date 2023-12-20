import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (<li className={css.friendListLi} key={id}>
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
    </li>);
}