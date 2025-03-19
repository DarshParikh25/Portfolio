import { useEffect, useState } from 'react'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import homeImage from '../assets/images/profile-images/home.png'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [delta, setDelta] = useState(200 - Math.random() * 100)

  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=100089862125821", icon: <Facebook className="hover:text-blue-400" />, name: "Facebook" },
    { href: "https://github.com/DarshParikh25", icon: <Github className="hover:text-gray-400" />, name: "GitHub" },
    { href: "https://www.instagram.com/darshparikh0408/", icon: <Instagram className="hover:text-pink-400" />, name: "Instagram" },
    { href: "https://www.linkedin.com/in/darsh-parikh-66538a251/", icon: <Linkedin className="hover:text-blue-400" />, name: "LinkedIn" },
    { href: "https://twitter.com/DarshParikh25", icon: <Twitter className="hover:text-blue-400" />, name: "Twitter" }
  ]

  const words = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']

  useEffect(() => {
    let ticker = setInterval(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.substring(0, prev.length - 1))
        setDelta(100)
      } else {
        setCurrentText(prev => words[currentIndex].substring(0, prev.length + 1))
        setDelta(200 - Math.random() * 100)
      }

      if (!isDeleting && currentText === words[currentIndex]) {
        setDelta(2000)
        setIsDeleting(true)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex(prev => (prev + 1) % words.length)
        setDelta(500)
      }
    }, delta)

    return () => clearInterval(ticker)
  }, [currentText, isDeleting, currentIndex, delta])

  useEffect(() => {
    setTypedText(currentText)
  }, [currentText])

  return (
    <section className="bg-col min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden" id="home">
      <div className="max-w-[75rem] w-full mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left lg:mt-0 mt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-rounded text-blue-400">Darsh Parikh!</h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-300">
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
                className="hover:bg-gray-800 transition-all duration-300 bg-gray-700 rounded-full p-2 sm:p-3 text-gray-200 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px]">
            {/* Main glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-900/20 rounded-full blur-2xl transform rotate-12 scale-90"></div>
            
            {/* Accent glows */}
            <div className="absolute -top-10 -right-10 w-24 sm:w-36 h-24 sm:h-36 bg-indigo-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -left-10 w-24 sm:w-36 h-24 sm:h-36 bg-blue-400/20 rounded-full blur-xl"></div>
            
            {/* Animated pulse effect */}
            <div className="absolute inset-8 bg-gradient-to-tr from-blue-500/10 to-purple-600/10 rounded-full animate-pulse"></div>
            
            {/* Subtle rings */}
            <div className="absolute inset-0 border-2 border-blue-400/10 rounded-full"></div>
            <div className="absolute inset-4 border-2 border-blue-500/10 rounded-full"></div>
            <div className="absolute inset-8 border-2 border-indigo-500/10 rounded-full"></div>
          </div>
          
          <img 
            src={homeImage} 
            alt="Profile" 
            className="relative z-10 w-[250px] sm:w-[300px] lg:w-[350px] drop-shadow-2xl"
          />
          
          <a
            href="https://drive.google.com/file/d/1-Syq7_iOHMyzDVSdO2o2qAM_od-SeshD/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute ml-5 min-w-[200px] sm:min-w-[225px] z-10 bottom-0 transform translate-y-1/2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-center text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero 