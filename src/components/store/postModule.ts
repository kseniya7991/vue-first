import axios from "axios";

export const postModule = {
    state: () => ({
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
    }),
    getters: {
        sortedPosts(state: any) {
            return [...state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(
                    post2[state.selectedSort]
                );
            });
        },
        sortedAndSearchPosts(state: any, getters: any) {
            return getters.sortedPosts.filter((post: any) => {
                if (
                    post.title
                        .toLowerCase()
                        .includes(state.searchQuery.toLowerCase()) ||
                    post.body
                        .toLowerCase()
                        .includes(state.searchQuery.toLowerCase())
                ) {
                    return true;
                }
            });
        },
    },
    mutations: {
        setPosts(state: any, posts: any) {
            state.posts = posts;
        },
        setDialogVisible(state: any, bool: boolean) {
            state.dialogVisible = bool;
        },
        setLoading(state: any, bool: boolean) {
            state.isPostsLoading = bool;
        },
        setSelectedSort(state: any, sort: string) {
            state.selectedSort = sort;
        },
        setSearchQuery(state: any, query: string) {
            state.searchQuery = query;
        },
        setPage(state: any, page: number) {
            state.page = page;
        },

        setTotalPages(state: any, total: number) {
            state.totalPages = total;
        },
    },
    actions: {
        //@ts-ignore
        async fetchPost({ state, commit }) {
            try {
                commit("setLoading", true);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        },
                    }
                );
                commit(
                    "setTotalPages",
                    Math.ceil(response.headers["x-total-count"] / state.limit)
                );
                commit("setPosts", response.data);
            } catch {
                console.log("Error");
            } finally {
                commit("setLoading", false);
            }
        },
        //@ts-ignore
        async loadMorePosts({ state, commit }) {
            try {
                commit("setPage", state.page + 1);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        },
                    }
                );

                commit(
                    "setTotalPages",
                    Math.ceil(response.headers["x-total-count"] / state.limit)
                );
                commit("setPosts", [...state.posts, ...response.data]);
            } catch {
                console.log("Error");
            }
        },
    },
    namespaced: true,
};
