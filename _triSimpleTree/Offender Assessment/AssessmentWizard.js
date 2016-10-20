var debugMode = false;
var progressIndex = 0;
var assessmentWizardVars = {};
assessmentWizardVars.noOfQuestionsToDisplayOnView = 5;
var firstView = false;
var getanswers = "";
var lstAssesmentDetails = [];

$(document).ready(function () {
    //("hello");
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    
    var vAssessmentId = window.opener.Xrm.Page.data.entity.getId();//get the AssementId from the windowopener
    
    console.log("Assesment Id :", vAssessmentId);
    var vAssessmentId2 = vAssessmentId.replace("{", "");
    var vAssessmentIdFormatted = vAssessmentId2.replace("}", "");

    GetAssesmentDetails(vAssessmentIdFormatted);

    var vAssementType = GetAssessmentType(vAssessmentIdFormatted);
    //var vAssementType = GetAssessmentType("");
    //alert(vAssementType);

    $(".next").click(function () {
        
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        var current_fs_section = current_fs[0].childNodes[0].firstChild.data;
        var next_fs_section = next_fs[0].childNodes[0].firstChild.data;

        if (current_fs_section !== next_fs_section) {
            document.getElementById('questionCategory').innerHTML = next_fs_section;
    //activate next step on progressbar using the index of next_fs
            progressIndex = progressIndex + 1;
    //$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            $("#progressbar li").eq(progressIndex).addClass("active");
}
        
    //show the next fieldset
        next_fs.show();
    //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
    step: function (now, mx) {
    //as the opacity of current_fs reduces to 0 - stored in "now"
    //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
    //2. bring next_fs from the right(50%)
                left = (now * 50) + "%";
    //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({ 'transform': 'scale(' + scale + ')' });
                next_fs.css({ 'left': left, 'opacity': opacity });
},
    duration: 800,
    complete: function () {
                current_fs.hide();
                animating = false;
},
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
});
});

    $(".previous").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
        previous_fs.show();
    //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
    step: function (now, mx) {
    //as the opacity of current_fs reduces to 0 - stored in "now"
    //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
    //2. take current_fs to the right(50%) - from 0%
                left = ((1 - now) * 50) + "%";
    //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({ 'left': left });
                previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
},
    duration: 800,
    complete: function () {
                current_fs.hide();
                animating = false;
},
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
});
});

    $(".submit").click(function () {
        return false;
})

});

function GetAssessmentType(vAssessmentId) {
    if(debugMode == true){
		
        var result = {
            "@odata.context":"https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessments(_tri_assessmenttypeid_value)/$entity","@odata.etag":"W/\"3213248\"","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_assessmentid":"6deecdb4-7539-e611-80d1-005056810c7c"
        };
        var _tri_assessmenttypeid_value = result["_tri_assessmenttypeid_value"];
        var _tri_assessmenttypeid_value_formatted = result["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
        console.log("AssessmentType-");
        console.log(_tri_assessmenttypeid_value);
        GetQuestionCategories(_tri_assessmenttypeid_value);// Get The question categories
    } else {
	    		
        if (vAssessmentId !== null || vAssessmentId !== "") {

            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                url: Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessments("+vAssessmentId+")?$select=_tri_assessmenttypeid_value",
                beforeSend: function (XMLHttpRequest) {
                    XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
                    XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
                    XMLHttpRequest.setRequestHeader("Accept", "application/json");
                    XMLHttpRequest.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
                },
                async: false,
                success: function (data, textStatus, xhr) {
                    var result = data;
                    var _tri_assessmenttypeid_value = result["_tri_assessmenttypeid_value"];
                    var _tri_assessmenttypeid_value_formatted = result["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
                    GetQuestionCategories(_tri_assessmenttypeid_value);// Get The question categories
                    //alert(_tri_assessmenttypeid_value);
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert(textStatus + " " + errorThrown);
                }
            });

        }
    }
}

