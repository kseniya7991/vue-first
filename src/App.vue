<template>
  <div class="app">
      <PostsForm @create="createPost" />
      <PostsList :posts="posts" />
  </div>
</template>

<script>
import PostsForm from "@/components/PostsForm";
import PostsList from "@/components/PostsList";
export default {
  components: {
      PostsList,
      PostsForm,
  },
  data() {
      return {
          posts: [
              { id: 1, title: "JS 1", body: "Описание поста" },
              { id: 2, title: "JS 2", body: "Описание поста" },
              { id: 3, title: "JS 3 ", body: "Описание поста" },
              { id: 4, title: "JS 4", body: "Описание поста" },
          ],
      };
  },
  methods: {
      createPost(post) {
          this.posts.push(post);
      },
  },
};
</script>

<style>
@import "./styles/normalize.scss";

.app {
  padding: 20px;
}
</style>
