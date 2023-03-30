import Styles from './LoaddingOneVideo.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(Styles)
function LoaddingOneVideo({classNames}) {
    return (
        <div className={cx('loadding-video',classNames)}>
            <div className={cx('block-loadding')} > </div>
            {/* <div className={cx('block-blue')}></div> */}
        </div>      
        
     );
}

export default LoaddingOneVideo;