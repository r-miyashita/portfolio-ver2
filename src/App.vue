<script setup lang="ts">
import Header from '@/components/HeaderCo.vue'
import Top from '@/views/TopView.vue'
import About from '@/views/AboutView.vue'
import Skills from '@/views/SkillsView.vue'
import Works from '@/views/WorksView.vue'
import Footer from '@/components/FooterCo.vue'

</script>

<template>
<Header />
<div class="container">
    <main>
        <Top id="top" />
        <About />
        <Skills id="skills" />
        <Works id="works" />
    </main>
</div>
<Footer />
</template>
