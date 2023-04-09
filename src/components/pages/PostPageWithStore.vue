<template>
    <div>
        <MyInput
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск..."
            v-focus
        />
        <div class="btns-wrap">
            <MyBtn @click="showDialog">Создать пост</MyBtn>
            <MySelect
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>

        <MyPopup v-model:show="dialogVisible">
            <PostsForm
                @create="createPost"
                v-model:dialogVisible="dialogVisible"
            />
        </MyPopup>

        <PostsList
            v-if="!isPostsLoading"
            :posts="sortedAndSearchPosts"
            @remove="removePost"
        />
        <div v-else>Идет загрузка</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
        <div class="pag">
            <div
                class="page-item"
                v-for="pageNum in totalPages"
                :key="pageNum"
                :class="{
                    'page-current': page === pageNum,
                }"
                @click="changePage(pageNum)"
            >
                {{ pageNum }}
            </div>
        </div>
    </div>
</template>

<script>
import PostsForm from "@/components/PostsForm";
import PostsList from "@/components/PostsList";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: {
        PostsList,
        PostsForm,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
        };
    },
    methods: {
        ...mapMutations({
            setPage: "post/setPage",
            setSearchQuery: "post/setSearchQuery",
            setSelectedSort: "post/setSelectedSort",
        }),
        ...mapActions({
            loadMorePosts: "post/loadMorePosts",
            fetchPost: "post/fetchPost",
        }),
        createPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },
    mounted() {
        this.fetchPost();
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            dialogVisible: (state) => state.post.dialogVisible,
            isPostsLoading: (state) => state.post.isPostsLoading,
            selectedSort: (state) => state.post.selectedSort,
            searchQuery: (state) => state.post.searchQuery,
            page: (state) => state.post.page,
            limit: (state) => state.post.limit,
            totalPages: (state) => state.post.totalPages,
            sortOptions: (state) => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: "post/sortedPosts",
            sortedAndSearchPosts: "post/sortedAndSearchPosts",
        }),
    },
    watch: {
        /* page() {
            this.fetchPost();
        }, */
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
