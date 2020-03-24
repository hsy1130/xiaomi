<template>
    <div>
        <div class="heade">安心服务</div>
		<div class="banner"><img src="../assets/s_home.png" ></div>
		<div class="nav">
			<div class="lf">
				<img src="../assets/s_zzlp.png" alt="">
				<p>自助理赔</p>
			</div>
			<div class="rg">
				<p>最快捷的理赔方式</p>
				<img src="../assets/right-arrow-0d78d93c.png" alt="">
			</div>
		</div>
		<div class="nav">
			<div class="lf">
				<img src="../assets/s_bdxg.png" alt="">
				<p>车险保单修改</p>
			</div>
			<div class="rg">
				<p>自助车险保单批改</p>
				<img src="../assets/right-arrow-0d78d93c.png" alt="">
			</div>
		</div>
		<div class="nav">
			<div class="lf">
				<img src="../assets/s_dhba.png" alt="">
				<p>车险电话报案</p>
			</div>
			<div class="rg">
				<p>车险报案资料补充</p>
				<img src="../assets/right-arrow-0d78d93c.png" alt="">
			</div>
		</div>
		<div class="nav">
			<div class="lf">
				<img src="../assets/order_query_icon.png" alt="">
				<p>保单查询</p>
			</div>
			<div class="rg">
				<p>快速查询保单信息</p>
				<img src="../assets/right-arrow-0d78d93c.png" alt="">
			</div>
		</div>
    </div>
</template>
<script>
export default {
    beforeRouteLeave(to,from,next){
        let flag = window.confirm("现在是最合适的服务确定要离开吗");
        if(flag){
            next();
        }else{
            next(false);
        }
    }
}
</script>
<style>
.heade{
	width: 100%;height: 0.4rem;
	background-color: #fff;
	font-size: 0.18rem;
	font-weight: 999;
	color: #333;
	text-align: center;
	line-height: 0.4rem;
}
.banner{
	width: 100%;
	margin-bottom: 0.04rem;
}
.banner img{
	width: 100%;height: 100%;
	border-radius: 0 0 0.5rem 0.5rem;
}
.nav{
	
	margin: 0.18rem 0.15rem 0;
	height: 0.7rem;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	border-radius: 0.1rem;
	
}
.nav .lf,
.nav .rg{
	display: flex;
	align-items: center;
	padding: 0 0.1rem;
}
.nav .lf img{
	width: 0.24rem;height: 0.24rem;
	margin-right: 0.1rem;
}
.nav .lf p{
	font-size: 0.14rem;
	color: #333333;
}

.nav .rg img{
	width: 0.14rem;height: 0.14rem;
}
.nav .rg p{
	font-size: 0.12rem;
	color: #ccc;
}    
</style>