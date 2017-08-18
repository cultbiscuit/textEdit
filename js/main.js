function main(){
      var oEditor=document.getElementsByClassName("pangEditor")[0];
      var oEditValue=oEditor.getElementsByClassName("editorFiled")[0];
      var aMenu=oEditor.getElementsByClassName("menu"),
	  oReset=aMenu[0],
	  oBold=aMenu[1],
	  oItalics=aMenu[2],
	  oFontFamily=aMenu[3],
	  oLeft=aMenu[4],
	  oMid=aMenu[5],
          oRight=aMenu[6],
	  oCreateTable=aMenu[7],
          oPaint=aMenu[8];
      var oEditPaint=oEditor.getElementsByClassName("editorPaint")[0];  
      var oEditTable=oEditor.getElementsByClassName("editorTable")[0];

        clear();
      	bold();
      	italic();
      	font();
	left();
	center();
	right(); 
        creatTable();
	paint();
		
        //文字事件	   
	function clear(){ 	  
		oReset.addEventListener('click',function(){
		   	 changeStyle(oEditValue,{fontWeight:'normal',fontStyle:'normal',fontFamily:'微软雅黑',textAlign:'left'})
		   	 oEditValue.innerHTML=''; 
			 oEditPaint.innerHTML=''; 
			 oEditTable.innerHTML=''; 
			  });
		}			
	function bold(){
		 oBold.addEventListener('click',function(){
			changeStyle(oEditValue,{fontWeight:'bold'}); 
			oBold.addEventListener('click',function(){
					changeStyle(oEditValue,{fontWeight:'normal'}); 
					return bold();							 
					});				
			});
		}
	function italic(){   
		 oItalics.addEventListener('click',function(){
			changeStyle(oEditValue,{fontStyle:'italic'});   
			oItalics.addEventListener('click',function(){
					changeStyle(oEditValue,{fontStyle:'normal'});  
					return italic();
					});	
			});
		}
	function font(){
		 oFontFamily.addEventListener('click',function(){
			changeStyle(oEditValue,{fontFamily:'黑体'});
			oFontFamily.addEventListener('click',function(){
					changeStyle(oEditValue,{fontFamily:'微软雅黑'})
					return font();
					});	
			});
		}  
	function left(){		
		oLeft.addEventListener('click',function(){
			changeStyle(oEditValue,{textAlign:'left'})
			});
		}
	function center(){
		oMid.addEventListener('click',function(){
			changeStyle(oEditValue,{textAlign:'center'})
			});
		}	
	function right(){
		oRight.addEventListener('click',function(){
			changeStyle(oEditValue,{textAlign:'right'})
			});
		}			   			
       //表格事件
	 function creatTable(){
	  	 oCreateTable.addEventListener('click',function(){
			    oEditTable.innerHTML=''; 
            	   	var oWrap=document.createElement("div");
	         	    oEditTable.appendChild(oWrap);
	      		var table=new Table(oWrap);
	       		var width=prompt("输入表格总宽度：(例如55)"),
		  	    height=prompt("输入表格总高度：(例如55)"),
		  	    row=prompt("输入行数：(例如5)"),
		  	    col=prompt("输入列数：(例如5)");
               		table.createTable({width:width,height:height,row:row,col:col});	
              		 }); 
	   	}
      //画图事件
        function paint(){
        	oPaint.addEventListener('click',function(){   
			   oEditPaint.innerHTML=''; 
		       var penCursor=document.createElement('penCursor');
			   penCursor.className="penCursor";
			   penCursor.setAttribute('draggable',false);
			   penCursor.setAttribute('contenteditable',false);
			   oEditPaint.appendChild(penCursor);
			   
	          	  drag(penCursor,function(){
				var oPaintStyle=document.createElement('pen');
				oPaintStyle.className="oPaintStyle";
				oPaintStyle.style.left=l+'px';
				oPaintStyle.style.top=t+'px';
				oEditPaint.appendChild(oPaintStyle);	
			});	
               });
	  }
    }
