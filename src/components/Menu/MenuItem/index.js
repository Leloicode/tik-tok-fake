import Button from "../../Buttons";
import Styles from './MenuItem.module.scss'
import classNames from "classnames/bind";
import { memo } from "react";
const cx = classNames.bind(Styles);
function MenuItem({ item ,onClick,className}) {
    const props = {

    }
    if(item.href){
        props.href = item.href
    }
    else if(item.to){
        props.to = item.to
    }
    return (
        <Button {...props} hover onClick={onClick} rightIcon={item.iconright && item.iconright} leftIcon={item.iconleft && item.iconleft}>{item.title && item.title}</Button>

     );
}

export default memo(MenuItem);