function GetQuestionCategories(_tri_assessmenttypeid_value) {
   
    if(debugMode==true){
	   
        var response = {
            "@odata.context":"https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessmentquestioncategories(tri_name,tri_assessmentquestioncategoryid)","value":[
              {
                  "@odata.etag":"W/\"1912367\"","tri_name":"Mental Health Supplement Type","tri_assessmentquestioncategoryid":"3beca0f3-1fd4-e511-80cf-005056810c7c"
              },{
                  "@odata.etag":"W/\"1925380\"","tri_name":"Section B: Mental Health Service History","tri_assessmentquestioncategoryid":"fb5474c7-bfd5-e511-80d0-005056810c7c"
              },{
                  "@odata.etag":"W/\"1925374\"","tri_name":"Section C: Mental State Indicators","tri_assessmentquestioncategoryid":"61b5e6d7-bfd5-e511-80d0-005056810c7c"
              },{
                  "@odata.etag":"W/\"1925372\"","tri_name":"Section D: Substance Use","tri_assessmentquestioncategoryid":"960c70e9-bfd5-e511-80d0-005056810c7c"
              },{
                  "@odata.etag":"W/\"1925300\"","tri_name":"Section E: Harm to Self and Others","tri_assessmentquestioncategoryid":"f1429bf6-bfd5-e511-80d0-005056810c7c"
              },{
                  "@odata.etag":"W/\"1925301\"","tri_name":"Section F: Stress and Trauma","tri_assessmentquestioncategoryid":"68aa1214-c0d5-e511-80d0-005056810c7c"
              },{
                  "@odata.etag":"W/\"1925336\"","tri_name":"Section G: Medication","tri_assessmentquestioncategoryid":"9679d31f-c0d5-e511-80d0-005056810c7c"
              },{
                  "@odata.etag":"W/\"1925350\"","tri_name":"Section H: Social Relations","tri_assessmentquestioncategoryid":"c9c59534-c0d5-e511-80d0-005056810c7c"
              }
            ]
        };
						
        var results = response;//JSON.parse(response);
        var fieldsets = "";
        for (var i = 0; i < results.value.length; i++) {
            var tri_name = results.value[i]["tri_name"];
            var tri_assessmentquestioncategoryid = results.value[i]["tri_assessmentquestioncategoryid"];

            if (i === 0) {
                $("#progressbar").append('<li class="active">' + tri_name + '</li>');

            }
            else {
                $("#progressbar").append('<li>' + tri_name + '</li>');
            }

            GetAssesmentQuestions(tri_name, _tri_assessmenttypeid_value, tri_assessmentquestioncategoryid);			
        }
    }else {
        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentquestioncategories?$select=tri_name,tri_assessmentquestioncategoryid&$filter=_tri_assessmenttypeid_value eq " + _tri_assessmenttypeid_value + "", false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.maxpagesize=50");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var results = JSON.parse(this.response);
                    var fieldsets = "";
                    for (var i = 0; i < results.value.length; i++) {
                        var tri_name = results.value[i]["tri_name"];
                        var tri_assessmentquestioncategoryid = results.value[i]["tri_assessmentquestioncategoryid"];

                        if (i === 0) {
                            $("#progressbar").append('<li class="active">' + tri_name + '</li>');

                        }
                        else {
                            $("#progressbar").append('<li>' + tri_name + '</li>');
                        }

                        GetAssesmentQuestions(tri_name, _tri_assessmenttypeid_value, tri_assessmentquestioncategoryid);
                    }					
                }
                else {
                    alert(this.statusText);
                }
            }
        };
        req.send();
    }
}

