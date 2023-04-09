<template>
    <div>
        <MyInput v-model="searchQuery" placeholder="Поиск..." v-focus />
        <div class="btns-wrap">
            <MyBtn @click="showDialog">Создать пост</MyBtn>
            <MySelect v-model="selectedSort" :options="sortOptions" />
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
        <!--  <div class="pag">
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
        </div> -->
    </div>
</template>

<script>
import PostsForm from "@/components/PostsForm";
import PostsList from "@/components/PostsList";
import axios from "axios";
export default {
    components: {
        PostsList,
        PostsForm,
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: "",
            searchQuery: "",
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                { value: "title", name: "По названию" },
                { value: "body", name: "По описанию" },
            ],
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPost() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers["x-total-count"] / this.limit
                );
                this.posts = response.data;
            } catch {
                console.log("Error");
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers["x-total-count"] / this.limit
                );
                this.posts = [...this.posts, ...response.data];
            } catch {
                console.log("Error");
            }
        },
        /*  changePage(pageNumber) {
            this.page = pageNumber;
        }, */
    },
    mounted() {
        this.fetchPost();
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(
                    post2[this.selectedSort]
                );
            });
        },
        sortedAndSearchPosts() {
            return this.sortedPosts.filter((post) => {
                if (
                    post.title
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase()) ||
                    post.body
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                ) {
                    return true;
                }
            });
        },
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
