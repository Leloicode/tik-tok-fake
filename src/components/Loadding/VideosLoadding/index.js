import Styles from './VideosLoadding.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(Styles)
function VideosLoadding() {
    return (
        <div className={cx('loadding-account')}>
            <div className={cx('avatar-loadding')} > </div>
            <div className={cx('body-loadding')}>
                <div className={cx('name-loadding')}></div>
                <div className={cx('nickname-loadding')}></div>
                <div className={cx('nickname-loadding')}></div>
                <div className={cx('video-loadding')}></div>
            </div>
            <div className={cx('btn-follow')}></div>
        </div>      
        
     );
}

export default VideosLoadding;