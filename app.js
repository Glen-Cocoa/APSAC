var states = "Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District Of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming".split(",")

var listStates = function(){
	for(var i = 0; i < states.length; i++){ 
		states_li = $("<input type='checkbox' value="+states[i]+" id="+states[i]+"><label for="+states[i]+">"+states[i]+"</label><br>")
		$("#states").append(states_li)
		}
	}

var types = ["Community College","Private University","State University","Other"]

var listTypes = function(){
	for(var i = 0; i < types.length; i++){
		types_li = $("<input type='checkbox' value="+types[i]+" id="+types[i]+"><label for="+types[i]+">"+types[i]+"</label><br>")
		$("#types").append(types_li)
		}
	}

var academic_departments = ["Counseling","Criminal Justice/Law Enforcement","Education","Government/Public Policy/Public Administration","Human Development","Law","Liberal Arts/College of Arts and Sciences","Medical School","Nursing School","Psychology","Public Health","Social Sciences,","Social Work","Sociology","Other"]

var listAcademicDepartments = function(){
	for(var i = 0; i < academic_departments.length; i++){
		academic_departments_li = $("<input type='checkbox' value="+academic_departments[i]+" id="+academic_departments[i]+"><label for="+academic_departments[i]+">"+academic_departments[i]+"</label><br>")
		$("#academic_departments").append(academic_departments_li)
		}
	}

var degree_types = ["Undergraduate","Graduate (Masters)","Graduate (Doctorate)","Professional Education (Medical, Law)","Certificate","Coarses offered in child maltreatment, but no certification/degree"]

var listDegreeTypes = function(){
	for(var i = 0; i < degree_types.length; i++){
		degree_types_li = $("<input type='checkbox' value="+degree_types[i]+" id="+degree_types[i]+"><label for="+degree_types[i]+">"+degree_types[i]+"</label><br>")
		$("#degree_types").append(degree_types_li)
		}
	}

var levels_of_study = ["Major","Minor","Certification","Other"]

var listLevelsOfStudy = function(){
	for(var i = 0; i < levels_of_study.length; i++){
		levels_of_study_li = $("<input type='checkbox' value="+levels_of_study[i]+" id="+levels_of_study[i]+"><label for="+levels_of_study[i]+">"+levels_of_study[i]+"</label><br>")
		$("#levels_of_study").append(levels_of_study_li)
		}
	}

var study_options = ["In Person","Online Program","Hybrid"]

var listStudyOptions = function(){
	for(var i = 0; i < study_options.length; i++){
		study_options_li = $("<input type='checkbox' value="+study_options[i]+" id="+study_options[i]+"><label for="+study_options[i]+">"+study_options[i]+"</label><br>")
		$("#study_options").append(study_options_li)
		}
	}

$(document).ready(function(){

var sort = function(){
	$("#filters :checkbox").click(function(){
		if($("input:checkbox:checked").length){
			$("tr").hide()
			$("input:checkbox:checked").each(function(){
				$("tr[data-" + $(this).prop("name") + "*='" + $(this).val() + "']").show()
				})
			}
		else{
			$("tr").show()
			}
		})
	}

})
