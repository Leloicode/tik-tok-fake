import Styles from './AccountLoadding.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(Styles)
function LoaddingAccount() {
    return (
        <div className={cx('loadding-account')}>
            <div className={cx('avatar-loadding')} > </div>
            <div className={cx('body-loadding')}>
                <div className={cx('name-loadding')}></div>
                <div className={cx('nickname-loadding')}></div>
            </div>
        </div>      
        
     );
}

export default LoaddingAccount;