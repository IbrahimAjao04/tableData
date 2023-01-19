<template>
  <div class="header">
    <div class="table-heading">TABLE HEADING</div>
<!--    <div style="display: flex; justify-content: space-between;">-->
      <v-tabs
          align-with-title
          class="tabs-and-amount"
      >
        <v-tabs-slider color="#25213b"></v-tabs-slider>
        <v-tab
            v-for="item in items"
            :key="item"
            color="#6e6893"
            class="tab tw-capitalize"
            @click="getPaymentDataByStatus(item)"
        >

          {{ item }}

        </v-tab>
        <v-tab-item>
          <TableData :data="getPaymentData"
                     :headers="headers"
                     :single-expand="singleExpand"
                     :single-select="singleSelect"
          />
        </v-tab-item>
        <v-tab-item>
          <TableData :data="getPaymentData"
                     :headers="headers"
                     :single-expand="singleExpand"
                     :single-select="singleSelect"
          />
        </v-tab-item>
        <v-tab-item>
          <TableData :data="getPaymentData"
                     :headers="headers"
                     :single-expand="singleExpand"
                     :single-select="singleSelect"
          />
        </v-tab-item>
        <v-tab-item>
          <TableData :data="getPaymentData"
                     :headers="headers"
                     :single-expand="singleExpand"
                     :single-select="singleSelect"
          />
        </v-tab-item>
      </v-tabs>
<!--      <div class="amount"> Total payable amount: $900.00 USD</div>-->
<!--    </div>-->
  </div>
</template>

<script>
import TableData from "@/components/TableData";
import {mapGetters} from "vuex";

export default {
  name: 'TableContainer',
  components: {TableData},
  data() {
    return {
      singleSelect: false,
      selected: [],
      expanded: true,
      singleExpand: false,
      tab: null,
      items: [
        'All', 'Paid', 'Unpaid', 'Overdue',
      ],
      headers: [
        {
          text: 'NAME',
          sortable: false,
          value: 'name',
          align: 'start',
        },
        {text: 'USER STATUS', value: 'status', align: 'start'},
        {text: 'PAYMENT STATUS', value: 'paymentStatus'},
        {text: 'AMOUNT', value: 'amount'},
        {text: ':', value: 'action', active: true, sortable: false}
      ],
     
    }
  },
  mounted(){
    if(!this.getPaymentData.length){
      this.getPaymentDataByStatus('All')
    }
  },
  computed:{
    ...mapGetters(['getPaymentData'])
  },
  methods:{
    getPaymentDataByStatus(item){
      console.log('item', item)
      this.$store.dispatch('getAllPaymentData',{status:item})
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper-card {
  width: 1300px;
  height: 100vh;
  margin: auto;
  background-color: #e5e5e5;
  background-size: auto;
  background-repeat: no-repeat;
}

.header{
  width: 75%;
  margin: auto;
  background: #E5E5E5;
}

.table-heading {
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: #6E6893;
  padding-top: 50px;
}
.header-line{
  display: flex;
  width: 100%;
  border: 1px solid #6E6893;
}
.tabs-and-amount{
  background: #E5E5E5;
}
.tabs{
  background: #E5E5E5;
}
.amount {
  width: 275px;
  font-size: 14px;
  color: #6E6893;
  display: flex;
  justify-content: end;
  //margin-left: 450px;
  margin-bottom: -20px;
}

.filter {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #6E6893;
  border: 0.5px solid #F4F2FF;
  display: flex;
  align-items: center;
  padding: 10px;
}
.input {
  width: 329px;
  margin-left: 20px;
  margin-right: 460px;
  border: none;
  background: #F4F2FF;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
}



.content-card {
  //width: 1100px;
  margin: auto;
}



</style>
