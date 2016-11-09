var debugMode = false;
var progressIndex = 0;
var assessmentWizardVars = {};
assessmentWizardVars.noOfQuestionsToDisplayOnView = 5;
var firstView = false;
var getanswers = "";
var lstAssesmentDetails = [];
//var assesmentDetailId = "";
var lstAnswerSelected = [];
var vAssessmentIdFormatted = "";

function questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, answerType, answerText, weightedScore, sectionName, quesCatId, comments) {

    var entity = {};
    entity.tri_questionnumber = questionnumber;

    if (answervalue !== "" && answervalue !== undefined && answervalue !== null) {
        entity.tri_answervalue = answervalue;
    }

    entity.tri_comments = comments;
    entity["tri_AssessmentId@odata.bind"] = "/tri_assessments(" + assessmentid + ")";
    entity["tri_AssessmentTypeId@odata.bind"] = "/tri_assessmenttypes(" + assessmenttypeid + ")";
    entity["tri_QuestionId@odata.bind"] = "/tri_assessmentquestions(" + questionid + ")";
    entity["tri_AssessmentQuestionCategoryId@odata.bind"] = "/tri_assessmentquestioncategories(" + quesCatId + ")";

    if (assessmentdetailid !== "" && assessmentdetailid !== undefined && assessmentdetailid !== null) {
        entity["tri_assessmentdetailId@odata.bind"] = "/tri_assessmentdetails(" + assessmentdetailid + ")";
    }

    if (answerid !== "" && answerid !== undefined && answerid !== null) {
        entity["tri_AnswerId@odata.bind"] = "/tri_assessmentanswers(" + answerid + ")";
    }

    entity.tri_answertype = answerType; // Optionset  Numeric  Date  Text  Memo Multi-Select
    entity.tri_answertext = answerText;
    entity.tri_weightedscore = parseFloat(Number(weightedScore)).toFixed(2);
    entity.tri_name = sectionName;
    return entity;
};

function checkIfQuestionAlreayAnswered(questionNum) {
    var questionFoundAtIndex = -1;

    $.each(lstAnswerSelected, function (index, valueObj) {
        if (valueObj.tri_questionnumber == questionNum) {
            questionFoundAtIndex = index;
            return false;
        }
    });

    return questionFoundAtIndex;
};

function bindRadioClickEvent() {

    $("input[type=radio]").bind('click', function (evt) {

        debugger;
        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");
        var questionnumber = $(question).attr('questionnumber')

        var answervalue = $(this).context.attributes.value.value;
        var answerText = $(this).context.attributes.text.value;
        var answerid = $(this).context.attributes.answerid.value;

        var index = checkIfQuestionAlreayAnswered(questionnumber);
        if (index !== -1) {
            lstAnswerSelected[index].tri_answervalue = answervalue;
            lstAnswerSelected[index].tri_answertext = answerText;
            lstAnswerSelected[index]["tri_AnswerId@odata.bind"] = "/tri_assessmentanswers(" + answerid + ")";

        } else {
            //var questionid = $(this).context.attributes.questionid.value;
            var assessmentid = vAssessmentIdFormatted;
            var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
            var assessmentdetailid = "";
            var comments = "";
            var assessmentdetailid = "";
            //var question = $("#"+questionid+"_question");
            var sectionName = $(question).attr('sectionName');
            var quesCatId = $(question).attr('questionCat');
            var weightedScore = $(question).attr('weightedScore');

            var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber,"Optionset",
                                                                answerText, weightedScore, sectionName, quesCatId, comments);
            //var questionObj = new questionWithAnswerSelected(questionid, null, answervalue, null, null, null, null);
            lstAnswerSelected.push(questionObj);
        }
    });
};

function bindTextAreaClickEvent() {
    $("textarea").bind('blur', function () {
        debugger;
        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");
        var questionnumber = $(question).attr('questionnumber');
        var comments = $(this).val();

        var index = checkIfQuestionAlreayAnswered(questionnumber);
        if (index !== -1) {
            //QuestionAlreadyAnswered            
            lstAnswerSelected[index].tri_comments = comments;
        } else {
            var answervalue = ""; //$(this).val();
            //  var questionid = $(this).context.attributes.id.value;

            //var questionid = $(this).context.attributes.questionid.value;
            //var answervalue = $(this).context.attributes.value.value;
            var answerid = ""; //$(this).context.attributes.answerid.value;
            var assessmentid = vAssessmentIdFormatted;
            var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
            var assessmentdetailid = "";
            var answerText = "";//$(this).text();
            //var question = $("#" + questionid + "_question");

            var sectionName = $(question).attr('sectionName');
            var quesCatId = $(question).attr('questionCat');
            var weightedScore = $(question).attr('weightedScore');

            var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Memo",
                                                                answerText, weightedScore, sectionName, quesCatId, comments);
            lstAnswerSelected.push(questionObj);
        }
    });
}

