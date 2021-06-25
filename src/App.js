
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const [Names,setName]=useState([])
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then (data=>setName(data))
  
}, [])
// const name=[{name:'Amit',age:29},{name:'Sayem',age:23},{name:'Joy',age:34},{name:'Rakib',age:12},{name:'Tamim'}]  
  return (
    <div className="App">
      <header className="App-header">
        {
          Names.map(nn=><Name name={nn.name} age={nn.age}></Name>)
        }   
        <MoviCounter></MoviCounter>
      </header>
    </div>
  );
}
function MoviCounter(){
  const [count, setCount] = useState(0);
  const handleClick=()=>setCount(count+1);
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Numbers OF Movie :{count}</h3>

      <MoviDisplay movie={count}></MoviDisplay>
      <MoviDisplay movie={count+10}></MoviDisplay>
      <MoviDisplay movie={count}></MoviDisplay>
    </div>
  )
}


function MoviDisplay(props){
  return(
    <div><h2>Movies I Have acted :{props.movie} </h2></div>
  )
}

function Name(props){
  const style={
    border: '2px solid purple',
    margin:'5px',
    padding:'10px',
  }
  return(
    <div style={style}>
     <h2>Name : {props.name}</h2> 
     <h3>Age :{props.age}</h3>
    </div>
  )
}
export default App;
