import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

const Menu = ({menu}) => {
    // const items = ['Main', 'Interesting', 'Favourite'];// если менюха одного уровня

    // const menu = [
    //     {text: 'Main', link: '#', submenu: []},
        
    //     {text: 'Interesting', link: '#', submenu: [
    //         {text: 'Artist', link: '#'},
    //         {text: 'Albums', link: '#'},
    //         {text: 'Songs', link: '#'},                        
    //     ]},
        
    //     {text: 'Favourite', link: '#', submenu: [
    //         {text: 'Artist', link: '#'},
    //         {text: 'Albums', link: '#'},
    //         {text: 'Songs', link: '#'},  
    //     ]},

    //     {text: 'Playlist', link: '#', submenu: []},
        
    //     {text: 'Pay', link: '#', submenu: []},
        

    // ]
    return (
       <ul>
           {menu.map(el => el.submenu.length === 0 ? 
           
           <li className='menu__item' key={el.text}>
                <a href={el.link}  className="menu__link">{el.text}</a>
            </li> : 

            <li className='menu__item' key={el.text}>
                <a href={el.link}  className="menu__link">
                    {el.text}
                </a>

                <ul className='sub-menu'>
                    {el.submenu.map(sub=> <li className='sub-menu__item' key={`${el.text} ${sub.text}`}>
                        <a href={sub.link} className="sub-menu__link" >{sub.text}</a>
                    </li>)}
                </ul>
            </li>)}
       </ul>
    )
}

Menu.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            submenu: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string,
                    link: PropTypes.string,
                })
            )
        })
    )
}


export default Menu;

