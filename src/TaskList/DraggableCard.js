import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "@material-ui/core/Card";

export const DraggableCard = props => {
  const { id, index, content } = props;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            style={{
              marginBottom: "10px",
              padding: "15px"
            }}
          >
            {content}
          </Card>
        </div>
      )}
    </Draggable>
  );
};
