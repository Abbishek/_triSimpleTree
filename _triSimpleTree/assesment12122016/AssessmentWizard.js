var debugMode = false;
var webApiUri = "/api/data/v8.0/";
var assessmentIsComplete = 167410000;
var progressIndex = 0;
var assessmentWizardVars = {};
assessmentWizardVars.noOfQuestionsToDisplayOnView = 5;
var firstView = false;
var isLastCategory = false;
var getanswers = "";
var lstAssesmentDetails = [];
//var assesmentDetailId = "";
var lstAnswerSelected = [];
var assesmentDetailsToSave = [];
var sections = [];
var vAssessmentIdFormatted = "";
var overallScore;
var overallRiskLevel;
var noScore = "NA";
var scoreWindow;
var scoreWindowTitle;
var inputDisabled = false;
var assessmenttypeid_value;
var assessmenttypeid_value_formatted;
var Xrm;
//
var currentQuestionCategoryId;

function questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, answerType, answerText, weightedScore, sectionName, quesCatId, comments) {

    var entity = {};
    entity.tri_questionnumber = questionnumber;

    if (typeof (answervalue) !== "undefined" && answervalue !== "" && answervalue !== null) {
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

    if (answerid !== "" && typeof answerid !== "undefined" && answerid !== null) {
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

function checkIfSaveObjectAlreayAnswered(Object, questionNum) {
    var questionFoundAtIndex = -1;

    if (Object.length > 0) {
        $.each(Object, function (index, valueObj) {
            if (valueObj !== null && typeof (valueObj) !== 'undefined' && valueObj.tri_questionnumber == questionNum) {
                questionFoundAtIndex = index;
                return false;
            }
        });
    }
    return questionFoundAtIndex;
};

function bindRadioClickEvent() {

    $("input[type=radio]").bind('click', function (evt) {

        //var errorSpan = $(this).siblings('.errorSpan');
        // Find the span using the question id
        var questionid = $(this).attr("questionid");
        var spanName = questionid + "_errorSpan";
        var errorSpan = $('span[id=' + spanName + ']');
        if (typeof errorSpan !== "undefined") {
            $(errorSpan).remove();
        }

        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");
        var questionnumber = $(question).attr('questionnumber');

        var answervalue = $(this).context.attributes.value.value;
        var answerText = $(this).context.attributes.text.value;
        var answerid = $(this).context.attributes.answerid.value;

        var index = checkIfQuestionAlreayAnswered(questionnumber);
        if (index !== -1) {
            lstAnswerSelected[index].tri_answervalue = answervalue;
            lstAnswerSelected[index].tri_answertext = answerText;
            lstAnswerSelected[index]["tri_AnswerId@odata.bind"] = "/tri_assessmentanswers(" + answerid + ")";

            var objectIndex = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber);
            // We found it
            if (objectIndex > -1) {
                assesmentDetailsToSave.splice(objectIndex, 1);
            }
            assesmentDetailsToSave.push(lstAnswerSelected[index]);

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

            var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Optionset",
                                                                answerText, weightedScore, sectionName, quesCatId, comments);
            //var questionObj = new questionWithAnswerSelected(questionid, null, answervalue, null, null, null, null);
            lstAnswerSelected.push(questionObj);
            assesmentDetailsToSave.push(questionObj);
        }
    });
};

function bindTextAreaClickEvent() {
    $("textarea").bind('blur', function () {
        //debugger;
        var errorSpan = $(this).siblings('.errorSpan');
        if (typeof errorSpan !== "undefined") {
            $(errorSpan).remove();
        }

        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");
        var questionnumber = $(question).attr('questionnumber');
        var comments = $(this).val();

        var index = checkIfQuestionAlreayAnswered(questionnumber);
        if (index !== -1) {
            //QuestionAlreadyAnswered            
            lstAnswerSelected[index].tri_comments = comments;
            var isObjectPresent = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber) > -1;
            if (isObjectPresent) {
                assesmentDetailsToSave.splice(index, 1);
            }
            assesmentDetailsToSave.push(lstAnswerSelected[index]);
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
            assesmentDetailsToSave.push(questionObj);

        }
    });
}

function bindTextBoxClickEvent() {
    $("input[type=text]:not([class~=datepicker])").bind('blur', function () {
        // debugger;
        var errorSpan = $(this).parent().siblings('.errorSpan');
        if (typeof errorSpan !== "undefined") {
            $(errorSpan).remove();
        }
        var controlName = $(this)[0].name;
        // if (controlName.indexOf("_date") !== -1) {
        var answerText = $(this).val();
        if (controlName.indexOf("_date") > -1) {
            if (answerText !== null && answerText !== undefined && answerText !== "") {
                var date = new Date(answerText);
                answerText = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
            }
        }


        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");
        var questionnumber = $(question).attr('questionnumber');

        var index = checkIfQuestionAlreayAnswered(questionnumber);

        if (index !== -1) {
            lstAnswerSelected[index].tri_answertext = answerText;

            var isObjectPresent = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber) > -1;
            if (isObjectPresent) {
                assesmentDetailsToSave.splice(index, 1);
            }
            assesmentDetailsToSave.push(lstAnswerSelected[index]);

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
            assesmentDetailsToSave.push(questionObj);

        }
        //}
        // }
    });
}

