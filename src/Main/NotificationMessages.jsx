import { useEffect, useState } from "react";

const NotificationMessages = (props) => {
  const { className, name, message, redDots, tos, colors } = props;

  const [dot, setDot] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setDot(redDots);
  }, [redDots]);

  const inHover = () => {
    setIsHover(() => true);
  };

  const outHover = () => {
    setIsHover(() => false);
  };

  return (
    <p className={className}>
      <span className="Username">{name}</span> <span>{message}</span>{" "}
      <span
        className="To"
        style={{ color: isHover ? "hsl(219, 85%, 26%)" : colors }}
        onMouseOver={inHover}
        onMouseOut={outHover}
      >
        {tos}
      </span>{" "}
      <span
        className="RedDot"
        style={{ display: dot ? "inline-block" : "none" }}
      ></span>
    </p>
  );
};

export default NotificationMessages;
