import NotificationCounter from "./NotificationCounter";

const HeaderNotification = ({ markAllRead, count }) => {
  return (
    <header className="Header">
      <h1 className="Header__Title">Notifications</h1>
      <NotificationCounter className={"Header__Counter"} count={count} />
      <button className="Header__Button" onClick={() => markAllRead()}>
        Mark all as read
      </button>
    </header>
  );
};

export default HeaderNotification;