function bindDateChangeClickEvent(dateText) {
}

function bindCheckBoxClickEvent() {
    $("input[type=checkbox]").bind('click', function () {
        //debugger;
        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");

        var questionnumber = $(question).attr('questionnumber');
        var answerText = $(this).context.attributes.value.value;
        var index = checkIfQuestionAlreayAnswered(questionnumber);
        var answerid = $(this).context.attributes.answerid.value;
        var answervalue = "";

        if ($(this).prop('checked') == true) {
            if (index == -1) {
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
                assesmentDetailsToSave.push(questionObj);

            } else {
                if (lstAnswerSelected[index].tri_answertext !== null && typeof (lstAnswerSelected[index].tri_answertext) !== "undefined") {
                    lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext + "," + answerText;
                } else {
                    lstAnswerSelected[index].tri_answertext = answerText;
                }
                //delete lstAnswerSelected[index]["tri_AnswerId@odata.bind"];
                //lstAnswerSelected[index]["tri_AnswerId@odata.bind"] = "/tri_assessmentanswers(" + lstAnswerSelected[index]["tri_AnswerId@odata.bind"]
                //    .substr(lstAnswerSelected[index]["tri_AnswerId@odata.bind"].indexOf('(') + 1, lstAnswerSelected[index]["tri_AnswerId@odata.bind"].indexOf(')') - lstAnswerSelected[index]["tri_AnswerId@odata.bind"].indexOf('(')) + ',' + answerid + ")";

                var objectIndex = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber);
                if (objectIndex > -1) {
                    assesmentDetailsToSave.splice(objectIndex, 1); /////////// check
                }
                assesmentDetailsToSave.push(lstAnswerSelected[index]);
            }
        } else if ($(this).prop('checked') == false) {
            if (lstAnswerSelected[index].tri_answertext.indexOf(',') > -1) {
                //lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.substr(lstAnswerSelected[index].tri_answertext.indexOf(answerText), answerText.length); ////

                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.replace(answerText, ''); /////////// check
                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.replace(',,', ''); /////////// check
                //lstAnswerSelected[index]["tri_AnswerId@odata.bind"] = lstAnswerSelected[index]["tri_AnswerId@odata.bind"].replace(answerid + ',', '');
            }
            else {
                // lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.substr(lstAnswerSelected[index].tri_answertext.indexOf(answerText), answerText.length + 1);
                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.replace(answerText, '');
                //lstAnswerSelected[index]["tri_AnswerId@odata.bind"] = ""; //lstAnswerSelected[index]["tri_AnswerId@odata.bind"].replace(answerid, '');
            }
            // check this one
            //if (lstAnswerSelected[index].tri_answertext.length == 0) {
            //    //remove object from list
            //    lstAnswerSelected.splice(index, 1);
            //}
            var objectIndex = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber);
            if (objectIndex > -1) {
                assesmentDetailsToSave.splice(objectIndex, 1);
            }
            assesmentDetailsToSave.push(lstAnswerSelected[index]);
        }
    });
}

function isMandatoryQuestionAnswered(questionObj, questType) {

    var isAnswerSelected = true;

    if (typeof questionObj === "undefined" || questionObj == null || typeof questType === "undefined" || questType == null) {
        result = false;
    }

    //Option set radion button
    if (questType === "100000000") {
        //var optionSet = $(questionObj).children("input[type=radio]")[0];
        //var radioGroupName = $(optionSet).attr('name');
        var questionDiv = $(questionObj).children('div');
        var questionid = $(questionDiv).attr('questionid');
        //var answerSelected = $('input[name=' + radioGroupName + ']:checked').val();
        // Find the inputs for the question and see if one is checked
        var answerSelected = $('input[questionid=' + questionid + ']:checked').val();
        if (typeof answerSelected === "undefined") {
            isAnswerSelected = false;
        }
    }

    //commemts
    if (questType === "100000001" || questType === "100000003") {
        //alert("Text area is mandatory question");
        var content = $(questionObj).children("textarea").val();
        if (typeof content === "undefined") {
            isAnswerSelected = false;
        } else {
            if (content.trim() == "") {
                isAnswerSelected = false;
            }
        }
    }

    //input numeric
    if (questType === "100000004") {
        var input = $(questionObj).children("span").children("input[type=text]").val();
        if (typeof input === "undefined") {
            isAnswerSelected = false;
        } else {
            if (input.trim() == "") {
                isAnswerSelected = false;
            }
        }
    }

    //CheckBox
    if (questType === "100000005") {
        var input = $(valueObj).children('input[type=checkbox]:checked');
        if (typeof input === "undefined") {
            isAnswerSelected = false;
        } else {
            if (input.length > 0) {
                isAnswerSelected = true;
            }
        }
    }

    //Date
    if (questType === "100000002") {
        var input = $(questionObj).children("input[type=text]").val();
        if (typeof input === "undefined") {
            isAnswerSelected = false;
        } else {
            if (input.trim() == "") {
                isAnswerSelected = false;
            }
        }
    }

    var errorSpanId = questionid + "_errorSpan";
    var errorSpan = '<span style = "color:red;" class = "errorSpan" id="' + errorSpanId + '"><img src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error"><span>This question requires an answer !</span></br></span>';
    if (isAnswerSelected === false) {
        var span = $(questionObj).children().siblings('.errorSpan');
        if (span.length === 0) {
            $(questionObj).prepend(errorSpan);
        }
    }

    return isAnswerSelected;
}

