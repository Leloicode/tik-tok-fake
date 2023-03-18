import React, { useRef } from 'react'
import MenuSideBar from './MenuSideBar'
import MenuItem from './MenuItem'
import { IconGrounpUser, IconGrounpUserActive, IconHome, IconHomeActive, IconLive2, IconLive2Active } from '../../../Icons'

import { NavLink } from 'react-router-dom'
import Button from '../../../Buttons'
import AcountRecommended from './AccontRecommended'
import Styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(Styles)
const datas = {
  avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1679148000&x-signature=4Pk%2FL7Av1LdieBg5xzTqOHp7luE%3D',
  full_name: 'theanh28entertainment',
  nickname: 'Theanh28 Entertainment',
tick: true
}
export default function Sidebar() {
  // const useRef
  return (
    <div className={cx('wrapper-sidebar')}>
      {/* button menu */}
      <MenuSideBar className={cx('menu-sidebar')}>
        <NavLink to={'/'} className={(nav) => cx('nav-link-sidebar',{ active: nav.isActive})}>
          <MenuItem title={'Dành cho bạn'} leftIcon1={<IconHomeActive className={cx('icon-active')} width='32px' height='32px' />} hover leftIcon={ <IconHome className={cx('icon')} width='32px' height='32px' /> }  />
        </NavLink>
        <NavLink to={'/following'} className={(nav) => cx('nav-link-sidebar',{active: nav.isActive})}>
          <MenuItem title={'Đang Follow'}  hover leftIcon1={<IconGrounpUserActive className={cx('icon-active')} width='32px' height='32px' />} leftIcon={<IconGrounpUser className={cx('icon')} width='32px' height='32px'  />}  />
        </NavLink>
        <NavLink to={'/live'} className={(nav) => cx('nav-link-sidebar',{active: nav.isActive})}>
          <MenuItem title={'LIVE'} to={'/live'} hover leftIcon1={<IconLive2Active className={cx('icon-active')} width='32px' height='32px' />} leftIcon={<IconLive2 className={cx('icon')} width='32px' height='32px' />} />
        </NavLink>
      </MenuSideBar>
    {/* end button menu */}

      <hr></hr>

      {/* nút login */}
      <div className={cx('login')}>
        <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
        <Button outline className={cx('btn-login')} >Đăng nhập</Button>
      </div>

      {/* end login */}

      <hr></hr>

      {/* Tài khoản đề xuất */}
      <div className={cx('accounts-recommended')}>
        <p>Tài khoản được đề xuất</p>
        
        <AcountRecommended className={cx('account-item')} tippy datas ={datas}/>
        <AcountRecommended className={cx('account-item')} tippy datas ={datas}/>
        <AcountRecommended className={cx('account-item')} tippy datas ={datas}/>
        <p className={cx('more-btn')} >Xem tất cả</p>
      </div>
      {/*end Tài khoản đề xuất */}

      <hr></hr>

      {/* Tài khoản đang follow */}
      <div className={cx('accounts-follow')}>
        <p>Các tài khoản đang follow </p>
        <AcountRecommended className={cx('account-item')} datas ={datas}/>
        <AcountRecommended className={cx('account-item')} datas ={datas}/>
        <AcountRecommended className={cx('account-item')} datas ={datas}/>
        <p className={cx('more-btn')} >Xem thêm</p>
        
      </div>
      {/*end Tài khoản đang follow */}


      <h1 className={cx('content')}></h1>



    </div>
  )
}
