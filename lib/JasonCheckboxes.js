var showBoxes = function(){

var states = "Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District Of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming".split(",")

var listStates = function(){
	for(var i = 0; i < states.length; i++){ 
		states_li = $("<div 	xid="+states[i]+"><input type='checkbox' name="+states[i]+" rel='States' value="+states[i]+" id="+states[i]+"><label for="+states[i]+">"+states[i]+"</label><br></div>")
		$("#states").append(states_li)
		}
	}
  listStates()
var types = ["Community College","Private University","State University","Other"]

var listTypes = function(){
	for(var i = 0; i < types.length; i++){
		types_li = $("<input type='checkbox' value="+types[i]+" rel='Types' id="+types[i]+"><label for="+types[i]+">"+types[i]+"</label><br>")
		$("#types").append(types_li)
		}
	}
  listTypes()
var academic_departments = ["Counseling","Criminal Justice/Law Enforcement","Education","Government/Public Policy/Public Administration","Human Development","Law","Liberal Arts/College of Arts and Sciences","Medical School","Nursing School","Psychology","Public Health","Social Sciences,","Social Work","Sociology","Other"]

var listAcademicDepartments = function(){
	for(var i = 0; i < academic_departments.length; i++){
		academic_departments_li = $("<input type='checkbox' value="+academic_departments[i]+" rel='Academic Departments' id="+academic_departments[i]+"><label for="+academic_departments[i]+">"+academic_departments[i]+"</label><br>")
		$("#academic_departments").append(academic_departments_li)
		}
	}
listAcademicDepartments()

var degree_types = ["Undergraduate","Graduate (Masters)","Graduate (Doctorate)","Professional Education (Medical, Law)","Certificate","Coarses offered in child maltreatment, but no certification/degree"]

var listDegreeTypes = function(){
	for(var i = 0; i < degree_types.length; i++){
		degree_types_li = $("<input type='checkbox' value="+degree_types[i]+" rel='Degree Types' id="+degree_types[i]+"><label for="+degree_types[i]+">"+degree_types[i]+"</label><br>")
		$("#degree_types").append(degree_types_li)
		}
	}
listDegreeTypes()

var levels_of_study = ["Major","Minor","Certification","Other"]

var listLevelsOfStudy = function(){
	for(var i = 0; i < levels_of_study.length; i++){
		levels_of_study_li = $("<input type='checkbox' value="+levels_of_study[i]+" rel='Levels of Study Available' id="+levels_of_study[i]+"><label for="+levels_of_study[i]+">"+levels_of_study[i]+"</label><br>")
		$("#levels_of_study").append(levels_of_study_li)
		}
	}
listLevelsOfStudy()

var study_options = ["In Person","Online Program","Hybrid"]

var listStudyOptions = function(){
	for(var i = 0; i < study_options.length; i++){
		study_options_li = $("<input type='checkbox' value="+study_options[i]+" rel='Study Options' id="+study_options[i]+"><label for="+study_options[i]+">"+study_options[i]+"</label><br>")
		$("#study_options").append(study_options_li)
		}
	}
listStudyOptions()

var sortTable = function(){
	$("input:checkbox").click(function(){
		var show_all = true
		$("tr").not(".header").hide()
		$("input[type=checkbox]").each(function(){
			if($(this)[0].checked){
				show_all = false
				var status = $(this).attr("rel")
				var value = $(this).val()
				$("td." + status + "[rel='" + value + "']").parent("tr").show()
				}
			})
		if(show_all){
			$("tr").show()
			}
		})
	}
}
		$('#stateButton').on('click', function(){
			console.log('test')
			$('stateButton').toggle(
				$("#states").css({"display": "list-item"}),
    		$("#states").css({"display": "none"})
				)
		});
/*
		$(document).ready(function() {
			var threshold = 3;
			//if (document.getElementById("").children().not(".show").length > threshold) {
				$(".show.more").css("display", "block");
			//}
			$(".show.more").on("click", function() {
				$(this).parent().children().not(".show").css("display", "block");
				$(this).parent().find(".show.less").css("display", "block");
				$(this).hide();
			});
			$(".show.less").on("click", function() {
				$(this).parent().children(":nth-child(n+" + (threshold + 1) + ")").not(".show").hide();
				$(this).parent().find(".show.more").css("display", "block");
				$(this).hide();
			});
			console.log()
    });
		*/