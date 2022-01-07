import './index.css';
function Rice () {
    const disease = [
        {   
            id: 1,
            name: '稻飞虱',
            agriculture: '科学管水，配方施肥',
            chemical: '在水稻孕穗期或抽穗期，2～3龄若虫高峰期，可用下列药剂：58%吡虫·杀虫单可湿性粉剂52～86g/亩；44%吡虫·井·杀单可湿性粉剂100～120g/亩；20%吡虫·三唑磷乳油100—120ml/亩；',
        },
        {
            id: 2,
            name: '稻纵卷叶螟',
            agriculture: '合理施肥，加强田间管理',
            chemical: '每亩用25%杀虫双水剂150克，加水37．5～50公斤喷雾，或加水5～7．5公斤弥雾。用药适期掌握在一二龄幼虫高峰期，或用1000倍药液浸秧1贫钟带药下田，可兼治二化螟、三化螟。安全间隔期(最后一次用药离收获的天数)不少于15天。',
        },
        {
            id:3,
            name: '稻白叶枯病',
            agriculture: '加强肥水管理，施足基肥',
            chemical: '用10%强氯精500倍液，浸种48小时，或用500～800倍液的代森铵浸种24～48小时，或用20%噻枯唑WP 500～600倍液浸种24～48小时，或用80% 402抗菌剂2 000倍液浸种48～92小时。',
        },
        {
            id:4,
            name: '水稻恶苗病',
            agriculture: '建立无病留种田,加强栽培管理,清除病残体',
            chemical: '用1%石灰水澄清液浸种，15～20℃时浸3天，25℃浸2天，水层要高出种子10～15cm，避免直射光。或用2%福尔马林浸闷种3小时，气温高于20℃用闷种法，低于20℃用浸种法。或用40%拌种双可湿性粉剂100g或50%多菌灵可湿性粉剂150～200g，加少量水溶解后拌稻种50kg或用50%甲基硫菌灵可湿性粉剂1000倍液浸种2～3天，每天翻种子2～3次。',
        },
        {
            id:5,
            name: '水稻纹枯病',
            agriculture: '打捞菌核，减少菌源;加强栽培管理，施足基肥;',
            chemical: '市场上防治水稻纹枯病的杀菌农药很多，像己唑醇、井冈·己唑醇、井冈·蜡芽菌、戊唑醇等对水稻纹枯病的防治效果都很突出。在水稻分蘖盛期即水稻封行前（水稻纹枯病暂未发病或发病初期），每亩用10%己唑醇40毫升+营养叶面肥粒粒宝30毫升对水20-30千克，或在水稻分蘖末期即水稻封行后（水稻纹枯病进入快速扩展期），每亩用10%己唑醇55毫升+营养叶面肥粒粒宝30毫升对水30-40千克趁早晨露水未干时粗雾喷于水稻下部，可有效预防、控制水稻纹枯病的发生。',
        },
    ];
    return (
        <div className="rice-container">
            {disease.map((item) => {
                return (
                <div className="card-list" key={item.id}>
                    <div className="list-title">
                        <span className='card-name'>病害名称：</span>
                        <span className='card-content list-name'>{item.name}</span>
                    </div>
                    <div className="list-agriculture">
                        <span className='card-name'>农业防治：</span>
                        <span className='card-content'>{item.agriculture}</span>
                    </div>
                    <div className="list-chemical">
                        <span className='card-name'>化学防治：</span>
                        <span className='card-content'>{item.chemical}</span>
                    </div>
                </div>
                )
            })}
            
        </div>
    )
}
export default Rice;