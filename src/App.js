
import Pages from './Pages/Page'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
