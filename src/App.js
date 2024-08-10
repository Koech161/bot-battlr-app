
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes';
import { BotContextProvider } from './BotContextProvider';


const router = createBrowserRouter(routes)
function App() {
 

  return (
    <div className="App">
      <BotContextProvider>
      <RouterProvider router={router}/>
      </BotContextProvider>
    
    </div>
  );
}

export default App;
