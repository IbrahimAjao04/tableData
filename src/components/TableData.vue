<template>
<div>
  <v-divider class="tw-pb-4" style="background-color:#E5E5E5;"/>
    <v-card rounded="16px"  class="content-card tw-rounded-lg">

      <div class="tw-flex tw-justify-between tw-px-5 tw-items-center">
      <div class="search-bar md:tw-w-2/5 tw-flex tw-rounded-lg">
        <div class="filter md:tw-flex md:tw-w-20 md:tw-pl-2.5 md:tw-items-center tw-py-2.5 tw-pr-2.5"
        > <v-icon>mdi-filter</v-icon> Filter</div>
        <v-text-field v-model="search" hide-details label="Search user by name, Email or date" solo flat prepend-inner-icon="mdi-magnify"
         class="input  md:tw-text-xs tw-font-normal tw-py-3" type="text"
          >
      </v-text-field>
      </div>
        <button class="btn-pay tw-p-2.5 tw-w-24 tw-text-base tw-font-semibold"
        >PAY DUES</button>
      </div>
      
      <v-data-table
          v-model="selected"
          :headers="headers"
          :items="payments"
          :single-select="singleSelect"
          item-key="name"
          show-default-footer
          show-select
          show-expand
          class=" tw-rounded-lg"
      >
      <!-- <template #[`item.data-table-expand`]="{ item }">
        <div class="">
          <div class="">{{item.name}}</div>
         
        

        </div>
      </template> -->
      
      <template #[`item.name`]="{ item }">
        <div class="tw-w-48 tw-py-2">
          <div class="item-name text-red-600 md:tw-text-sm md:tw-font-medium">{{item.name}}</div>
          <div class="item-email md:tw-text-sm md:tw-font-normal md:tw-tracking-wider">{{item.email}}</div>
        </div>
      </template>
      <template #[`item.status`]="{ item }">
        <div class="tw-py-2">
          <div :class="item.status==='Active'?'active':'inactive'">
            <v-icon :class="item.status==='Active'?'yes':'no'">mdi-circle-medium</v-icon>
            {{item.status}}</div>
          <div class="last-login md:tw-text-xs md:tw-font-normal">{{item.lastLogin}}</div>
        </div>
      </template>
      <template #[`item.paymentStatus`]="{ item }">
        <div class="tw-py-2" v-if="item.paymentStatus==='Paid'">
          <div class="paid">
            <v-icon color="#007f00">mdi-circle-medium</v-icon>
            {{item.paymentStatus}}
          </div>
          <div class="">{{item.paymentDate}}</div>
        </div>
        <div class="tw-py-2" v-else-if="item.paymentStatus==='Unpaid'">
          <div class="unpaid">
            <v-icon color="#965E00;">mdi-circle-medium</v-icon>
            {{item.paymentStatus}}</div>
          <div class="">{{item.paymentDate}}</div>
        </div>
        <div class="tw-py-2" v-else>
          <div class="overdue">
            <v-icon color="#D30000;">mdi-circle-medium</v-icon>
            {{item.paymentStatus}}</div>
          <div class="">{{item.paymentDate}}</div>
        </div>
      </template>
      <template #[`item.amount`]="{ item }">
        <div class=" tw-py-2">
          <div class="md:tw-text-right md:tw-text-sm tw-font-medium">{{item.amount}}</div>
          <div class="item-currency md:tw-text-xs md:tw-font-normal md:tw-text-right">{{item.currency}}</div>
        </div>
      </template>
     
      <template #[`item.action`]="{ item }">
        <div class="view-more tw-flex tw-py-2">
          <span class="tw-mr-6">View More</span>
        <v-icon  @click="editItem(item)">mdi-dots-vertical</v-icon>

        </div>
      </template>
      <template v-slot:expanded-item="{ item, headers }">
        <!-- <v-icon>mdi-arrow-bottom-circle-outline</v-icon> -->
        <td style="background-color:'#E5E5E5;'" :colspan="headers.length">
      <ExpandedComponent v-for="(data,i) in item.transactionDetails" :key="i" :item="data" />
          <hr/>
        </td>
    </template>
      </v-data-table>
    </v-card>
</div>
</template>

<script>
import ExpandedComponent from '@/components/ExpandedComponent'
export default {
  name: "TableData",
  components:{ExpandedComponent},
  data(){
    return{
      selected:[],
      search:'',
      payments:[]
    }
  },
  props:{
    headers: Array,
    data: Array,
    singleExpand: Boolean,
    singleSelect: Boolean,
  },
  watch:{
    data:{
      handler(val){
        this.payments = val
      },
      immediate:true,
      deep:true
    },
    search:function(val){
      this.payments = [...this.data.filter(item=>item.name.toLowerCase().indexOf(val.toLowerCase()) !== -1 || item.email.toLowerCase().indexOf(val.toLowerCase()) !== -1 )]
    }
  }
}
</script>

<style scoped lang="scss">
.view-more{
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #6E6893;
}
.paid{
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #007F00;
background: #CDFFCD;
border-radius: 10px;
padding: 2px;
width: 60px;
display: flex;
align-items: center;
}
.unpaid{
  font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #965E00;
background: #ffeccc;
border-radius: 10px;
width: 70px;
padding: 2px;
display: flex;
align-items: center;
}
.overdue{
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #D30000;
background: #FFE0E0;
border-radius: 10px;
padding: 2px;
width: 78px;
display: flex;
align-items: center;
}
.active{
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #4A4AFF;
background: #E6E6F2;
border-radius: 10px;
width: 70px;
display: flex;
align-items: center;
}
.inactive{
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #6E6893;
background: #F2F0F9;
border-radius: 10px;
width: 78px;
display: flex;
align-items: center;
}
.yes{
  color: #4A4AFF;
}
.no{
  color: #6E6893;

}
.item-name{
font-style: normal !important;
font-weight: 500 !important;
font-size: 14px !important;
line-height: 17px !important;
color: #25213B !important;
}
.item-email{
font-style: normal !important;
font-weight: 400 !important;
font-size: 14px !important;
line-height: 17px !important;
letter-spacing: 0.05em !important;
}
.item-status-active{
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;

color: #4A4AFF;
}
.last-login{
font-style: normal;
font-weight: 500;
color: #6E6893;
}
.item-currency{
  color: #6E6893;
}
.item-amount{
  color: #25213B;
}
.search-bar{
  display: flex;
  margin-right: 20px;
  
  margin-top: 15px;
  margin-bottom: 15px;
}
.filter{
  background: #FFFFFF;
  width: 88px;
  border: 1px solid #C6C2DE;
  border-radius: 6px;
  align-items: center;
}
.input {
  margin-left: 20px;
  // margin-right: 460px;
  border: none;
  background: #F4F2FF;
  border-radius: 6px;
 
}
.btn-pay {
  background: #6D5BD0;
  border-radius: 6px;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
}

</style>