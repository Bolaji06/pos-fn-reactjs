import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  axios.get('http://localhost:4000/users').then((res) => {
    console.log({ res });
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
