console.log("桂花鸭围月季红") //同步

setTimeout(() => {
    //宏任务2
    console.log("陈皮牛肉干") 
    new Promise((resolve) => {
        
        console.log("红椒米熏鸡") 
        resolve()
    }).then(() => {//注册微任务7
        
        console.log("八宝菠菜炝鱼片")
    })
}, 0)

new Promise((resolve) => {
    console.log("黄瓜烤去皮虾")
    resolve()
}) //同步

Promise.resolve().then(() => {//注册微任务2
    console.log("果藕")
    Promise.resolve().then(() => {//注册微任务4
        console.log("红烧鱼翅")
    })
    setTimeout(() => {//注册宏任务4
        console.log("清汤燕菜")
    }, 0)
}) 

console.log("口蘑白菜卷") //同步

Promise.resolve().then(() => {
    //注册微任务3
    Promise.resolve().then(() => {//注册微任务5
        console.log("炸鸡腿")
        Promise.resolve().then(() => {//注册微任务6
            console.log("鸡油兰笋")
        })
    })
}) 

setTimeout(() => {
    console.log("樟茶去骨鸭")
    console.log("烧四素")
}, 0) //宏任务3

Promise.resolve().then(() => {//注册微任务4
    console.log("核桃酪")
}) 
//桂花鸭围月季红
//黄瓜烤去皮虾
//口蘑白菜卷
//果藕
//核桃酪
//红烧鱼翅
//炸鸡腿
//鸡油兰笋
//陈皮牛肉干
//红椒米熏鸡
//八宝菠菜炝鱼片
//樟茶去骨鸭
//烧四素
//清汤燕菜
