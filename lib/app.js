$(function(){
//THIS VARIABLE IS YOUR DATA SOURCE. POINT IT AT WHATEVER EXCEL FILE NEEDS TO BE RENDERED.
	var EXCEL_URL = "https://trello-attachments.s3.amazonaws.com/59c414c6e1b51bd674d60438/59cd1d7860d7422175277269/5e05dc2c627c21ff13dfe43be6549c68/Data.xlsx"
	var TABLE_TARGET = "#table"
	
	//Renders table without any filtering
	window.filterTable = function(filter_obj){
		excel_data_filter.getExcelData(EXCEL_URL,filter_obj,TABLE_TARGET,excel_data_filter.loadTable)
		}
	window.filterTable({})

	//Renders table based on checkboxes checked
	var getCheckedFilters = function(){
		$("body").on("click","input[type='checkbox']",function(e){
			var filter = {}
			$('input:checked').each(function(){
				var key = $(this).attr('name')
				if(key === undefined){
					return
					}
				var value = $(this).val()
				//if key is undefined, set value to empty array
				if(filter[key] === undefined){
					filter[key] = []
					}
				//push value to array
				filter[key].push(value)
})
			//sort with object created
			window.filterTable(filter)
		})
	}
	getCheckedFilters()
})