function validateSection(sectionObject) {
    var result = true;
    if (typeof sectionObject === "undefined" || sectionObject == null) {
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
    //jQuery time
    //debugger;
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    //var vAssessmentId = window.opener.Xrm.Page.data.entity.getId();//get the AssementId from the windowopener
    //var vEntityName = window.opener.Xrm.Page.data.entity.getEntityName();//get the AssementId from the windowopener

    Xrm = window.opener.Xrm;
    var vAssessmentId = Xrm.Page.data.entity.getId();//get the AssementId from the windowopener
    var vEntityName = Xrm.Page.data.entity.getEntityName();//get the AssementId from the windowopener

    // if we are not on the Assessment Form then lets get the id 
    if (vEntityName !== assessmentEntityName) {
        //parse the querystring to get the objectid in the data parameter
        parseDataParams();

        // Get Id
        vAssessmentId = getParamVal(assessmentQueryStringParameter);
    }

    vAssessmentIdFormatted = vAssessmentId.replace("{", "").replace("}", "");

    // Determine if the Assessment has been submitted or Not
    getAssessment(vAssessmentIdFormatted);
    GetAssesmentDetails(vAssessmentIdFormatted);
    GetQuestionCategories(assessmenttypeid_value);
    SetCurrentQuestionCategoryId();
    // Disable all the Inputs
    if (inputDisabled === true) {
        $("#msform input").prop("disabled", true);
        // Enabled the buttons
        $("#msform input[type=button]").prop("disabled", false);
    }

    $(".next").click(function () {

        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        if (!validateSection(current_fs)) {
            //alert("Some Mandatory Questions are not Answered.")
            animating = false;
            return;
        }

        if (typeof (next_fs[0]) === "undefined") {
            //alert("No Section Found");
            isLastCategory = true;
            animating = false;
            //  return;
        }
        else {
            var current_fs_section = current_fs[0].childNodes[0].firstChild.data;
            var next_fs_section = next_fs[0].childNodes[0].firstChild.data;
            currentQuestionCategoryId = next_fs.attr('sectionid');
            if (current_fs_section !== next_fs_section) {
                document.getElementById('questionCategory').innerHTML = next_fs_section;
                //activate next step on progressbar using the index of next_fs
                progressIndex = progressIndex + 1;
                //$("#progressbar li").eq($("#fieldsets").index(next_fs)).addClass("active");
                //$("#progressbar li").eq(progressIndex).addClass("active");
                var liElement = document.getElementById(currentQuestionCategoryId);
                liElement.className = "active";
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
        }

        saveAnswers();
    });

    $(".previous").click(function () {
        isLastCategory = false;
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        currentQuestionCategoryId = previous_fs.attr('sectionid');
        //de-activate current step on progressbar
        //$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        //$("#progressbar li").eq($("#fieldsets").index(current_fs)).removeClass("active");
        var idToDeActivate = current_fs.attr('sectionid');
        var liElement = document.getElementById(idToDeActivate);
        liElement.className = "";

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

    $(".save").click(function () {
        saveAnswers();
        // Enable Submit
    })

    $(".submit").click(function () {
        var saveCount = assesmentDetailsToSave.length;
        if (saveCount > 0) {
            saveAnswers();
        }
        var updateObject = new Object();
        updateObject.statuscode = assessmentIsComplete;
        // Success Should be Refresh with Score
        patchRecord(vAssessmentIdFormatted, updateObject, assessmentEntitySetName, function () { window.location.reload(); }, function (message) { window.opener.Utility.alertDialog("Error in Submitting: " + message); });
    })

    $(".close").click(function () {
        window.close();
        scoreWindow.close();
    })

    $("#divScore").click(function () {
        displayScores();
    })

    $("#progressbar li").on('click', function () {
        try {
            if (animating) return false;
            animating = true;
            var nextQuestionCategoryId;
            var vClickedLIid;
            var currentSection;
            var bHideCurrentIfFound = true;

            if (currentQuestionCategoryId !== null && currentQuestionCategoryId !== "") {
                currentSection = $("div[sectionid=" + currentQuestionCategoryId + "]");
                if (currentSection !== null && typeof currentSection !== "undefined" && currentSection.length > 0) {
                    current_fs = $("div[sectionid=" + currentQuestionCategoryId + "]").eq(0);
                }
                else {
                    bHideCurrentIfFound = false;
                }
            }

            // Get Id from the Progressbar li
            vClickedLIid = $(this).attr('id'); // this is basically question category id.		
            next_fs = $("div[sectionid=" + vClickedLIid + "]").eq(0);
            nextQuestionCategoryId = next_fs.attr('sectionid');

            if (currentQuestionCategoryId == nextQuestionCategoryId) {
                animating = false;
                return;
            }

            currentQuestionCategoryId = nextQuestionCategoryId;

            //$("#progressbar li").eq($("#fieldsets").index(next_fs)).addClass("active");
            //$(this).addClass('active');
            MakeLiElementActiveTill($(this));
            //show the next fieldset
            next_fs.show();
            document.getElementById('questionCategory').innerHTML = next_fs.children()[0].innerHTML;

            // currentQuestionCategory div not found..nothing to hide..return
            if (!bHideCurrentIfFound) {
                animating = false;
                return;
            }

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

            saveAnswers();
        }
        catch (err) {
            animating = false;
            //console.log(err);
        }

    });

    // May not always be defined
    try {
        $(".datepicker").datepicker();

        $('.datepicker').on("change", function () {

            var questionid = $(this).context.attributes.questionid.value;
            var question = $("#" + questionid + "_question");
            var questionnumber = $(question).attr('questionnumber');

            var index = checkIfQuestionAlreayAnswered(questionnumber);
            //alert(questionnumber);
            if (index !== -1) {
                lstAnswerSelected[index].tri_answertext = $(this).val();

                var isObjectPresent = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber) > -1;
                if (isObjectPresent) {
                    assesmentDetailsToSave.splice(index, 1);
                }
                assesmentDetailsToSave.push(lstAnswerSelected[index]);

            } else {

                var answervalue = ""; //$(this).val();
                // var questionid = $(this).context.attributes.questionid.value;
                var answerid = $(this).context.attributes.answerid.value;
                var assessmentid = vAssessmentIdFormatted;
                var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
                var assessmentdetailid = "";
                var answerText2 = $(this).val();;
                //var question = $("#" + questionid + "_question");
                //alert(answerText2);
                var sectionName = $(question).attr('sectionName');
                var quesCatId = $(question).attr('questionCat');
                var weightedScore = $(question).attr('weightedScore');
                var comments = "";

                var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Date",
                                                                    answerText2, weightedScore, sectionName, quesCatId, comments);
                lstAnswerSelected.push(questionObj);
                assesmentDetailsToSave.push(questionObj);

            }
        });
    }
    catch (e) { }

    // May not always be defined
    try {
        $(".numeric").spinner({ step: 1.00, numberFormat: "n" });
    }
    catch (e) { }

    bindRadioClickEvent();
    bindTextAreaClickEvent();
    bindTextBoxClickEvent();
    bindCheckBoxClickEvent();
});

function SetCurrentQuestionCategoryId() {
    var vCurrentLi = $("#progressbar li.active");//.find('.active');
    currentQuestionCategoryId = vCurrentLi[0].getAttribute('id');
}

function saveAnswers() {
    if (assesmentDetailsToSave.length > 0) {
        // Save on next click
        for (var i = 0; i < assesmentDetailsToSave.length; i++) {
            var url = "";
            var method = "";
            if (typeof (assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"]) !== "undefined"
                && assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"] != null
                && assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"] !== "") {
                url = "/api/data/v8.0" + assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"];
                method = "PATCH";
                delete assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"];
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
                        //if (i + 1 === assesmentDetailsToSave.length) {
                        //    if (isLastCategory) {
                        //        alert("Assesment Saved Successfully.");
                        //    }                            
                        //}
                    }
                    else {
                        alert(this.statusText);
                    }
                }
            };
            req.send(JSON.stringify(assesmentDetailsToSave[i]));
        }
        assesmentDetailsToSave.length = 0;
        lstAnswerSelected.length = 0;
        GetAssesmentDetails(vAssessmentIdFormatted);
    }
}

