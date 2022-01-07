import { SearchBar, Tabs } from 'antd-mobile';
import './index.css';
import Rice from '../rice';

function Agriculture() {
    return (
        <div className='container'>
            <div className='search-header'>
              <SearchBar placeholder='输入作物病虫害信息查询' />
            </div>
            <div className='class-sort'>
            <Tabs
              style={{
                '--title-font-size': '13px',
                '--content-padding': '0px',
              }}
            >
                <Tabs.Tab title='水稻' key='rice'>
                    <Rice />
                </Tabs.Tab>
                <Tabs.Tab title='小麦' key='wheat'>
                    小麦
                </Tabs.Tab>
                <Tabs.Tab title='花生' key='peanut'>
                    花生
                </Tabs.Tab>
                <Tabs.Tab title='玉米' key='corn'>
                    玉米
                </Tabs.Tab>
                <Tabs.Tab title='大豆' key='soybeans'>
                    大豆
                </Tabs.Tab>
            </Tabs>
            </div>
        </div>
    )
}
export default Agriculture;