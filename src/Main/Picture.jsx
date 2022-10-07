const Picture = ({ className, source, alt, display = "block" }) => {
  return (
    <div className={className} style={{ display: display }}>
      <img src={source} alt={alt} />
    </div>
  );
};

export default Picture;
