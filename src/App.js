// import logo from './logo.svg';
import './output.css';
// import './App.css';
import Left from './components/Left';
import Feed from "./components/Feed";
import Right from "./components/Right";

function App() {
  return (
    <>
      <div className='container flex ml-2 md:ml-auto bg-black text-white md:justify-center'>
        <Left/>
        <Feed/>
        <Right/>
      </div>
    </>
  );
}

export default App;
