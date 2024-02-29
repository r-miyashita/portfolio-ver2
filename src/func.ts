function addClass(entries: any): void {
    entries.forEach( (entry: any) => {
        if(entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated')
        }
    });
}

function addIo(
    target: string,
    key: string,
    opts: object = {
        root: null,
        rootMargin: '0px',
    }
    ): void {
    const els = document.querySelectorAll(target)
    const addition = key
    const addClass = (entries: any): void => {
        entries.forEach( (entry: any) => {
            if(entry.isIntersecting && !entry.target.classList.contains(addition)) {
                entry.target.classList.add(addition)
                io.unobserve(entry.target)
            }
        });
    };
    const options = opts

    const io = new IntersectionObserver(addClass, options)
    els.forEach(el => {
        io.observe(el)
    });
}

function wrapTxt(
    /* 
        textを <span> でラップする
        @target: クラス名
        @delimiter?: 区切り文字( 区切り文字がある場合は、区切り文字は元の状態に戻す )
    */
    elm: string,
    delimiter: string = ''
    ): void {
        const target = (document.querySelector(elm)) as HTMLElement

        const txtArr: string[] = target.innerText.split(delimiter)
        let inner: string = ''

        for (const [index, word] of txtArr.entries()) {
            if (delimiter !== '' && (Number(index) + 1) === txtArr.length) {
                // 文字列末尾には delimiter をつけないための判定
                inner += `<span>${ word }</span>`
            } else if (delimiter !=='') {
                // 文字列末尾でない、 delimiter を元に戻す処理
                inner += `<span>${ word }</span>${ delimiter }` 
            } else if (delimiter === '') {
                // delimiter が無い場合の処理
                inner += `<span>${ word }</span>`
            }
        }
        target.innerHTML = inner
}


export { addClass, addIo, wrapTxt }