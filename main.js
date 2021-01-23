var div1 = document.createElement('div')
var div2 = document.createElement('div')
var div3 = document.createElement('div')
var div4 = document.createElement('div')
var div5 = document.createElement('div')
var div6 = document.createElement('div')
var div7 = document.createElement('div')
var divWrapper = document.createElement('div')
divWrapper.id = '八卦-wrapper'
div1.id = '八卦'
document.body.appendChild(divWrapper)
divWrapper.appendChild(div1)
divWrapper.appendChild(document.getElementById('八卦-描述'))
div1.appendChild(div2)
div1.appendChild(div3)
div1.appendChild(div4)
div1.appendChild(div5)
div1.appendChild(div6)
div1.appendChild(div7)

var isDown = false
var initialX = 0
var initialY = 0
var resultX = 0
var resultY = 0

div1.onmousedown = function (e) {
    initialX = e.clientX
    initialY = e.clientY
    isDown = true
}

document.onmouseup = function () {
    isDown = false
}

document.onmousemove = function (e) {
    if (isDown === true) {
        resultX = e.clientX - initialX
        resultY = e.clientY - initialY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        // 设置不出视窗边界，优化交互体验
        // var right = parseInt(div1.style.right) || 0
        // var bottom = parseInt(div1.style.bottom) || 0
        // if (top < 0) {
        //     top = 0
        // }
        // if (left < 0) {
        //     left = 0
        // }
        // if (right < 0) {
        //     right = 0
        // }
        // if (bottom < 0) {
        //     bottom = 0
        // }

        div1.style.top = top + resultY + 'px'
        div1.style.left = left + resultX + 'px'
        initialX = e.clientX
        initialY = e.clientY
    }
}
