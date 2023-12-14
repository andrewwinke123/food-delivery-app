import React from 'react'

const initialState = {foods: []}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload }
      default:
        return state
  }
}

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { foods } = state
  return <div>HomePage</div>
}
