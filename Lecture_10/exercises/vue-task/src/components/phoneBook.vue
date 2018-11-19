<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Phone</th>
    </tr>
    <template v-for="(person) in persons">
      <person
        :key="person.id"
        :person="person"
        @onDeletePerson="deletePerson"
      />
    </template>
  </table>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import person from './person'
import {getDefaultList} from '../utils/getDefaultList'

@Component({
  components: { person }
})
export default class addressBook extends Vue {
  persons = getDefaultList();

  deletePerson (id) {
    this.persons = this.persons.filter(item => (item.id !== id))
  }
}

</script>
