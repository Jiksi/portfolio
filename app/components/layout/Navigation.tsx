export function Navigation() {
    return (
        <nav className="nav animate-fade-up">
            <div className="nav-brand">
                <img src="/public/logo.svg" alt="Logo" className="size-14" />
            </div>
            <div className="nav-links">
                <a href="#blog" className="nav-link">
                    Blog
                </a>
                <a href="#work" className="nav-link">
                    Works
                </a>
                <a href="#contact" className="nav-link">
                    Contact
                </a>
            </div>
        </nav>
    );
}
