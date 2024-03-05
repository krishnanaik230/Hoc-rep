
import './App.css';
import Parent from './Callbackfunc/Parent';
import ParentComp from './Conditional rendering/ParentComp';
import ParentalMem from './MemoCond/ParentalMem';
import Parentsec from './condsecond/Parentsec';
// import Student1 from './Student1';
// import Student2 from './Student2';


function App() {
  return (
    <div className="App">
     {/* <h1>Hello</h1>
      <div className='container' >
        <Student1 />
      </div>
      <div className='container' >
        <Student2 />
      </div> */}
      
      <Parent />
      <ParentComp/>
      <Parentsec/>
      <ParentalMem />
    </div>
  );
}

export default App;
