/*修改样式*/
function changeStyle(obj,json){
	    var attr='';
	    for(attr in json)
		{
		  obj.style[attr]=json[attr];
		}
	}		 
	
	