function GetAssesmentQuestions(sectionname,assessmenttypeid,questionCategoryId) {
	
    if(debugMode==true){
		
        var response =	{
            "@odata.context":"https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessmentquestions(tri_answertype,tri_answertypetext,_tri_assessmentquestioncategoryid_value,tri_assessmentquestionid,_tri_assessmenttypeid_value,tri_includecomments,tri_isrequired,tri_name,tri_questionnumber)","value":[
              {
                  "@odata.etag":"W/\"1925410\"","tri_answertype@OData.Community.Display.V1.FormattedValue":"Optionset","tri_answertype":100000000,"tri_answertypetext":"Optionset","_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue":"Section F: Stress and Trauma","_tri_assessmentquestioncategoryid_value":"68aa1214-c0d5-e511-80d0-005056810c7c","tri_assessmentquestionid":"7d7b4ad5-02d5-e511-80d0-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_includecomments@OData.Community.Display.V1.FormattedValue":"No Value","tri_includecomments":167410002,"tri_isrequired@OData.Community.Display.V1.FormattedValue":"No","tri_isrequired":false,"tri_name":"Death of close family member or friend","tri_questionnumber@OData.Community.Display.V1.FormattedValue":"30","tri_questionnumber":30
              },{
                  "@odata.etag":"W/\"1925411\"","tri_answertype@OData.Community.Display.V1.FormattedValue":"Optionset","tri_answertype":100000000,"tri_answertypetext":"Optionset","_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue":"Section F: Stress and Trauma","_tri_assessmentquestioncategoryid_value":"68aa1214-c0d5-e511-80d0-005056810c7c","tri_assessmentquestionid":"7f7b4ad5-02d5-e511-80d0-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_includecomments@OData.Community.Display.V1.FormattedValue":"No Value","tri_includecomments":167410002,"tri_isrequired@OData.Community.Display.V1.FormattedValue":"No","tri_isrequired":false,"tri_name":"Victim of physical assault or abuse","tri_questionnumber@OData.Community.Display.V1.FormattedValue":"31","tri_questionnumber":31
              },{
                  "@odata.etag":"W/\"1925412\"","tri_answertype@OData.Community.Display.V1.FormattedValue":"Optionset","tri_answertype":100000000,"tri_answertypetext":"Optionset","_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue":"Section F: Stress and Trauma","_tri_assessmentquestioncategoryid_value":"68aa1214-c0d5-e511-80d0-005056810c7c","tri_assessmentquestionid":"817b4ad5-02d5-e511-80d0-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_includecomments@OData.Community.Display.V1.FormattedValue":"No Value","tri_includecomments":167410002,"tri_isrequired@OData.Community.Display.V1.FormattedValue":"No","tri_isrequired":false,"tri_name":"Victim of crime (e.g., robbery; exclude assault)","tri_questionnumber@OData.Community.Display.V1.FormattedValue":"32","tri_questionnumber":32
              },{
                  "@odata.etag":"W/\"1925413\"","tri_answertype@OData.Community.Display.V1.FormattedValue":"Optionset","tri_answertype":100000000,"tri_answertypetext":"Optionset","_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue":"Section F: Stress and Trauma","_tri_assessmentquestioncategoryid_value":"68aa1214-c0d5-e511-80d0-005056810c7c","tri_assessmentquestionid":"837b4ad5-02d5-e511-80d0-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_includecomments@OData.Community.Display.V1.FormattedValue":"No Value","tri_includecomments":167410002,"tri_isrequired@OData.Community.Display.V1.FormattedValue":"No","tri_isrequired":false,"tri_name":"Victim of emotional abuse","tri_questionnumber@OData.Community.Display.V1.FormattedValue":"33","tri_questionnumber":33
              },{
                  "@odata.etag":"W/\"1925414\"","tri_answertype@OData.Community.Display.V1.FormattedValue":"Optionset","tri_answertype":100000000,"tri_answertypetext":"Optionset","_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue":"Section F: Stress and Trauma","_tri_assessmentquestioncategoryid_value":"68aa1214-c0d5-e511-80d0-005056810c7c","tri_assessmentquestionid":"857b4ad5-02d5-e511-80d0-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_includecomments@OData.Community.Display.V1.FormattedValue":"No Value","tri_includecomments":167410002,"tri_isrequired@OData.Community.Display.V1.FormattedValue":"No","tri_isrequired":false,"tri_name":"Victim of sexual assault or abuse","tri_questionnumber@OData.Community.Display.V1.FormattedValue":"34","tri_questionnumber":34
              },{
                  "@odata.etag":"W/\"1925415\"","tri_answertype@OData.Community.Display.V1.FormattedValue":"Optionset","tri_answertype":100000000,"tri_answertypetext":"Optionset","_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue":"Section F: Stress and Trauma","_tri_assessmentquestioncategoryid_value":"68aa1214-c0d5-e511-80d0-005056810c7c","tri_assessmentquestionid":"877b4ad5-02d5-e511-80d0-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_includecomments@OData.Community.Display.V1.FormattedValue":"No Value","tri_includecomments":167410002,"tri_isrequired@OData.Community.Display.V1.FormattedValue":"No","tri_isrequired":false,"tri_name":"Describes one or more of these events as invoking a sense of horror or intense fear","tri_questionnumber@OData.Community.Display.V1.FormattedValue":"35","tri_questionnumber":35
              },{
                  "@odata.etag":"W/\"1925416\"","tri_answertype@OData.Community.Display.V1.FormattedValue":"Memo","tri_answertype":100000003,"tri_answertypetext":"Memo","_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue":"Section F: Stress and Trauma","_tri_assessmentquestioncategoryid_value":"68aa1214-c0d5-e511-80d0-005056810c7c","tri_assessmentquestionid":"897b4ad5-02d5-e511-80d0-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_includecomments@OData.Community.Display.V1.FormattedValue":"No Value","tri_includecomments":167410002,"tri_isrequired@OData.Community.Display.V1.FormattedValue":"No","tri_isrequired":false,"tri_name":"Comments, Section F","tri_questionnumber@OData.Community.Display.V1.FormattedValue":"36","tri_questionnumber":36
              }
            ]
        };
						
        var results = response;//JSON.parse(this.response);
        var questionsset = "";
        var divStart = "<div>";
        var divClose = "</div>";
        var j = 0;
        var quesAnsHtm;
        assessmentWizardVars.noOfQuestionsToDisplayOnView = results.value.length+1;
        for (var i = 0; i < results.value.length; i++) {
            var tri_answertype = results.value[i]["tri_answertype"];
            var tri_answertype_formatted = results.value[i]["tri_answertype@OData.Community.Display.V1.FormattedValue"];
            var tri_answertypetext = results.value[i]["tri_answertypetext"];
            var _tri_assessmentquestioncategoryid_value = results.value[i]["_tri_assessmentquestioncategoryid_value"];
            var _tri_assessmentquestioncategoryid_value_formatted = results.value[i]["_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue"];
            var tri_assessmentquestionid = results.value[i]["tri_assessmentquestionid"];
            var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
            var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
            var tri_includecomments = results.value[i]["tri_includecomments"];
            var tri_includecomments_formatted = results.value[i]["tri_includecomments@OData.Community.Display.V1.FormattedValue"];
            var tri_isrequired = results.value[i]["tri_isrequired"];
            var tri_isrequired_formatted = results.value[i]["tri_isrequired@OData.Community.Display.V1.FormattedValue"];
            var tri_name = results.value[i]["tri_name"];
            var tri_questionnumber = results.value[i]["tri_questionnumber"];
            var tri_questionnumber_formatted = results.value[i]["tri_questionnumber@OData.Community.Display.V1.FormattedValue"];

            // display questions

            questionsset = '<span>' + tri_questionnumber + '.</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
            var getanswers = GetAssesmentAnswers(sectionname, _tri_assessmenttypeid_value, questionsset, tri_assessmentquestionid, tri_answertype);
            console.log("AnswersType in GetAssesmentQuestions-", tri_answertype);
            console.log("Answers-");
            console.log(getanswers);
            var questionWithAns = '<div>'
				
            var ansDiv = '<div></div>'
            questionWithAns = '<div>' +questionsset +getanswers +'</div>';

            if (j < assessmentWizardVars.noOfQuestionsToDisplayOnView) {

                if (j == 0) {
                    if (firstView == false) {
                        quesAnsHtm = '<div style= "display:block;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;">' + '<div>' + sectionname + '</div><br/>' + questionWithAns;
                        document.getElementById('questionCategory').innerHTML = sectionname;
                        firstView = true;
                    } else {
                        quesAnsHtm = '<div style ="display:none;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;">' + '<div>' + sectionname + '</div><br/>' + questionWithAns;
                    }
                }
                else
                {
                    quesAnsHtm = quesAnsHtm + '</br>' + questionWithAns;
                }

                j++;

                if (j == assessmentWizardVars.noOfQuestionsToDisplayOnView - 1 || i == results.value.length - 1) {
                    j = 0;
                    quesAnsHtm = quesAnsHtm +
                                '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                                '<input type="button" name="next" class="next action-button" value="Next" />' +
                                divClose;

                    $('#fieldsets').append(quesAnsHtm);
                    quesAnsHtm = '';
                }
            }

        }
        console.log(sectionname);
        console.log("changing Question Category-");

    } else {
        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentquestions?$select=tri_answertype,tri_answertypetext,_tri_assessmentquestioncategoryid_value,tri_assessmentquestionid,_tri_assessmenttypeid_value,tri_includecomments,tri_isrequired,tri_name,tri_questionnumber&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and  _tri_assessmentquestioncategoryid_value eq " + questionCategoryId, false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
        req.onreadystatechange = function () {
            var divStart = "<div>";
            var divClose = "</div>";

            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var results = JSON.parse(this.response);
                    var questionsset = "";
                    var j = 0;
                    for (var i = 0; i < results.value.length; i++) {
                        var tri_answertype = results.value[i]["tri_answertype"];
                        var tri_answertype_formatted = results.value[i]["tri_answertype@OData.Community.Display.V1.FormattedValue"];
                        var tri_answertypetext = results.value[i]["tri_answertypetext"];
                        var _tri_assessmentquestioncategoryid_value = results.value[i]["_tri_assessmentquestioncategoryid_value"];
                        var _tri_assessmentquestioncategoryid_value_formatted = results.value[i]["_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue"];
                        var tri_assessmentquestionid = results.value[i]["tri_assessmentquestionid"];
                        var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
                        var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
                        var tri_includecomments = results.value[i]["tri_includecomments"];
                        var tri_includecomments_formatted = results.value[i]["tri_includecomments@OData.Community.Display.V1.FormattedValue"];
                        var tri_isrequired = results.value[i]["tri_isrequired"];
                        var tri_isrequired_formatted = results.value[i]["tri_isrequired@OData.Community.Display.V1.FormattedValue"];
                        var tri_name = results.value[i]["tri_name"];
                        var tri_questionnumber = results.value[i]["tri_questionnumber"];
                        var tri_questionnumber_formatted = results.value[i]["tri_questionnumber@OData.Community.Display.V1.FormattedValue"];

                        // display questions
                        questionsset = '<span>' + tri_questionnumber + '.</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
                        //var getanswers = "";
                        window.getanswers = "";
                        GetAssesmentAnswers(sectionname, _tri_assessmenttypeid_value, questionsset, tri_assessmentquestionid, tri_answertype);
                        console.log("AnswersType in GetAssesmentQuestions-", tri_answertype);
                        console.log("Answers-");
                        console.log(window.getanswers);
                        
                        var questionWithAns = '<div>'

                        var ansDiv = '<div></div>'
                        questionWithAns = '<div>' + questionsset + window.getanswers + '</div>';

                        if (j < results.value.length) {

                            if (j == 0) {
                                if (firstView == false) {
                                    quesAnsHtm = '<div style= "display:block;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;">' + '<div>' + sectionname + '</div>' + questionWithAns;
                                    document.getElementById('questionCategory').innerHTML = sectionname;                                    
                                } else {
                                    quesAnsHtm = '<div style ="display:none;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;">' + '<div>' + sectionname + '</div>' + questionWithAns;
                                }
                            }
                            else {
                                quesAnsHtm = quesAnsHtm + '</br>' + questionWithAns;
                            }

                            j++;

                            if (j == results.value.length || i == results.value.length ) {
                                j = 0;
                                if (firstView == false) {
                                    quesAnsHtm = quesAnsHtm +                                            
                                            '<input type="button" name="next" class="next action-button" value="Next" />' +
                                            divClose;
                                    firstView = true;
                                } else {
                                    quesAnsHtm = quesAnsHtm +
                                            '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                                            '<input type="button" name="next" class="next action-button" value="Next" />' +
                                            divClose;

                                }
                                
                                $('#fieldsets').append(quesAnsHtm);
                                quesAnsHtm = '';
                            }
                        }
                    }
                    console.log(sectionname);
                    console.log("changing Question Category-");
                    //return questionsset;
                }
                else {
                    alert(this.statusText);
                }
            }
        };
        req.send();
    }
}

