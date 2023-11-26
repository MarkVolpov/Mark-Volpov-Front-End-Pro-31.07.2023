import './Form.css'
import { useState } from "react"

const Form = (props) => {
    const [value, setValue] = useState("")
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                props.putTodo(value);
                setValue("")
            }}>
                <input type="text" placeholder="Enter your todo" className="input" value={value} onChange={e => setValue(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Form