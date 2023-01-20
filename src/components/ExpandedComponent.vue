<template>
<div  class="expanded-content tw-flex tw-justify-between ">
    <div>
        <h2>DATE</h2>
        <h4 class="date">{{item.date}}</h4>
    </div>
    <div>
      <h2>USER ACTIVITY</h2>
      <h4 class="user-activity">{{item.userActivities}}</h4>

    </div>
    <div>
      <h2>DETAIL</h2>
      <h4 class="details" v-html="item.details">{{item.details}}</h4>
    </div>
    
<!--    {{item.message}}-->
</div>

</template>

<script>
export default{
    name:'ExpandedComponent',
    props:{
        item:{
            type:Object
        }
    }
}
</script>
<style scoped lang="scss">
.expanded-content{
    border: 1px solid #6E6893;
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
</style>
