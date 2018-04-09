import $ from 'jquery'
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'
import 'normalize.css'
import 'common/reset.scss'
import 'common/animate.scss'
import 'common/common.scss'
import '../../../node_modules/fonts.css/fonts.css'
import './index.scss'
$(function () {
    let Mobile = /Mobile/i.test(navigator.userAgent)
    console.log('Mobile is', Mobile)
    if (Mobile) {
        location.href = 'moblie.html'
    } else {
        let mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
            },
        })
        let $buttons = $('.buttons'),
            $previewBoxChildren = $('.preview-box').children(),
            $previewTextChildren = $('.preview-text > .buttons').children()
        $buttons.on('mouseenter mouseleave', 'li', function (e) {
            console.log('hover')
            let $target = $(this),
                $index = $target.index()
            $previewBoxChildren.siblings().removeClass('action').eq($index).addClass('action')
            $previewTextChildren.siblings().removeClass('action').eq($index).addClass('action')
            $previewTextChildren.siblings().children().removeClass('action')
            $previewTextChildren.siblings().eq($index).children().addClass('action')
        })

    }
})
