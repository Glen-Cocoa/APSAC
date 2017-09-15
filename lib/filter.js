function filterData(excelData,key,value_list){
	new_data_list = []
	for(index in excelData){
		var row = excelData[index]
		var row_value = row[key].toLowerCase()
		for(value_index in value_list){
			var value = value_list[value_index]
			if(value.toLowerCase() === row_value)_{
				new_data_list.push(row)
				}
			}
		}
	return new_data_list
	}
