import { Profile } from "./profile/Profile";
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics.jsx';
import data from './statistics/data.json';
import { FriendList } from './friends/FriendList.jsx';
import friends from './friends/friends.json';
import { TransactionHistory } from "./transactions/TransactionHistory.jsx";
import items from './transactions/transactions.json';

export const App = () => {
 return (
    <>
    <Profile
          username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}  
     />
     <Statistics title="Upload stats" stats={data} />
     <FriendList  friend={friends}/>
     <TransactionHistory item={items} />
    </>  
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };