import Mock from 'mockjs'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
    timeout: 1000
})

Mock.mock(/\/queryUserArticleByUserID/, {
    'list|1-10': [{
        'number|+1': 1,
        'email': '@EMAIL',
        'name': '@CNAME',
        'date': "@DATE('yyyy-MM-dd')",
        'guid': "@GUID",
        'id': "@ID",
        "name-id": "@name - @id"
    }]
})

//在main.js中有引用
export default Mock