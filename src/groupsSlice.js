import { createSlice,current } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
  name: "groups",
  initialState: {
    groups: [
      {
        title: "Learn Python programming",
        author: {
          firstName: "Miguel",
          surname: "De Cervantes",
        },
      },
      {
        title: "Negotiations Study Group",
        author: {
          firstName: "John",
          surname: "Bunyan",
        },
      },
      {
        title: "Jazz Improv Study Group",
        author: {
          firstName: "Emily",
          surname: "Brontë",
        },
      },
      {
        title: "Business & Music Specialization",
        author: {
          firstName: "Jonathan",
          surname: "Swift",
        },
      },
      {
        title: "Peer to Peer Songwriting",
        author: {
          firstName: "Henry",
          surname: "Fielding",
        },
      },
      {
        title: "Writing your first novel",
        author: {
          firstName: "Samuel",
          surname: "Richardson",
        },
      },
      {
        title: "Playing Guitar Peer Study Group",
        author: {
          firstName: "Laurence",
          surname: "Sterne",
        },
      },
      {
        title: "Meditation Discussion Group",
        author: {
          firstName: "Jane",
          surname: "Austen",
        },
      },
    ],
  },
  reducers: {
    update(state,action) {
      console.log(action.payload)
      state.groups = {title: action.payload}
      //console.log(current(state.groups))
    }
  },
});

export const { update } = groupSlice.actions

export default groupSlice.reducer;
