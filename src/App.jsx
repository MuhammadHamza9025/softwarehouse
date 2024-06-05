import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Loader from './Loader'
import Nain from './Nain'
import Error from './Error'
import Maindetails from './Maindetails'

function App() {

  const initialstate = {
    questions: [],
    answer: null,
    index: 0,
    status: 'loading',
    points: 0
  }
  const reducer = (state, action) => {
    switch (action.type) {

      case 'ready':
        return { ...state, questions: action.payload, status: 'ready' }

      case 'error':
        return { ...state, status: 'error' }
      case 'inc_question':
        return { ...state, index: state.index + 1, answer: null }
      case 'answered':
        const question = state.questions[state.index]

        return {
          ...state,
          answer: action.payload,
          points: action.payload == question.correctOption ? state.points + 10 : state.points
        }

      default:
        throw new Error("UN Known")
    }

  }

  const [state, dispatch] = useReducer(reducer, initialstate);


  const ftechdata = async () => {
    const fetchd = await fetch('http://localhost:9000/questions').then((res) => res.json()).then(data => dispatch({ type: 'ready', payload: data })).catch((err) => dispatch({ type: 'error', payload: err }))
  }

  useEffect(() => {
    ftechdata()
  }, [])

  const length = state.questions.length;
  return (
    <>
      <Header />

      {state.status == 'loading' && <Loader></Loader>}
      {state.status == 'error' && <Error />}
      {state.status == 'ready' && <Nain>
        <Maindetails length={length} index={state.index} answer={state.answer} points={state.points} questions={state.questions} dispatch={dispatch}></Maindetails>
      </Nain>}


    </>
  )
}

export default App
