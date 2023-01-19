<template>
<div  class="expanded-content tw-flex tw-justify-between ">
    <div>
        <p>DATE</p>
        <h4>{{item.date}}</h4>
    </div>
    <div>
        <p>USER ACTIVITY</p>
        <h4>{{item.userActivities}}</h4>
    </div>
    <div>
        <p>DETAIL</p>
        <h4>{{item.details}}</h4>
    </div>
    
    {{item.message}}
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
    // border: 1px solid #e5e5e5;
}
</style>
