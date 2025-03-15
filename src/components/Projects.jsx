import tributePage from '../assets/images/project-images/tribute-page.png'
import todoList from '../assets/images/project-images/to-do-list.png'
import loginAuth from '../assets/images/project-images/login-authentication-page.png'
import calculator from '../assets/images/project-images/calculator.png'

const Projects = () => {
  const projects = [
    {
      title: "Tribute Page",
      description: "It is crafted for the tribute to The Great Writer Sir Williams Shakespeare.",
      image: tributePage,
      link: "https://williams-shakespeare-tribute.netlify.app",
      position: "top"
    },
    {
      title: "A Basic To-Do List",
      description: "It contains functions like add, edit, save and delete different tasks.",
      image: todoList,
      link: "https://to-du-list.netlify.app",
      position: "top"
    },
    {
      title: "Login Authentication Page",
      description: "It contains sign up and log in forms which toggles as per user's need.",
      image: loginAuth,
      link: "https://log-in-authentication.netlify.app",
      position: "bottom"
    },
    {
      title: "Calculator",
      description: "It performs various arithmetic operations such as addition, subtraction, multiplication, division and percentage calculation.",
      image: calculator,
      link: "https://math-calcy.netlify.app",
      position: "bottom"
    }
  ]

  return (
    <section className="bg-col py-16 px-8" id="projects">
      <h2 className="text-4xl font-bold text-center mb-[4.5rem] font-rounded text-blue-400">PROJECTS!</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
        {projects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              project.position === 'top' ? 'translate-y-full group-hover:translate-y-0' : '-translate-y-full group-hover:translate-y-0'
            }`}>
              <h3 className="text-blue-400 text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 text-center mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 