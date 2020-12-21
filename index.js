const habboEncoding = require("./habbo-encoding.js");

let roomItems = "PVHacce6ce0{2}sw_fence{2}PGH`hFFJH8f87a7e6{2}sw_fence{2}PGI`hFFJH4c229a72{2}sw_fence{2}PGJ`hFFJH2356861e{2}sw_tree1{2}REKHIH06711648{2}sw_fence{2}PGK`hFFJH66cafb72{2}sw_fence{2}PGPA`hFFJH56b447e0{2}sw_tree4{2}SFQAHIHdc5b6ebe{2}sw_fence{2}PGQAHJH4d0b6318{2}sw_fence{2}PGRAHJH2b74ec59{2}sw_tree2{2}RESAHIH80a3c645{2}sw_fence{2}PGSAHJH80216506{2}sw_fence{2}PGPBHJHa8e080b8{2}sw_fence{2}PGQBHJHac5563fa{2}sw_tree1{2}PDRBHIH41927945{2}sw_fence{2}PGRBHJHdec86d1e{2}sw_tree4{2}RHQCHIH9ac0cfef{2}sw_fence{2}QCRCHPAH64b32343{2}sw_fence{2}RCRCHPAH344579e7{2}sw_fence{2}SCRCHPAHa5a6eb82{2}sw_fence{2}PDRCHPAH1152e79f{2}sw_fence{2}QDRCHPAH28b6836d{2}sw_fence{2}RDRCHPAHc6f5bceb{2}sw_fence{2}SDRCHPAHaaf5365a{2}sw_fence{2}PERCHPAH5a56d094{2}sw_fence{2}QERCHPAH14430695{2}sw_fence{2}RERCHPAHab10c2bc{2}sw_tree2{2}QCSCHIHcd299fee{2}block_basic2{2}JRDHIHd5d696c6{2}block_basic2{2}KRDHIH70b5f2a3{2}block_basic2{2}PARDHIH7b972cb9{2}block_basic2{2}QARDHIHc004d7a7{2}block_basic2{2}RARDHIH0c3866da{2}block_basic2{2}SARDHIH1571c06a{2}block_basic2{2}PBRDHIH303ba252{2}block_basic2{2}QBRDHIHa5d35a13{2}block_basic2{2}RBRDHIHe87a2231{2}block_basic2{2}SBRDHIH5ef3f4af{2}block_basic{2}PCRDHIHbaaeaf87{2}block_basic2{2}JSDHIH23e914c7{2}sw_backround2{2}HPEHHH90be376b{2}block_basic2{2}JPEHIH25894156{2}sw_tree1{2}RAPEHIH28bb67b5{2}block_basic2{2}RIPEHIH9fa9bbff{2}block_basic2{2}SIPEHIH46b307e9{2}block_basic2{2}PJPEHIH85b4ae8a{2}block_basic2{2}QJPEHIHd322ddc5{2}block_basic2{2}RJPEHIHe69a0fcd{2}block_basic2{2}SJPEHIHf67b8f67{2}block_basic2{2}JQEHIH122c0628{2}block_basic2{2}RIQEHIHf28e4791{2}block_basic2{2}JREHIH782d9752{2}block_basic2{2}RIREHIHa88a12c8{2}block_basic2{2}RISEHIHbc3f9476{2}sw_tree2{2}QAPFHIH44ca498b{2}block_basic2{2}RIPFHIH7e7c77ac{2}sw_tree1{2}QKQFHIH950cb4ea{2}sw_tree3{2}RBRFHIHa2c055cb{2}sw_tree2{2}QLPGHIH7ef6e932{2}sw_tree3{2}SKPHHIHfff2dfc0{2}sw_tree4{2}SCRHHIHd0d750eb{2}block_basic{2}QIQIHIH78f07489{2}block_basic2{2}RIQIHIH2af945fd{2}block_basic2{2}SIQIHIH8d9478ef{2}block_basic2{2}PJQIHIH098773fd{2}block_basic2{2}QJQIHIH6a1f9a8b{2}block_basic{2}RJQIHIH9da79ec0{2}block_basic2{2}SERIHIH798e1401{2}sw_fence{2}PFRIHJH41fb459b{2}sw_tree1{2}QFRIHIHeeab0e39{2}block_basic{2}SESIHIH108e4757{2}sw_fence{2}PFSIHJH02978f09{2}block_basic2{2}SEPJHIHfcb5418c{2}sw_fence{2}PFPJHJH32475e59{2}sw_tree2{2}SDQJHIHafafd346{2}block_basic{2}SEQJHIH6c8135db{2}sw_fence{2}PFQJHJH2166ae0d{2}block_basic2{2}SERJHIH0c6dab3f{2}sw_fence{2}PFRJHJH26983374{2}block_basic{2}SESJHIH22d2faa7{2}sw_fence{2}PFSJHJHed3cd2b2{2}block_basic2{2}SEPKHIH5860d63f{2}sw_fence{2}PFPKHJH2cd5b25f{2}block_basic{2}SEQKHIH5dae3e24{2}sw_fence{2}PFQKHJH4d4998a0{2}block_basic2{2}SERK`hFFIHf96947eb{2}sw_fence{2}PFRKHJH920ad768{2}sw_tree3{2}PGSKHIHddcd56ef{2}sw_tree2{2}RHSK`hFFI{1}"


let public_items = [];

// Lets make an array for each of the messages and remove the first item as it has no purpose for what we are trying to acheive also clear the message end char {1}
let items = roomItems.replace('{1}', '').split("{2}");

items.splice(0, 1);
items.forEach((element, index) => {
    // We are lucky that the sprite is in every seceond so lets check for that
    if (index % 2 == 0) {
        //console.log(`SPRITE: ${element}`)
    } else {
        //console.log(element)
        vl64Array = habboEncoding.vl64StringToArray(element);
        console.log(vl64Array)
        public_items.push({
            sprite: items[index - 1],
            x: vl64Array[0],
            y: vl64Array[1],
            z: vl64Array[2],
            rotation: vl64Array[3]
        });
    }

});


console.log(public_items)