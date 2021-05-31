<template>
  <div class="Feed-item">
    <img
      crossorigin='anonymous'
      class="Feed-item-image"
      src="https://picsum.photos/300"
      alt="Random pic from picsum"
    />
    <div class="Feed-item-info">
      <p class="Feed-item-title">{{item.title}}</p>
      <span class="Feed-item-likes">
        {{`${item.id} like${item.id > 1 ? "s" : "" }`}}
      </span>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    item: Object
  }
}

</script>
<style scoped>
.Feed-item {
  margin-bottom: 1em;
}

.Feed-item-image {
  height: 300px;
  width: auto;
  background-color: #ffffff20;
  border-radius: 10px;
}

.Feed-item-info {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}

.Feed-item-title {
  padding-right: 1em;
  text-align: left;
}

.Feed-item-likes {
  flex: 0 0 20%;
}
</style>