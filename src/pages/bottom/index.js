/*
 * @Author: dalong.zhu 
 * @Date: 2022-01-04 17:47:02 
 * @Last Modified by: dalong.zhu
 * @Last Modified time: 2022-01-06 10:11:50
 */

import React from 'react';
import './index.css';
import { TabBar } from 'antd-mobile';
import {
    AppOutline,
    VideoOutline,
    ContentOutline,
    UserOutline,
  } from 'antd-mobile-icons';
  import { useNavigate, useLocation } from 'react-router-dom';

const Bottom = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
    const tabs = [
        {
          key: '/home',
          title: '首页',
          icon: <AppOutline />,
        },
        {
          key: '/agriculture',
          title: '农业',
          icon: <ContentOutline />,
        },
        {
          key: '/message',
          title: '农圈',
          icon: <VideoOutline />,
        },
        {
          key: '/me',
          title: '我的',
          icon: <UserOutline />,
        },
      ];
    const setRouteActive = value => {
        navigate(value);
    }
    
  return (
     <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
     </TabBar>
  );
}
export default Bottom;
