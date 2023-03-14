import React, { useRef } from 'react'
import MenuSideBar from './MenuSideBar'
import MenuItem from './MenuItem'
import { IconGrounpUser, IconGrounpUserActive, IconHome, IconHomeActive, IconLive2, IconLive2Active } from '../../../Icons'

import Styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
const cx = classNames.bind(Styles)
export default function Sidebar() {
  // const useRef
  return (
    <div className={cx('wrapper-sidebar')}>
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
    </div>
  )
}
