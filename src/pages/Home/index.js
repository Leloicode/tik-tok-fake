import React,{useState,useEffect, memo} from 'react'
import VideoUser from './VideoUser'
import Cookies from 'js-cookie';
import Styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { Waypoint } from "react-waypoint";
import * as request from './../../utils/request'
import VideosLoadding from '../../components/Loadding/VideosLoadding';
import LoaddingOneVideo from '../../components/Loadding/LoaddingOneVideo';
const cx = classNames.bind(Styles);
function Home() {
  const [valueVolume, setValueVolume] = useState(0);
  const [currenVolume, setCurrenVolume] = useState(undefined);
  // so page Api
  const [page, setPage] = useState(0);
  // mang danh sach videos
  const [listVideos, setListVideos] = useState([]);
  // chua page random tu 1 den 10
  const [randomizedNumbers, setRandomizedNumbers] = useState([]);
  const [isLoaddingDataVideos, setIsLoaddingDataVideos] = useState(false);
  useEffect(() => {
    Cookies.set('myCookie', 'myValue', { 
      sameSite: 'None',
      secure: true 
    });
  }, []);
  useEffect(() => {
    setIsLoaddingDataVideos(true)
    if (page === 0) {
      generateRandomPage();
      return;
    }
      const fetchApiVideo = async () =>{
          try {

            const response = await request.get('videos',{
              params:{
                  type: 'for-you',
                  page:  page
              }
            });
            selectRandomItems(response.data);
            setIsLoaddingDataVideos(false);

          } catch (error) {
            setIsLoaddingDataVideos(true);
          }
          


      }
      fetchApiVideo();
      // eslint-disable-next-line
  }, [page]);
  //random number page
  const generateRandomPage = () => {
      if (randomizedNumbers.length === 20) {
        if (page < 10) {
          setPage(10 + 1);
        }else if (page >= 10) {
          if (page === 23) {
            setPage(0);
            setRandomizedNumbers([]);
            return;
          }
          setPage(page=> page + 1);
        }
        return;
      }
      
      let number = Math.floor(Math.random() * 20) + 1;
      while (randomizedNumbers.includes(number)) {
        number = Math.floor(Math.random() * 20) + 1;
      }
  
      let newRandomizedNumbers = [...randomizedNumbers, number];
      setRandomizedNumbers(newRandomizedNumbers);
      setPage(number);
  };

  // sáo trộn data
  const selectRandomItems = (dataOld) => {
    const numItemsToSelect = 15;
    const selectedIndices = [];
    while (selectedIndices.length < numItemsToSelect) {
      const randomIndex = Math.floor(Math.random() * dataOld.length);
      if (!selectedIndices.includes(randomIndex)) {
        selectedIndices.push(randomIndex);
      }
    }
    const dataNew = selectedIndices.map((index) => dataOld[index]);
    setListVideos([...listVideos,...dataNew])
  };
  const handleEnterVideo = () => {
    generateRandomPage();
  }
  return (
    <div className={cx('wrraper')}>
      
      {isLoaddingDataVideos && <VideosLoadding />}
      {listVideos.map((data,index) => ( 
        <div key={index}>
          <VideoUser  currenVolume={currenVolume} setCurrenVolume={setCurrenVolume} valueVolume={valueVolume} setValueVolume={setValueVolume}  dataVideoItem={data}/>
           {index === listVideos.length - 1 && <Waypoint onEnter={handleEnterVideo} />}
        </div>
      ))}
      {isLoaddingDataVideos && <LoaddingOneVideo classNames={cx('loadding-list-videos')} /> }
    </div>
  )
}
export default memo(Home);