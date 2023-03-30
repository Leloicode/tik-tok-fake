import { Link } from "react-router-dom";
import Button from "../../../components/Buttons";
import Video from "../Video";
import { IconComment, IconMusicVideo, IconShare } from "../../../components/Icons";
import Styles from "./VideoUser.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";
import MenuOption from "../MenuOptionShare";
const cx = classNames.bind(Styles);
function VideoUser({dataVideoItem = {},setValueVolume ,valueVolume, currenVolume, setCurrenVolume}) {
  const tags = ["#xuhuong", "#xuhuong2023",];
  const datauser = dataVideoItem.user;
  const fullName = datauser.first_name && datauser.last_name ? datauser.first_name + ' ' + datauser.last_name : datauser.nickname;
  const srcAvatarNull = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBMREBIQEBUQDxAQEhAQEA8QEBAQFRIWFhUVFRUYHSggGBolGxUTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDysZFRktNys3LSs3KysrKystLS03KysrKy03KysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EADUQAAIBAQYDBQcDBQEAAAAAAAABAhEDBAUhMVESQXEyYYGRoSJCUrHB0fBicuEGExSCkvH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APuIAAAAAAAAIbpmVl8xiMcoe2960ivuBZ1NO8YnZxy4uJ7Rz9dDn7zfZz7UnT4VlHyNcuC4tscfuRS75OvojUtMUtX79P2pI0gEZZXib1nJ/wCzMbk92QCianuNvNaTkv8AaRjAG5Z4lar32+tGbVljkvejF9KplSCDprvi1nLV8L2kqeuhvKSemfQ4szXe9Th2ZNd3LyGK68FRdMaTytFw/qWniuRawmnmmmnzTqiD0AAAAAAAAAAAAAAAAa97vcbNVk+iWrMGJYirNUWcnotu9nOWtq5S4pOrZRs33EJ2mr4Y8or67moQAgACgAAAAAAAAAAAAAGxdL5OzfsvLnF6M1wB1Vxv8bVZZNaxevgbZxkJNOqbTWaa5F/heJqfszylvyl/JFWgAIAAAAAAAABoYniCs1RZyei272Z77elZxcn0S3ZyttauUnKTq3+UKInNttt1bdW3zPIBUAAAAAAAAAAAAAAAAAAAAAAlEAg6HCMR41wT7S0fxL7locXGTTqsms0+86fDL7/cj+qNFJfUVW6ACAAABDZJV45euGHAtZ690eYFVid7/uTquzHKK+viaYBUAAUAAAAAAAEAA9xspPSMn0jJlHgGR2ElrGS6xZjAAkgAAAAAAAAAZ7neXZzUl4rdczASB2NlaKSUlmmqo9lJgN61s3+6P1RdmVAABDOUv9447SUuVaL9q0/O8vsXtuGylvL2V46+lTmCwSQAVAAAAAAABBJYXXDG85+ytlq+uxsYfclFcUu09F8P8m+BisrtCPZil36t+LMhIIoY7WxjLtRT+fmZABVXnC+dn/y/oytkqZPI6c1L9c1NVWUlo9+5l0UQJao6PkQVAAAAAAAAGSwtXGSktYup11laKSUlo0muhxp0OAW1bNx5wfo819SVVoACCi/qG1zjDZOT8cl8mU5u4vOttLupHyNIqAAKAAAAAAb+FXfilxPSPqzQL/D7Phs49/tPqyUbBIBFAAAAAAAAVWL3f310l15MrDpLxZ8UJR3T8+RzZYAAKgAAAAAFlgNrS1p8aa8Vn9GVpmuc+G0g9pIg66oFARXIXqVZyf65fMxHqTz8TyaQAAAAAAAAZ08VRU2SOYOmhKqT3VSVXoAEAAAAAAAAA5u8Kk5LaUl6s6M5u3lWcnvKT82yweAAVAAAAAAJqQCDpf8ALX5UkoP7r3JIMD+pBlvMaTktpSXqzEaAAAAAAAAAvsNtOKzW8fZf09KFCbeG3jglR6Syfc+TIL0EEkUAAAAAAABivVpwwk+7Lq8kc4WOLXir4Fos33y2K4qAAKAAAAAAAAMvAC//AMQE0U+KwpbT73XzRplv/UNn7UZbx4fFOv1KgAACgAAAAAAAC0w6/aQm+5SfyZZnMG5dcQlDJ+0tnqujJgvAatliFnLnwvaWXqbEZp6NPo0yK9AhumtF1Zr2t+hH3q90cwNg0cQv3CuGOcub+H+TVvWJSllH2V6v7GiAIAKgACgAAAAAGW6wrOK3kl6mIsMDsq2yfwpy9KL5+hB0lATQEVX41YcVk3zh7S+vp8jmjtJKqo+eRyN7sOCco7PLpyLBhABUAAAAAAAAACUvxAQDPC52j0hLxVPmZVhtpsvNEGmDceG2my80Y5XK0XuPwz+QGuCZRa1TXXIFEAAAAAAAAAAAX/8AT9jSDm/edF0X81KKzg5NRWrdEdfYWSjFRXuqhKrIACAVGPXWqVovdyl+3f8ANy3PNpGqaeaaaa7gONINi/3Z2c3F6axe6Nc0gAAAJCQEGe73aU+yst3kkb1zw33rTwj9yyS/FoiK0LHC4rtvi9EbsLNLspLoj2CAAAAAA8ygnqk+qqadvhsH2axfdmvI3gBQXi5ThqqrdaGsdQV98w1POGT25P7F1FOD1OLTo8muTPJQAAAEmS72LnJRWrfkubILLAbrVu0ekco9ebL4x3eyUIqK0S/GZCKAAAAANTErmrWNNJLOL79jl5xabTVGsmnyZ2ZV4th3GuOC9par4l9wOeBLINIL58uZdYfcuH2pZya/5/kxYVdffl/qvqWZKoACAAAAAAAAAAAAAA1b7dFNbSWj37mUc4NNpqjWp0xoYndeJcS7UV5oIpgAaEnR4Rcf7ceKXalr+lbGtg+HaWk13xjt3suiVQAEAAAAAAAAFVimF8dZwylzXKX2ZT3a7OU+FpqnarqlzOtMU7BN1ok6U4qZl0ayWxJM4NakEAAAAAAAAAAAAAAAAAAmMa6AUOI3fhnlpLNddiwwvCtJ2i6Qfzf2LSN3VU2k2tO7oZhoAAAAAAAAAAAAAAAAhowzsNvJmcAabjQg3GjHKxXQDXBklYs8OD2AgAgCQCAJBKi9j2rF/wDoGMJGeNgueZljGmgGCFhuZ1GmhIAAAAAAAAAAAAAAAAAAAAAAAAAAADFaGCQAEIz2QAGYAAAAAAAAAAAAAAAAAAf/2Q=='
  return (
      <div className={cx("warrap-video")}>
        <div className={cx("header")}>
          <div className={cx("info-video-account")}>
            <img className={cx('avatar-user')} src={datauser.avatar} alt="avtar-user" onError={(e)=>{e.target.src = srcAvatarNull}} ></img>
            <div className={cx("info-account")}>
              <Link className={cx("name")}>
                <h3>{fullName }</h3>
                <span>{datauser.nickname}</span>
              </Link>
              <p className={cx('decription')}>
                {dataVideoItem.description} &nbsp;
                {tags && tags.map((tag,index) => (
                  <Link key={index}>{tag}&nbsp;</Link>
                ))}
              </p>
              <Link className={cx("music-video")}>
                <IconMusicVideo className={cx("icon-music")} />{" "}
                <span>{dataVideoItem.music === "" ? `Nhạc nền - ${fullName}` : dataVideoItem.music}</span>
              </Link>
              <div className={cx("video-content")}>
                <div className={cx('player-video')}>
                   <Video currenVolume={currenVolume} setCurrenVolume={setCurrenVolume} valueVolume={valueVolume} setValueVolume={setValueVolume} dataVideoItem={dataVideoItem} />
                </div>
                  <div className={cx('interactive-space')}>
                      <label className={cx('interactive-item')}>
                        <button className={cx('btn-heart')}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                        <strong>{dataVideoItem.likes_count}</strong>
                      </label>

                      <label className={cx('interactive-item')}>
                        <button className={cx('btn-heart')}><IconComment/></button>
                        <strong>{dataVideoItem.comments_count}</strong>
                      </label>
                     <MenuOption>
                        <label className={cx('interactive-item')}>
                          <button className={cx('btn-heart')}><IconShare/></button>
                          <strong>Chia sẻ</strong>
                        </label>
                     </MenuOption>

                      
                  </div>
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

export default memo(VideoUser);
