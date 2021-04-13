$(document).ready(function() {
    let selectorToImages = {
        '.jel': [{ src: 'images/tar_vuk.jpg', thumb: 'images/thumb-2.jpg' }, ],
        '.jel_evszam': [{ src: 'images/tar_kocka2010.jpg', thumb: 'images/thumb-5.jpg' },
            { src: 'images/tar_teknos.jpg', thumb: 'images/thumb-3.jpg' },
        ],
        '.jel_evszam_csoport': [{ src: 'images/tar_suni_cs_09.jpg', thumb: 'images/thumb-4.jpg' }, ],
        '.sajatjel': [{ src: 'images/szivecske_lajos.jpg', thumb: 'images/thumb-6.jpg' },
            { src: 'images/szivecske_panna.jpg', thumb: 'images/thumb-17.jpg' },
        ],
        '.sajatlogo': [{ src: 'images/evaneni.jpg', thumb: 'images/thumb-11.jpg' },
            { src: 'images/manotar.jpg', thumb: 'images/thumb-19.jpg' },
        ],
        '.virag': [{ src: 'images/fehervirag2011.jpg', thumb: 'images/thumb-8.jpg' },
            { src: 'images/kekvirag2011.jpg', thumb: 'images/thumb-18.jpg' },
        ],
        '.iskolaneve': [{ src: 'images/jag2011.jpg', thumb: 'images/thumb-10.jpg' }, ],
    };

    Gallery(selectorToImages);
});