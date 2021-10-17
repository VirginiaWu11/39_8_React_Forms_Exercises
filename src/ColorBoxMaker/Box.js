const Box = ({ backgroundColor, width, height, deleteBox }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
        }}
      ></div>
      <button onClick={deleteBox}>X</button>
    </>
  );
};

export default Box;
