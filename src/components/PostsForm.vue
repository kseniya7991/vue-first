<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Название"
        />
        <input
            v-model="post.body"
            class="input"
            type="text"
            placeholder="Описание"
        />
        <button class="btn" @click="createPost">Создать</button>
    </form>
</template>
<script>
export default {
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

form .btn {
    padding: 10px;
    border-radius: 0;
    background-color: skyblue;

    margin-top: 15px;

    margin-left: auto;
}

.input {
    border: 1px solid skyblue;
    border-radius: 0;
    padding: 10px;
    font-size: 15px;
    margin-top: 15px;
    width: 100%;
}
</style>
