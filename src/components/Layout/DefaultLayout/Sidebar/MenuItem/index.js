import { NavLink } from "react-router-dom";
import Button from "../../../../Buttons";
import Styles from './MenuItem.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(Styles)
function MenuItem({ title , to, leftIcon, ...props}) {
    return (
            <Button  leftIcon={leftIcon} {...props} >{title}</Button>
        
    );
}

export default MenuItem;