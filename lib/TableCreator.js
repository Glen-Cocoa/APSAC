function CreateTableFromJSON(excelData){
// EXTRACT VALUE FOR HTML HEADER.  
   var col = [];
    for (var i = 0; i < excelData.length; i++) {
      for (var key in excelData[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
          }
        }
      }
// CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		$(table).attr({"id":"table","data-toggle":"table","data-sort-name":"States","data-sort-order":"asc","data-search":"true","data-pagination":"true"})
// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
            th.className = 'header'
        }

// ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 1; i < excelData.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                  tabCell.className = col[j];
                  tabCell.id = excelData[i][col[j]];
                if(excelData[i][col[j]] != undefined && col[j] === 'Name of Program'){
                  tabCell.innerHTML = 
                    '<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">'+excelData[i][col[j]]+'</button>'; 
                } else {
                  tabCell.innerHTML = excelData[i][col[j]];           
            }
        }
    }
          
// ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
}

//append boxes to html file
/*
            var boxContainer = document.getElementByClass('queryboxContainer');
            boxContainer.innerHTML = '';
            boxContainer.appendChild()
*/
