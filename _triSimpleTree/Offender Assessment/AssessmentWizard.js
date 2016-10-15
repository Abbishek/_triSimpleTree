$(document).ready(function () {
    //alert("hello");
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    var vAssessmentId = window.opener.Xrm.Page.data.entity.getId();//get the AssementId from the windowopener
    var vAssessmentId2 = vAssessmentId.replace("{", "");
    var vAssessmentIdFormatted = vAssessmentId2.replace("}", "");
    var vAssementType = GetAssessmentType(vAssessmentIdFormatted);
    //alert(vAssementType);

    $(".next").click(function () {
        
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

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

function GetQuestionCategories(_tri_assessmenttypeid_value) {
   // alert(_tri_assessmenttypeid_value);
    
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentquestioncategories?$select=tri_name,tri_assessmentquestioncategoryid&$filter=_tri_assessmenttypeid_value eq " + _tri_assessmenttypeid_value + "", true);
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
                
                for (var i = 0; i < results.value.length; i++) {
                    var tri_name = results.value[i]["tri_name"];
                    var tri_assessmentquestioncategoryid = results.value[i]["tri_assessmentquestioncategoryid"];

                    if (i === 0) {
                        $("#progressbar").append('<li class="active">' + tri_name + '</li>');
                       
                    }
                    else {
                        $("#progressbar").append('<li>' + tri_name + '</li>');
                    }

                    $('#fieldsets').append('<fieldset>' +
		                '<h2 class="fs-title">' + tri_name + '</h2>' +
		                '<h3 class="fs-subtitle">' + tri_name + '</h3>' +
		                    //alert(GetAssesmentQuestions(_tri_assessmenttypeid_value,tri_assessmentquestioncategoryid))+
                            //alert(GetAssesmentAnswers(_tri_assessmenttypeid_value)) +
                        '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                        '<input type="button" name="next" class="next action-button" value="Next" />' +
                    '</fieldset>');

                }
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();

}

function GetAssesmentQuestions(assessmenttypeid,questionCategoryId) {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentquestions?$select=tri_answertype,tri_answertypetext,_tri_assessmentquestioncategoryid_value,tri_assessmentquestionid,_tri_assessmenttypeid_value,tri_includecomments,tri_isrequired,tri_name,tri_questionnumber&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and  _tri_assessmentquestioncategoryid_value eq "+questionCategoryId, true);
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

                    alert(_tri_assessmentquestioncategoryid_value);
                    // display questions
                    return '<span>' + tri_questionnumber + '.</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
                }
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();
}

function GetAssesmentAnswers(assessmenttypeid) {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentanswers?$select=tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid, true);
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
                for (var i = 0; i < results.value.length; i++) {
                    var tri_answervalue = results.value[i]["tri_answervalue"];
                    var tri_answervalue_formatted = results.value[i]["tri_answervalue@OData.Community.Display.V1.FormattedValue"];
                    var tri_assessmentanswerid = results.value[i]["tri_assessmentanswerid"];
                    var _tri_assessmentquestionid_value = results.value[i]["_tri_assessmentquestionid_value"];
                    var _tri_assessmentquestionid_value_formatted = results.value[i]["_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue"];
                    var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
                    var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
                    var tri_name = results.value[i]["tri_name"];

                    return '<span></span>';
                }
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();
}
