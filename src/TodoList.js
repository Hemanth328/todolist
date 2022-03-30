import React from 'react'

function TodoList({ todolst, deletingtodo }) {
    return (
        <div>
            {todolst.map((todo, index) => (
                <div key={index}>
                    <h3>{todo}
                        <button onClick={() => deletingtodo(index)}>Delete</button>
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default TodoList;