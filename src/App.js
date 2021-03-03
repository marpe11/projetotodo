import './App.css';
import { useState, useEffect } from 'react'; 
import reactDOM from 'react-dom'
//importante componentes
import Form from "./components/Form";
import Todolist from "./components/Todolist";



function App() {
  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState(["All"]);
  const [filteredTodos, setFilteredTodos] = useState ([]);

//carregar todos local
  useEffect (() =>{
    getLocalTodos() 
  },[]);
  

  //useeffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos(); 
  },[todos,status]);
  
//funcao
const filterHandler = () => {
  switch(status){
    case "completed":
      setFilteredTodos (todos.filter(todo => todo.completed === true));
      break;
    case "uncompleted":
      setFilteredTodos (todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
};
//salvar no local

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos")); 
      //setTodos(todoLocal);
    setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
 
    <header>
      
   
      <h1>Marcus Todo's </h1><br></br>

      
  
     
    </header>
    <center><img src="https://i1.wp.com/blog.sensedata.com.br/wp-content/uploads/2019/11/cropped-LOGO-VERTICAL-PNG-2.png?w=445&ssl=1" width="240" height="120" /> </center>
    
    <Form 
      inputText={inputText} 
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      setStatus={setStatus}
     
      />
    <Todolist 
      filteredTodos={filteredTodos}
      todos={todos}
      setTodos={setTodos}
        /> 
    </div>
  );
}

export default App;