function GetQuestionCategories(_tri_assessmenttypeid_value) {

    var req = new XMLHttpRequest();
    req.open("GET", getBaseWebUri() + questionsCategoryEntitySetName + "?$select=tri_name,tri_assessmentquestioncategoryid&$filter=_tri_assessmenttypeid_value eq " + _tri_assessmenttypeid_value + "", false);
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
                // Clear the array
                sections = [];
                for (var i = 0; i < results.value.length; i++) {
                    var tri_name = results.value[i]["tri_name"];
                    var tri_assessmentquestioncategoryid = results.value[i]["tri_assessmentquestioncategoryid"];

                    if (i === 0) {
                        $("#progressbar").append('<li class="active" id="' + tri_assessmentquestioncategoryid + '">' + tri_name + '</li>');
                    }
                    else {
                        $("#progressbar").append('<li id="' + tri_assessmentquestioncategoryid + '">' + tri_name + '</li>');
                    }

                    if (i == results.value.length - 1) {
                        isLastCategory = true;
                    }
                    GetAssesmentQuestions(tri_name, _tri_assessmenttypeid_value, tri_assessmentquestioncategoryid);
                    var rowObject = {}
                    rowObject.name = tri_name;
                    rowObject.id = tri_assessmentquestioncategoryid;
                    sections.push(rowObject);
                }
            }
            else {
                Xrm.Utility.alertDialogi(this.statusText);
            }
        }
    };
    req.send();
}

