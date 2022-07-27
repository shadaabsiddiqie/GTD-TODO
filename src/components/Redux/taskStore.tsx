import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskSlice'

export const taskStore = configureStore({
  reducer: {
    taskUpdate: taskReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof taskStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof taskStore.dispatch