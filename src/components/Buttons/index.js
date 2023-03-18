import classNames from "classnames/bind";
import styles from './Buttons.module.scss';
import { Link, NavLink } from "react-router-dom";
const cx = classNames.bind(styles);
function Button({children , primary = false, navlink ,className,outline = false,small=false,padding,rightIcon, to ,border,hover,leftIcon, leftIcon1, href , onClick , ...passprops}) {
    const props = {
        onClick,
        ...passprops,
    }
    let Prom = 'button';

    const classname = {
        padding: padding,
        primary: primary,
        outline: outline,
        small: small,
        border,
        hover
    };
    
    if (to) {
        props.to = to;
        if (navlink) {
            Prom = NavLink
            // classname.active = true;
        }
        else{
            Prom = Link
        }
    }else if (href){
        props.href = href;
        props.target = "_blank"
        Prom = 'a'
    }
    return ( 
        <Prom className={cx('wrraper',classname,className)} {...props} >
            {<span className={cx('icon-left')}>
                 {leftIcon && leftIcon}{leftIcon1 && leftIcon1}
            </span>
            }
            <span className={cx('title-button')}>
                {children}
            </span>
            {rightIcon && <span className={cx('icon-right','custom')}>
                {rightIcon} 
            </span>
            }   
        </Prom>

     );
}

export default Button;