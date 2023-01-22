<template>
  <div class="app-div">
    <TableContainer/>
  </div>
</template>

<script>
import TableContainer from './components/TableContainer';
export default {
  name: 'App',

  components: {
    TableContainer,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" >
.app-div{
  background: #E5E5E5;
  width: 100%;
  height: 100vh;
}
.theme--light.v-tabs > .v-tabs-bar{
  background-color: #E5E5E5 !important;
}
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot{
  background: #E5E5E5 !important;

}
.v-data-table-header{
  background: #E5E5E5 !important;

}
.v-data-table > .v-data-table__wrapper > table {
    border-spacing: 0 0.5rem;
}
.v-data-table > .v-data-table__wrapper tbody tr.v-data-table__expanded__content{
  box-shadow: none !important;
  background: #E5E5E5 !important;
}
.v-data-footer{
  justify-content: end !important;
}
</style>
