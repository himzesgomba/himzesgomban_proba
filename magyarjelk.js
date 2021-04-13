$(document).ready(function() {
    let selectorToMagyar = {
        '.magyar-gallery': [{ src: 'images/magyaro.jpg', thumb: 'images/magyaro.jpg' },
            { src: 'images/magyar_zaszlo.jpg', thumb: 'images/magyar_zaszlo.jpg' },
            { src: 'images/nmo_kereszt_a.jpg', thumb: 'images/nmo_kereszt_a.jpg' },
            { src: 'images/nmo_kereszt_f.jpg', thumb: 'images/nmo_kereszt_f.jpg' },
            { src: 'images/nmo_rovas_feher.jpg', thumb: 'images/nmo_rovas_feher.jpg' },
            { src: 'images/nmo_rovas_fekete.jpg', thumb: 'images/nmo_rovas_fekete.jpg' },
            { src: 'images/nmo_arpad.jpg', thumb: 'images/nmo_arpad.jpg' },
            { src: 'images/turul_feher.jpg', thumb: 'images/turul_feher.jpg' },
            { src: 'images/turul_fekete.jpg', thumb: 'images/turul_fekete.jpg' },
        ],
    };

    Gallery(selectorToMagyar);
});