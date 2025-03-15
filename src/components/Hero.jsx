import { useEffect, useState } from 'react'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import homeImage from '../assets/images/profile-images/home.png'

const Hero = () => {
  const [typedText, setTypedText] = useState('De')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)
  const words = ["Developer", "Designer"]
  const typingSpeed = 200
  const erasingSpeed = 150
  const delayBetweenWords = 3000

  // Typing effect logic
  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      if (typedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.substring(0, typedText.length + 1));
        }, typingSpeed);
      } else if (typedText === currentWord) {
        setIsWaiting(true);
      }
    } else {
      if (typedText.length > 2) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.substring(0, typedText.length - 1));
        }, erasingSpeed);
      } else if (typedText === 'De') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex, isWaiting]);

  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=100089862125821", icon: <Facebook className="hover:text-blue-400" />, name: "Facebook" },
    { href: "https://github.com/DarshParikh25", icon: <Github className="hover:text-gray-400" />, name: "GitHub" },
    { href: "https://www.instagram.com/darshparikh0408/", icon: <Instagram className="hover:text-pink-400" />, name: "Instagram" },
    { href: "https://www.linkedin.com/in/darsh-parikh-66538a251/", icon: <Linkedin className="hover:text-blue-400" />, name: "LinkedIn" },
    { href: "https://twitter.com/DarshParikh25", icon: <Twitter className="hover:text-blue-400" />, name: "Twitter" }
  ]

  return (
    <section className="bg-col min-h-screen flex items-center justify-center px-8 py-16 relative overflow-hidden" id="home">
      <div className="max-w-[75rem] w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 font-rounded text-blue-400">Darsh Parikh!</h1>
          <p className="text-2xl sm:text-3xl mb-8 text-gray-300">
            <span>I'm a </span>
            <span className="text-blue-400">{typedText}</span>
            <span className="blinking text-blue-400">|</span>
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:bg-gray-800 transition-all duration-300 bg-gray-700 rounded-full p-3 text-gray-200 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
            {/* Main glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-900/20 rounded-full blur-2xl transform rotate-12 scale-90"></div>
            
            {/* Accent glows */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            
            {/* Animated pulse effect */}
            <div className="absolute inset-8 bg-gradient-to-tr from-blue-500/10 to-purple-600/10 rounded-full animate-pulse"></div>
            
            {/* Subtle rings */}
            <div className="absolute inset-0 border border-blue-400/10 rounded-full"></div>
            <div className="absolute inset-4 border border-blue-500/10 rounded-full"></div>
            <div className="absolute inset-8 border border-indigo-500/10 rounded-full"></div>
          </div>
          
          <img 
            src={homeImage} 
            alt="Profile" 
            className="relative z-10 max-w-[350px] w-full drop-shadow-2xl"
          />
          
          <a
            href="https://drive.google.com/file/d/1-Syq7_iOHMyzDVSdO2o2qAM_od-SeshD/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute ml-5 min-w-[225px] z-10 bottom-0 transform translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero 