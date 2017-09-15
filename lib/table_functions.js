$(function(){
	$("#message").hide()
	$("#container").show()
	showBoxes()
});

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

function toggleBox(input) {
    var x = document.getElementById(input);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

$(function(){
	$("#clear-search").click(function(){
		$('.clearTarget').each(function(){
			this.checked = false; 
		}); 
	});
});

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
