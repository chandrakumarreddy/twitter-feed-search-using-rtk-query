#### Folder structure

/src
  index.tsx: Entry point file that renders the React component tree
/app
  store.ts: store setup
  rootReducer.ts: root reducer (optional)
  App.tsx: root React component
  /common: hooks, generic components, utils, etc
  /features: contains all "feature folders"
  /todos: a single feature folder
  todosSlice.ts: Redux reducer logic and associated actions
  Todos.tsx: a React component
  /app contains app-wide setup and layout that depends on all the other folders.

/common 
  contains truly generic and reusable utilities and components.

/features 
  has folders that contain all functionality related to a specific feature. In this example, todosSlice.ts is a "duck"-style file that contains a call to RTK's createSlice() function, and exports the slice reducer and action creators.