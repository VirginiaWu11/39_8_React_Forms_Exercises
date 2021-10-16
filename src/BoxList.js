import { useState } from "react";
import Box from "./Box";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const INITIAL_BOXES = [
    { id: uuid(), backgroundColor: "yellow", width: 100, height: 100 },
    { id: uuid(), backgroundColor: "blue", width: 150, height: 150 },
  ];
  const [boxes, setBoxes] = useState(INITIAL_BOXES);
  return (
    <div>
      <h1>Box List</h1>
      <div>
        {boxes.map(({ backgroundColor, width, height }) => (
          <Box
            backgroundColor={backgroundColor}
            width={width}
            height={height}
          />
        ))}
      </div>
    </div>
  );
  // map box
};

export default BoxList;
