import { IconCloser } from "../Icons";
import Styles from "./ModalLogin.module.scss";
import classNames from "classnames/bind";
import Button from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(Styles);
function ModalLogin({ handleCloserModal = () => {} }) {
   
    return ( 
        <div className={cx('wrraper-container')}>
            <div className={cx('wrraper')}>
                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <Button ><FontAwesomeIcon width='24px' height={'24px'} icon={faChevronLeft}></FontAwesomeIcon></Button>
                        <Button onClick={()=>{handleCloserModal()}}><IconCloser width="24px" height="24px" /></Button>
                    </div>
                    <div className={cx('body')}>

                    </div>
                    <div className={cx('footer')}></div>
                </div>
            </div>
        </div>
     );
}

export default ModalLogin;