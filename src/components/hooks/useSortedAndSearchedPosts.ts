import { ref, computed } from "vue";

export default function useSortedAndSearchedPosts(sortedPosts: any) {
    const searchQuery = ref("");

    const sortedAndSearchPosts = computed(() => {
        return sortedPosts.value.filter((post: any) => {
            if (
                post.title
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase()) ||
                post.body
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase())
            ) {
                return true;
            }
        });
    });

    return {
        searchQuery,
        sortedAndSearchPosts,
    };
}
