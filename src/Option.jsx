import React from 'react'

const Option = ({ answer, question, dispatch }) => {
    const hasAnswered = answer !== null;
    console.log(answer)
    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button
                    className={`btn btn-option  ${answer !== null
                        ? index === question.correctOption
                            ? "correct"
                            : "wrong"
                        : ""
                        }`}
                    key={option}
                    disabled={hasAnswered}

                    onClick={() => dispatch({ type: "answered", payload: index })}
                >
                    {option}

                </button>
            ))}
        </div>
    )
}

export default Option