function GetAssesmentAnswers(sectionname, assessmenttypeid, questionsset, questionid, answertype) {
	
    if(debugMode==true){
		
        var response = {
            "@odata.context":"https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessmentanswers(tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name)","value":[
              {
                  "@odata.etag":"W/\"2448325\"","tri_answervalue@OData.Community.Display.V1.FormattedValue":"1","tri_answervalue":1,"tri_assessmentanswerid":"6a4a1872-0dd1-e511-80cf-005056810c7c","_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue":"Number of Lifetime Psychiatric Admissions","_tri_assessmentquestionid_value":"0981a55c-0dd1-e511-80cf-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_name":"None"
              },{
                  "@odata.etag":"W/\"2448326\"","tri_answervalue@OData.Community.Display.V1.FormattedValue":"2","tri_answervalue":2,"tri_assessmentanswerid":"57122e7f-0dd1-e511-80cf-005056810c7c","_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue":"Number of Lifetime Psychiatric Admissions","_tri_assessmentquestionid_value":"0981a55c-0dd1-e511-80cf-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_name":"1-3"
              },{
                  "@odata.etag":"W/\"2448327\"","tri_answervalue@OData.Community.Display.V1.FormattedValue":"3","tri_answervalue":3,"tri_assessmentanswerid":"18696c8c-0dd1-e511-80cf-005056810c7c","_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue":"Number of Lifetime Psychiatric Admissions","_tri_assessmentquestionid_value":"0981a55c-0dd1-e511-80cf-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_name":"4-5"
              },{
                  "@odata.etag":"W/\"2448328\"","tri_answervalue@OData.Community.Display.V1.FormattedValue":"4","tri_answervalue":4,"tri_assessmentanswerid":"73fc4295-0dd1-e511-80cf-005056810c7c","_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue":"Number of Lifetime Psychiatric Admissions","_tri_assessmentquestionid_value":"0981a55c-0dd1-e511-80cf-005056810c7c","_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue":"Mental Health Supplement","_tri_assessmenttypeid_value":"e701ab2d-0cd1-e511-80cf-005056810c7c","tri_name":"6 or more"
              }
            ]
        }
		
        var results = response;//JSON.parse(this.response);
        var getanswers = "";
        for (var i = 0; i < results.value.length; i++) {
            var tri_answervalue = results.value[i]["tri_answervalue"];
            var tri_answervalue_formatted = results.value[i]["tri_answervalue@OData.Community.Display.V1.FormattedValue"];
            var tri_assessmentanswerid = results.value[i]["tri_assessmentanswerid"];
            var _tri_assessmentquestionid_value = results.value[i]["_tri_assessmentquestionid_value"];
            var _tri_assessmentquestionid_value_formatted = results.value[i]["_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue"];
            var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
            var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
            var tri_name = results.value[i]["tri_name"];
            getanswers = getanswers + '<span style="    border-radius: 10px;background: #fff;border: 1px solid #999;    width: 20px;    height: 20px;    margin: 3px 10px 0 0;    -moz-box-sizing: border-box;    box-sizing: border-box;    -webkit-transition: all 0.1s linear;    transition: all 0.1s linear;">' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
						
        }
        return getanswers;
    }else{
        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentanswers?$select=tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and _tri_assessmentquestionid_value eq "+ questionid, false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
        var answerType = answertype;

        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log("AssesmentTypeId :", assessmenttypeid);
                console.log("Question Id :", questionid);
                console.log("AnswerType :", answertype);

                req.onreadystatechange = null;
                if (this.status === 200) {
                    var questionToMatch = lstAssesmentDetails.find(function (x) { return x.QuestionId == questionid; });
                    var answerValueToMatch = ""
                    if(questionToMatch !== null && questionToMatch !== undefined)
                    {
                        answerValueToMatch = questionToMatch.AnswerValue;
                    }

                    var results = JSON.parse(this.response);	
                    if (results.value.length > 0) {
                        for (var i = 0; i < results.value.length; i++) {
                            var tri_answervalue = results.value[i]["tri_answervalue"];
                            var tri_answervalue_formatted = results.value[i]["tri_answervalue@OData.Community.Display.V1.FormattedValue"];
                            var tri_assessmentanswerid = results.value[i]["tri_assessmentanswerid"];
                            var _tri_assessmentquestionid_value = results.value[i]["_tri_assessmentquestionid_value"];
                            var _tri_assessmentquestionid_value_formatted = results.value[i]["_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue"];
                            var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
                            var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
                            var tri_name = results.value[i]["tri_name"];

                            // check if answe matches to existing then introduce checked
                            var checked = "";
                            if (tri_answervalue === answerValueToMatch) {
                                checked = 'checked="checked"';
                            }

                            // remove any = sign in text
                            if (tri_name.indexOf('='))
                            {
                                tri_name = tri_name.substr(tri_name.indexOf('=') + 1);
                            }

                            var answercontrols = "";
                            console.log("answerType :", answerType);
                            if (answerType === 100000000) {
                                answercontrols = '<input type="radio" name="' + questionid + '_radiobtn_answerValue" ' + checked + ' value="' + tri_answervalue + '"> ' + tri_name; // checked="checked" 
                            }
                            else if (answerType === 100000001 || answerType === 100000003) {
                                answercontrols = '<textarea rows="4" id="' + questionid + '_textarea" maxlength="4000" cols="100">' + tri_name + '</textarea><br>'
                            }
                            else if (answerType === 100000002) {
                                answercontrols = '<input type="date" name="' + questionid + '_date" value="' + tri_answervalue + '" max="1979-12-31"><br>'; // we can show this with jquery date picker even
                            }
                            else if (answerType === 100000004) {
                                answercontrols = '';  // , you can use the spinner control.
                            }
                            else if (answerType === 100000005) {
                                answercontrols = '<input type="checkbox" name="' + questionid + '_chkbox_answerValue" ' + checked + ' value="' + tri_answervalue + '">' + tri_name + '<br>';
                            }

                            window.getanswers = window.getanswers + answercontrols; //CreateAnswers(tri_answervalue, tri_name, answertype, questionid); //'<span>' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
                        }
                    }
                    else {

                        var answercontrols = "";
                        console.log("answerType :", answerType);
                        //if (answerType === 100000000) {
                        //    answercontrols = '<input type="radio" name="' + questionid + '_radiobtn_answerValue" value=""> ' + tri_name; // checked="checked" 
                        //}
                        //else
                            if (answerType === 100000001 || answerType === 100000003) {
                            answercontrols = '<textarea rows="4" id="' + questionid + '_textarea" maxlength="4000" cols="100"></textarea><br>'
                        }
                        else if (answerType === 100000002) {
                            answercontrols = '<input type="date" name="' + questionid + '_date" max="1979-12-31"><br>'; // we can show this with jquery date picker even
                        }
                        else if (answerType === 100000004) {
                            answercontrols = '';  // , you can use the spinner control. Numeric
                        }
                        //else if (answerType === 100000005) {
                        //    answercontrols = '<input type="checkbox" name="' + questionid + '_chkbox_answerValue" value="' + tri_answervalue + '">' + tri_name + '<br>';
                        //}

                        window.getanswers = window.getanswers + answercontrols;
                    }
                }
                else {
                    alert(this.statusText);
                }
            }
        };
        req.send();
    }
}

