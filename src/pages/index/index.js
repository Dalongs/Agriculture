/*
 * @Author: dalong.zhu 
 * @Date: 2022-01-04 17:43:07 
 * @Last Modified by: dalong.zhu
 * @Last Modified time: 2022-01-06 10:17:23
 */

import React from 'react';
import './index.css';
import Bottom from '../bottom/index';
import {
    Route,
    Routes,
    MemoryRouter as Router,
  } from 'react-router-dom';
import Home from '../home';
import Agriculture from '../agriculture';
  
  function Message() {
    return <div>我的消息</div>
  }
  
  function PersonalCenter() {
    return <div>个人中心</div>
  }

const Index = () => {
    
    
  return (
    <Router initialEntries={['/agriculture']}>
      <div className='app'>
        <div className='top'>
            {/* <NavBar>配合路由使用</NavBar> */}
        </div>
        <div className='body'>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/agriculture' element={<Agriculture />} />
                <Route exact path='/message' element={<Message />} />
                <Route exact path='/me' element={<PersonalCenter />} />
            </Routes>
        </div>
        <div className='bottom'>
            <Bottom />
        </div>
        </div>
    </Router>
  );
}

export default Index;
