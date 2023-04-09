<template>
    <div v-if="posts.length > 0">
        <h2>Список постов</h2>
        <transition-group name="post-list">
            <PostItem
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <h2 v-else class="warning">
        Список постов пуст. Добавьте что-нибудь :)
    </h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style scoped>
.warning {
    color: red;
}
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.4s ease;
}
.post-list-enter-from {
    opacity: 0;
    transform: translateY(30px);
}
.post-list-leave-to {
}
.post-list-move {
    transition: transform 0.5s ease;
}
</style>
