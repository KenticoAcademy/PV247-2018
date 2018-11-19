<template>
  <div class="input-group col-md-8">
    <span class="input-group-addon">
         {{index}}.
    </span>
    <input class="form-control" type="text" v-model="inputValue"/>
    <span class="input-group-append">
      <button class="btn btn-primary"  v-on:click="saveItem"> Save </button>
      <button class="btn btn-default"  v-on:click="cancelEditing"> Cancel </button>
      <button class="btn btn-danger"  v-on:click="deleteItem"> Delete </button>
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

export default Component({props: [
  'item',
  'index'
]})(
  class activeItem extends Vue {
    inputValue = this.item.text;

    saveItem () {
      this.$emit('onSaveItem', this.inputValue)
    }

    cancelEditing () {
      this.$emit('onCancelEditing')
    }

    deleteItem () {
      this.$emit('onDeleteItem')
    }
  }
)
</script>
