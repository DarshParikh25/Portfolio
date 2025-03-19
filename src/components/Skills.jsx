import htmlIcon from '../assets/images/skills-icons/html.png'
import cssIcon from '../assets/images/skills-icons/css.png'
import jsIcon from '../assets/images/skills-icons/js.png'
import gitIcon from '../assets/images/skills-icons/git.png'
import cIcon from '../assets/images/skills-icons/C.png'
import pythonIcon from '../assets/images/skills-icons/python.png'
import nodejsIcon from '../assets/images/skills-icons/nodejs.png'
import reactjsIcon from '../assets/images/skills-icons/reactjs.png'
import tsIcon from '../assets/images/skills-icons/typescript.png'
import cppIcon from '../assets/images/skills-icons/cpp.png'
import javaIcon from '../assets/images/skills-icons/java.png'
import tailwindcssIcon from '../assets/images/skills-icons/tailwindcss.png'

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      percentage: 95,
      icon: htmlIcon
    },
    {
      name: "CSS",
      percentage: 90,
      icon: cssIcon
    },
    {
      name: "JavaScript",
      percentage: 90,
      icon: jsIcon,
      isRounded: true
    },
    {
      name: "Git",
      percentage: 80,
      icon: gitIcon
    },
    {
      name: "C",
      percentage: 75,
      icon: cIcon
    },
    {
      name: "Python",
      percentage: 90,
      icon: pythonIcon
    },
    {
      name: "ReactJS",
      percentage: 75,
      icon: reactjsIcon
    },
    {
      name: "NodeJS",
      percentage: 40,
      icon: nodejsIcon
    },
    {
      name: "TypeScript",
      percentage: 60,
      icon: tsIcon
    },
    {
      name: "C++",
      percentage: 50,
      icon: cppIcon
    },
    {
      name: "Java",
      percentage: 50,
      icon: javaIcon
    },
    {
      name: "TailwindCSS",
      percentage: 90,
      icon: tailwindcssIcon
    }
  ]

  return (
    <section className="bg-col pb-16 pt-10 px-8" id="skills">
      <h2 className="text-4xl font-bold text-center mb-20 mt-8 font-rounded text-blue-400">My Skills</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-12 h-12 ${skill.isRounded ? 'rounded-full' : ''}`}
              />
              <h3 className="text-xl font-bold text-blue-400">{skill.name}</h3>
            </div>
            <p className="text-gray-300 mb-4">{skill.description}</p>
            <div className="relative h-4 bg-gray-700 rounded-full">
              <div
                className="absolute h-full bg-blue-600 rounded-full transition-all duration-1000"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <span className="block text-right mt-2 text-gray-300">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills 