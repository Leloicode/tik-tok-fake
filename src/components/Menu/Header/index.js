import classNames from 'classnames/bind'
import Styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Buttons';

const cx = classNames.bind(Styles)
function Header({ title,onBack }) {
   
    return (  
        <div className={cx('wrraper-header-menu')}>
            <Button onClick={onBack}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></Button>
            <h4 className={cx('title-header')}>{title}</h4>
        </div>
    );
}

export default Header;