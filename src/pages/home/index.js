/*
 * @Author: dalong.zhu 
 * @Date: 2022-01-04 17:54:44 
 * @Last Modified by: dalong.zhu
 * @Last Modified time: 2022-01-05 13:51:23
 */
import { SearchBar, Badge, Swiper, Toast, NoticeBar, Image } from 'antd-mobile';
import { EnvironmentOutline, BellOutline } from 'antd-mobile-icons'
import './index.css';
import demoSrc2 from '../../images/new2.jpg';
function Home() {
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

    const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
        <div
        className={'content'}
        style={{ background: color }}
        onClick={() => {
            Toast.show(`你点击了卡片 ${index + 1}`)
        }}
        >
        {index + 1}
        </div>
    </Swiper.Item>
    ));
    const demoLongText = '南京市浦口区今日粮价：水稻价格2.48元/公斤，小麦价格2.56元/公斤，玉米价格4.22元/公斤，大豆价格5.36元/公斤'
    return (
        <div className='firstPage'>
          <div className='container-header'>
            <div className='locations'>
                <EnvironmentOutline fontSize={20} /> <span className='static-address'>浦口区</span>
            </div>
            {/* <Input placeholder='请输入内容' className='search-bar'/> */}
            <SearchBar placeholder='请输入内容' className='search-bar' />
            <Badge content={Badge.dot}>
               <BellOutline fontSize={20} />
            </Badge>
          </div>
          <div className='banner'>
            <Swiper autoplay loop>{items}</Swiper>
          </div>
          <div className='nodes'>
            <NoticeBar content={demoLongText} color='info' />
          </div>
          <div className='news-list'>
              <div className='news-card'>
                  <div className='news-title'>再生稻双季亩产创新高！江西水稻技术创新取得突破</div>
                  <div className='news-image'>
                    <Image lazy src={demoSrc2} fit='contain' />
                  </div>
                  <div className='news-author'>
                      <span className='news-scan'>2536次浏览</span>
                      <span className='author'>江西杂交水稻研究院</span>
                  </div>
              </div>
              <div className='news-card'>
                  <div className='news-title'>再生稻双季亩产创新高！江西水稻技术创新取得突破</div>
                  <div className='news-image'>
                    <Image lazy src={demoSrc2} fit='contain' />
                  </div>
                  <div className='news-author'>
                      <span className='news-scan'>2536次浏览</span>
                      <span className='author'>江西杂交水稻研究院</span>
                  </div>
              </div>
          </div>
        </div>
        
    )
}
export default Home;
