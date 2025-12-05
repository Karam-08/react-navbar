const NavBar = ({navLinks = [] }) =>{
    const navItems = navLinks.map((link) =>{
        return <li><a key = {link.id} href = {link.href}>{link.label}</a></li>
    })
    function menuToggle(){
        let element = document.getElementById("toggle-hidden")
        element.classList.toggle("toggle-hidden")
    }
    return(
        <nav>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Burger_King_logo_%281999%E2%80%932020%29.svg/1186px-Burger_King_logo_%281999%E2%80%932020%29.svg.png" alt="B.K."/>
            <button id="menuToggle" onClick={menuToggle}>Menu</button>
            <ul className="toggle-hidden">
                {navItems}
            </ul>
        </nav>
    )
}

export default NavBar