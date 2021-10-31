import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Todo from "./components/todo/todo";



class App extends React.Component {
constructor (props){
super(props);

}
render(){

return (
< >
<Header/>;
<Todo/>
<Footer/>;

</>);
}
}
export default App ;
