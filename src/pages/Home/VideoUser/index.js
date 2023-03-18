import { Link } from "react-router-dom";
import Button from "../../../components/Buttons";
import Video from "../Video";
import { IconMusicVideo } from "../../../components/Icons";
import Styles from "./VideoUser.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
function VideoUser({src,setValueVolume ,valueVolume, currenVolume, setCurrenVolume}) {
  const tags = ["#masterlauriel", "#top1lauriel",];
  return (
      <div className={cx("warrap-video")}>
        <div className={cx("header")}>
          <div className={cx("info-video-account")}>
            <img className={cx('avatar-user')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2b70ed7cc08a3f2de24577b03fe05548~c5_100x100.jpeg?x-expires=1679108400&x-signature=KwaDk6II4et%2BpmrzA%2F6yE%2B3ZtJE%3D"></img>
            <div className={cx("info-account")}>
              <Link className={cx("name")}>
                <h3>masterlauriel.vn</h3>
                <span>Master👑Lauriel</span>
              </Link>
              <p className={cx('decription')}>
                Animtion Button in JavaScript &nbsp;
                {tags.map((tag,index) => (
                  <Link key={index}>{tag}&nbsp;</Link>
                ))}
              </p>
              <Link className={cx("music-video")}>
                <IconMusicVideo className={cx("icon-music")} />{" "}
                <span>nhạc nền - Master⚜️Lauriel - Master👑Lauriel</span>
              </Link>
              <div className={cx("video-content")}>
                  <Video currenVolume={currenVolume} setCurrenVolume={setCurrenVolume} valueVolume={valueVolume} setValueVolume={setValueVolume} src={src} />
              </div>
            </div>
            <Button outline small>
              Follow
            </Button>
          </div>
        </div>
        <hr></hr>
      </div>
  );
}

export default VideoUser;
