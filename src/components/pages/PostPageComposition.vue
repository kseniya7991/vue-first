<template>
    <div>
        <MyInput v-model="searchQuery" placeholder="Поиск..." v-focus />
        <div class="btns-wrap">
            <MyBtn>Создать пост</MyBtn>
            <MySelect v-model="selectedSort" :options="sortOptions" />
        </div>

        <MyPopup v-model:show="dialogVisible">
            <PostsForm />
        </MyPopup>

        <PostsList v-if="!isPostsLoading" :posts="sortedAndSearchPosts" />
        <div v-else>Идет загрузка</div>
    </div>
</template>

<script>
import PostsForm from "@/components/PostsForm";
import PostsList from "@/components/PostsList";
import axios from "axios";
import { ref } from "vue";

import usePosts from "@/components/hooks/usePosts";
import useSortedPosts from "@/components/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/components/hooks/useSortedAndSearchedPosts";
export default {
    components: {
        PostsList,
        PostsForm,
    },
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                { value: "title", name: "По названию" },
                { value: "body", name: "По описанию" },
            ],
        };
    },
    methods: {},

    setup(props) {
        const { posts, totalPages, isPostsLoading } = usePosts(10);

        const { sortedPosts, selectedSort } = useSortedPosts(posts);
        const { searchQuery, sortedAndSearchPosts } = useSortedAndSearchedPosts(
            sortedPosts
        );

        return {
            posts,
            totalPages,
            isPostsLoading,
            sortedPosts,
            searchQuery,
            sortedAndSearchPosts,
        };
    },
};
</script>

<style>
@import "@/styles/normalize.scss";

.app {
    padding: 20px;
}
.btns-wrap {
    display: flex;
    gap: 30px;
}
.pag {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 30px;
}
.page-item {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border: 1px solid teal;
    cursor: pointer;

    transition-property: opacity, background-color;
    transition-duration: 0.3s;
}

.page-current {
    background-color: teal;
    color: white;
}

.page-item:hover {
    opacity: 0.5;
}

.observer {
    height: 30px;
    background-color: green;
}
</style>
