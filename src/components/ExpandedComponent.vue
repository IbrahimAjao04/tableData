<template>
  <div>
<div  class="expanded-content tw-px-24 tw-py-2 tw-flex tw-justify-between ">
    <div>
        <h2 v-if="showHeader" class="tw-mb-4 tw-py-4">DATE</h2>
        <h4 class="date">{{item.date}}</h4>
    </div>
    <div>
      <h2 v-if="showHeader" class="tw-mb-4 tw-py-4">USER ACTIVITY</h2>
      <h4 class="user-activity">{{item.userActivities}}</h4>

    </div>
    <div>
      <span v-if="showHeader" class="detail tw-pb-4 tw-py-4 tw-flex tw-items-center">DETAIL 
        <v-icon class="alert-icon">mdi-alert-circle-outline</v-icon></span>
      <h4 class="details" v-html="item.details"></h4>
    </div>
  </div> 
</div>

</template>

<script>
export default{
    name:'ExpandedComponent',
    props:{
        item:{
            type:Object
        },
        showHeader:Boolean
    }
}
</script>
<style scoped lang="scss">
.alert-icon{
  color: #8b83ba;
}
.expanded-content{
  border-top: 0.5px solid #F4F2FF;
  border-bottom: 0.5px solid #F4F2FF;
}
h2{
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6E6893;
}
.date{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #6E6893;
}
.user-activity{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #25213B;
}
.details{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #25213B;
}
.detail{
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6E6893;

}
</style>
