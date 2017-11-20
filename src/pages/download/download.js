import $ from 'jquery'
import 'normalize.css'
import 'common/reset.scss'
import 'animate.css'
import 'common/common.scss'
import '../../../node_modules/fonts.css/fonts.css'
import './download.scss'

$(function () {
    let $buttons = $('.buttons')
    $buttons.on('mouseenter mouseleave', '.button', function (e) {
        let $target = $(this)
        $target.addClass('animated flipInY').siblings().removeClass('animated flipInY')
    })
})