const ButtonComponent = (props) => {
  return (
    <div>
      <button style={props.style}>{props.text}</button>
    </div>
  );
};

export default ButtonComponent;
