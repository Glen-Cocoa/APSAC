$(function(){
	var EXCEL_URL = "../lib/CM_Data_2017.09.28.2_working_copy_1.xlsx.1"
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
