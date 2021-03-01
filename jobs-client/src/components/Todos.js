import React, { Component } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

class Todos extends Component {

    componentDidMount(){
        this.props.onGet()
        console.log("component mounted")
    }

    render() {
            
        return(
            <>
                {this.props.todos.map((todo, index) => {
                    return(
                        <>
                        <div className="todo-row" key={index.uniqueId}>
                            <li key={index.uniqueId}>{todo.name}</li>
                            <div className="icons" key={index.uniqueId}>
                                <RiCloseCircleLine key={todo.id} onClick={() => this.props.onDelete(todo.id)} className='delete-icon'/>
                            </div>
                        </div>
                        </>
                    )
                })}
            </>
            )
                
        }
    }


export default Todos