import './App.css';
import Login from './Components/Login';
import DataProvider from './constant/DataProvider';

function App() {
  return (
    <div style={{marginTop: 64}}>
      <DataProvider  >
      <Login/>
      </DataProvider>
    </div>
  );
}

export default App;
