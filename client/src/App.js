import './App.css';
import Header from './Components/Header';
import Transactions from './Components/Transactions';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
      <Header />
      <Transactions />
      </GlobalProvider>
    </div>
  );
}

export default App;
