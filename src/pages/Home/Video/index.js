import Styles from './Video.module.scss'
import classNames from 'classnames/bind'
import { IconPauseVideo, IconPlayVideo, IconVolumIsMusic, IconVolumIsNotMusic } from '../../../components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { useRef ,useState,useEffect, memo} from 'react';
import { useInView } from "react-intersection-observer";
import LoaddingOneVideo from '../../../components/Loadding/LoaddingOneVideo';
const cx = classNames.bind(Styles)
function Video({dataVideoItem = {}, valueVolume, setValueVolume,setCurrenVolume, currenVolume}) {
    const videoRef = useRef([]);
    const srcAvatarNull = 'data:image/jpeg;base64,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'
    const [isLoaddingVideo, setIsLoaddingVideo] = useState(true);
    // const [videoSrc, setVideoSrc] = useState(src);
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
// eslint-disable-next-line
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
    const value = +event.target.value;
    if (value !== 0) {
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
                <video 
                    ref={videoRef}
                    autoPlay={isPlaying}
                    muted={valueVolume === 0 ? true : false}
                    loop 
                    onLoadedData={() => {setIsLoaddingVideo(true)}}
                    onCanPlayThrough={() => { setIsLoaddingVideo(false)}}
                    className={cx('video')}>
                    <source  src={dataVideoItem.file_url} type="video/mp4" />
                </video>
                <img className={cx('img-video')} alt='video' onError={(e)=>{e.target.src = srcAvatarNull}} src={dataVideoItem.thumb_url}/>
                {isLoaddingVideo && <LoaddingOneVideo />}
            </div>
            {/* <div className={cx('controls-video')}> */}
            <button className={cx('report-btn')}><FontAwesomeIcon icon={faFlag}/><span>Báo cáo</span></button>
            {isPlaying ? (<button className={cx('btn')} onClick={()=>{pauseVideo()}}><IconPauseVideo width='20px' height='20px' /></button>) : (<button className={cx('btn')} onClick={()=>{playVideo()}}><IconPlayVideo width='20px' height='20px' /></button>)}
            <div className={cx('volume-control')}>

                {valueVolume !== 0 && <button className={cx('volum-btn')} onClick={()=>{handleOffMusic()}}><IconVolumIsMusic width='24px' height='24px' /></button>}
                {valueVolume === 0 && <button className={cx('volum-btn')} onClick={()=>{handleOnMusic()}}><IconVolumIsNotMusic width='24px' height='24px' /></button>}
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
        // </div>
    );
}

export default memo(Video);