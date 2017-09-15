$(function(){
//	bootstrap()
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
