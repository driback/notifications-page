const PrivateMessage = ({ className, message, display }) => {
  return (
    <div className={className} style={{ display: display }}>
      <p>{message}</p>
    </div>
  );
};

export default PrivateMessage;
