
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = ()=>{
    return(
<div>
    <ul className='flex'>
        <li className='mr-4 font-vazirmatn'>
            <NavLink to='/' >جلسات من</NavLink>
        </li>
        <li className='font-vazirmatn'>
            <NavLink to='/' >داشبورد</NavLink>
        </li>
    </ul>
</div>
    )
}

export default NavLinks;