function GetAssesmentQuestions(sectionname, assessmenttypeid, questionCategoryId) {

    var req = new XMLHttpRequest();
    var jsonQuery = getBaseWebUri() + questionsEntitySetName + "?$select=tri_answertype,tri_answertypetext,_tri_assessmentquestioncategoryid_value,tri_assessmentquestionid,_tri_assessmenttypeid_value,tri_includecomments,tri_isrequired,tri_name,tri_questionnumber&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and  _tri_assessmentquestioncategoryid_value eq " + questionCategoryId;
    jsonQuery += "&$orderby=tri_questionnumber";
    req.open("GET", jsonQuery, false);
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
                    //questionsset = isRequiredError + '<span>' + tri_questionnumber + '.</span><div questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + questionCategoryId + '" style="display:inline-block;margin-bottom: 10px;">' + tri_name + '</div><br/>';
                    //questionsset = '<span>' + tri_questionnumber + '.</span><div questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + questionCategoryId + '" style="display:inline-block;margin-bottom: 10px;">' + tri_name + '</div><br/>';
                    //questionsset = '<span style="vertical-align:top;">' + tri_questionnumber + '.&nbsp;</span><div questionid="' + tri_assessmentquestionid + '" isrequired = "' + tri_isrequired + '" questionType="' + tri_answertype + '" questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + questionCategoryId + '" style="display:inline-block;margin-bottom: 10px; text-align:left;">' + tri_name + '</div>';
                    var quesText = tri_questionnumber + ".&nbsp" + tri_name;
                    //questionsset = '<div questionid="' + tri_assessmentquestionid + '" isrequired = "' + tri_isrequired + '" questionType="' + tri_answertype + '" questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + questionCategoryId + '" style="display:inline-block;margin-bottom:10px;text-align:left;">' + quesText + '</div>';
                    //questionsset = '<div questionid="' + tri_assessmentquestionid + '" isrequired = "' + tri_isrequired + '" questionType="' + tri_answertype + '" questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + questionCategoryId + '" style="display:table-row;margin-bottom:10px;text-align:left;">' + quesText + '</div>';
                    //questionsset = '<div questionid="' + tri_assessmentquestionid + '" isrequired = "' + tri_isrequired + '" questionType="' + tri_answertype + '" questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + questionCategoryId + '" style="display:table-row;margin-bottom:10px;text-align:left;">' + quesText;
                    questionsset = '<div questionid="' + tri_assessmentquestionid + '" isrequired = "' + tri_isrequired + '" questionType="' + tri_answertype + '" questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + _tri_assessmentquestioncategoryid_value + '" style="display:table-row;margin-bottom:10px;text-align:left;">' + quesText;

                    //var getanswers = "";
                    window.getanswers = "";
                    GetAssesmentAnswers(sectionname, _tri_assessmenttypeid_value, questionsset, tri_assessmentquestionid, tri_answertype, tri_isrequired, tri_memofieldsize);
                    //var questionWithAns = '<div><div style="display:inline-block; text-align:left;">';
                    //var questionWithAns = '<div style="display:inline-block; text-align:left;">';
                    var questionWithAns = '<div style="text-align:left;">';

                    //questionWithAns = '<div>' + questionsset + window.getanswers + '</div>';

                    // Add the Question
                    questionWithAns += questionsset;

                    // Is the question required
                    if (tri_isrequired) {
                        questionWithAns += '<div class="questionRequired">&nbsp*</div>';
                    }


                    // Add the Answers
                    //questionWithAns += '<br/>' + window.getanswers + '</div>';
                    //questionWithAns += '</div><div style="text-align:center;">' + window.getanswers + '</div>';
                    questionWithAns += '</div><div style="text-align:left;">' + window.getanswers + '</div>';
                    //questionWithAns += '<div style="text-align:center;">' + window.getanswers + '</div>';

                    if (j < results.value.length) {
                        if (j === 0) {
                            if (firstView === false) {
                                //quesAnsHtm = '<div style= "display:block;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;">' + '<div>' + sectionname + '</div>' + questionWithAns;
                                quesAnsHtm = '<div style= "display:block;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;"' +
								' sectionid="' + _tri_assessmentquestioncategoryid_value + '"' +
								' id="' + _tri_assessmentquestioncategoryid_value + '_' + j + '"' +
								'>' +
								'<div style="visibility:hidden;">' + sectionname + '</div>' + questionWithAns + "</div>";
                                document.getElementById('questionCategory').innerHTML = sectionname;
                            } else {
                                //quesAnsHtm = '<div style ="display:none;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;">' + '<div>' + sectionname + '</div>' + questionWithAns;
                                quesAnsHtm = '<div style ="display:none;background: white;border: 0 none;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);padding: 20px 30px;box-sizing: border-box;width: 80%;margin: 0 10%;position: absolute;"' +
								' sectionid="' + _tri_assessmentquestioncategoryid_value + '"' +
								' id="' + _tri_assessmentquestioncategoryid_value + '_' + j + '"' +
								'>' +
								'<div style="visibility:hidden;">' + sectionname + '</div>' + questionWithAns + "</div>";
                            }
                        }
                        else {
                            //quesAnsHtm = quesAnsHtm + '<br />' + questionWithAns;
                            quesAnsHtm += '<br />' + questionWithAns + "</div>";
                        }

                        j++;

                        if (j === results.value.length || i === results.value.length) {
                            j = 0;
                            quesAnsHtm += '<br/>';
                            if (firstView === false) {
                                quesAnsHtm += '<input type="button" name="next" class="next action-button" value="Next" />' + divClose;
                                firstView = true;
                            } else {
                                var nextButton = '';
                                quesAnsHtm += '<input type="button" name="previous" class="previous action-button" value="Previous" />';
                                if (isLastCategory == true) {
                                    isLastCategory = false;
                                    nextButton = '<input type="button" name="next" class="save action-button" value="Save" />';
                                    submitButton = '<input type="button" name="submit" class="submit action-button" value="Submit" />';
                                    closeButton = '<input type="button" name="close" class="close action-button" value="Close" />';
                                    if (inputDisabled == true) {
                                        // Do not Need Save Buttons at this point
                                        quesAnsHtm += closeButton + divClose;
                                    } else {
                                        quesAnsHtm += nextButton + submitButton + closeButton + divClose;
                                    }
                                } else {
                                    nextButton = '<input type="button" name="next" class="next action-button" value="Next" />';
                                    quesAnsHtm += nextButton + divClose;
                                }
                            }

                            $('#fieldsets').append(quesAnsHtm);
                            quesAnsHtm = '';
                        }
                    }
                }
            }
            else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}

