import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";



const store = configureStore({
  reducer: {
    auth:AuthSlice
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
