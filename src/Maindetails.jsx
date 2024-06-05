import React from 'react'
import Option from './Option'

const Maindetails = ({ length, index, questions, dispatch, points, answer }) => {
    return (
        <>
            <p>There are {length} total Number of Questions </p>
            Question Number 0{index + 1}
            <hr />
            {questions.map((question, i) => {
                if (i == index)
                    return (

                        <>
                            <h4 className=' m-2'>{question.question}</h4>
                            <Option question={question} dispatch={dispatch} index={index} answer={answer}></Option>

                            <p className='text-3xl'>Points {points}</p>
                            <button className={`${answer == null ? 'hidden' : 'flex'}`} onClick={() => dispatch({ type: 'inc_question' })} >Next</button>

                        </>
                    )
            })}
        </>
    )
}

export default Maindetails
