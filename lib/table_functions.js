$(function(){
	$("#export-excel").click(function(){
		$("#table").tableExport({
			type:"excel",
			escape:false
			})
		})
	})

$(function(){
	$("#export-pdf").click(function(){
		$("#table").tableExport({
			type:"pdf",
			escape:false
			})
		})
	})

function detailFormatter(index, row){
	var html = []
	$.each(row, function(key, value){
		html.push("<p><b>"+key+":</b>"+value+"</p>")
		})
	return html.join("")
	}