function GetAssesmentAnswers_Update(sectionname, assessmenttypeid, questionsset, questionid) {

    if (debugMode == true) {

        var response = {
            "@odata.context": "https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessmentanswers(tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name)", "value": [
              {
                  "@odata.etag": "W/\"2448325\"", "tri_answervalue@OData.Community.Display.V1.FormattedValue": "1", "tri_answervalue": 1, "tri_assessmentanswerid": "6a4a1872-0dd1-e511-80cf-005056810c7c", "_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue": "Number of Lifetime Psychiatric Admissions", "_tri_assessmentquestionid_value": "0981a55c-0dd1-e511-80cf-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_name": "None"
              }, {
                  "@odata.etag": "W/\"2448326\"", "tri_answervalue@OData.Community.Display.V1.FormattedValue": "2", "tri_answervalue": 2, "tri_assessmentanswerid": "57122e7f-0dd1-e511-80cf-005056810c7c", "_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue": "Number of Lifetime Psychiatric Admissions", "_tri_assessmentquestionid_value": "0981a55c-0dd1-e511-80cf-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_name": "1-3"
              }, {
                  "@odata.etag": "W/\"2448327\"", "tri_answervalue@OData.Community.Display.V1.FormattedValue": "3", "tri_answervalue": 3, "tri_assessmentanswerid": "18696c8c-0dd1-e511-80cf-005056810c7c", "_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue": "Number of Lifetime Psychiatric Admissions", "_tri_assessmentquestionid_value": "0981a55c-0dd1-e511-80cf-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_name": "4-5"
              }, {
                  "@odata.etag": "W/\"2448328\"", "tri_answervalue@OData.Community.Display.V1.FormattedValue": "4", "tri_answervalue": 4, "tri_assessmentanswerid": "73fc4295-0dd1-e511-80cf-005056810c7c", "_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue": "Number of Lifetime Psychiatric Admissions", "_tri_assessmentquestionid_value": "0981a55c-0dd1-e511-80cf-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_name": "6 or more"
              }
            ]
        }

        var results = response;//JSON.parse(this.response);
        var getanswers = "";
        var answerHtml = "";
        for (var i = 0; i < results.value.length; i++) {
            var tri_answervalue = results.value[i]["tri_answervalue"];
            var tri_answervalue_formatted = results.value[i]["tri_answervalue@OData.Community.Display.V1.FormattedValue"];
            var tri_assessmentanswerid = results.value[i]["tri_assessmentanswerid"];
            var _tri_assessmentquestionid_value = results.value[i]["_tri_assessmentquestionid_value"];
            var _tri_assessmentquestionid_value_formatted = results.value[i]["_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue"];
            var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
            var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
            var tri_name = results.value[i]["tri_name"];            
            getanswers = getanswers + '<span>' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';

        }
        return getanswers;

    } else {
        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentanswers?$select=tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and _tri_assessmentquestionid_value eq " + questionid, false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var results = JSON.parse(this.response);
                    var getanswers = "";
                    for (var i = 0; i < results.value.length; i++) {
                        var tri_answervalue = results.value[i]["tri_answervalue"];
                        var tri_answervalue_formatted = results.value[i]["tri_answervalue@OData.Community.Display.V1.FormattedValue"];
                        var tri_assessmentanswerid = results.value[i]["tri_assessmentanswerid"];
                        var _tri_assessmentquestionid_value = results.value[i]["_tri_assessmentquestionid_value"];
                        var _tri_assessmentquestionid_value_formatted = results.value[i]["_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue"];
                        var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
                        var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
                        var tri_name = results.value[i]["tri_name"];
                        getanswers = getanswers + '<span>' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
                    }

                    return getanswers;
                    //var fieldsets = '<fieldset>' +
                    //					'<h2 class="fs-title">' + sectionname + '</h2>' +
                    //					'<h3 class="fs-subtitle">' + sectionname + '</h3>' +
                    //						questionsset +
                    //						getanswers +
                    //					'<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                    //					'<input type="button" name="next" class="next action-button" value="Next" />' +
                    //				'</fieldset>';

                    //$('#fieldsets').append(fieldsets);
                }
                else {
                    alert(this.statusText);
                }
            }
        };
        req.send();
    }
}

