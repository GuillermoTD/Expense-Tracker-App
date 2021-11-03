import AddTransaction from './componentes/AddTransaction/AddTransaction';
import Header from './componentes/Header/Header';
import InComeExpenses from './componentes/InComeExpenses/InComeExpenses';
import Balance from './componentes/Balance/Balance';
import LayoutContainer from './componentes/LayoutContainer/LayoutContainer'
import TransactionList from './componentes/Transaction/TransactionList';
import { GlobalProvider } from './store/GlobalState'

function App() {

  return (
    <GlobalProvider>

      <Header />


      <LayoutContainer>
        <div className="Side1">
          <Balance />
          <InComeExpenses />
          <AddTransaction />
        </div>
        <div className="Side2">
          <TransactionList />

        </div>


      </LayoutContainer>
    </GlobalProvider>
  );
}

export default App;
