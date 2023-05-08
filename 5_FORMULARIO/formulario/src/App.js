
import './App.css';
import MyForms from './components/MyForms';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForms user={{name: "josias", email: "josias@gmail.com", bio: "sou advogado", role: "admin"}} />
    </div>
  );
}

export default App;
