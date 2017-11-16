
import FullPage from 'lib/fullPage';
import 'normalize.css'
import 'common/reset.scss'
import 'common/animate.scss'
import './main.scss'
let runPage,
    runSection;


runPage = new FullPage({

    id: 'article',                             // id of contain
    slideTime: 800,                            // time of slide
    effect: {                                  // slide effect
        transform: {
            translate: 'Y',					   // 'X'|'Y'|'XY'|'none'
            scale: [1, 1],					   // [scalefrom, scaleto]
            rotate: [0, 0]					   // [rotatefrom, rotateto]
        },
        opacity: [0, 1]                // [opacityfrom, opacityto]
    },
    start: 0,
    mode: 'touch,wheel',               // mode of fullpage
    easing: [0, .93, .39, .98],
});

// runSection = new FullPage({

//     id: 'pageContain',                            // id of contain
//     slideTime: 1000,                               // time of slide
//     effect: {                                     // slide effect
//         transform: {
//             translate: 'X',					   // 'X'|'Y'|'XY'|'none'
//             scale: [0, 1],					   // [scalefrom, scaleto]
//             rotate: [1, 0]					   // [rotatefrom, rotateto]
//         },
//         opacity: [0, 1]                     // [opacityfrom, opacityto]
//     },
//     mode: 'touch,nav:navBar',               // mode of fullpage
//     easing: [0, .93, .39, .98],             // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )

// });
