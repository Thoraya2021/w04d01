import react from "react";
export default class Todoitem extends react.Component {
    
        constructor(props) {
            super(props);
        }
        render(){
         return(

            <div>

<li className="todolist">


    <h3 className="todoname">{this.props.todo.name}</h3>

    <h3 className="todoclose" onClick={()=> this.props.handleDelete(this.props.todo.id)}></h3>
</li>



            </div>
         )




         }
        }