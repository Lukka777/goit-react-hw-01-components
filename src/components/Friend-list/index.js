import React from "react";

class FriendList extends React.Component {
  render() {
    return (
      <ul className="friends">
    {this.props.friendList.map((elem, index) =>(
      <li className="item" key={index}>
        <span className="status" >
          {this.props.isOnline ? "online" : "offline"}
        </span>
        <img
          className="avatar" 
          src={this.props.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{this.props.name} </p>
      </li>
    ))}
    </ul>
    );
  }
}
export default FriendList;
