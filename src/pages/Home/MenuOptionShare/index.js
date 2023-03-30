import Tippy from "@tippyjs/react/headless";
// import Tippy from "@tippyjs/react";

import {  OptionArow, OptionIconCode, OptionIconEmail, OptionIconFacebook, OptionIconLine, OptionIconLinkIn, OptionIconPinterest, OptionIconShareUser, OptionIconTelegram, OptionIconTwitter, OptionIconUrl, OptionIconWhatApp } from "../../../components/Icons";

import Proper from "../../../components/Proper";
import Button from "../../../components/Buttons";
import { memo, useState } from "react";
import ModalLogin from "../../../components/ModalLogin";
import Styles from "./MenuOption.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
const optionList = [
    // eslint-disable-next-line
    {
      type: 'code',  
      leftIcon: <OptionIconCode  width="26px" height="26px" />,
      title: 'Nhúng'
    },
    {
        type: 'share-user',  
      leftIcon: <OptionIconShareUser width="26px" height="26px" />,
      title: 'Gửi đến bạn bè'
    },
    {
      type: 'share-facebook',  
      leftIcon: <OptionIconFacebook width="26px" height="26px" />,
      title: 'Chia sẻ với Facebook'
    },
    {
      type: 'share-whatapp',  
      leftIcon: <OptionIconWhatApp width="26px" height="26px" />,
      title: 'Chia sẻ với WhatsApp'
    },
    {
      type: 'url',  
      leftIcon: <OptionIconUrl width="26px" height="26px" />,
      title: 'Sao chéo liên kết'
    },
    {
      type: 'share-twitter',  
      leftIcon: <OptionIconTwitter width="26px" height="26px" />,
      title: 'Chia sẻ với Twitter'
    },
    {
      type: 'share-linkedin',  
      leftIcon: <OptionIconLinkIn width="26px" height="26px" />,
      title: 'Chia sẻ với LinkedIn'
    },
    {
      type: 'share-telegram',  
      leftIcon: <OptionIconTelegram width="26px" height="26px" />,
      title: 'Chia sẻ với Telegram'
    },
    {
      type: 'share-email',  
      leftIcon: <OptionIconEmail width="26px" height="26px" />,
      title: 'Chia sẻ với Email'
    },
    {
      type: 'share-line',  
        leftIcon: <OptionIconLine width="26px" height="26px" />,
        title: 'Chia sẻ với Line'
    },
    {
      type: 'share-pinterest',  
    leftIcon: <OptionIconPinterest width="26px" height="26px" />,
    title: 'Chia sẻ với Pinterest'
    }
    // eslint-disable-next-line
  ]


function MenuOption({children}) {
    const [menuOption, setMenuOption] = useState([...optionList.slice(0,4)]);
    const [isShowModal, setIsShowModal] = useState(false);
    const handleShowOption = () =>{
        setMenuOption(optionList)
    }
    const handleShowModal = () =>{
        setIsShowModal(true)
        document.body.classList.add(cx('hidden'));
    }
    const handleCloserModal = () => {
        setIsShowModal(false)
        document.body.classList.remove(cx('hidden'));

    }
    return ( 
        <>
        <Tippy 
        delay={[0,300]}
        hideOnClick={false}
        interactive
        onHide={()=>{setMenuOption([...optionList.slice(0,4)])}}
        placement='top-start'
        
        zIndex={500}
        render={attrs => (
        <div className={cx('option')} tabIndex="-1" {...attrs}>
           <Proper>
            <div className={cx('option-item')}>

             {menuOption.map((option,index)=>(
               <Button hover onClick={handleShowModal} key={index} leftIcon={option.leftIcon} >{option.title}</Button>
               ))}
               <div className={cx('show-option')}>
                {menuOption.length === 4 && <button onClick={handleShowOption} className={cx('btn-arow')}><OptionArow /></button> }
               </div>
            </div>
           </Proper>
            </div>
        )}>
            {children}
        </Tippy>
        {isShowModal && <ModalLogin handleCloserModal={handleCloserModal} />} 
        </>
     );
}

export default memo(MenuOption);