function bindTextBoxClickEvent() {
    $("input[type=text]:not([class~=datepicker])").bind('blur', function () {
        debugger;
        var controlName = $(this)[0].name;
        // if (controlName.indexOf("_date") !== -1) {
        var answerText = $(this).val();
        if (controlName.indexOf("_date") > -1) {
            if (answerText !== null && answerText !== undefined && answerText !== "") {

                var date = new Date(answerText);
                //date.setDate(date.getDate() + snoozedays);
                answerText = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
            }
        }
        //else if (controlName.indexOf("_numeric") > -1) {
        //    answerText = 
        //}

        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");
        var questionnumber = $(question).attr('questionnumber');

        var index = checkIfQuestionAlreayAnswered(questionnumber);

        if (index !== -1) {
            lstAnswerSelected[index].tri_answertext = answerText;
        } else {

            var answervalue = ""; //$(this).val();
            // var questionid = $(this).context.attributes.questionid.value;
            var answerid = $(this).context.attributes.answerid.value;
            var assessmentid = vAssessmentIdFormatted;
            var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
            var assessmentdetailid = "";
            //var question = $("#" + questionid + "_question");

            var sectionName = $(question).attr('sectionName');
            var quesCatId = $(question).attr('questionCat');
            var weightedScore = $(question).attr('weightedScore');
            var comments = "";

            var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Multi-Select",
                                                                answerText, weightedScore, sectionName, quesCatId, comments);
            lstAnswerSelected.push(questionObj);
        }
        //}
        // }
    });
}

function bindDateChangeClickEvent(dateText, ctrl) {

    debugger;
    //var controlName = $(this)[0].name;
    //// if (controlName.indexOf("_date") !== -1) {
    //var answerText = $(this).val();
    //if (controlName.indexOf("_date") > -1) {
    //    if (answerText !== null && answerText !== undefined && answerText !== "") {

    //        var date = new Date(answerText);
    //        //date.setDate(date.getDate() + snoozedays);
    //        answerText = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    //    }
    //}
    ////else if (controlName.indexOf("_numeric") > -1) {
    ////    answerText = 
    ////}

    //var questionid = $(this).context.attributes.questionid.value;
    //var question = $("#" + questionid + "_question");
    //var questionnumber = $(question).attr('questionnumber');

    //var index = checkIfQuestionAlreayAnswered(questionnumber);

    //if (index !== -1) {
    //    lstAnswerSelected[index].tri_answertext = answerText;
    //} else {

    //    var answervalue = ""; //$(this).val();
    //    // var questionid = $(this).context.attributes.questionid.value;
    //    var answerid = $(this).context.attributes.answerid.value;
    //    var assessmentid = vAssessmentIdFormatted;
    //    var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
    //    var assessmentdetailid = "";
    //    //var question = $("#" + questionid + "_question");

    //    var sectionName = $(question).attr('sectionName');
    //    var quesCatId = $(question).attr('questionCat');
    //    var weightedScore = $(question).attr('weightedScore');
    //    var comments = "";

    //    var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Multi-Select",
    //                                                        answerText, weightedScore, sectionName, quesCatId, comments);
    //    lstAnswerSelected.push(questionObj);
    //}
}

function bindCheckBoxClickEvent() {
    $("input[type=checkbox]").bind('click', function () {
        debugger;
        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");

        var questionnumber = $(question).attr('questionnumber');
        var answerText = $(this).context.attributes.value.value;
        var index = checkIfQuestionAlreayAnswered(questionnumber);
        var answerid = $(this).context.attributes.answerid.value;

        if ($(this).prop('checked') == true) {
            if (index == -1) {
                var answervalue = null;
                var assessmentid = vAssessmentIdFormatted;
                var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
                var assessmentdetailid = "";
                var sectionName = $(question).attr('sectionName');
                var quesCatId = $(question).attr('questionCat');
                var weightedScore = $(question).attr('weightedScore');
                var comments = "";

                var questionObj = questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Multi-Select",
                                                                    answerText, weightedScore, sectionName, quesCatId, comments);

                lstAnswerSelected.push(questionObj);
            } else {
                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext + "," + answerText;
                //delete lstAnswerSelected[index]["tri_AnswerId@odata.bind"];
                lstAnswerSelected[index]["tri_AnswerId@odata.bind"] = "/tri_assessmentanswers(" + lstAnswerSelected[index]["tri_AnswerId@odata.bind"]
                    .substr(lstAnswerSelected[index]["tri_AnswerId@odata.bind"].indexOf('(') + 1, lstAnswerSelected[index]["tri_AnswerId@odata.bind"].indexOf(')') - lstAnswerSelected[index]["tri_AnswerId@odata.bind"].indexOf('(')) + ',' + answerid + ")";

            }
        } else if ($(this).prop('checked') == false) {
            if (lstAnswerSelected[index].tri_answertext.indexOf(',') > -1) {
                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.replace(answerText + ',', '');
                lstAnswerSelected[index]["tri_AnswerId@odata.bind"] = lstAnswerSelected[index]["tri_AnswerId@odata.bind"].replace(answerid + ',', '');
            }
            else {
                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.replace(answerText, '');
                lstAnswerSelected[index]["tri_AnswerId@odata.bind"] = ""; //lstAnswerSelected[index]["tri_AnswerId@odata.bind"].replace(answerid, '');
            }
            // check this one
            //if (lstAnswerSelected[index].tri_answertext.length == 0) {
            //    //remove object from list
            //    lstAnswerSelected.splice(index, 1);
            //}
        }
    });
}

