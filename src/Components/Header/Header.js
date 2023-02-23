import './Header.css';
import { NavLink } from "react-router-dom";
import logo from '../../assets/icons8-soccer-goal-100-red.png'

function Header() {
  return (
    <div className="Header">
        <NavLink className='home-nav' to='/'>
            <img src={logo} className="logo" alt="logo" />
            <h1 className='title'>NYT Sports</h1>
        </NavLink>
        <div className='header-right'>
            <a className='source' href={'https://developer.nytimes.com/docs/top-stories-product/1/overview'} target="_blank">API Source</a>
            <a className='github' href={'https://github.com/EvanSSwanson'} target="_blank">GitHub</a>
        </div>
    </div>
  );
}

export default Header;