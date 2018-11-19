<template>
  <tr>
    <td>
      {{person.name}}
    </td>
    <td>
      {{person.surname}}
    </td>
    <td>
      {{person.phoneNumber | formatNumber}}
    </td>
    <td>
      <button v-on:click="deletePerson"> Delete </button>
    </td>
  </tr>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

function formatNumber (value) {
  let phone = value.toString()
  phone = [phone.slice(0, 3), ' ', phone.slice(3)].join('')
  phone = [phone.slice(0, 7), ' ', phone.slice(7)].join('')
  return phone
}

export default Component({
  props: ['person'],
  filters: {formatNumber}
})(
  class person extends Vue {
    deletePerson () {
      this.$emit('onDeletePerson', this.person.id)
    }
  }
)
</script>
