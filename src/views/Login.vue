<template>
    <div>
        <van-nav-bar
        title="登录"
        left-arrow
        @click-left="$router.go(-1)"
        />
        <van-cell-group style="margin-top:15px">
            <van-field v-model="uname" placeholder="用户名"/>
            <van-field type="password" placeholder="密码" v-model="upwd"/>
        </van-cell-group>
        <div style="margin:15px">
            <van-button color="#f30" @click="login" round block>登录</van-button>
        </div>
    </div>
</template>
<style>
.van-nav-bar .van-icon{
    color:#666 !important;
}
</style>
<script>
import Cookie from '../assets/js/Cookie';
export default {
    data(){
        return {
            uname:"",
            upwd:"",
        }
    },
    methods:{
        login(){
            this.$http({
                method:"POST",
                url:"http://www.520mg.com/member/index_login.php",
                data:`fmdo=login&dopost=login&userid=${this.uname}&pwd=${this.upwd}`,
                configs:{withCreadentials:true}
            })
            .then(res=>{
                console.log(res.data);
                if(res.data.status==1){
                    this.$notify({ type: 'success', message: res.data.msg});
                    Cookie.setCookie("uname",this.uname);
                    let redirect = this.$route.query.redirect;
                    console.log("redirect",redirect);
                    if(redirect){
                        this.$router.replace(redirect);

                    }else{
                        this.$router.replace("/user");
                    }
                }else{
                    this.$notify({ type: 'danger', message: res.data.msg});
                }
            })
            
            
        }
    }
}
</script>