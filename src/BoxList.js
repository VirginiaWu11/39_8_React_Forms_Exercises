import { useState } from "react";
import Box from "./Box";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_BOXES = [
    { id: uuid(), backgroundColor: "yellow", width: "100", height: "100" },
    { id: uuid(), backgroundColor: "blue", width: "150", height: "150" },
  ];
  const [boxes, setBoxes] = useState(INITIAL_BOXES);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  return (
    <div>
      <h1>Box List</h1>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ backgroundColor, width, height, id }) => (
          <Box
            backgroundColor={backgroundColor}
            width={parseInt(width)}
            height={parseInt(height)}
            key={id}
          />
        ))}
      </div>
    </div>
  );
  // map box
};

export default BoxList;
