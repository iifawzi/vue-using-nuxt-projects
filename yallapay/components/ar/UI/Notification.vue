<template>
    <div v-if="show" class="notification"  v-on:click="HideNotfi" :class="notfiType">
        <h4 class="thestatement ">{{message}}</h4>
    </div>
</template>



<style class="scoped">
    .notification {
        width: auto;
        height: 50px;
        padding: 15px;
        border: 1px solid #cccccc;
        border-radius: 8px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .failed {
        background-color: rgb(221, 7, 78);
    }
    .success {
        background-color: rgba(35, 182, 35, 0.849);
    }
    .thestatement{
font-size: 15px;
margin: 0 auto;
    }
</style>

<script>
export default {
    data(){
        return {
            show: true,
        }
    },
    props: {
        notfiType :{
            type: String,
            required: true,
        },
        message : {
            type: String,
            required: true,
        }
    },
    methods: {
      HideNotfi() {
      this.show = false;
    },
    }
}
</script>