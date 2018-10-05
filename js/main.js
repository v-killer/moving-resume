
var result = `/*
 * 面试官你好，我是申浩
 * 我将以动画的形式来介绍我自己
 * 只用文字介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
    transition: all 1s;
}

html{
    background: rgb(222,222,222);
    font-size: 16px;
}
#code{
    border: 1px solid red;
    padding: 16px;
}
/* 我需要一点代码高亮 */

.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/* 加点3D效果 */
#code{
    transform: rotate(360deg)
}
/* 不玩了，我来介绍一下我自己吧 */
/* 我需要一张白纸 */
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}

`
var result2 = `
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
}
#paper > .content{
    background: white;
    width: 100%;
    height: 100%;
}

`
var md = `
# 自我介绍

我叫申浩
1995年1月出生
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉JavaScript css

# 项目介绍
1. xxx轮播
2. xxx简历
3. xxx画板

# 联系方式
电话 1302595XXXX
QQ 34320xxxx


`
writeCode('', result, () => {
    createpaper(() => {
        writeCode(result, result2,()=>{
            writeMarkdown(md)
        })
    })
})
// 把code 写到#code和style标签里
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = 10000
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}
function writeMarkdown(markdown){
    let dompaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        dompaper.innerHTML = markdown.substring(0, n)
        dompaper.scrollTop = 10000
        if (n >= markdown.length) {
            window.clearInterval(id)
        }
    }, 10)
}
function createpaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

