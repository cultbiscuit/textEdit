 function drag(obj,callback){
	  obj.onmousedown=function(ev){
		 var oEvent=ev||event;
		 var disX=oEvent.clientX-obj.offsetLeft;
	         var disY=oEvent.clientY-obj.offsetTop;
				  
		 document.onmousemove=function(ev){		
				  var oEvent=ev||event;
				  l=oEvent.clientX-disX;//鼠标移动的偏移量，定为全局变量
				  t=oEvent.clientY-disY;
		  
				  obj.style.left=l+'px';
				  obj.style.top=t+'px';
					  
				 callback();
			 };
		 document.onmouseup=function(){
				  document.onmousemove=null;
				  document.onmouseup=null;
		        };
	 };
}
