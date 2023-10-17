import Header from './components/header/Header';
import GetFox from './hooks/getfox/GetFox';
import './styles/reset.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <GetFox/>
    </div>
  );
}

export default App;
