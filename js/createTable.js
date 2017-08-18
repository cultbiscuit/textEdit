/*表格构造函数*/	
    function Table(nodeElement){
		this.nodeElement=nodeElement||document.body;
		this.cellWidth=0;
		this.cellHeight=0;
	}

    Table.prototype={
		createTable:function(json){
		    this.nodeElement.style=null;		
		    this.nodeElement.style.width=json.width+"px";
		    this.nodeElement.style.height=json.height+"px";
		    this.nodeElement.style.margin="auto";
			
		    this.cellWidth=json.width/json.col;
		    this.cellHeight=json.height/json.row;
			
		    this.cssCon(); 
			
		    for(var i = 0;i<json.row;i++)
		    {
			var rowEle = document.createElement("div");
			rowEle.setAttribute("contenteditable",false);
			rowEle.className = "row";
			this.nodeElement.appendChild(rowEle);
			if(i%2==0){
				rowEle.className= "doubleRow";
			 }
			 for(var j = 0;j<json.col;j++)
			  {
				var colEle = document.createElement("div");
				colEle.setAttribute("contenteditable",true);
				colEle.className = "col";
				rowEle.appendChild(colEle);
			  }
		     }
		},
		cssCon:function(){
			var css = document.getElementsByTagName("style")[0];		
			css.innerHTML+=".row{height:"+this.cellHeight+"px;background:#999;} " //奇行样式，
			css.innerHTML+=".doubleRow{height:"+this.cellHeight+"px;background:#677;}"//偶行样式
			css.innerHTML+=".col{width:"+this.cellWidth+"px;float:left;height:"+this.cellHeight+"px;border:1px solid #fff;box-sizing:border-box;text-align:center;}"
		}
		
	};	
