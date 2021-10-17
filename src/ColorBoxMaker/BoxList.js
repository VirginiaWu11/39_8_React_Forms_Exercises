import { useState } from "react";
import Box from "./Box";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_BOXES = [
    { id: uuid(), backgroundColor: "yellow", width: "50", height: "50" },
    { id: uuid(), backgroundColor: "blue", width: "70", height: "70" },
  ];
  const [boxes, setBoxes] = useState(INITIAL_BOXES);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const deleteBox = (boxId) => {
    setBoxes((boxes) => boxes.filter((b) => b.id !== boxId));
  };

  return (
    <div>
      <h1>Box List</h1>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ backgroundColor, width, height, id }) => (
          <Box
            deleteBox={() => deleteBox(id)}
            backgroundColor={backgroundColor}
            width={parseInt(width)}
            height={parseInt(height)}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
