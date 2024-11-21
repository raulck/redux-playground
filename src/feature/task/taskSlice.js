import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded: (state, action) => {
      const { id, text } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.push({
        id,
        text,
        //   completed: false
      });
    },
    taskDeleted: (state, action) => {
      console.log("del");
      console.log("state", state.tasks);
      console.log("act", action);
      const { id } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed ??
      return state.filter((task) => task.id !== id);
    },
  },
});

console.log("t in slice", taskSlice);

console.log("tasks slice", taskSlice);

// Action creators are generated for each case reducer function
export const { taskAdded, taskDeleted } = taskSlice.actions;

export default taskSlice.reducer;
