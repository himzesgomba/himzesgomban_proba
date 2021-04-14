$(document).ready(function() {
    let selectorToEgyeb = {
        '.fulbevalok': [{ src: 'images/virag_rozsaszin.jpg', thumb: 'images/virag_rozsaszin.jpg' },
            { src: 'images/sziv_feher.jpg', thumb: 'images/sziv_feher.jpg' },
            { src: 'images/pillango_lila.jpg', thumb: 'images/pillango_lila.jpg' },
            { src: 'images/arany.jpg', thumb: 'images/arany.jpg' },
            { src: 'images/tolgylevel_turkiz.jpg', thumb: 'images/tolgylevel_turkiz.jpg' },
        ],
        /*'.karacsonyfadisz': [{ src: 'images/hopihe.jpg', thumb: 'images/hopihe.jpg' },
            { src: 'images/harang.jpg', thumb: 'images/harang.jpg' },
            { src: 'images/angyal.jpg', thumb: 'images/angyal.jpg' },
            { src: 'images/koszoru.jpg', thumb: 'images/koszoru.jpg' },
            { src: 'images/hoember.jpg', thumb: 'images/hoember.jpg' },
            { src: 'images/csillag.jpg', thumb: 'images/csillag.jpg' },
            { src: 'images/keszlet.jpg', thumb: 'images/keszlet.jpg' },
        ],
        '.hangulatjelek': [{ src: 'images/mosolygo.jpg', thumb: 'images/mosolygo.jpg' },
            { src: 'images/szomoru.jpg', thumb: 'images/szomoru.jpg' },
            { src: 'images/csodalkozo.jpg', thumb: 'images/csodalkozo.jpg' },
            { src: 'images/fintorgo.jpg', thumb: 'images/fintorgo.jpg' },
            { src: 'images/nyelves.jpg', thumb: 'images/nyelves.jpg' },
            { src: 'images/merges.jpg', thumb: 'images/merges.jpg' },
        ],
        '.kulcstarto': [{ src: 'images/kulcs1a.jpg', thumb: 'images/kulcs1a.jpg' },
            { src: 'images/kulcs2a.jpg', thumb: 'images/kulcs2a.jpg' },
            { src: 'images/kulcs3a.jpg', thumb: 'images/kulcs3a.jpg' },
        ],*/
        '.aldas': [{
                src: 'images/jaszsagi.jpg',
                thumb: 'images/jaszsagi.jpg',
                subHtml: '<h4>3500 Ft</h4><p>Jászsági szűcshímzéses koszorúban, a hímzett keret finom aranydíszítéssel. Mérete: 19 x 24,5 cm</p>'
            },
            {
                src: 'images/sarkozi.jpg',
                thumb: 'images/sarkozi.jpg',
                subHtml: '<h4>4000 Ft</h4><p>Sárközi jegykendőmintával díszítve. Mérete: 19 x 24,5 cm</p>'
            },
        ],
        /*'.torolkozo': [{ src: 'images/torolkozo_legjobb.jpg', thumb: 'images/torolkozo_legjobb.jpg' },
            {
                src: 'images/torolkozo_skorpio.jpg',
                thumb: 'images/torolkozo_skorpio.jpg'
            },
            {
                src: 'images/torolkozo_tiboreva.jpg',
                thumb: 'images/torolkozo_tiboreva.jpg'
            }

        ],*/
    };

    Gallery(selectorToEgyeb);
});