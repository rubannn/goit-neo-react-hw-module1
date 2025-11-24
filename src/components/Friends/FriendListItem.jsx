import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClassName = isOnline ? css.online : css.offline;
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="72" />
      <p>{name}</p>
      <p className={statusClassName}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
