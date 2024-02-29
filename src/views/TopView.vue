<script setup lang="ts">
import { onMounted } from 'vue';

onMounted((): void => {
    // 1- オーバーレイを外す 
    const overlay = document.querySelector('.js-ly-uncover') as HTMLDivElement
    overlay.classList.add('active')
    // 2- 背景ラベルを伸ばす 
    const labelBk = document.querySelector('.js-extend') as HTMLSpanElement
    labelBk.classList.add('active')
    // 3- トグルボタン
    const labelFt = document.querySelector('.js-toggle') as HTMLSpanElement
    labelFt.classList.add('active')
    // 4 親要素の拡大
    const kvContainer = document.querySelector('.js-expand') as HTMLDivElement
    kvContainer.classList.add('active')
    // 5 スクロールダウン
    setTimeout(() => {
        const arrow = document.querySelector('.js-arrow') as HTMLDivElement
        arrow.classList.add('active')
    }, 3500);
})

</script>

<template>
<section class="top" style="width: 100%; height: 100vh;">
    <div class="top__overlay js-ly-uncover"></div>
    <div class="top__inner">
        <div class="top__kv js-expand">
            <span class="top__lbl-back js-extend"></span>
            <span class="top__lbl-front js-toggle" >PORTFOLI<span class="m-noanim">O</span></span>
        </div>
        <div class="top__arrows js-arrow">
            <span><img src="@/assets/img/arrow.svg" alt=""></span>
            <span><img src="@/assets/img/arrow.svg" alt=""></span>
            <span><img src="@/assets/img/arrow.svg" alt=""></span>
        </div>
    </div>
</section>
</template>
