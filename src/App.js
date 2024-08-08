// import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header';
// import Footer from './mycomponents/Foter';
import Toods from './mycomponents/Toods';
import Foter from './mycomponents/Foter';


function App() {
  // const nuber =  [10,20,30,40]
   let todos=[
    {
      sno:1,
      name:"Aditi",
      Address:" Badlapur",
      age:20
    },
    {
      sno:2,
      name:"Farjana",
      Address:" Shrirampur",
      age:21
    },
    {
      sno:3,
      name:"Pradnya",
      Address:" Sambhaji nagar",
      age:25
    },
    {
      sno:4,
      name:"Dhanshri",
      Address:" Loi",
      age:22
    }
   ]
  return (
    
    <>
   
    <Header title="my todo list"/>
   <Toods todos={todos}/>
  
   <Foter/>
  
    </>
  );
}

export default App;
