<template>
  <div class="input-group col-md-8">
  <span class="input-group-addon">
    {{index}}.
  </span>
    <p>{{item.text}}</p>
  </div>
</template>

<script>
export default {
  props: [
    'index',
    'item'
  ],
  name: 'inactiveItem'
}
</script>
