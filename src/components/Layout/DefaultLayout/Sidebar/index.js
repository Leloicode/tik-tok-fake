import React ,{memo, useEffect,useState} from 'react'
import MenuSideBar from './MenuSideBar'
import MenuItem from './MenuItem'
import { IconGrounpUser, IconGrounpUserActive, IconHome, IconHomeActive, IconLive2, IconLive2Active,IconMusic,IconThang } from '../../../Icons'

import { Link, NavLink } from 'react-router-dom'
import Button from '../../../Buttons'
import AcountRecommended from './AccontRecommended'
import Styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import LoaddingAccount from '../../../Loadding/AccountLoadding'
import * as request from '../../../../utils/request'
import DiscoverLoadding from '../../../Loadding/DiscoverLoadding'
const cx = classNames.bind(Styles)

function Sidebar() {
  const [discovers, setDiscovers] = useState([]);
  const [datasSuggested, setDatasSuggested] = useState([]);
  const [isLoaddiing, setIsLoaddiing] = useState(true);
  const [seeAllSuggest,setSeeAllSuggest] = useState(false);
  const dataSeeAll = seeAllSuggest ? datasSuggested : datasSuggested.slice(0 , 5);
  const btnTitle = seeAllSuggest ?'Ẩn bớt' :'Xem tất cả' ;
  
  const discoverList = [
    {
        type: 'hashtag',
        title: 'suthatla',
    },
    {
        type: 'hashtag',
        title: 'mackedoi',
    },
    {
        type: 'hashtag',
        title: 'sansangthaydoi',
    },

    {
        type: 'music',
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
    },
    {
        type: 'music',
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
    },
    {
        type: 'music',
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
    },
    {
        type: 'hashtag',
        title: '7749hieuung',
    },
    {
        type: 'hashtag',
        title: 'genzlife',
    },
    {
        type: 'music',
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    },
    {
        type: 'music',
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    },
];
  setTimeout(()=>{
    setDiscovers([...discoverList])
  },3000)
  useEffect(() => {
    // setIsLoaddiing(true)
    const fetchApi = async () => {
      try {
        const res = await request.get("users/suggested",{
          params: {
            per_page: 20
          }
        });
        setDatasSuggested(res.data)
        setIsLoaddiing(false)
      } catch (error) {
        setIsLoaddiing(true)
      }

    }
    fetchApi();
    // eslint-disable-next-line
  }, []);
  const handleSeeAll = () => {
    setSeeAllSuggest(!seeAllSuggest)
  }
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
        {isLoaddiing ? (<LoaddingAccount />) 
        : (
          dataSeeAll.map((data)=>(
            <AcountRecommended key={data.id} className={cx('account-item')} tippy datas ={data}/> 
          ))
        )}
        <p className={cx('more-btn')} onClick={handleSeeAll} >{btnTitle}</p>
      </div>
      {/*end Tài khoản đề xuất */}

      <hr></hr>

      {/* Tài khoản đang follow */}
      {/* <div className={cx('accounts-follow')}>
        <p>Các tài khoản đang follow </p>
        <AcountRecommended className={cx('account-item')} datas ={datas}/>
        <AcountRecommended className={cx('account-item')} datas ={datas}/>
        <AcountRecommended className={cx('account-item')} datas ={datas}/>
        <p className={cx('more-btn')} >Xem thêm</p>
        
      </div> */}
      {/*end Tài khoản đang follow */}
      <div className={cx('discovers')}>
        <p>Khám phá</p>
        {discovers.length > 0 && discovers.map((discover,index)=>(
          <Button key={index} leftIcon={discover.type === 'hashtag' ? <IconThang width='16px' height='16px' /> : <IconMusic />} >{discover.title}</Button>
        ))}
        { discovers.length <= 0 && <> <DiscoverLoadding /> <DiscoverLoadding /> </>}
      </div>

      <hr></hr>
      <div className={cx('footer')}>
        <p>
          <Link>Giới thiệu</Link>
          <Link>TikTok Browse</Link>
          <Link>Bảng tin</Link>
          <Link>Liên hệ</Link>
          <Link>Sự nghiệp</Link>
          <Link>ByteDance</Link>
        </p>
        <p>
          <Link>TikTok for Good</Link>
          <Link>Quảng cáo</Link>
          <Link>Developers</Link>
          <Link>Transparency</Link>
          <Link>TikTok Rewards</Link>
        </p>
        <p>
          <Link>Trợ giúp</Link>
          <Link>An toàn</Link>
          <Link>Điều khiển</Link>
          <Link>Quyền riêng tư</Link>
          <Link>Creator Portal</Link>
          <Link>Hướng dẫn cộng đồng</Link>
        </p>
        <p>Thêm</p>
        <p>© 2023 TikTok - Clone by <Link target={'_blank'} to={'https://www.facebook.com/loi29122002'}>LeLoiCode</Link></p>
      </div>


    </div>
  )
}

export default memo(Sidebar) 
