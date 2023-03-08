import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from './AcountItem.module.scss';

const cx = classNames.bind(style);
function AcountItem() {
    return ( 
        <div className={cx('wrapper')}>
            
            <div className={cx('acounts')}>
                <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abbc3bb44f895da70eff1745a6e07642~c5_100x100.jpeg?x-expires=1678356000&x-signature=CZRg%2F%2F8pVg1PBcrXd4DVOWF94zQ%3D" alt="avatar"></img>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>sammy_dao222</span>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
                    </h4>
                    <p className={cx('username')}>Sammy Đào</p>
                </div>
            </div>               
        </div>

     );
}

export default AcountItem;