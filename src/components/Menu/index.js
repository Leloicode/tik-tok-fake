import {useState, React, useEffect ,memo } from 'react';
import Styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Proper from '../Proper';
import MenuItem from './MenuItem';
import Header from './Header';
import HandleTippy from '@tippyjs/react/headless'; 

const cx = classNames.bind(Styles)
function Menu({ children , className ,datas = [],clickItemMenuNoEvent = ()=>{}}) {
    const [history, setHistory] = useState([datas]);
    // lấy data cuối mảng => để render ra UI
    const current = history[history.length - 1];
    const renderItem = () => {
        // (map) qua data current
            return current[0].data.map((data,index) => {
                //render ra màng hình qua item={data}
                 return <MenuItem item={data} key={index} onClick={()=>{
                    // kiểm tra xem có subItem không (là cấp menu con tiếp theo)
                        if (data.subItem) {
                            // nếu có thì subItem set vao trong mảng datas (datas = [])
                            setHistory([...history,data.subItem]);
                        }
                        else{
                            clickItemMenuNoEvent(data,current[0].level)
                        }
                    }}></MenuItem>
            })
           
        // })
    }
    const handleOnBack = () =>{
        setHistory(prev => prev.slice(0,prev.length -1));
    }
    const handleResetMenu = () => {
        setHistory([history[0]])
    }
    return (  
        <HandleTippy
            // visible={true}
            
            delay={[0,700]}
            hideOnClick={false}
            interactive
            placement='bottom-end'
            onHide={handleResetMenu}

            render={attrs => (
            <div className={cx('option')} tabIndex="-1" {...attrs}>
                <Proper >
                    <div className={cx('menu-items',className,`level-${current[0].level}`,)}>
                        {current[0].titleHeader && <Header title={current[0].titleHeader} onBack={handleOnBack}></Header> }
                        <div className={cx('wrrapper-menu-item')}>
                            {
                                
                                renderItem()
                            }
                        </div>
                    </div>
                </Proper>
            </div>
            )}
                
        >
                    { children }
                    
        </HandleTippy>   
    );
}

export default memo(Menu);