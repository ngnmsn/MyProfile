import './App.css';
import Header from './components/Header';
import Spacer from './components/Spacer';
import ProfilePicture from './components/ProfilePicture';
import SelfIntroduction from './components/SelfIntroduction';
import Biography from './components/Biography';
import Skill from './components/Skill';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <div className='w-full mt-16 flex justify-center'>
          <div className="w-main">
            <Spacer />
            <ProfilePicture />
            <Spacer />
            <SelfIntroduction />
            <Spacer />
            <Biography />
            <Spacer />
            <Skill />
            <Spacer />
            <Links />
            <Spacer />
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
