import Styles from './Video.module.scss'
import classNames from 'classnames/bind'
import { IconPauseVideo, IconPlayVideo, IconVolumIsMusic, IconVolumIsNotMusic } from '../../../components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { useRef ,useState,useEffect} from 'react';
import { useInView } from "react-intersection-observer";
const cx = classNames.bind(Styles)
function Video({src, valueVolume, setValueVolume,setCurrenVolume, currenVolume}) {
    const videoRef = useRef([]);
    const [videoSrc, setVideoSrc] = useState(src);
    const [isPlaying, setIsPlaying] = useState(false);
    // follow the video
    const { ref, inView } = useInView({
        threshold: 0.589
    });

  useEffect(() => {
    if (inView) {
        if (!isPlaying) {
            videoRef.current.volume = valueVolume;
            videoRef.current.play();
            setIsPlaying(true);
        }
    } else if (!inView) {
        if (isPlaying) {
            videoRef.current.pause();
            videoRef.current.volume = valueVolume;
            setIsPlaying(false);
        }
    }

  }, [inView]);
  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };
 const handleOnChangeVolume = (event) => {
    const value = event.target.value;
    if (value != 0) {
        setCurrenVolume(value);
    }
    setValueVolume(value);
    videoRef.current.volume = value;

 }
 const handleOnMusic  = () =>{
    if (currenVolume) {
        setValueVolume(currenVolume);
        videoRef.current.volume = currenVolume;
    }
    else{
        setValueVolume(0.5);
        videoRef.current.volume = 0.5;
    }
    
 }
 const handleOffMusic  = () =>{
    setValueVolume(0);
    videoRef.current.volume = 0;
 }
    return (  
        <div className={cx('wrraper')}>
            <div className={cx('video-user')} ref={ref} >
                <img className={cx('img-video')} src='https://files.fullstack.edu.vn/f8-tiktok/videos/1586-63dff478a044c.jpg'/>
                <video 
                    ref={videoRef}
                    autoPlay={isPlaying}
                    muted={valueVolume === 0 ? true : false}
                    loop 
                    
                    className={cx('video')}>
                    <source  src={videoSrc} type="video/mp4" />
                </video>
                <div className={cx('controls-video')}>
                    <p className={cx('report-btn')}><FontAwesomeIcon icon={faFlag}/><span>Báo cáo</span></p>
                    {isPlaying ? (<button className={cx('btn')} onClick={()=>{pauseVideo()}}><IconPauseVideo width='20px' height='20px' /></button>) : (<button className={cx('btn')} onClick={()=>{playVideo()}}><IconPlayVideo width='20px' height='20px' /></button>)}
                    <div className={cx('volume-control')}>

                        {valueVolume != 0 && <button className={cx('volum-btn')} onClick={()=>{handleOffMusic()}}><IconVolumIsMusic width='24px' height='24px' /></button>}
                        {valueVolume == 0 && <button className={cx('volum-btn')} onClick={()=>{handleOnMusic()}}><IconVolumIsNotMusic width='24px' height='24px' /></button>}
                        <div className={cx('custom-volume')}>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={valueVolume}
                                onChange={handleOnChangeVolume}
                                className={cx('range-control')}
                                />
                        </div>
                    </div>
                </div>  
            </div>
            <div className={cx('action-item')}>
                {/* <button className={cx('btn-love')}><FontAwesomeIcon icon={faHeart}/></button> */}
            </div>
           
        </div>
    );
}

export default Video;