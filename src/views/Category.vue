<template>
    <div class="catgory">
       <van-nav-bar title="分类" left-arrow>
            <van-icon name="search" slot="right"/>
        </van-nav-bar>
        <div class="content">
            <div class="left">
                <div class="item" v-for="(item,index) in cate" :key="index">
                    {{item.category_name}}
                </div>
            </div>
            <div class="right">right</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){ return{
        cate:[],
    }},
    created(){
        this.getCate();
    },
    methods:{
        getCate(){
            this.$http.get("/mi/category.php")
            .then(res=>{
                this.cate = res.data.data;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>
    .category{
        flex:1;
        flex-direction: column;
    }
    .content{
        flex:1;
        display: flex;
    }
    .left{
        width: 1.5rem;
        height:100%;
        overflow: auto;
    }
    .right{
        flex:1;
        height:100%;
        overflow: auto;
    }
    .left .item{
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        font-size: .24rem;
        border-bottom: 1px solid #fafafa;
    }
</style>