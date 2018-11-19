<template>
  <li class="list-group-item">
    <div class="input-group col-md-8">
    <input class="form-control"  type="text" v-model="inputValue"/>
      <span class="input-group-btn">
    <button class="btn btn-default" v-on:click="addNewItem"> Add item </button>
      </span>
    </div>
  </li>

</template>

<script>
let inputValue = ''

export default {
  name: 'addItem',
  data: function () {
    return {
      inputValue
    }
  },
  methods: {
    addNewItem: function () {
      this.$emit('onAddNewItem', this.inputValue)
      this.inputValue = ''
    }
  }
}

</script>
