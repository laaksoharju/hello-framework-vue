<template>
  <nav class="Nav-bar-container">
    <ul class="Nav-bar">
      <li>
        <router-link to="/">Home</router-link> |
      </li>
      <li>
        <router-link to="/feed">Feed</router-link>
      </li>
    </ul>
    <label class="switch">
      <input
        type="checkbox"
        @click="toggleDarkMode()"
        :checked="darkMode?'checked':''"
      />
      <span class="slider round" />
    </label>
  </nav>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    methods: {
      toggleDarkMode() {
        this.$store.dispatch('toggleDarkMode');
      }
    },
    computed: mapState ({
      darkMode: state => state.darkMode
    })
  }
</script>
<style scoped>

.Nav-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1.5em;
}

.Nav-bar {
  display: flex;
  justify-content: center;
  list-style: none;
}

.Nav-bar > * {
  padding-right: 1em;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: var(--white);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--link);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--link);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>