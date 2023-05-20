
import './App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Leftbox from './components/Leftbox';
import Middlebox from './components/Middlebox';
import Rightbox from './components/Rightbox';


function App() {
  return (
    <div className="w-screen h-screen bg-[#F5F6FA] flex flex-col md:flex-row">
          <Navbar />
      <div className='md:flex-row flex-grow'>
          <Topbar />
        <div className='flex flex-col md:flex-row flex-grow'>

          <Leftbox />
          <Middlebox />
          <Rightbox />

        </div>
      </div>
      
    </div>
  );
}

export default App;
