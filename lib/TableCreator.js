function bootstrap(){
	$("#table").bootstrapTable({
		data: excelData,
		striped:true,
		searchable:true,
		sortOrder: 'asc',
		sortName:"Name of Program",
		pagination: true,
		cardView: true,
		showToggle: true,
		clickToSelect: true,
		detailView: true,
		pageSize:8,
		showColumns:true,
		rowStyle: rowStyle(),
		maintainSelected: true,
		})
	}

function detailFormatter(index, row){
	var html = []
	$.each(row, function(key, value){
		html.push("<p><b>"+key+":</b>"+value+"</p>")
		})
	return html.join("")
	}

function rowStyle(row, index) {
  return {
    classes: 'text-nowrap another-class',
    css: {"color": "#7F297D", "font-size": "10px"}
  };
}
