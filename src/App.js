import "./App.css";
import React from "react";
import Profile from "./components/Profile";
import userData from "./data/user.json";
import Statistics from "./components/Statistics";
import userStatistics from "./data/statistics.json";
import FriendList from "./components/Friend-list";
import myFriendList from "./data/friendList.json"
import TransactionHistory from "./components/Transaction-history";
import transactionData from "./data/transactionHistory.json";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Profile
          username={userData.username}
          avatar={userData.avatar}
          location={userData.location}
          tag={userData.tag}
          stats={userData.stats}
        />
        <Statistics statistics={userStatistics} />
        <FriendList friendList={myFriendList} />
        <TransactionHistory transactionHistory={transactionData}/>
      </React.Fragment>
    );
  }
}
export default App;
