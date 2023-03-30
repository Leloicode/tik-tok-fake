import Styles from './DiscoverLoadding.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(Styles)
function DiscoverLoadding() {
    return (
        <div className={cx('loadding-discover')}>
            <div className={cx('body-loadding')}>
            </div>
        </div>      
        
     );
}

export default DiscoverLoadding;