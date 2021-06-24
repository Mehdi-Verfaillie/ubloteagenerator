import './styles/reset.css';
import './styles/font.css';
import MatchaTea from './components/MatchaTea/MatchaTea';
import Menu from './components/Menu/Menu';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <MatchaTea />
      <Menu />
    </div>
  );
};

export default App;
