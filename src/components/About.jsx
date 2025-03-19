import aboutImage from '../assets/images/profile-images/about.png'

const About = () => {
  const highlights = [
    { label: "Birthday", value: "16 January 2005" },
    { label: "Age", value: "20" },
    { label: "College", value: "SRM University" },
    { label: "Degree", value: "B.Tech" },
    { label: "Current Year", value: "3rd" },
    { label: "Current Semester", value: "6th" },
    { label: "Current CGPA", value: "9.68" },
    { label: "City", value: "Chennai, TamilNadu" }
  ]

  return (
    <section className="bg-col py-16 px-4 sm:px-6 lg:px-8 pt-20" id="about">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-rounded text-blue-400">ABOUT ME!</h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
        <div className="relative flex-1 -top-16 max-w-[300px] sm:max-w-[350px]">
          <div className="absolute inset-0 bg-blue-900 rounded-full blur-3xl opacity-20"></div>
          <img 
            src={aboutImage} 
            alt="About" 
            className="relative z-10 w-full"
          />
        </div>
        <div className="flex-1 min-w-[300px]">
          <p className="text-base sm:text-lg mb-8 leading-relaxed text-gray-300">
            Hello there! I'm currently immersed in my academic journey at SRM Institute of Science and Technology, where I'm pursuing my B.Tech degree. Balancing studies and a keen interest in Computer Science and Engineering, I'm navigating through third year in the fourth semester. Beyond the academic realm, I find joy in listening to music, playing cricket, reading books and exploring and visiting new places.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">Highlights:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-300">
                <span className="font-semibold text-blue-200">{item.label}:</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About 