import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import {useState} from 'react'
import { Link } from "react-router-dom";
import style from './AcountItem.module.scss';

const cx = classNames.bind(style);
function AcountItem({ data, handleClickAcount }) {
    const [srcAvatarUser, setSrcAvatarUser] = useState(data.avatar);
    const errorSrcImage = "https://us.123rf.com/450wm/tkacchuk/tkacchuk2004/tkacchuk200400017/143745488-no-picture-icon-editable-line-vector-no-image-no-photo-available-or-no-picture-for-your-website-or-m.jpg?ver=6";
    return ( 
        
        <Link to={`/profile/${data.nickname}`} onClick={()=> {handleClickAcount()}} className={cx('wrapper')}>
            <div className={cx('acounts')}>
                <img src={srcAvatarUser} onError={(e)=>{e.target.src= errorSrcImage}} alt="avatar"></img>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>}
                    </h4>
                    <p className={cx('username')}>{data.nickname}</p>
                </div>
            </div>               
        </Link>

     );
}

export default AcountItem;