function GetAssesmentAnswers(sectionname, assessmenttypeid, questionsset, questionid, answertype, isrequired, memoFieldSize) {

    var requiredClass = "";
    if (isrequired) {
        requiredClass = "required ";
    }
    var answerType = answertype;

    var textRows = 4;
    if (memoFieldSize !== null && memoFieldSize !== undefined && $.isNumeric(memoFieldSize) && (answerType === 100000001 || answerType === 100000003)) {
        textRows = Number(memoFieldSize);
    }

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
        req.open("GET", getBaseWebUri() + assessmentAnswerEntitySetName + "?$select=tri_answervalue,tri_assessmentanswerid,_tri_assessmentquestionid_value,_tri_assessmenttypeid_value,tri_name&$filter=_tri_assessmenttypeid_value eq " + assessmenttypeid + " and _tri_assessmentquestionid_value eq " + questionid, false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");

        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    //var questionToMatch = lstAssesmentDetails.find(function (x) { return x.QuestionId == questionid; });

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
                            if (answerValueToMatch.length > 0 && answerValueToMatch !== null) {
                                if (answerType === 100000005) {
                                    //var rgxp = new RegExp(tri_name, "g");
                                    var chkBoxtxtArray = answerValueToMatch[0].split(",");
                                    if (chkBoxtxtArray.indexOf(tri_name) > -1) {
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
                                //answercontrols = '<input type="radio" class="' + requiredClass + '" questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '"  name="' + questionid + '_radiobtn_answerValue" ' + checked + ' text="' + tri_name + '" value="' + tri_answervalue + '"> ' + tri_name; // checked="checked" 
                                answercontrols = '<input type="radio" questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '"  name="' + questionid + '_radiobtn_answerValue" ' + checked + ' text="' + tri_name + '" value="' + tri_answervalue + '"/> ' + tri_name; // checked="checked" 
                            }

                            else if (answerType === 100000005) {
                                //answercontrols = '<input type="checkbox"  questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '" name="' + questionid + '_chkbox_answerValue" ' + checked + ' value="' + tri_name + '" class="' + requiredClass + '">' + tri_name;// + '<br/>';
                                answercontrols = '<input type="checkbox"  questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '" name="' + questionid + '_chkbox_answerValue" ' + checked + ' value="' + tri_name + '"/>' + tri_name;
                            }

                            window.getanswers += answercontrols; //CreateAnswers(tri_answervalue, tri_name, answertype, questionid); //'<span>' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
                        } // End for loop
                        // Add Required Symbol
                        //if (isrequired) {
                        //    window.getanswers += '<div class="questionRequired">&nbsp*</div>';
                        //}
                    }
                }
                else {
                    Xrm.Utility.alertDialog(this.statusText);
                }
            }
        };
        req.send();
    } else {
        var answercontrols = "";
        var text = "";
        if (answerValueToMatch.length > 0) {
            text = answerValueToMatch[0];
        }

        if (answerType === 100000001 || answerType === 100000003) {
            answercontrols = '<textarea rows="' + textRows + '" class="' + requiredClass + '"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" id="' + questionid + '_textarea" maxlength="4000" cols="100"' + '>' + text + '</textarea><br/>'
        }
        else if (answerType === 100000002) {
            requiredClass = requiredClass + "datepicker";
            // answercontrols = '<input type="date" name="' + questionid + '_date" value="' + tri_answervalue + '" max="1979-12-31"><br>'; // we can show this with jquery date picker even
            //answercontrols = '<input type="text" name="' + questionid + '_date"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" value="' + text + '" class="' + requiredClass + '"><br>'; // we can show this with jquery date picker even
            answercontrols = '<input type="text" name="' + questionid + '_date"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" value="' + text + '" class="' + requiredClass + '"/><br/>'; // we can show this with jquery date picker even
        }
        else if (answerType === 100000004) {
            requiredClass = requiredClass + "numeric";
            //answercontrols = '<input style="border-color: transparent;" type="text"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" name="' + questionid + '_numeric" value="' + text + '" class="' + requiredClass + '"><br>';  // , you can use the spinner control.
            answercontrols = '<input style="border-color: transparent;" type="text"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" name="' + questionid + '_numeric" value="' + text + '" class="' + requiredClass + '"/><br/>';  // , you can use the spinner control.
        }
        window.getanswers = window.getanswers + answercontrols;
    }
}


