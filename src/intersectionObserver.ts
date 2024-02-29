import { addIo } from "./func"; 

// フェードイン
addIo(
    '.js-fadein',
    'active',
    {
        rootMargin: '-5%'
    }
)
addIo(
    '.js-fadein15',
    'active',
    {
        rootMargin: '-15%'
    }
)

//バウンド
addIo(
    '.js-ic-bound',
    'active',
    {
        rootMargin: '-20%'
    }
)

// アンカバー
addIo(
    '.js-ic-uncover',
    'active',
    {
        rootMargin: '-15%'
    }
)
addIo(
    '.js-lbl-anim-ph1',
    'active',
    {
        rootMargin: '-15%'
    }
)
addIo(
    '.js-lbl-anim-ph2',
    'active',
    {
        rootMargin: '-15%'
    }
)

// テキストアニメーション
addIo(
    '.js-txt-bound',
    'active',
    {
        rootMargin: '-20%'
    }
)
addIo(
    '.js-txt-rotateY',
    'active',
    {
        rootMargin: '-15%'
    }
);

/* 初回のビューポートイン時にビデオのオートプレイをつける */
(() => {
    const els = document.querySelectorAll('.js-play-once');
    const addAttr = (entries: any): void => {
        entries.forEach( (entry: any) => {
            if(entry.isIntersecting && !entry.target.autoplay) {
                entry.target.play()
                io.unobserve(entry.target)
            }
        })
    }
    const options =
    {
        rootMargin: '-35%'
    }

    const io = new IntersectionObserver(addAttr, options);
    els.forEach(el => {
        io.observe(el)
    })
})(); // 即実行

/* Aboutセクションが入ったタイミングでヘッダーロゴを出現させる */
(() => {
    const els = document.querySelectorAll('.about');
    const addAttr = (entries: any): void => {
        entries.forEach( (entry: any) => {
            if(entry.isIntersecting) {
                document.querySelector('.header__logo')?.classList.add('active')
                io.unobserve(entry.target)
            }
        })
    }
    const options =
    {
        rootMargin: '-20%'
    }

    const io = new IntersectionObserver(addAttr, options);
    els.forEach(el => {
        io.observe(el)
    });
})(); // 即実行