<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue 3</div>
        <div class="btn-wrap">
            <MyBtn @click="$router.push('/post')">Посты</MyBtn>
            <MyBtn @click="$router.push('/about')">О приложении</MyBtn>
            <MyBtn @click="$router.push('/store')">store</MyBtn>
            <MyBtn @click="$router.push('/composition')">Composition</MyBtn>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-shadow: 0px 0px 4px gray;

    .btn-wrap {
        display: flex;
        align-items: flex-start;
        gap: 15px;

        .btn {
            margin-top: 0;
        }
    }
}
</style>
