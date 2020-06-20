// initial state object
export const initialState = [
    {
      todo: 'Study for sprint challenge',
      completed: false,
      id: 100
    },
    {
      todo: 'Read TK for Redux lesson',
      completed: false,
      id: 101
    },
    {
      todo: 'Work on side project',
      completed: false,
      id: 102
    }
]

export const todoReducer = (state, action) => {
    switch(action.type) {
      case "ADD_TODO":
        return [...state, action.payload]
      case "TOGGLE_COMPLETED":
        return state.map((item) => {
          return item.id === action.payload ? {...item, completed: !item.completed} : item
        })
      case "CLEAR_COMPLETED" :
        return state.filter((item) => !item.completed)
      default:
        return state;
    }
      
}