function GetAssesmentDetails(assesmentId) {
    var req = new XMLHttpRequest();
    req.open("GET", getBaseWebUri() + assessmentDetailEntitySetName + "?$select=_tri_answerid_value,tri_answertext,tri_answertype,tri_answervalue,tri_assessmentdetailid,_tri_assessmentid_value,_tri_assessmentquestioncategoryid_value,_tri_assessmenttypeid_value,tri_comments,tri_name,_tri_questionid_value,tri_questionnumber,tri_weightedscore&$filter=_tri_assessmentid_value eq " + assesmentId, false);  // + " and  _tri_answerid_value ne null"
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

function retrievePatient(PatientId) {
    SDK.JQuery.retrieveRecord(
        PatientId,
        "Contact",
        null, null,
        function (contact) {
            alert("Retrieved the contact named \"" + contact.FullName + "\". This contact was created on : \"" + contact.CreatedOn + "\".");
            //updateAccount(AccountId);
        },
        errorHandler
      );
}

function getAssessment(assesmentId) {
    var req = new XMLHttpRequest();
    var jsonQuery = getBaseWebUri() + assessmentEntitySetName + "(" + assesmentId + ")";
    jsonQuery += "?$select=tri_name,tri_overallscore,tri_weightedscore,statuscode,_tri_overallrisklevelid_value,_tri_riskleveloverrideid_value,_tri_assessmenttypeid_value,_tri_patientid_value";
    req.open("GET", jsonQuery, false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var results = JSON.parse(this.responseText)
                assessmenttypeid_value = results["_tri_assessmenttypeid_value"];
                scoreWindowTitle = "";
                if (typeof (results["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"]) !== "undefined") {
                    assessmenttypeid_value_formatted = results["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"];
                    scoreWindowTitle = results["_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue"] + " for ";
                }
                if (typeof (results["_tri_patientid_value@OData.Community.Display.V1.FormattedValue"]) !== "undefined") {
                    scoreWindowTitle += results["_tri_patientid_value@OData.Community.Display.V1.FormattedValue"];
                }
                var statusCode = results.statuscode;
                if (statusCode === assessmentIsComplete) {
                    inputDisabled = true;

                    // Show Score
                    if (results.tri_overallscore == null) {
                        overallScore = noScore;
                    } else {
                        overallScore = results.tri_overallscore;
                    }
                    if (results["_tri_overallrisklevelid_value"] != null) {
                        overallRiskLevel = results["_tri_overallrisklevelid_value@OData.Community.Display.V1.FormattedValue"];
                    } else {
                        overallRiskLevel = "";
                    }
                    $('#h1Score').text(overallScore);
                    $('#divScore').show();



                } else {
                    $('#divScore').hide();
                }
            }
            else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}

function getBaseWebUri() {
    return Xrm.Page.context.getClientUrl() + webApiUri;
}

function displayScores() {
    if (typeof (scoreWindow) === "undefined" || scoreWindow.closed) {
        if (overallScore !== noScore) {
            GetCategoryDetails(vAssessmentIdFormatted);
            scoreWindow.document.title = scoreWindowTitle;
        }
    } else {
        scoreWindow.focus();
    }
}

function buildScoreWindow(results) {
    if (results == null)
        return;

    var resultsRows = 1;
    if (results.value.length > 0) {
        resultsRows = results.value.length;
    }

    // Build HTML
    var scorehtml = "<div style='text-align:center'><h2 style='text-align:center;'>Scoring Detail</h2><table>";
    scorehtml += "<tr><th width='50%'>Name</th><th width='25%' style='text-align:center;'>Score</th><th width='25%' style='text-align:center;'>Risk Level</th></tr>";
    for (var i = 0; i < results.value.length; i++) {
        scorehtml += addRowScore(results.value[i]["_tri_assessmentquestioncategoryid_value@OData.Community.Display.V1.FormattedValue"], results.value[i].tri_categoryscore,
            results.value[i]["_tri_risklevelid_value@OData.Community.Display.V1.FormattedValue"]);
    }

    scorehtml += addRowScore("Total", overallScore, overallRiskLevel);
    scorehtml += "</table><br/>";
    scorehtml += "<input type='button' name='closescore' class='action-button' value='Close Window' onclick='window.close();'/>";
    scorehtml += "</div>";

    // Open New Window
    var winHeight = 100 + 40 * resultsRows;
    var winWidth = 600;
    var winparams = "height=" + winHeight + ",width=" + winWidth;
    scoreWindow = window.open("", "", winparams);

    $(scoreWindow.document.body).html(scorehtml);
}

function addRowScore(inName, inScore, inRiskLevel) {
    var name = "";
    var score = "";
    var risklevel = "";
    if (typeof (inName) !== "undefined") {
        name = inName;
    }
    if (typeof (inScore) !== "undefined") {
        score = inScore;
    }
    if (typeof (inRiskLevel) !== "undefined") {
        risklevel = inRiskLevel;
    }
    var rowHtml = "<tr><td>" + name + "</td><td style='text-align:center;'>" + score + "</td><td style='text-align:center;'>" + risklevel + "</td></tr>";
    return rowHtml;
}

function GetCategoryDetails(assesmentId) {
    var req = new XMLHttpRequest();
    req.open("GET", getBaseWebUri() + categoryDetailEntitySetName + "?$select=tri_name,_tri_risklevelid_value,tri_categoryscore,_tri_assessmentquestioncategoryid_value&$orderby=tri_order,tri_name&$filter=_tri_assessmentid_value eq " + assesmentId, false);
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
                buildScoreWindow(results);
            }
            else {
                window.opener.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}

function patchRecord(id, updateObject, type, successCallback, errorCallback) {
    var req = new XMLHttpRequest();
    req.open("PATCH", encodeURI(getBaseWebUri() + type + "(" + id + ")"), true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 204) {
                successCallback();
            }
            else {
                var errorText = "";
                try
                { errorText = JSON.parse(req.responseText).error.message.value; }
                catch (e)
                { errorText = req.responseText }
                errorCallback(errorText);
            }
        }
    };
    req.send(JSON.stringify(updateObject));
}

function MakeLiElementActiveTill(liElement) {

    var bAddActiveClass = true;
    var curElementId, clickedElementId;

    if (typeof liElement !== "undefined" && liElement !== null) {

        var elements = $("#progressbar li");
        clickedElementId = liElement.attr('id');
        for (var i = 0 ; i < elements.length; i++) {
            curElementId = elements[i].id;
            if (bAddActiveClass) {
                if (elements[i].className !== "active") {
                    elements[i].className = "active";
                }
            }
            else {
                if (elements[i].className == "active") {
                    elements[i].className = "";
                }
            }

            if (curElementId == clickedElementId) {
                bAddActiveClass = false;
            }

        }
    }
}
