$(document).ready(function() {
    let selectorToCimer = {
        '.cimer-gallery': [{ src: 'images/cimer__a_5.jpg', thumb: 'images/cimer__a_5.jpg' },
            { src: 'images/cimer__a_7.jpg', thumb: 'images/cimer__a_7.jpg' },
            { src: 'images/cimer__a_14.jpg', thumb: 'images/cimer__a_14.jpg' },
            { src: 'images/cimer__a_25.jpg', thumb: 'images/cimer__a_25.jpg' },
            { src: 'images/cimer__s_5.jpg', thumb: 'images/cimer__s_5.jpg' },
            { src: 'images/cimer__s_7.jpg', thumb: 'images/cimer__s_7.jpg' }
        ],
    };

    Gallery(selectorToCimer);
});