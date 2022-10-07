import NotificationCard from "./NotificationCard";

const MainNotification = ({ gettingData }) => {
  return (
    <div className="Notification">
      <NotificationCard
        className="Notification__Card"
        gettingData={gettingData}
      />
    </div>
  );
};

export default MainNotification;
