<template>
  <div>
    <keep-alive>
    <activeItem
      v-if="item.isActive"
      :index="index"
      :item="item"
      @onSaveItem="editItem"
      @onDeleteItem="deleteItem"
      @onCancelEditing="toggleItem"
    />
      </keep-alive>
    <keep-alive>
    <div v-on:click="toggleItem">
      <inactiveItem
        v-if="!item.isActive"
        :index="index"
        :item="item"/>
    </div>
      </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import activeItem from './activeItem'
import inactiveItem from './inactiveItem'

@Component({
  components: { activeItem, inactiveItem },
  props: [
    'item',
    'index'
  ]
})
export default class listItem extends Vue {
  editItem (text) {
    this.$emit('onSaveItem', this.item.id, text)
  }

  toggleItem () {
    this.$emit('onToggleItem', this.item.id)
  }

  deleteItem () {
    this.$emit('onDeleteItem', this.item.id)
  }
}
</script>
