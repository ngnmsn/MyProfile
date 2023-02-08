import JavaLogo from '../img/java_logo.png';
import JakartaEELogo from '../img/jakarta_ee_logo.png';
import SpringBootLogo from '../img/spring_boot_logo.png';
import PythonLogo from '../img/python_logo.png';
import TypeScriptLogo from '../img/typescript_logo.png';
import ReactLogo from '../img/react_logo.png';
import HTMLLogo from '../img/html_logo.png';
import CSSLogo from '../img/css_logo.png';
import AWSLogo from '../img/aws_logo.png';
import GitLogo from '../img/git_logo.png';

function Skill() {
  return (
    <div className="w-full flex flex-col justify-center p-3">
      <div className="w-full mb-5">
        <p className="inline-block text-center text-2xl italic font-bold underline">スキル</p>
      </div>
      <div className="w-full h-hull mb-3">
        <div className="w-full h-full mb-3 flex items-center justify-start">
          <div className="w-12 h-12 mr-1">
              <img src={ JavaLogo } alt="Java Logo" />
          </div>
          <div className="h-full mr-4">
            <p className="inline-block text-2xl">Java</p>
          </div>
          <div className="h-full pt-[0.2rem]">
            <p className="inline-block text-xl">4年</p>
          </div>
        </div>
        <div className="w-full h-full pl-12">
          <div className="w-full h-full mb-3 flex items-center justify-start">
            <div className="w-12 h-12 mr-1">
              <img src={ JakartaEELogo } alt="Jakarta EE Logo" />
            </div>
            <div className="h-full mr-4">
              <p className="inline-block text-2xl">Jakarta EE</p>
            </div>
            <div className="h-full pt-[0.2rem]">
              <p className="inline-block text-xl">4年</p>
            </div>
          </div>
          <div className="w-full h-full mb-3 flex items-center justify-start">
            <div className="w-12 h-12 flex items-center justify-center mr-1">
              <img src={ SpringBootLogo } alt="Spring Boot Logo" />
            </div>
            <div className="h-full mr-4">
              <p className="inline-block text-2xl">Spring Boot</p>
            </div>
            <div className="h-full pt-[0.2rem]">
              <p className="inline-block text-xl">1年未満</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-hull mb-3">
        <div className="w-full h-full mb-3 flex items-center justify-start">
          <div className="w-12 h-12 flex items-center justify-center mr-1">
            <img src={ PythonLogo } alt="Python Logo" />
          </div>
          <div className="h-full mr-4">
            <p className="inline-block text-2xl">Python</p>
          </div>
          <div className="h-full pt-[0.2rem]">
            <p className="inline-block text-xl">2年</p>
          </div>
        </div>
      </div>
      <div className="w-full h-hull mb-3">
        <div className="w-full h-full mb-3 flex items-center justify-start">
          <div className="w-12 h-12 flex items-center justify-center mr-1">
            <img src={ TypeScriptLogo } alt="TypeScript Logo" />
          </div>
          <div className="h-full mr-4">
            <p className="inline-block text-2xl">TypeScript</p>
          </div>
          <div className="h-full pt-[0.2rem]">
            <p className="inline-block text-xl">1年未満</p>
          </div>
        </div>
        <div className="w-full h-full pl-12">
          <div className="w-full h-full mb-3 flex items-center justify-start">
            <div className="w-12 h-12 flex items-center justify-center mr-1">
              <img src={ ReactLogo } alt="React Logo" />
            </div>
            <div className="h-full mr-4">
              <p className="inline-block text-2xl">React</p>
            </div>
            <div className="h-full pt-[0.2rem]">
              <p className="inline-block text-xl">1年未満</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-hull mb-3">
        <div className="w-full h-full mb-3 flex items-center justify-start">
          <div className="w-12 h-12 flex items-center justify-center mr-1">
            <img src={ HTMLLogo } alt="HTML Logo" />
          </div>
          <div className="h-full mr-4">
            <p className="inline-block text-2xl">HTML</p>
          </div>
          <div className="h-full pt-[0.2rem]">
            <p className="inline-block text-xl">1年</p>
          </div>
        </div>
      </div>
      <div className="w-full h-hull mb-3">
        <div className="w-full h-full mb-3 flex items-center justify-start">
          <div className="w-12 h-12 flex items-center justify-center mr-1">
            <img src={ CSSLogo } alt="CSS Logo" />
          </div>
          <div className="h-full mr-4">
            <p className="inline-block text-2xl">CSS</p>
          </div>
          <div className="h-full pt-[0.2rem]">
            <p className="inline-block text-xl">1年</p>
          </div>
        </div>
      </div>
      <div className="w-full h-hull mb-3">
        <div className="w-full h-full mb-3 flex items-center justify-start">
          <div className="w-12 h-12 flex items-center justify-center mr-1">
            <img src={ AWSLogo } alt="AWS Logo" />
          </div>
          <div className="h-full mr-4">
            <p className="inline-block text-2xl">AWS</p>
          </div>
          <div className="h-full pt-[0.2rem]">
            <p className="inline-block text-xl">2年</p>
          </div>
        </div>
      </div>
      <div className="w-full h-hull">
        <div className="w-full h-full flex items-center justify-start">
          <div className="w-12 h-12 flex items-center justify-center mr-1">
            <img src={ GitLogo } alt="Git Logo" />
          </div>
          <div className="h-full mr-4">
            <p className="inline-block text-2xl">Git</p>
          </div>
          <div className="h-full pt-[0.2rem]">
            <p className="inline-block text-xl">4年</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Skill;