import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
