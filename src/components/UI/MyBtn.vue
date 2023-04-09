<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "MyBtn",
};
</script>
<style scoped>
.btn {
    padding: 10px;
    border-radius: 0;
    background-color: skyblue;

    margin-top: 15px;
}
</style>
