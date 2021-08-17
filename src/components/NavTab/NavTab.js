import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab">
      <ul class="navtab__links">
        <li className="navtab__link-container"><a href="#aboutproject" target="_self" className="navtab__link">О проекте</a></li>
        <li className="navtab__link-container"><a href="#techs" target="_self" className="navtab__link">Технологии</a></li>
        <li className="navtab__link-container"><a href="#aboutme" target="_self" className="navtab__link">Студент</a></li>
      </ul>
    </section>
  );
}
  
export default NavTab;