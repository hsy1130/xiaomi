<template>
    <div class="header">
        <a href="" class="logo">
            <img src="./../assets/logo.png" alt="" height="18">
        </a>
        <input type="text">
        <div class="btn">
            <img src="./../assets/user.png" alt="" height="22">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
    .header{
        line-height: 44px;
        height: 44px;
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        width: 100%;
    }
    .btn,
    .logo{
        height: 44px;
        width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header input{
        flex:1;
        border:0;
        line-height: 29px;
    }
</style>