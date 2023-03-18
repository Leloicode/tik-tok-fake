import React,{useState} from 'react'
import VideoUser from './VideoUser'
import Styles from "./Home.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
export default function Home() {
  const datavideo = [
    {
      src: 'https://files.fullstack.edu.vn/f8-tiktok/videos/1586-63dff4781891e.mp4',
    },{
      src: 'https://files.fullstack.edu.vn/f8-tiktok/videos/1840-6404cb9b1af09.mp4',
    }
    ,{
      src: 'https://files.fullstack.edu.vn/f8-tiktok/videos/1814-63fde8a6a4a39.mp4',
    }
    ,{
      src: 'https://files.fullstack.edu.vn/f8-tiktok/videos/1831-6400d031994d4.mp4',
    },
    {
      src: 'https://files.fullstack.edu.vn/f8-tiktok/videos/569-6363e53ee5492.mp4'
    }
  ]
  const [valueVolume, setValueVolume] = useState(0);
  const [currenVolume, setCurrenVolume] = useState(undefined);

  
  return (
    <div className={cx('wrraper')}>
      {datavideo.map((data,index) =>(
          <VideoUser key={index} currenVolume={currenVolume} setCurrenVolume={setCurrenVolume} valueVolume={valueVolume} setValueVolume={setValueVolume}  src={data.src}></VideoUser>
      ))}
    </div>
  )
}