function isMandatoryQuestionAnswered(questionObj, questType) {

    var result = true;
    var answerSelected;

    if (questionObj == undefined || questionObj == null || questType == undefined || questType == null) {
        result = false;
    }
    if (questType == "100000000") {
        var optionSet = $(questionObj).children("input[type=radio]")[0];
        var radioGroupName = $(optionSet).attr('name');
        var questionDiv = $(questionObj).children('div');
        var questionid = $(questionDiv).attr('questionid');
        answerSelected = $('input[name=' + radioGroupName + ']:checked').val();
    }

    if (questType == "100000001" || questType == "100000003") {
        var content = $(questionObj).children("input[type=textarea]").val();
        if (content.length < 1) {
            answerSelected = undefined;
        }
    }

    var errorSpanId = questionid + "_errorSpan";
    var errorSpan = '<span style = "color:red;" class = "errorSpan" id="' + errorSpanId + '"><span>This question requires an answer!</span></br></span>';
    if (answerSelected == undefined) {
        $(questionObj).prepend(errorSpan);
        result = false;
    }

    return result;
}

function validateSection(sectionObject) {
    var result = true;
    if (sectionObject == undefined || sectionObject == null) {
        return false;
    }

    var questions = $(sectionObject).children('div');

    $.each(questions, function (index, valueObj) {
        if (index > 0) {
            var questionDiv = $(valueObj).children('div');
            var questType = $(questionDiv).attr('questiontype');
            var isQuestionMandatory = $(questionDiv).attr('isrequired');
            if (isQuestionMandatory == "true") {
                if (!isMandatoryQuestionAnswered(valueObj, questType)) {
                    result = false;
                }
            }
        }
    });

    return result;
}

$(document).ready(function () {
    //("hello");
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    var vAssessmentId = window.opener.Xrm.Page.data.entity.getId();//get the AssementId from the windowopener

    console.log("Assesment Id :", vAssessmentId);
    var vAssessmentId2 = vAssessmentId.replace("{", "");
    vAssessmentIdFormatted = vAssessmentId2.replace("}", "");

    GetAssesmentDetails(vAssessmentIdFormatted);
    console.log("Assesment details b4 save:",lstAnswerSelected);
    var vAssementType = GetAssessmentType(vAssessmentIdFormatted);
    //var vAssementType = GetAssessmentType("");
    //alert(vAssementType);

    $(".next").click(function () {

        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        if (next_fs == undefined) {
            alert("No Section Found");
            animating = false;
            return;
        }

        if (!validateSection(current_fs)) {
            alert("Some Mandatory Questions are not Answered.")
            animating = false;
            return;
        }

        var current_fs_section = current_fs[0].childNodes[0].firstChild.data;
        var next_fs_section = next_fs[0].childNodes[0].firstChild.data;

        if (current_fs_section !== next_fs_section) {
            document.getElementById('questionCategory').innerHTML = next_fs_section;
            //activate next step on progressbar using the index of next_fs
            progressIndex = progressIndex + 1;
            //$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            $("#progressbar li").eq(progressIndex).addClass("active");
        }

        //clean gloabl array of selected answers

        console.log("Logging Object to be Stored");
        console.log(lstAnswerSelected);
        // lstAnswerSelected = [];

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

        debugger;
        if (lstAnswerSelected.length > 0) {
            // Save on next click
            for (var i = 0; i < lstAnswerSelected.length; i++) {
                var url = "";
                var method = "";
                if (lstAnswerSelected[i]["tri_assessmentdetailId@odata.bind"] !== null
                    && typeof (lstAnswerSelected[i]["tri_assessmentdetailId@odata.bind"]) !== "undefined"
                    && lstAnswerSelected[i]["tri_assessmentdetailId@odata.bind"] !== "") {
                    url = "/api/data/v8.0" + lstAnswerSelected[i]["tri_assessmentdetailId@odata.bind"];
                    method = "PATCH";
                    delete lstAnswerSelected[i]["tri_assessmentdetailId@odata.bind"];
                }
                else {
                    url = "/api/data/v8.0/tri_assessmentdetails";
                    method = "POST";
                }

                var req = new XMLHttpRequest();
                req.open(method, Xrm.Page.context.getClientUrl() + url, false);
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 204) {
                            if (method === "POST") {
                                var uri = this.getResponseHeader("OData-EntityId");
                                var regExp = /\(([^)]+)\)/;
                                var matches = regExp.exec(uri);
                                var newEntityId = matches[1];
                            }
                        }
                        else {
                            alert(this.statusText);
                        }
                    }
                };
                req.send(JSON.stringify(lstAnswerSelected[i]));
            }
            lstAnswerSelected.length = 0;
            GetAssesmentDetails(vAssessmentIdFormatted);
        }
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

    $(function () {
        $(".datepicker").datepicker();
        $(".numeric").spinner({ step: 1.00, numberFormat: "n" });
        $('.datepicker').datepicker({
            onSelect: function () {
                bindDateChangeClickEvent(dateText,this);
            }
        });
    });

    bindRadioClickEvent();
    bindTextAreaClickEvent();
    bindTextBoxClickEvent();
    bindCheckBoxClickEvent();
    
});

