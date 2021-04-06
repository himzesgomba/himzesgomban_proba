$(document).ready(function() {
    let selectorToReferenc = {
        '.referenc-gallery': [{ src: 'images/bolyai.jpg', thumb: 'images/bolyai.jpg' },
            { src: 'images/bushcraft.jpg', thumb: 'images/bushcraft.jpg' },
            { src: 'images/eu2011_tarisznya.jpg', thumb: 'images/eu2011_tarisznya.jpg' },
            { src: 'images/godolloi.jpg', thumb: 'images/godolloi.jpg' },
            { src: 'images/interwest.jpg', thumb: 'images/interwest.jpg' },
            { src: 'images/koszorus_cimer.jpg', thumb: 'images/koszorus_cimer.jpg' },
            { src: 'images/orszaghaz.jpg', thumb: 'images/orszaghaz.jpg' },
            { src: 'images/polgari.jpg', thumb: 'images/polgari.jpg' },
            { src: 'images/pulyka.jpg', thumb: 'images/pulyka.jpg' },
            { src: 'images/szazhalombattai.jpg', thumb: 'images/szazhalombattai.jpg' },
            { src: 'images/tibolddaroc.jpg', thumb: 'images/tibolddaroc.jpg' },
            { src: 'images/vasnyul.jpg', thumb: 'images/vasnyul.jpg' },
            { src: 'images/csodaszarvas.jpg', thumb: 'images/csodaszarvas.jpg' }
        ],
    };

    Gallery(selectorToReferenc);
});