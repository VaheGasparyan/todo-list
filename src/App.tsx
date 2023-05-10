import Todo from "todo";

import './App.css';
import {useState} from "react";

const App = () => {
    const [theme, setTheme] = useState('dark');

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
