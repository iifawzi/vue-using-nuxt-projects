<template>
    <span class="ColListItem"><i class="fas fa-arrow-left mr-2 colListIcon"></i> <nuxt-link class="ColListItem-label" :to="to"><slot/></nuxt-link>  
    </span>
</template>
<script>
export default {
    props:{
        to:{
            type:String,
            required:true,
        }
    }
}
</script>
<style lang="scss" scoped>
.ColListItem {
    color: white;
    a{
 text-decoration: none;
    }
    &:hover{
       .ColListItem-label{
    color: #ff2a31;
} 
.colListIcon{
    color: #ff2a31;
    font-size: 12px;
}
    }
}
.ColListItem-label{
    text-decoration: none;
    color: #bebebe;
  box-shadow: 0 5px 25px rgba(255, 255, 255, 0.1);

    
}
.colListIcon{
    color: #e7e7e7;
    font-size: 14px;
}
</style>