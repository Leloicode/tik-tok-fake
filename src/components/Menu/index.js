import Styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAustralSign } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; 
import Proper from '../Proper';
import MenuItem from './MenuItem';

const cx = classNames.bind(Styles)
function Menu({ children ,datas = []}) {
    const renderItem = () => {
        return datas.map((data,index) =>{
            return <MenuItem item={data} key={index}></MenuItem>
        })
    }
    return (  
        <>
        <Tippy
            // visible={true}
            interactive
            placement='bottom-end'
            render={attrs => (
            <div className={cx('option')} tabIndex="-1" {...attrs}>
                <Proper >
                    <div className={cx('menu-items')}>
                        {renderItem()}
                    </div>
                </Proper>
            </div>
            )}
                
        >
                    { children }
                    
        </Tippy>   
        </>
    );
}

export default Menu;