import React from 'react'
import Styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(Styles)
export default function Sidebar() {
  return (
    <div className={cx('wrapper-sidebar')}>
      <h2>Sidebar</h2>
    </div>
  )
}
