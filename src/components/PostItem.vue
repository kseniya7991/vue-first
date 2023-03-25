<template>
    <div class="post">
        <div class="title"><strong>Название: </strong>{{ post.title }}</div>
        <div class="title"><strong>Описание: </strong> {{ post.body }}</div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style></style>
