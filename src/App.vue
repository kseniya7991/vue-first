<template>
    <div class="app">
        <NavBar></NavBar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "@/components/UI/NavBar.vue";
export default {
    components: { NavBar },
};
</script>

<style lang="scss" scoped></style>
