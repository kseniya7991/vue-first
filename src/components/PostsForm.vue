<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <MyInput
            v-model="post.title"
            v-focus
            type="text"
            placeholder="Название"
        />
        <MyInput v-model="post.body" type="text" placeholder="Описание" />

        <MyBtn class="btn" @click="createPost">Создать</MyBtn>
    </form>
</template>

<script>
export default {
    components: {},
    props: {
        dialogVisible: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
        };
    },

    methods: {
        createPost() {
            this.$emit("update:dialogVisible", false);

            this.post.id = Date.now;
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
            };
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

form h4 {
    font-size: 20px;
}
</style>
