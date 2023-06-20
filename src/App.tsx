import {ThemeContextProvider} from "./theme";

import Todo from "todo";

import './App.css';

const App = () => {
  return (
      <ThemeContextProvider>
          <div className='App'>
              <Todo />
          </div>
      </ThemeContextProvider>
  );
}

export default App;