function CreateDivAndWrapQuestions(sectioname) {

}


function CreateAnswers(answerValue, answerText, answerType, questionid) {
    console.log("Create Answer Parameters :", answerValue, answerText, answerType, questionid);
    if (answerType === 100000000) {
        return '<input type="radio" name="' + questionid + '_tadiobtn_answerValue" value="' + answerValue + '"> ' + answerText + '<br>'; // checked="checked" 
    }
    else if (answerType === 100000001 || answerType === 100000003) {
        return '<textarea rows="4" id="' + questionid + '_textarea" maxlength="4000" cols="100">' + answerText + '</textarea><br>'
    }
    else if (answerType === 100000002) {
        return '<input type="date" name="' + questionid + '_date" max="1979-12-31"><br>'; // we can show this with jquery date picker even
    }
    else if (answerType === 100000004) {
        return '';  // , you can use the spinner control.
    }
    else if (answerType === 100000005) {
        return '<input type="checkbox" name="' + questionid + '_chkbox_answerValue" value="' + answerValue + '">' + answerText + '<br>';
    }

}


function GetAssesmentDetails(assesmentId) {

    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentdetails?$select=_tri_answerid_value,tri_answertext,tri_answertype,tri_answervalue,tri_assessmentdetailid,_tri_assessmentid_value,_tri_assessmentquestioncategoryid_value,_tri_assessmenttypeid_value,tri_comments,tri_name,_tri_questionid_value,tri_questionnumber,tri_weightedscore&$filter=_tri_assessmentid_value eq "+ assesmentId +" and  _tri_answerid_value ne null", false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var results = JSON.parse(this.response);
                console.log('Assesment Details :', results);
                for (var i = 0; i < results.value.length; i++) {
                    var _tri_answerid_value = results.value[i]["_tri_answerid_value"];
                    var _tri_answerid_value_formatted = results.value[i]["_tri_answerid_value@OData.Community.Display.V1.FormattedValue"];
                    var tri_answertext = results.value[i]["tri_answertext"];
                    var tri_answertype = results.value[i]["tri_answertype"];
                    var tri_answervalue = results.value[i]["tri_answervalue"];
                    var tri_answervalue_formatted = results.value[i]["tri_answervalue@OData.Community.Display.V1.FormattedValue"];
                    var tri_assessmentdetailid = results.value[i]["tri_assessmentdetailid"];
                    var _tri_assessmentid_value = results.value[i]["_tri_assessmentid_value"];
                    var _tri_assessmentid_value_formatted = results.value[i]["_tri_assessmentid_value@OData.Community.Display.V1.FormattedValue"];
                    var _tri_assessmentquestioncategoryid_value = results.value[i]["_tri_assessmentquestioncategoryid_value"];
                    var _tri_assessmentquestioncategoryid_value_formatted = results.value[i]["_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue"];
                    var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
                    var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
                    var tri_comments = results.value[i]["tri_comments"];
                    var tri_name = results.value[i]["tri_name"];
                    var _tri_questionid_value = results.value[i]["_tri_questionid_value"];
                    var _tri_questionid_value_formatted = results.value[i]["_tri_questionid_value@OData.Community.Display.V1.FormattedValue"];
                    var tri_questionnumber = results.value[i]["tri_questionnumber"];
                    var tri_questionnumber_formatted = results.value[i]["tri_questionnumber@OData.Community.Display.V1.FormattedValue"];
                    var tri_weightedscore = results.value[i]["tri_weightedscore"];
                    var tri_weightedscore_formatted = results.value[i]["tri_weightedscore@OData.Community.Display.V1.FormattedValue"];

                    var assesmentDetails = {
                        'QuestionId': _tri_questionid_value,
                        'AnswerValue': tri_answervalue
                    };

                    lstAssesmentDetails.push(assesmentDetails);
                }
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();
}