function GetAssessmentType(vAssessmentId) {
    if (debugMode == true) {

        var result = {
            "@odata.context": "https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessments(_tri_assessmenttypeid_value)/$entity", "@odata.etag": "W/\"3213248\"", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_assessmentid": "6deecdb4-7539-e611-80d1-005056810c7c"
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
                url: Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessments(" + vAssessmentId + ")?$select=_tri_assessmenttypeid_value",
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

    if (debugMode == true) {

        //var response = {
        //    "@odata.context": "https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessmentquestioncategories(tri_name,tri_assessmentquestioncategoryid)", "value": [
        //      {
        //          "@odata.etag": "W/\"1912367\"", "tri_name": "Mental Health Supplement Type", "tri_assessmentquestioncategoryid": "3beca0f3-1fd4-e511-80cf-005056810c7c"
        //      }, {
        //          "@odata.etag": "W/\"1925380\"", "tri_name": "Section B: Mental Health Service History", "tri_assessmentquestioncategoryid": "fb5474c7-bfd5-e511-80d0-005056810c7c"
        //      }, {
        //          "@odata.etag": "W/\"1925374\"", "tri_name": "Section C: Mental State Indicators", "tri_assessmentquestioncategoryid": "61b5e6d7-bfd5-e511-80d0-005056810c7c"
        //      }, {
        //          "@odata.etag": "W/\"1925372\"", "tri_name": "Section D: Substance Use", "tri_assessmentquestioncategoryid": "960c70e9-bfd5-e511-80d0-005056810c7c"
        //      }, {
        //          "@odata.etag": "W/\"1925300\"", "tri_name": "Section E: Harm to Self and Others", "tri_assessmentquestioncategoryid": "f1429bf6-bfd5-e511-80d0-005056810c7c"
        //      }, {
        //          "@odata.etag": "W/\"1925301\"", "tri_name": "Section F: Stress and Trauma", "tri_assessmentquestioncategoryid": "68aa1214-c0d5-e511-80d0-005056810c7c"
        //      }, {
        //          "@odata.etag": "W/\"1925336\"", "tri_name": "Section G: Medication", "tri_assessmentquestioncategoryid": "9679d31f-c0d5-e511-80d0-005056810c7c"
        //      }, {
        //          "@odata.etag": "W/\"1925350\"", "tri_name": "Section H: Social Relations", "tri_assessmentquestioncategoryid": "c9c59534-c0d5-e511-80d0-005056810c7c"
        //      }
        //    ]
        //};

        //var results = response;//JSON.parse(response);
        //var fieldsets = "";
        //for (var i = 0; i < results.value.length; i++) {
        //    var tri_name = results.value[i]["tri_name"];
        //    var tri_assessmentquestioncategoryid = results.value[i]["tri_assessmentquestioncategoryid"];

        //    if (i === 0) {
        //        $("#progressbar").append('<li class="active">' + tri_name + '</li>');

        //    }
        //    else {
        //        $("#progressbar").append('<li>' + tri_name + '</li>');
        //    }

        //    GetAssesmentQuestions(tri_name, _tri_assessmenttypeid_value, tri_assessmentquestioncategoryid);
        //}
    } else {
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

function GetAssesmentQuestions(sectionname, assessmenttypeid, questionCategoryId) {

    if (debugMode == true) {

        //var response = {
        //    "@odata.context": "https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessmentquestions(tri_answertype,tri_answertypetext,_tri_assessmentquestioncategoryid_value,tri_assessmentquestionid,_tri_assessmenttypeid_value,tri_includecomments,tri_isrequired,tri_name,tri_questionnumber)", "value": [
        //      {
        //          "@odata.etag": "W/\"1925410\"", "tri_answertype@OData.Community.Display.V1.FormattedValue": "Optionset", "tri_answertype": 100000000, "tri_answertypetext": "Optionset", "_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue": "Section F: Stress and Trauma", "_tri_assessmentquestioncategoryid_value": "68aa1214-c0d5-e511-80d0-005056810c7c", "tri_assessmentquestionid": "7d7b4ad5-02d5-e511-80d0-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_includecomments@OData.Community.Display.V1.FormattedValue": "No Value", "tri_includecomments": 167410002, "tri_isrequired@OData.Community.Display.V1.FormattedValue": "No", "tri_isrequired": false, "tri_name": "Death of close family member or friend", "tri_questionnumber@OData.Community.Display.V1.FormattedValue": "30", "tri_questionnumber": 30
        //      }, {
        //          "@odata.etag": "W/\"1925411\"", "tri_answertype@OData.Community.Display.V1.FormattedValue": "Optionset", "tri_answertype": 100000000, "tri_answertypetext": "Optionset", "_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue": "Section F: Stress and Trauma", "_tri_assessmentquestioncategoryid_value": "68aa1214-c0d5-e511-80d0-005056810c7c", "tri_assessmentquestionid": "7f7b4ad5-02d5-e511-80d0-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_includecomments@OData.Community.Display.V1.FormattedValue": "No Value", "tri_includecomments": 167410002, "tri_isrequired@OData.Community.Display.V1.FormattedValue": "No", "tri_isrequired": false, "tri_name": "Victim of physical assault or abuse", "tri_questionnumber@OData.Community.Display.V1.FormattedValue": "31", "tri_questionnumber": 31
        //      }, {
        //          "@odata.etag": "W/\"1925412\"", "tri_answertype@OData.Community.Display.V1.FormattedValue": "Optionset", "tri_answertype": 100000000, "tri_answertypetext": "Optionset", "_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue": "Section F: Stress and Trauma", "_tri_assessmentquestioncategoryid_value": "68aa1214-c0d5-e511-80d0-005056810c7c", "tri_assessmentquestionid": "817b4ad5-02d5-e511-80d0-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_includecomments@OData.Community.Display.V1.FormattedValue": "No Value", "tri_includecomments": 167410002, "tri_isrequired@OData.Community.Display.V1.FormattedValue": "No", "tri_isrequired": false, "tri_name": "Victim of crime (e.g., robbery; exclude assault)", "tri_questionnumber@OData.Community.Display.V1.FormattedValue": "32", "tri_questionnumber": 32
        //      }, {
        //          "@odata.etag": "W/\"1925413\"", "tri_answertype@OData.Community.Display.V1.FormattedValue": "Optionset", "tri_answertype": 100000000, "tri_answertypetext": "Optionset", "_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue": "Section F: Stress and Trauma", "_tri_assessmentquestioncategoryid_value": "68aa1214-c0d5-e511-80d0-005056810c7c", "tri_assessmentquestionid": "837b4ad5-02d5-e511-80d0-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_includecomments@OData.Community.Display.V1.FormattedValue": "No Value", "tri_includecomments": 167410002, "tri_isrequired@OData.Community.Display.V1.FormattedValue": "No", "tri_isrequired": false, "tri_name": "Victim of emotional abuse", "tri_questionnumber@OData.Community.Display.V1.FormattedValue": "33", "tri_questionnumber": 33
        //      }, {
        //          "@odata.etag": "W/\"1925414\"", "tri_answertype@OData.Community.Display.V1.FormattedValue": "Optionset", "tri_answertype": 100000000, "tri_answertypetext": "Optionset", "_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue": "Section F: Stress and Trauma", "_tri_assessmentquestioncategoryid_value": "68aa1214-c0d5-e511-80d0-005056810c7c", "tri_assessmentquestionid": "857b4ad5-02d5-e511-80d0-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_includecomments@OData.Community.Display.V1.FormattedValue": "No Value", "tri_includecomments": 167410002, "tri_isrequired@OData.Community.Display.V1.FormattedValue": "No", "tri_isrequired": false, "tri_name": "Victim of sexual assault or abuse", "tri_questionnumber@OData.Community.Display.V1.FormattedValue": "34", "tri_questionnumber": 34
        //      }, {
        //          "@odata.etag": "W/\"1925415\"", "tri_answertype@OData.Community.Display.V1.FormattedValue": "Optionset", "tri_answertype": 100000000, "tri_answertypetext": "Optionset", "_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue": "Section F: Stress and Trauma", "_tri_assessmentquestioncategoryid_value": "68aa1214-c0d5-e511-80d0-005056810c7c", "tri_assessmentquestionid": "877b4ad5-02d5-e511-80d0-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_includecomments@OData.Community.Display.V1.FormattedValue": "No Value", "tri_includecomments": 167410002, "tri_isrequired@OData.Community.Display.V1.FormattedValue": "No", "tri_isrequired": false, "tri_name": "Describes one or more of these events as invoking a sense of horror or intense fear", "tri_questionnumber@OData.Community.Display.V1.FormattedValue": "35", "tri_questionnumber": 35
        //      }, {
        //          "@odata.etag": "W/\"1925416\"", "tri_answertype@OData.Community.Display.V1.FormattedValue": "Memo", "tri_answertype": 100000003, "tri_answertypetext": "Memo", "_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue": "Section F: Stress and Trauma", "_tri_assessmentquestioncategoryid_value": "68aa1214-c0d5-e511-80d0-005056810c7c", "tri_assessmentquestionid": "897b4ad5-02d5-e511-80d0-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_includecomments@OData.Community.Display.V1.FormattedValue": "No Value", "tri_includecomments": 167410002, "tri_isrequired@OData.Community.Display.V1.FormattedValue": "No", "tri_isrequired": false, "tri_name": "Comments, Section F", "tri_questionnumber@OData.Community.Display.V1.FormattedValue": "36", "tri_questionnumber": 36
        //      }
        //    ]
        //};

        //var results = response;//JSON.parse(this.response);
        //var questionsset = "";
        //var divStart = "<div>";
        //var divClose = "</div>";
        //var j = 0;
        //var quesAnsHtm;
        //assessmentWizardVars.noOfQuestionsToDisplayOnView = results.value.length + 1;
        //for (var i = 0; i < results.value.length; i++) {
        //    var tri_answertype = results.value[i]["tri_answertype"];
        //    var tri_answertype_formatted = results.value[i]["tri_answertype@OData.Community.Display.V1.FormattedValue"];
        //    var tri_answertypetext = results.value[i]["tri_answertypetext"];
        //    var _tri_assessmentquestioncategoryid_value = results.value[i]["_tri_assessmentquestioncategoryid_value"];
        //    var _tri_assessmentquestioncategoryid_value_formatted = results.value[i]["_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue"];
        //    var tri_assessmentquestionid = results.value[i]["tri_assessmentquestionid"];
        //    var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
        //    var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
        //    var tri_includecomments = results.value[i]["tri_includecomments"];
        //    var tri_includecomments_formatted = results.value[i]["tri_includecomments@OData.Community.Display.V1.FormattedValue"];
        //    var tri_isrequired = results.value[i]["tri_isrequired"];
        //    var tri_isrequired_formatted = results.value[i]["tri_isrequired@OData.Community.Display.V1.FormattedValue"];
        //    var tri_name = results.value[i]["tri_name"];
        //    var tri_questionnumber = results.value[i]["tri_questionnumber"];
        //    var tri_questionnumber_formatted = results.value[i]["tri_questionnumber@OData.Community.Display.V1.FormattedValue"];
        //    var tri_memofieldsize = results.value[i]["tri_memofieldsize"];
        //    var tri_memofieldsize_formatted = results.value[i]["tri_memofieldsize@OData.Community.Display.V1.FormattedValue"];

        //    // display questions

        //    questionsset = '<span>' + tri_questionnumber + '.</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
        //    var getanswers = GetAssesmentAnswers(sectionname, _tri_assessmenttypeid_value, questionsset, tri_assessmentquestionid, tri_answertype, tri_isrequired, tri_memofieldsize);
        //    console.log("AnswersType in GetAssesmentQuestions-", tri_answertype);
        //    console.log("Answers-");
        //    console.log(getanswers);
        //    var questionWithAns = '<div>'

        //    var ansDiv = '<div></div>'
        //    questionWithAns = '<div>' + questionsset + getanswers + '</div>';

        //    if (j < assessmentWizardVars.noOfQuestionsToDisplayOnView) {

        //        if (j == 0) {
        //            if (firstView == false) {
        //                quesAnsHtm = '<div style= "display:block;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;">' + '<div>' + sectionname + '</div><br/>' + questionWithAns;
        //                document.getElementById('questionCategory').innerHTML = sectionname;
        //                firstView = true;
        //            } else {
        //                quesAnsHtm = '<div style ="display:none;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;">' + '<div>' + sectionname + '</div><br/>' + questionWithAns;
        //            }
        //        }
        //        else {
        //            quesAnsHtm = quesAnsHtm + '</br>' + questionWithAns;
        //        }

        //        j++;

        //        if (j == assessmentWizardVars.noOfQuestionsToDisplayOnView - 1 || i == results.value.length - 1) {
        //            j = 0;
        //            quesAnsHtm = quesAnsHtm +
        //                        '<input type="button" name="previous" class="previous action-button" value="Previous" />' +
        //                        '<input type="button" name="next" class="next action-button" value="Next" />' +
        //                        divClose;

        //            $('#fieldsets').append(quesAnsHtm);
        //            quesAnsHtm = '';
        //        }
        //    }

        //}
        //console.log(sectionname);
        //console.log("changing Question Category-",questionCategoryId);

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
                        var tri_memofieldsize = results.value[i]["tri_memofieldsize"];
                        var tri_memofieldsize_formatted = results.value[i]["tri_memofieldsize@OData.Community.Display.V1.FormattedValue"];

                        var isRequiredError = "";

                        if (tri_isrequired) {
                            isRequiredError = '<span sectionName="' + sectionname + '" id="' + tri_assessmentquestionid + '_errorSpan" class="error">This Question needs to be answered.</span><br/>';
                        }

                        // display questions
                        questionsset = isRequiredError + '<span>' + tri_questionnumber + '.</span><div questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + questionCategoryId + '" style="display:inline-block;margin-bottom: 10px;">' + tri_name + '</div><br/>';
                        //var getanswers = "";
                        window.getanswers = "";
                        GetAssesmentAnswers(sectionname, _tri_assessmenttypeid_value, questionsset, tri_assessmentquestionid, tri_answertype, tri_isrequired, tri_memofieldsize);
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

                            if (j == results.value.length || i == results.value.length) {
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

function GetAssesmentAnswers(sectionname, assessmenttypeid, questionsset, questionid, answertype, isrequired, memoFieldSize) {

    if (debugMode == true) {

        //var response = {
        //    "@odata.context": "https://health360dev.concertocloud.com/api/data/v8.0/$metadata#tri_assessmentanswers(tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name)", "value": [
        //      {
        //          "@odata.etag": "W/\"2448325\"", "tri_answervalue@OData.Community.Display.V1.FormattedValue": "1", "tri_answervalue": 1, "tri_assessmentanswerid": "6a4a1872-0dd1-e511-80cf-005056810c7c", "_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue": "Number of Lifetime Psychiatric Admissions", "_tri_assessmentquestionid_value": "0981a55c-0dd1-e511-80cf-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_name": "None"
        //      }, {
        //          "@odata.etag": "W/\"2448326\"", "tri_answervalue@OData.Community.Display.V1.FormattedValue": "2", "tri_answervalue": 2, "tri_assessmentanswerid": "57122e7f-0dd1-e511-80cf-005056810c7c", "_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue": "Number of Lifetime Psychiatric Admissions", "_tri_assessmentquestionid_value": "0981a55c-0dd1-e511-80cf-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_name": "1-3"
        //      }, {
        //          "@odata.etag": "W/\"2448327\"", "tri_answervalue@OData.Community.Display.V1.FormattedValue": "3", "tri_answervalue": 3, "tri_assessmentanswerid": "18696c8c-0dd1-e511-80cf-005056810c7c", "_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue": "Number of Lifetime Psychiatric Admissions", "_tri_assessmentquestionid_value": "0981a55c-0dd1-e511-80cf-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_name": "4-5"
        //      }, {
        //          "@odata.etag": "W/\"2448328\"", "tri_answervalue@OData.Community.Display.V1.FormattedValue": "4", "tri_answervalue": 4, "tri_assessmentanswerid": "73fc4295-0dd1-e511-80cf-005056810c7c", "_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue": "Number of Lifetime Psychiatric Admissions", "_tri_assessmentquestionid_value": "0981a55c-0dd1-e511-80cf-005056810c7c", "_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue": "Mental Health Supplement", "_tri_assessmenttypeid_value": "e701ab2d-0cd1-e511-80cf-005056810c7c", "tri_name": "6 or more"
        //      }
        //    ]
        //}

        //var results = response;//JSON.parse(this.response);
        //var getanswers = "";
        //for (var i = 0; i < results.value.length; i++) {
        //    var tri_answervalue = results.value[i]["tri_answervalue"];
        //    var tri_answervalue_formatted = results.value[i]["tri_answervalue@OData.Community.Display.V1.FormattedValue"];
        //    var tri_assessmentanswerid = results.value[i]["tri_assessmentanswerid"];
        //    var _tri_assessmentquestionid_value = results.value[i]["_tri_assessmentquestionid_value"];
        //    var _tri_assessmentquestionid_value_formatted = results.value[i]["_tri_assessmentquestionid_value@OData.Community.Display.V1.FormattedValue"];
        //    var _tri_assessmenttypeid_value = results.value[i]["_tri_assessmenttypeid_value"];
        //    var _tri_assessmenttypeid_value_formatted = results.value[i]["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
        //    var tri_name = results.value[i]["tri_name"];
        //    getanswers = getanswers + '<span style="    border-radius: 10px;background: #fff;border: 1px solid #999;    width: 20px;    height: 20px;    margin: 3px 10px 0 0;    -moz-box-sizing: border-box;    box-sizing: border-box;    -webkit-transition: all 0.1s linear;    transition: all 0.1s linear;">' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';

        //}
        //return getanswers;
    } else {
        var requiredClass = "";
        if (isrequired) {
            requiredClass = "required ";
        }
        var answerType = answertype;

        var textRows = 4;
        if (memoFieldSize !== null && memoFieldSize !== undefined && $.isNumeric(memoFieldSize) && (answerType === 100000001 || answerType === 100000003)) {
            textRows = Number(memoFieldSize);
        }

        debugger;
        var answerValueToMatch = $.map(lstAnswerSelected, function (val) {
            if (val["tri_QuestionId@odata.bind"].indexOf(questionid) > -1) {
                if (answerType === 100000000) {
                    return val.tri_answervalue !== null && val.tri_answervalue !== "undefined" ? val.tri_answervalue : "";
                }
                else if (answerType === 100000001 || answerType === 100000003) {
                    return val.tri_comments !== null && val.tri_comments !== "undefined" ? val.tri_comments : "";
                }
                else {
                    return val.tri_answertext !== null && val.tri_answertext !== "undefined" ? val.tri_answertext : "";
                }
            }
        });

        if (answerType === 100000000 || answerType === 100000005) {
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentanswers?$select=tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and _tri_assessmentquestionid_value eq " + questionid, false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");

            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    console.log("AssesmentTypeId :", assessmenttypeid);
                    console.log("Question Id :", questionid);
                    console.log("AnswerType :", answertype);

                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        //var questionToMatch = lstAssesmentDetails.find(function (x) { return x.QuestionId == questionid; });

                        var results = JSON.parse(this.response);
                        console.log("answer object", results);
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
                                if (answerValueToMatch.length > 0) {
                                    if (answerType === 100000005) {
                                        if (answerValueToMatch[0].indexOf(tri_name) > -1 && answerValueToMatch !== null) {
                                            checked = 'checked="checked"';
                                        }
                                    }
                                    else {
                                        if (answerValueToMatch[0] === tri_answervalue && answerValueToMatch !== null) {
                                            checked = 'checked="checked"';
                                        }
                                    }
                                }

                                // remove any = sign in text
                                if (tri_name.indexOf('=') > -1) {
                                    tri_name = tri_name.substr(tri_name.indexOf('=') + 1);
                                }

                                var answercontrols = "";
                                if (answerType === 100000000) {
                                    answercontrols = '<input type="radio" class="' + requiredClass + '" questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '"  name="' + questionid + '_radiobtn_answerValue" ' + checked + ' text="' + tri_name + '" value="' + tri_answervalue + '"> ' + tri_name; // checked="checked" 
                                }

                                else if (answerType === 100000005) {
                                    answercontrols = '<input type="checkbox"  questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '" name="' + questionid + '_chkbox_answerValue" ' + checked + ' value="' + tri_name + '" class="' + requiredClass + '">' + tri_name;// + '<br>';
                                }

                                window.getanswers = window.getanswers + answercontrols; //CreateAnswers(tri_answervalue, tri_name, answertype, questionid); //'<span>' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
                            }
                        }
                        //else {

                        //    var answercontrols = "";
                        //    console.log("answerType :", answerType);
                        //    //if (answerType === 100000000) {
                        //    //    answercontrols = '<input type="radio" name="' + questionid + '_radiobtn_answerValue" value=""> ' + tri_name; // checked="checked" 
                        //    //}
                        //    //else
                        //    if (answerType === 100000001 || answerType === 100000003) {
                        //        answercontrols = '<textarea  questionid = "' + questionid + '"  assessmenttypeid= "' + assessmenttypeid + '" class="' + requiredClass + '" rows="' + textRows + '" id="' + questionid + '_textarea" maxlength="4000" cols="100"></textarea><br>'
                        //    }
                        //    else if (answerType === 100000002) {
                        //        requiredClass = requiredClass + "datepicker";
                        //        answercontrols = '<input type="text" name="' + questionid + '_date"  class="' + requiredClass + '"><br>'; // we can show this with jquery date picker even
                        //    }
                        //    else if (answerType === 100000004) {
                        //        requiredClass = requiredClass + "numeric";
                        //        answercontrols = '<input style="border-color: transparent;" value="0" type="text" name="' + questionid + '_numeric"  class="' + requiredClass + '"><br>';  // , you can use the spinner control. Numeric
                        //    }
                        //    //else if (answerType === 100000005) {
                        //    //    answercontrols = '<input type="checkbox" name="' + questionid + '_chkbox_answerValue" value="' + tri_answervalue + '">' + tri_name + '<br>';
                        //    //}

                        //    window.getanswers = window.getanswers + answercontrols;
                        //}
                    }
                    else {
                        alert(this.statusText);
                    }
                }
            };
            req.send();
        }
        else {
            var answercontrols = "";
            var text = "";
            if (answerValueToMatch.length > 0)
            {
                text = answerValueToMatch[0];
            }

            if (answerType === 100000001 || answerType === 100000003) {
                answercontrols = '<textarea rows="' + textRows + '" class="' + requiredClass + '"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" id="' + questionid + '_textarea" maxlength="4000" cols="100">' + text + '</textarea><br>'
            }
            else if (answerType === 100000002) {
                requiredClass = requiredClass + "datepicker";
                // answercontrols = '<input type="date" name="' + questionid + '_date" value="' + tri_answervalue + '" max="1979-12-31"><br>'; // we can show this with jquery date picker even
                answercontrols = '<input type="text" name="' + questionid + '_date"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" value="' + text + '" class="' + requiredClass + '"><br>'; // we can show this with jquery date picker even
            }
            else if (answerType === 100000004) {
                requiredClass = requiredClass + "numeric";
                answercontrols = '<input style="border-color: transparent;" type="text"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" name="' + questionid + '_numeric" value="' + text + '" class="' + requiredClass + '"><br>';  // , you can use the spinner control.
            }
            window.getanswers = window.getanswers + answercontrols;
        }
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
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/tri_assessmentdetails?$select=_tri_answerid_value,tri_answertext,tri_answertype,tri_answervalue,tri_assessmentdetailid,_tri_assessmentid_value,_tri_assessmentquestioncategoryid_value,_tri_assessmenttypeid_value,tri_comments,tri_name,_tri_questionid_value,tri_questionnumber,tri_weightedscore&$filter=_tri_assessmentid_value eq " + assesmentId, false);  // + " and  _tri_answerid_value ne null"
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

                    var questionObj = new questionWithAnswerSelected(_tri_questionid_value, _tri_answerid_value, tri_answervalue, assesmentId, _tri_assessmenttypeid_value, tri_assessmentdetailid, tri_questionnumber, tri_answertype,
                                                                      tri_answertext, tri_weightedscore, tri_name, _tri_assessmentquestioncategoryid_value, tri_comments);
                    lstAnswerSelected.push(questionObj);
                }
            }
            else {
                alert(this.statusText);
            }
        }
    };
    req.send();
}