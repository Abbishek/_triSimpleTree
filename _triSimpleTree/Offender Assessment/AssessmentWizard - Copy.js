$(document).ready(function () {
    //alert("hello");
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    var vAssessmentId = window.opener.Xrm.Page.data.entity.getId();//get the AssementId from the windowopener
    // var patientId = parent.Xrm.Page.data.entity.getId();//get the AssementId from the windowopener
    console.log("Assesment Id :",vAssessmentId);
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
                    //GetAssesmentAnswers(_tri_assessmenttypeid_value);

                    //fieldsets =  '<fieldset>' +
                    //                '<h2 class="fs-title">' + tri_name + '</h2>' +
                    //                '<h3 class="fs-subtitle">' + tri_name + '</h3>' + getquestions + getanswers +
                    //                '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                    //                '<input type="button" name="next" class="next action-button" value="Next" />' +
                    //            '</fieldset>';
                }
                // $('#fieldsets').append(fieldsets);
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();

}

function GetAssesmentQuestions(sectionname,assessmenttypeid,questionCategoryId) {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentquestions?$select=tri_answertype,tri_answertypetext,_tri_assessmentquestioncategoryid_value,tri_assessmentquestionid,_tri_assessmenttypeid_value,tri_includecomments,tri_isrequired,tri_name,tri_questionnumber&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and  _tri_assessmentquestioncategoryid_value eq "+questionCategoryId, false);
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
                var questionsset = "";
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
                    GetAssesmentAnswers(sectionname, _tri_assessmenttypeid_value, questionsset, tri_assessmentquestionid, tri_answertype); // added
                }
                //return questionsset;
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();
}

function GetAssesmentAnswers(sectionname, assessmenttypeid, questionsset, questionid, answertype) {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentanswers?$select=tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and _tri_assessmentquestionid_value eq "+ questionid, false);
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
                    getanswers = getanswers + '<br/>'+ CreateAnswers(tri_answervalue, tri_name, answertype, questionid); //'<span>' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
                }
                var fieldsets =  '<fieldset>' +
                                    '<h2 class="fs-title">' + sectionname + '</h2>' +
                                    '<h3 class="fs-subtitle">' + sectionname + '</h3>' +
                                        questionsset +
                                        '<div>' + getanswers + '</div>'+
                                    '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
                                    '<input type="button" name="next" class="next action-button" value="Next" />' +
                                '</fieldset>';

                $('#fieldsets').append(fieldsets);
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();
}

function CreateAnswers(answerValue, answerText, answerType, questionid) {

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

// answertype
//Value: 100000002, Label: Date
//Value: 100000003, Label: Memo
//Value: 100000005, Label: Multi-Select
//Value: 100000004, Label: Numeric
//Value: 100000000, Label: Optionset
//Value: 100000001, Label: Text


// Assesment Id : {6DEECDB4-7539-E611-80D1-005056810C7C}

//{
//@odata.etag:"W/"3213249"",
//_tri_answerid_value: null ,
//tri_answertext: null ,
//tri_answertype:"Memo",
//tri_answervalue: null ,
//tri_assessmentdetailid:"05cbe8c6-7539-e611-80d1-005056810c7c",
//_tri_assessmentid_value@OData.Community.Display.V1.FormattedValue:"Mental Health Supplement:20160623:5",
//_tri_assessmentid_value:"6deecdb4-7539-e611-80d1-005056810c7c",
//_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue:"Section B: Mental Health Service History",
//_tri_assessmentquestioncategoryid_value:"fb5474c7-bfd5-e511-80d0-005056810c7c",
//_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue:"Mental Health Supplement",
//_tri_assessmenttypeid_value:"e701ab2d-0cd1-e511-80cf-005056810c7c",
//tri_comments: null ,
//tri_name:"Mental Health Supplement:3",
//_tri_questionid_value@OData.Community.Display.V1.FormattedValue:"Comments, Section B",
//_tri_questionid_value:"62038b5d-fbd4-e511-80d0-005056810c7c",
//tri_questionnumber@OData.Community.Display.V1.FormattedValue:"3",
//tri_questionnumber:3,
//tri_weightedscore: null
//},
//{
//@odata.etag:"W/"3213250"",
//_tri_answerid_value@OData.Community.Display.V1.FormattedValue:"3 = Exhibited daily in last 3 days",
//    _tri_answerid_value:"3ab0deb7-fbd4-e511-80d0-005056810c7c",
//    tri_answertext: null ,
//    tri_answertype:"Optionset",
//    tri_answervalue@OData.Community.Display.V1.FormattedValue:"3",
//    tri_answervalue:3,
//    tri_assessmentdetailid:"06cbe8c6-7539-e611-80d1-005056810c7c",
//    _tri_assessmentid_value@OData.Community.Display.V1.FormattedValue:"Mental Health Supplement:20160623:5",
//    _tri_assessmentid_value:"6deecdb4-7539-e611-80d1-005056810c7c",
//    _tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue:"Section C: Mental State Indicators",
//    _tri_assessmentquestioncategoryid_value:"61b5e6d7-bfd5-e511-80d0-005056810c7c",
//    _tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue:"Mental Health Supplement",
//    _tri_assessmenttypeid_value:"e701ab2d-0cd1-e511-80cf-005056810c7c",
//    tri_comments: null ,
//    tri_name:"Mental Health Supplement:4",
//    _tri_questionid_value@OData.Community.Display.V1.FormattedValue:"Self depreciation - (e.g. "I am nothing; I am of no use to anyone")",
//    _tri_questionid_value:"173bac85-fbd4-e511-80d0-005056810c7c",
//    tri_questionnumber@OData.Community.Display.V1.FormattedValue:"4",
//    tri_questionnumber:4,
//    tri_weightedscore: null
//},

function GetAssesmentDetails(){

    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentdetails?$select=_tri_answerid_value,tri_answertext,tri_answertype,tri_answervalue,tri_assessmentdetailid,_tri_assessmentid_value,_tri_assessmentquestioncategoryid_value,_tri_assessmenttypeid_value,tri_comments,tri_name,_tri_questionid_value,tri_questionnumber,tri_weightedscore&$filter=_tri_assessmentid_value eq 6DEECDB4-7539-E611-80D1-005056810C7C and  _tri_answerid_value ne null", true);
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
                }
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();
}

