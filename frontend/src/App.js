import './App.css';
import Header from './Components/Header';
import SignIn from'./Components/SignIn';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="app">
      <Header/>
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default App;
