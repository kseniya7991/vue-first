<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div class="title"><strong>Название: </strong>{{ post.title }}</div>
            <div class="title"><strong>Описание: </strong> {{ post.body }}</div>
        </div>
        <div class="btns-wrap">
            <MyBtn class="btn" @click="$router.push(`/post/${post.id}`)"
                >Открыть</MyBtn
            >
            <MyBtn class="btn" @click="$emit('remove', post)">Удалить</MyBtn>
        </div>
    </div>
</template>

<script>
export default {
    compontents: {},
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
.post {
    border: 1px solid rgb(0, 33, 104);
    padding: 15px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
