import { BriefcaseBusiness, GitBranch, Mail, Send } from 'lucide-react'

const platformLinks = [
  'Web Development',
  'Mobile Apps',
  'AI Solutions',
  'Cloud Services',
  'Portfolio',
]

const resourceLinks = [
  'Documentation',
  'Help Center',
  'API Documentation',
  'System Status',
  'Contact Support',
]

const companyLinks = [
  'About Us',
  'Careers',
  'Blog',
  'Privacy Policy',
  'Terms of Service',
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-brand__title">Nocturnals Intellisoft</h3>
            <p className="footer-brand__copy">
              Empowering businesses with advanced software solutions, real-world
              expertise, and comprehensive digital transformation through
              cutting-edge technology.
            </p>

            <div className="footer-socials">
              <a href="#contact" className="footer-social" aria-label="LinkedIn">
                <BriefcaseBusiness className="h-4 w-4" />
              </a>
              <a href="#contact" className="footer-social" aria-label="Twitter">
                <Send className="h-4 w-4" />
              </a>
              <a href="#contact" className="footer-social" aria-label="GitHub">
                <GitBranch className="h-4 w-4" />
              </a>
              <a href="#contact" className="footer-social" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-column__title">Platform</h4>
            <ul className="footer-list">
              {platformLinks.map((item) => (
                <li key={item}>
                  <a href="#services" className="footer-list__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-column__title">Resources</h4>
            <ul className="footer-list">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <a href="#contact" className="footer-list__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-column__title">Company</h4>
            <ul className="footer-list">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#about" className="footer-list__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Nocturnals Intellisoft. All rights reserved.</p>
          <p>Built with heart for businesses worldwide</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
