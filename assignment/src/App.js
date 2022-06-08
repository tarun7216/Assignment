
import './App.css';
import Search from './components/page1/Search';
import TableForm from './components/page2/TableForm';


const App =() => {
  return (
    <div className='App'>
      <h3 style={{color:"red"}}>Employee Selection App</h3>
      <Search />
      {/* <TableForm /> */}
    </div>
  );
}

export default App;
