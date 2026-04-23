// Navigation links config per section
const CG_LINKS = [
  { href: '#nosotros', id: 'nosotros', label: 'NOSOTROS' },
  { href: '#mision-vision-cg', id: 'mision-vision-cg', label: 'MISIÓN Y VISIÓN' },
  { href: '#servicios', id: 'servicios', label: 'SERVICIOS' },
  { href: '#proyectos', id: 'proyectos', label: 'PROYECTOS' },
  { href: '#contacto', id: 'contacto', label: 'CONTACTO' },
];

const DP_LINKS = [
  { href: '#nosotros', id: 'nosotros', label: 'NOSOTROS' },
  { href: '#mision-vision', id: 'mision-vision', label: 'MISIÓN Y VISIÓN' },
  { href: '#servicios', id: 'servicios', label: 'SERVICIOS' },
  { href: '#proyectos-dp', id: 'proyectos-dp', label: 'PROYECTOS' },
  { href: '#contacto', id: 'contacto', label: 'CONTACTO' },
];

const NavLinkList = ({ links, onNavigate, onSwitch, activeSection, linkClass, switchClass }) => (
  <>
    {links.map(link => (
      <a
        key={link.id}
        href={link.href}
        onClick={(e) => { e.preventDefault(); onNavigate(link.id); }}
        className={linkClass}
      >
        {link.label}
      </a>
    ))}
    {activeSection === 'compugrafic' ? (
      <button
        onClick={() => onSwitch('dp')}
        className={`${linkClass} ${switchClass}`}
        data-testid="switch-to-dp"
      >
        D+P →
      </button>
    ) : (
      <button
        onClick={() => onSwitch('compugrafic')}
        className={`${linkClass} ${switchClass}`}
        data-testid="switch-to-compugrafic"
      >
        ← COMPUGRAFIC
      </button>
    )}
  </>
);

export const Header = ({ activeSection, onSwitchSection, scrolled, menuOpen, onToggleMenu, onNavigate }) => {
  const links = activeSection === 'compugrafic' ? CG_LINKS : DP_LINKS;

  return (
    <>
      <header
        className={`header ${scrolled ? 'scrolled' : ''} ${activeSection === 'dp' ? 'dp-mode' : ''}`}
        data-testid="header"
      >
        <div className="logo-toggle">
          <button
            className={`logo-btn ${activeSection === 'compugrafic' ? 'logo-active-cg' : ''}`}
            onClick={() => onSwitchSection('compugrafic')}
            data-testid="logo-compugrafic"
          >
            compugrafic
          </button>
          <span className="logo-divider">|</span>
          <button
            className={`logo-btn ${activeSection === 'dp' ? 'logo-active-dp' : ''}`}
            onClick={() => onSwitchSection('dp')}
            data-testid="logo-dp"
          >
            d+p
          </button>
        </div>

        <button
          className="menu-toggle"
          onClick={onToggleMenu}
          data-testid="menu-toggle"
        >
          <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <NavLinkList
            links={links}
            onNavigate={onNavigate}
            onSwitch={onSwitchSection}
            activeSection={activeSection}
            linkClass="nav-link"
            switchClass={activeSection === 'compugrafic' ? 'nav-switch-dp' : 'nav-switch-cg'}
          />
        </nav>
      </header>

      {menuOpen && (
        <div className={`mobile-menu-overlay ${activeSection === 'dp' ? 'dp-mode' : ''}`} data-testid="mobile-menu-overlay">
          <button className="mobile-menu-close" onClick={onToggleMenu}>✕</button>
          <NavLinkList
            links={links}
            onNavigate={onNavigate}
            onSwitch={onSwitchSection}
            activeSection={activeSection}
            linkClass="mobile-menu-link"
            switchClass={activeSection === 'compugrafic' ? 'mobile-switch-dp' : 'mobile-switch-cg'}
          />
        </div>
      )}
    </>
  );
};
