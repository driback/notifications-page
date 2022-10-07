import { useEffect, useState } from "react";
import Picture from "./Picture";
import NotificationMessages from "./NotificationMessages";
import PrivateMessage from "./PrivateMessage";

const NotificationCard = ({ className, gettingData }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(() => gettingData);
  }, [gettingData]);

  return (
    <>
      {datas.map((data) => (
        <div
          className={className}
          key={data.id}
          style={{
            backgroundColor: data.unread ? "hsl(210, 60%, 98%)" : "white",
          }}
        >
          <Picture
            className="Notification__ProfilePicture"
            source={data.profilePicture}
            alt={data.name}
          />
          <div className="Notification__Details">
            <div>
              <NotificationMessages
                className="Notification__Messages"
                name={data.name}
                message={data.message}
                redDots={data.unread}
                tos={data?.to?.postText ?? data?.to?.group}
                colors={
                  data?.to?.postText
                    ? "hsl(219, 12%, 42%)"
                    : "hsl(219, 85%, 26%)"
                }
              />
              <Picture
                className="Notification__PicturePost"
                source={data?.to?.postPicture}
                display={data?.to?.postPicture ?? "none"}
              />
            </div>
            <span className="Notification__Time">{data.time}</span>
            <PrivateMessage
              className="Notification__PrivateMessage"
              message={data?.privateChat ?? "fallback string"}
              display={data?.privateChat ?? "none"}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default NotificationCard;
