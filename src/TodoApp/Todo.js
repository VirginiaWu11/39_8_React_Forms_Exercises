const Box = ({ task, deleteTodo }) => {
  return (
    <>
      <li>
        {task} <button onClick={deleteTodo}>X</button>
      </li>
    </>
  );
};

export default Box;
