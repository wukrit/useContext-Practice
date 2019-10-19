import {useReducer} from 'react'

const draftReducer = (state, {type, payload}) => {
    switch(type){
      case 'SET':
        return {...state, ...payload}
      default:
        throw new Error("Undefined dispatch action")
    } 
}

const useDraft = () => {
    const initialState = {
      draft: ""
    }
    const [draft, dispatch] = useReducer(draftReducer, initialState)
  
    return [draft, dispatch]
}

export default useDraft