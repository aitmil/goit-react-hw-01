import css from "./App.module.css";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile />
      <FriendList />
      <TransactionHistory />
    </>
  );
}