// text Area
"assesment id  : 09F16A49-E896-E611-80D1-005056810C7C"
"assesment type id : e4b495f0-e396-e611-80d1-005056810c7c"
"question id : f19d5bf3-e596-e611-80d1-005056810c7c"
"question number : 6"
"tri_comments : 6th Answer"



{
    "@odata.etag":"W/\"1913709\"",
    "_tri_assessmentid_value":"cdeea141-d7d4-e511-80cf-005056810c7c",
    "versionnumber":1913709,
    "statecode":0,
    "_tri_assessmentquestioncategoryid_value":"c15a39f9-d3d4-e511-80cf-005056810c7c",
    "statuscode":1,
    "createdon":"2016-02-16T18:01:49Z",
    "_tri_assessmenttypeid_value":"85872edf-d2d4-e511-80cf-005056810c7c",
    "tri_answertype":"Optionset",
    "_ownerid_value":"2baf4a0a-b048-e311-b75b-0050568b4c09",
    "modifiedon":"2016-02-16T18:03:05Z",
    "tri_questionnumber":1,
    "tri_answervalue":5,
    "tri_name":"CPAT:1",
    "_modifiedby_value":"2baf4a0a-b048-e311-b75b-0050568b4c09",
    "tri_assessmentdetailid":"b4153959-d7d4-e511-80cf-005056810c7c",
    "_tri_questionid_value":"c2e4f8d0-d3d4-e511-80cf-005056810c7c",
    "_createdby_value":"2baf4a0a-b048-e311-b75b-0050568b4c09",
    "_owningbusinessunit_value":"79117684-9848-e311-b75b-0050568b4c09",
    "_tri_answerid_value":"842c02da-d4d4-e511-80cf-005056810c7c",
    "_owninguser_value":"2baf4a0a-b048-e311-b75b-0050568b4c09",
    "tri_answertext":null,
    "tri_weightedscore":null,
    "_modifiedonbehalfby_value":null,
    "timezoneruleversionnumber":null,
    "importsequencenumber":null,
    "utcconversiontimezonecode":null,
    "tri_comments":null,
    "_owningteam_value":null,
    "_createdonbehalfby_value":null,
    "overriddencreatedon":null
}


if (answerType == "Optionset") {
    answerid = $(this).context.attributes.answerid.value;
    answervalue = $(this).context.attributes.value.value;
}
else if (answerType == "Multi-Select") {
    answerText = $(this).text();
}
else {
    comments = $(this).text();
}
entity.tri_questionnumber = 5;
entity.tri_answervalue = 2;
entity.tri_comments = "Sanjy test For populating lookups";
entity["tri_AssessmentId@odata.bind"] = "/tri_assessments(09F16A49-E896-E611-80D1-005056810C7C)";
entity["tri_AssessmentTypeId@odata.bind"] = "/tri_assessmenttypes(e4b495f0-e396-e611-80d1-005056810c7c)";
entity["tri_QuestionId@odata.bind"] = "/tri_assessmentquestions(025a9fbf-e596-e611-80d1-005056810c7c)";
//entity["tri_assessmentdetailId@odata.bind"] = "/tri_assessmentdetails(806e20ee-8fa3-e611-80d1-005056810c7c)"
 
var req = new XMLHttpRequest();
req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentdetails", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function () {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 204) {
            var uri = this.getResponseHeader("OData-EntityId");
            var regExp = /\(([^)]+)\)/;
            var matches = regExp.exec(uri);
            var newEntityId = matches[1];
        }
        else {
            alert(this.statusText);
        }
    }
};
req.send(JSON.stringify(entity));

var req = new XMLHttpRequest();
req.open("PATCH", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentdetails(806e20ee-8fa3-e611-80d1-005056810c7c)", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function () {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 204) {
            //Success - No Return Data - Do Something
        }
        else {
            alert(this.statusText);
        }
    }
};
req.send(JSON.stringify(entity));