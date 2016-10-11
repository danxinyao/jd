/**
 * Created by Administrator on 2016/9/26.
 */
// $(function(){

//     $(".jdkb-hf li i").each(function(index,ele){
       
//     $(".jdkb-hf li i")[index].css="background-position","0 "+-(index*25)+"px";
//     })

// })
window.onload=function(){
	var jd =document.getElementsByClassName("jdkb-hf")[0];
	var is=jd.getElementsByTagName("i");
	/*console.log(is.length);*/
	for(var i=0;i<is.length;i++){
		is[i].style.backgroundPosition="0 "+-25*i+"px";
		/*console.log(i);*/
	}
	
}