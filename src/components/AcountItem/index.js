import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from './AcountItem.module.scss';

import Tippy from "@tippyjs/react/headless";
import Proper from "../Proper";
import Button from "../Buttons";

const cx = classNames.bind(style);
function AcountItem({ data, handleClickAcount,className, tippy = false }) {
    const errorSrcImage = "https://us.123rf.com/450wm/tkacchuk/tkacchuk2004/tkacchuk200400017/143745488-no-picture-icon-editable-line-vector-no-image-no-photo-available-or-no-picture-for-your-website-or-m.jpg?ver=6";
    return ( 
        <div>
        <Tippy 
            interactive
            // visible={true}
            delay={[800,0]}
            placement="bottom"
             render={attrs => (
                tippy ? <div className={cx('info-account')} tabIndex="-1" {...attrs}>
                    <Proper>
                        <div className={cx('account-detail')}>
                            <div className={cx('info-header')}>
                                <img src={data.avatar} onError={(e)=>{e.target.src= errorSrcImage}} alt="avatar"></img>
                                <Button primary>Follow</Button>
                            </div>
                            <span className={cx('account-name')}>{data.first_name+ ' ' + data.last_name}</span>
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>}
                            <a target = "_blank" rel="noreferrer" className={cx('account-nickname')} href={`/profile/${data.nickname}`} >{data.nickname}</a>
                            <div className={cx('parameter')}>
                                <span className={cx('number-follow')}>5.7M</span>
                                <span className={cx('title-follow')} >Follower</span>
                                <span className={cx('number-love')}>5.7M</span>
                                <span className={cx('title-love')} >Thích</span>

                            </div>
                        </div>
                    </Proper>
                </div> : ''
                
            )}
        >
            <Link to={`/profile/${data.nickname}`} onClick={()=> {handleClickAcount()}} className={cx('wrapper')}>
                <div className={cx('acounts',className)}>
                    <img src={data.avatar} onError={(e)=>{e.target.src= errorSrcImage}} alt="avatar"></img>
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{data.first_name === "" && data.last_name === "" ?  data.nickname : data.first_name+ ' ' + data.last_name}</span>
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>}
                        </h4>
                        <p className={cx('username')}>{data.nickname}</p>
                    </div>
                </div>               
            </Link>
        </Tippy>
        </div>
     );
}

export default AcountItem;