
import './App.css';

import Firstpage from './components/project/Firstpage';
import Secondpage from './components/project/Secondpage';


const App =() => {
  return (
    <div className='App'>
      <h3 style={{color:"red"}}>Employee Selection App</h3>
    
      <Firstpage />
      
    </div>
  );
}

export default App;
