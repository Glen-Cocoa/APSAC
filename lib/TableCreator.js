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
		rowStyle: rowStyle()
		})
	}

function rowStyle(row, index) {
  return {
    classes: 'text-nowrap another-class',
    css: {"color": "#7F297D", "font-size": "10px", "font-style":"italic"}
  };
}
