import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            const current = navItems.find(item => {
                const element = document.getElementById(item.toLowerCase())
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 150 && rect.bottom >= 150
                }
                return false
            })
            if (current) {
                setActiveSection(current.toLowerCase())
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (item) => {
        setActiveSection(item.toLowerCase())
        setIsMobileMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 w-full transition-all duration-500 z-50 
            ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-gray-900/20' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="profile z-50">
                        <a 
                            href="#" 
                            className="font-dancing text-4xl text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 inline-block"
                        >
                            Darsh.
                        </a>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex gap-12">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => handleNavClick(item)}
                                        className={`font-rounded relative py-2 px-1 transition-all duration-300 text-lg ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400' } after:content-[''] after:absolute after:left-0 after:bottom-0  after:w-full after:h-0.5 after:bg-blue-400  after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${activeSection === item.toLowerCase() ? 'after:scale-x-100' : ''} hover:after:scale-x-100`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden z-50 text-gray-300 hover:text-blue-400 transition-colors p-2 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Navigation */}
            <div className={`lg:hidden fixed inset-0 bg-gray-900/98 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="h-full flex items-center justify-center">
                    <ul className="space-y-8">
                        {navItems.map((item) => (
                            <li key={item} className="text-center">
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => handleNavClick(item)}
                                    className={`font-rounded text-2xl transition-all duration-300
                                        ${activeSection === item.toLowerCase() 
                                            ? 'text-blue-400' 
                                            : 'text-gray-300 hover:text-blue-400'
                                        }
                                        hover:scale-110 inline-block`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header 