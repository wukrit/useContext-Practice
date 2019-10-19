import React, {useEffect} from 'react'
import useDraft from './Hooks/useDraft'
import './App.css'

function App() {
  const [state, dispatch] = useDraft()
  const {draft} = state
  
  useEffect(() => dispatch({type: 'SET', payload: {draft: "Much Wow"}}), [dispatch])
  
  return (
    <>
      <p>{draft}</p>
    </>
  )
}

export default App