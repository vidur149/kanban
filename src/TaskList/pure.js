import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./TodoForm";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { DraggableCard } from "./DraggableCard";

const TasksPure = props => {
  const { tasks, handleDragEnd } = props;

  return (
    <main style={{ padding: "20px" }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <TodoForm />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" gutterBottom align="center">
              TODO
            </Typography>
            <Droppable droppableId="todo">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? "#0652DD"
                      : "white",
                    height: "80vh"
                  }}
                  {...provided.droppableProps}
                >
                  {Object.keys(tasks).map(
                    (task, index) =>
                      tasks[task].status === "todo" && (
                        <DraggableCard
                          key={task}
                          id={task}
                          index={index}
                          content={tasks[task].title}
                        />
                      )
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" gutterBottom align="center">
              DOING
            </Typography>
            <Droppable droppableId="doing">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? "#C4E538"
                      : "white",
                    height: "80vh"
                  }}
                  {...provided.droppableProps}
                >
                  {Object.keys(tasks).map(
                    (task, index) =>
                      tasks[task].status === "doing" && (
                        <DraggableCard
                          key={task}
                          id={task}
                          index={index}
                          content={tasks[task].title}
                        />
                      )
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" gutterBottom align="center">
              DONE
            </Typography>
            <Droppable droppableId="done">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? "#B53471"
                      : "white",
                    height: "80vh"
                  }}
                  {...provided.droppableProps}
                >
                  {Object.keys(tasks).map(
                    (task, index) =>
                      tasks[task].status === "done" && (
                        <DraggableCard
                          key={task}
                          id={task}
                          index={index}
                          content={tasks[task].title}
                        />
                      )
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
        </Grid>
      </DragDropContext>
    </main>
  );
};

export default TasksPure;
