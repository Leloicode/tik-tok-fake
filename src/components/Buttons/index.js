import classNames from "classnames/bind";
import styles from './Buttons.module.scss';
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Button({children , primary = false ,outline = false,small=false,padding,rightIcon, to ,border,hover,leftIcon, href , onClick , ...passprops}) {
    const props = {
        onClick,
        ...passprops,
    }
    let Prom = 'button';

    const classname = cx('wrraper',{
        padding: padding,
        primary: primary,
        outline: outline,
        small: small,
        border,
        hover
    });
    if (to) {
        props.to = to;
        Prom = Link
    }else if (href){
        props.href = href;
        props.target = "_blank"
        Prom = 'a'
    }
    return ( 
        <Prom className={classname} {...props} >
            {leftIcon && <span className={cx('icon-left')}>
                 {leftIcon}
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