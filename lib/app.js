$(function(){
	var EXCEL_URL = "../lib/data.xlsx"
	var TABLE_TARGET = "#table"
	
	//Renders table without any filtering
	window.filterTable = function(filter_obj){
		excel_data_filter.getExcelData(EXCEL_URL,filter_obj,TABLE_TARGET,excel_data_filter.loadTable)
		}
	window.filterTable({})

	//Renders table based on checkboxes checked
	var getCheckedFilters = function(){
		$("body").on("click","input[type='checkbox']",function(e){
			checked_filters = []
			var obj = {}
			var $this = $(this);
			var key = $this.attr("name")
			obj[key] = checked_filters
			$('input[name="' + $this.attr('name') + '"]:checked').each(function(){
				checked_filters.push($(this).val())
			})
			if(!checked_filters){
				window.filterTable({})
			}
			else{
				window.filterTable(obj)
			}
	console.log(key,checked_filters)
		})
	}
	getCheckedFilters()
})
