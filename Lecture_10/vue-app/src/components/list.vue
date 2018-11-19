<template>
  <div class="mx-auto mt-5 col-md-8">
    <ul class="list-group" id="list">
      <add-item @onAddNewItem="addNewItem" />
      <li v-for="(item, index) in items" :key="item.id" class="list-group-item">
        <listItem
          :index="index + 1"
          :item="item"
          @onSaveItem="editItem"
          @onDeleteItem="deleteItem"
          @onToggleItem="toggleItem"
        />
      </li>
    </ul>
  </div>
</template>

<script>

import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import addItem from './addItem'
import activeItem from './activeItem'
import inactiveItem from './inactiveItem'
import {getDefaultList} from '../utils/getDefaultList'
import {guid} from '../utils/guid'
import listItem from './listItem'

// export default Component({})(
//  class List extends Vue {
@Component({
  components: { listItem, addItem, activeItem, inactiveItem }
})
export default class list extends Vue {
  items = getDefaultList();

  addNewItem (text) {
    const item = {
      id: guid(),
      text,
      isActive: false
    }

    this.items.push(item)
  }

  editItem (id, text) {
    this.items = this.items.map(item => (item.id === id
      ? { ...item, text, isActive: !item.isActive }
      : item
    ))
  }

  toggleItem (id) {
    this.items = this.items.map(item => (item.id === id
      ? { ...item, isActive: !item.isActive }
      : item
    ))
  }

  deleteItem (id) {
    this.items = this.items.filter(item => (item.id !== id))
  }
}
</script>
