
import FullPage from 'lib/fullPage'
import $ from 'jquery'
import 'normalize.css'
import 'common/reset.scss'
import 'common/animate.scss'
import 'common/common.scss'
import 'common/fullpage.scss'
import '../../../node_modules/fonts.css/fonts.css'
import './index.scss'


$(function () {
    let runPage,
        runSection;


    runSection = new FullPage({

        id: 'article',                             // id of contain
        slideTime: 800,                            // time of slide
        continuous: false,
        effect: {                                  // slide effect
            transform: {
                translate: 'Y',					   // 'X'|'Y'|'XY'|'none'
                scale: [1, 1],					   // [scalefrom, scaleto]
                rotate: [0, 0]					   // [rotatefrom, rotateto]
            },
            opacity: [0, 1]                // [opacityfrom, opacityto]
        },
        start: 0,
        mode: 'wheel,nav:navBar',               // mode of fullpage
        easing: [0, .93, .39, .98],


    });
    // runPage = new FullPage({

    //     id: 'pageContain',                             // id of contain
    //     slideTime: 800,                            // time of slide
    //     continuous: false,
    //     effect: {                                  // slide effect
    //         transform: {
    //             translate: 'X',					   // 'X'|'Y'|'XY'|'none'
    //             scale: [1, 1],					   // [scalefrom, scaleto]
    //             rotate: [0, 0]					   // [rotatefrom, rotateto]
    //         },
    //         opacity: [0, 1]                // [opacityfrom, opacityto]
    //     },
    //     start: 0,
    //     mode: 'wheel',               // mode of fullpage
    //     easing: [0, .93, .39, .98],


    // });
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
})


