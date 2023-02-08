import GitHubLogo from '../img/github_logo.png';
import TwitterLogo from '../img/twitter_logo.png'
import QiitaLogo from '../img/qiita_logo.png';

function Links() {
  return (
    <div className="w-full flex flex-col justify-center p-3">
      <div className="w-full mb-5">
        <p className="inline-block text-center text-2xl italic font-bold underline">リンク</p>
      </div>
      <div className="w-40 h-10 mb-5 rounded-lg hover:bg-indigo-100 active:bg-indigo-200">
        <a className="flex items-center justify-start" href="https://github.com/ngnmsn">
          <div className="w-10 h-10 mr-3">
            <img src={ GitHubLogo } alt="GitHub Logo"/>
          </div>
          <div className="w-20 h-10 flex items-center justify-start">
            <p className="inline-box text-center text-xl hover:underline underline-offset-4">@ngnmsn</p>
          </div>
        </a>
      </div>
      <div className="w-48 h-10 mb-5 rounded-lg hover:bg-indigo-100 active:bg-indigo-200">
        <a className="flex items-center justify-start" href="https://twitter.com/ngnmsn_dev">
          <div className="w-10 h-10 mr-3">
            <img src={ TwitterLogo } alt="Twitter Logo"/>
          </div>
          <div className="w-20 h-10 flex items-center justify-start">
            <p className="inline-box text-center text-xl hover:underline underline-offset-4">@ngnmsn_dev</p>
          </div>
        </a>
      </div>
      <div className="w-40 h-10 mb-5 rounded-lg hover:bg-indigo-100 active:bg-indigo-200">
        <a className="flex items-center justify-start" href="https://qiita.com/ngnmsn">
          <div className="w-10 h-10 mr-3">
            <img src={ QiitaLogo } alt="Qiia Logo"/>
          </div>
          <div className="w-20 h-10 flex items-center justify-start">
            <p className="inline-box text-center text-xl hover:underline underline-offset-4">@ngnmsn</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Links;