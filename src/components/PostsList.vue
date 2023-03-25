<template>
    <div>
        <PostItem v-for="post in posts" :post="post" />
    </div>
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
.post {
    border: 1px solid rgb(0, 33, 104);
    padding: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
