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
