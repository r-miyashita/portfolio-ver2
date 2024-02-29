<script setup lang="ts">
const closeMenu = () => {
    const drower = document.querySelector('.drower') as HTMLDivElement
    const button = document.querySelector('.menu-btn') as HTMLDivElement

    if( button.classList.contains('js-open') && drower?.classList.contains('js-open')) {
        button.classList.remove('js-open')
        drower.classList.remove('js-open')
    }
}
</script>

<template>
    <div class="drower" @click="closeMenu">
    <div class="drower__inner">
        <ul class="drower__list">
            <li class="drower__item" v-scroll-to="'#about'">ABOUT</li>
            <li class="drower__item"  v-scroll-to="'#skills'">SKILLS</li>
            <li class="drower__item" v-scroll-to="'#works'">WORKS</li>
        </ul>
    </div>
</div>
</template>