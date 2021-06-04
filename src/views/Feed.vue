<template>
  <div class="App" v-on:scroll="loadingListener">
    <div class="App-header">
      <div v-for="item in feedItems" ref="feedItems" :key="item.id">
        <FeedItem :item="item"/>
      </div>
      <Loader
        :loading="isFetchingMore"
      />
    </div>
  </div>
</template>
<script>
import FeedItem from "@/components/FeedItem";
import Loader from 'vue-spinner/src/FadeLoader.vue'

export default {
  components: {
    FeedItem,
    Loader 
  },
  data () {
    return {
      feedItems: [],
      isFetchingMore: false,
      page: 1
    }
  },
  created () {
    this.fetchPosts();
  },
  methods: {
    fetchPosts () {
      this.isFetchingMore = true;
      fetch(`http://jsonplaceholder.typicode.com/photos?_page=${this.page}&_limit=20`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((json) => {
        this.feedItems = [...new Set([...this.feedItems, ...json])];
        this.page = this.page + 1;
        this.isFetchingMore = false;
      })
      .catch((err) => {
        if (err.message) {
          this.setError(err.message);
        }
      });
    },
    setError(msg) {
      console.log(msg);
    },
    loadingListener() {
        const lastPostPos = this.$refs.feedItems.slice(-1)[0].getBoundingClientRect().top;
        const visiblePortion = document.documentElement.clientHeight;
        if( lastPostPos <= visiblePortion && !this.isFetchingMore)
            this.fetchPosts();
    }
  }
}
</script>
<style scoped>
.App {
  text-align: center;
  height:90vh;
  overflow: scroll;
}

.App-header {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  padding-top: 1.5em;
}
</style>