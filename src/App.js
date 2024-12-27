
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import MovieDialog from './components/MovieDialog';


function App() {
  return (
  <Provider store={appStore}>
    <Body />
    <MovieDialog />
  </Provider>
  );
}

export default App;
