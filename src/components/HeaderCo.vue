<script setup lang="ts">
import Drower from './DrowerCo.vue';
const toggleMenu = (e: Event) => {
    const button = e.target as HTMLDivElement
    const drower = document.querySelector('.drower') as HTMLDivElement

    if( button.classList.contains('js-open') && drower?.classList.contains('js-open')) {
        button.classList.remove('js-open')
        drower.classList.remove('js-open')
    } else {
        button.classList.add('js-open')
        drower.classList.add('js-open')
    }
}

</script>
<template>
<header class="header">
    <div class="header__inner">
        <span class="header__logo" v-scroll-to="'#top'">
            <img src="@/assets/img/header-ic-green.svg" alt="">
            <span></span>
        </span>
        <nav class="header__gnav">
            <ul class="header__menu">
                <li class="header__menu-item" v-scroll-to="'#about'">ABOUT</li>
                <li class="header__menu-item" v-scroll-to="'#skills'">SKILLS</li>
                <li class="header__menu-item" v-scroll-to="'#works'">WORKS</li>
            </ul>
        </nav>
        <div class="menu-btn" @click="toggleMenu">
            <div class="menu-btn__inner">
                <div class="menu-btn__ic m--ham"><span></span><span></span></div>
                <div class="menu-btn__ic m--close"><span></span><span></span></div>
            </div>
        </div>
    </div>
</header>

<Drower />
</template>
