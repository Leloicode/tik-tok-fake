import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(Styles)
export default function DefaultLayout({ children}) {
  return (
    <div className={cx('wrraper-container')}>
        <Header />
        <div className ={cx('container')}>
            <div className ={cx('container-inner')}>
                <Sidebar />
                <div className = {cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}
