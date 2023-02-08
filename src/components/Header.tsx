import Icon from '../img/Icon_48x48.png';

function Header() {
  return (
    <div className="w-full h-16 bg-blue py-2 px-5 mb-0 fixed top-0 left-0 right-0 flex items-center justify-center">
      <div className="w-header h-full flex items-center">
        <div className="w-8 h-8 mr-4 flex items-center justify-center">
          <img src={ Icon } alt="Site Icon" />
        </div>
        <div className="w-full h-16 flex items-center justify-start">
          <p className="inline-block text-center text-white text-xl">ngnmsn's Profile</p>
        </div>
      </div>
    </div>
  );
}

export default Header;