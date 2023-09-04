const ImageComponent = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} style={{ maxWidth: '50%', marginTop: '10px' }} />
    </div>
  );
};

export default ImageComponent;
