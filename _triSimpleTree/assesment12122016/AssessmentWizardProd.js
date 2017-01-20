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
var currentQuestionCategoryId;

function questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, answerType, answerText, weightedScore, sectionName, quesCatId, comments) {

    var entity = {};
    entity.tri_questionnumber = questionnumber;

    if (typeof (answervalue) !== "undefined" && answervalue != null && answervalue !== "") {
        entity.tri_answervalue = answervalue;
    }

    entity.tri_comments = comments;
    entity["tri_AssessmentId@odata.bind"] = "/tri_assessments(" + assessmentid + ")";
    entity["tri_AssessmentTypeId@odata.bind"] = "/tri_assessmenttypes(" + assessmenttypeid + ")";
    entity["tri_QuestionId@odata.bind"] = "/tri_assessmentquestions(" + questionid + ")";
    entity["tri_AssessmentQuestionCategoryId@odata.bind"] = "/tri_assessmentquestioncategories(" + quesCatId + ")";

    if (typeof assessmentdetailid !== "undefined" && assessmentdetailid != null && assessmentdetailid !== "") {
        entity["tri_assessmentdetailId@odata.bind"] = "/tri_assessmentdetails(" + assessmentdetailid + ")";
    }

    if (typeof answerid !== "undefined" && answerid !== null && answerid !== "") {
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
            if (typeof (valueObj) !== 'undefined' && valueObj != null && valueObj.tri_questionnumber == questionNum) {
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
            var assessmentid = vAssessmentIdFormatted;
            var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
            var assessmentdetailid = "";
            var comments = "";
            var assessmentdetailid = "";
            var sectionName = $(question).attr('sectionName');
            var quesCatId = $(question).attr('questionCat');
            var weightedScore = $(question).attr('weightedScore');

            var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Optionset",
                                                                answerText, weightedScore, sectionName, quesCatId, comments);
            lstAnswerSelected.push(questionObj);
            assesmentDetailsToSave.push(questionObj);
        }

        MarkQuestionAnswered($(this));
    });
};

function bindTextAreaClickEvent() {
    $("textarea").bind('blur', function () {
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
            var answervalue = "";
            var answerid = "";
            var assessmentid = vAssessmentIdFormatted;
            var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
            var assessmentdetailid = "";
            var answerText = "";

            var sectionName = $(question).attr('sectionName');
            var quesCatId = $(question).attr('questionCat');
            var weightedScore = $(question).attr('weightedScore');

            var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Memo",
                                                                answerText, weightedScore, sectionName, quesCatId, comments);
            lstAnswerSelected.push(questionObj);
            assesmentDetailsToSave.push(questionObj);

        }
        if (comments !== null && comments.length > 0) {
            MarkQuestionAnswered($(this));
        }
        else {
            MarkQuestionUnAnswered($(this));
        }
    });
}

function bindTextBoxClickEvent() {
    $("input[type=text]:not([class~=datepicker])").bind('blur', function () {
        var errorSpan = $(this).parent().siblings('.errorSpan');
        if (typeof errorSpan !== "undefined") {
            $(errorSpan).remove();
        }
        var controlName = $(this)[0].name;
        var answerText = $(this).val();
        if (controlName.indexOf("_date") > -1) {
            if (typeof answerText !== "undefined" && answerText != null && answerText !== "") {
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
            var answerid = $(this).context.attributes.answerid.value;
            var assessmentid = vAssessmentIdFormatted;
            var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
            var assessmentdetailid = "";

            var sectionName = $(question).attr('sectionName');
            var quesCatId = $(question).attr('questionCat');
            var weightedScore = $(question).attr('weightedScore');
            var comments = "";

            var questionObj = new questionWithAnswerSelected(questionid, answerid, answervalue, assessmentid, assessmenttypeid, assessmentdetailid, questionnumber, "Multi-Select",
                                                                answerText, weightedScore, sectionName, quesCatId, comments);
            lstAnswerSelected.push(questionObj);
            assesmentDetailsToSave.push(questionObj);

        }
        if (answerText.length > 0) {
            MarkQuestionAnswered($(this));
        } else {
            MarkQuestionUnAnswered($(this));
        }
    });
}

function bindDateChangeClickEvent(dateText) {
}

function bindCheckBoxClickEvent() {
    $("input[type=checkbox]").bind('click', function () {
        var questionid = $(this).context.attributes.questionid.value;
        var question = $("#" + questionid + "_question");

        var questionnumber = $(question).attr('questionnumber');
        var answerText = $(this).context.attributes.value.value;
        var index = checkIfQuestionAlreayAnswered(questionnumber);
        var answerid = $(this).context.attributes.answerid.value;
        var answervalue = "";

        if ($(this).prop('checked') === true) {
            if (index === -1) {
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
                var objectIndex = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber);
                if (objectIndex > -1) {
                    assesmentDetailsToSave.splice(objectIndex, 1); /////////// check
                }
                assesmentDetailsToSave.push(lstAnswerSelected[index]);
            }
        } else if ($(this).prop('checked') === false) {
            if (lstAnswerSelected[index].tri_answertext.indexOf(',') > -1) {
                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.replace(answerText, ''); /////////// check
                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.replace(',,', ''); /////////// check
            } else {
                lstAnswerSelected[index].tri_answertext = lstAnswerSelected[index].tri_answertext.replace(answerText, '');
            }
            var objectIndex = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber);
            if (objectIndex > -1) {
                assesmentDetailsToSave.splice(objectIndex, 1);
            }
            assesmentDetailsToSave.push(lstAnswerSelected[index]);
        }
        if (CheckifAnyCheckBoxChecked($(this))) {
            MarkQuestionAnswered($(this));
        } else {
            MarkQuestionUnAnswered($(this));
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
        var questionTextDiv = $(questionObj).children('div.question-text');
        var questionid = $(questionTextDiv).attr('questionid');

        // Find the inputs for the question and see if one is checked
        var answerSelected = $('input[questionid=' + questionid + ']:checked').val();
        if (typeof answerSelected === "undefined") {
            isAnswerSelected = false;
        }
    }

    //commemts
    if (questType === "100000001" || questType === "100000003") {
        var content = $(questionObj).children("div.answer").children('textarea').val();
        if (typeof content === "undefined") {
            isAnswerSelected = false;
        } else {
            if (content.trim() === "") {
                isAnswerSelected = false;
            }
        }
    }

    //input numeric
    if (questType === "100000004") {
        var input = $(questionObj).children("div.answer").children('span').children("input[type=text]").val();
        if (typeof input === "undefined") {
            isAnswerSelected = false;
        } else {
            if (input.trim() === "") {
                isAnswerSelected = false;
            }
        }
    }

    //CheckBox
    if (questType === "100000005") {
        var input = $(questionObj).children('div.answer').children('input[type=checkbox]:checked');
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
        var input = $(questionObj).children('div.answer').children("input[type=text]").val();
        if (typeof input === "undefined") {
            isAnswerSelected = false;
        } else {
            if (input.trim() === "") {
                isAnswerSelected = false;
            }
        }
    }

    var errorSpanId = questionid + "_errorSpan";
    var errorSpan = '<span style = "color:red;" class = "errorSpan" id="' + errorSpanId + '"><img src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error"><span>&nbsp;This question requires an answer !</span></span>';
    if (isAnswerSelected === false) {
        var span = $(questionObj).children('div.question-text').children('.errorSpan');
        if (span.length === 0) {
            var questionTextDiv = $(questionObj).children('div.question-text');
            var reqSpan = $(questionTextDiv).children('span.required');
            $(errorSpan).insertAfter(reqSpan);
        }
    }

    return isAnswerSelected;
}

function validateSection(sectionObject) {
    var result = true;
    if (typeof sectionObject === "undefined" || sectionObject == null) {
        return false;
    }

    // var questions = $(sectionObject).children('div');
    var questions = $(sectionObject).children('div.question');

    $.each(questions, function (index, valueObj) {
        if (index >= 0) {
            var questionTextDiv = $(valueObj).children('div.question-text');
            var questType = $(questionTextDiv).attr('questiontype');
            var isQuestionMandatory = $(questionTextDiv).attr('isrequired');
            if (isQuestionMandatory === "true") {
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
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    // Check to see if the web resource is opened in a new window or embedded in the form (tablet)
    if (typeof window.opener !== "undefined") {
        Xrm = window.opener.Xrm;
    } else {
        Xrm = window.parent.Xrm;
    }
    var vAssessmentId = Xrm.Page.data.entity.getId();//get the AssementId from the windowopener
    var vEntityName = Xrm.Page.data.entity.getEntityName();//get the AssementId from the windowopener
    var asessmentTitle = Xrm.Page.data.entity.getPrimaryAttributeValue();
    // if we are not on the Assessment Form then lets get the id from the parameters
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
        $("input").prop("disabled", true);
        // Enabled the buttons
        $("input[type=button]").prop("disabled", false);
    }

    $(".next").click(function () {

        if (animating) return false;
        animating = true;

        //current_fs = $(this).parent();
        //next_fs = $(this).parent().next();

        current_fs = $(this).parent().parent();
        next_fs = current_fs.next();

        if (!validateSection(current_fs)) {
            animating = false;
            return;
        }

        if (typeof (next_fs[0]) === "undefined") {
            isLastCategory = true;
            animating = false;
        }
        else {
            /*
            var current_fs_section = current_fs[0].childNodes[0].firstChild.data;
            var next_fs_section = next_fs[0].childNodes[0].firstChild.data;
            currentQuestionCategoryId = next_fs.attr('sectionid');
            if (current_fs_section != next_fs_section) {
                document.getElementById('questionCategory').innerHTML = next_fs_section;
                //activate next step on progressbar using the index of next_fs
                //progressIndex = progressIndex + 1;
                var liElement = document.getElementById(currentQuestionCategoryId);
                liElement.className = "active";
            }*/

            currentQuestionCategoryId = next_fs.attr('sectionid');
            var liElement = document.getElementById(currentQuestionCategoryId);
            liElement.className = "active";


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

        //current_fs = $(this).parent(); --s
        current_fs = $(this).parent().parent(); //  div questions > div buttons > input type button

        if (!validateSection(current_fs)) {
            animating = false;
            return;
        }

        //previous_fs = $(this).parent().prev(); --s
        previous_fs = current_fs.prev();

        currentQuestionCategoryId = previous_fs.attr('sectionid');
        var idToDeActivate = current_fs.attr('sectionid');
        var liElement = document.getElementById(idToDeActivate);
        liElement.className = "";
        updateClassForLIElementActiveTill(currentQuestionCategoryId);

        //show the previous fieldset
        previous_fs.show();
        //document.getElementById('questionCategory').innerHTML = previous_fs.children()[0].innerHTML; --s

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
        saveAnswers();
    });

    $(".save").click(function () {
        // Make Sure all required questions are answered
        //current_fs = $(this).parent();
        current_fs = $(this).parent().parent();

        if (!validateSection(current_fs)) {
            animating = false;
            return;
        }
        saveAnswers();
    })

    $(".submit").click(function () {
        // Make Sure all required questions are answered
        //current_fs = $(this).parent();

        /*current_fs = $(this).parent().parent();

        if (!validateSection(current_fs)) {
            animating = false;
            return;
        }*/

        var result = CheckAllMandatoryQuestionsAnswered();
        if (!result[0]) {

            animatinng = false;
            Xrm.Utility.alertDialog(result[1]);
            return;
        }

        var saveCount = assesmentDetailsToSave.length;
        if (saveCount > 0) {
            saveAnswers(false);
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
            if (animating) {
                return false;
            }
            animating = true;
            var nextQuestionCategoryId;
            var vClickedLIid;
            var currentSection;
            var bHideCurrentIfFound = true;

            if (currentQuestionCategoryId != null && currentQuestionCategoryId !== "") {
                currentSection = $("div[sectionid=" + currentQuestionCategoryId + "]");
                if (currentSection != null && typeof currentSection !== "undefined" && currentSection.length > 0) {
                    current_fs = $("div[sectionid=" + currentQuestionCategoryId + "]").eq(0);
                    if (!validateSection(current_fs)) {
                        animating = false;
                        return;
                    }
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

            makeLiElementActiveTill($(this));
            //show the next fieldset
            next_fs.show();
            //document.getElementById('questionCategory').innerHTML = next_fs.children()[0].innerHTML; --s

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
            if (index !== -1) {
                lstAnswerSelected[index].tri_answertext = $(this).val();

                var isObjectPresent = checkIfSaveObjectAlreayAnswered(assesmentDetailsToSave, questionnumber) > -1;
                if (isObjectPresent) {
                    assesmentDetailsToSave.splice(index, 1);
                }
                assesmentDetailsToSave.push(lstAnswerSelected[index]);

            } else {

                var answervalue = ""; //$(this).val();
                var answerid = $(this).context.attributes.answerid.value;
                var assessmentid = vAssessmentIdFormatted;
                var assessmenttypeid = $(this).context.attributes.assessmenttypeid.value;
                var assessmentdetailid = "";
                var answerText2 = $(this).val();;
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

function saveAnswers(execAsync) {
    if (typeof execAsync === "undefined") {
        execAsync = true;
    }
    if (assesmentDetailsToSave.length > 0) {
        // Save on next click
        for (var i = 0; i < assesmentDetailsToSave.length; i++) {
            var url = "";
            var method = "";
            if (typeof (assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"]) !== "undefined"
                && assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"] != null
                && assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"] !== "") {
                url = webApiUri + assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"];
                method = "PATCH";
                delete assesmentDetailsToSave[i]["tri_assessmentdetailId@odata.bind"];
            } else {
                url = webApiUri + assessmentDetailEntitySetName;
                method = "POST";
            }

            var req = new XMLHttpRequest();
            req.open(method, Xrm.Page.context.getClientUrl() + url, execAsync);
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
                        Xrm.Utility.alertDialog(this.statusText);
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

                var categories = [];
                for (var i = 0; i < results.value.length; i++) {
                    if (categories.indexOf(results.value[i]["tri_assessmentquestioncategoryid"]) == -1) {
                        categories.push(results.value[i]["tri_assessmentquestioncategoryid"]);
                    }
                }

                for (var i = 0; i < results.value.length; i++) {
                    var tri_name = results.value[i]["tri_name"];
                    var tri_assessmentquestioncategoryid = results.value[i]["tri_assessmentquestioncategoryid"];

                    var rowObject = {}
                    rowObject.name = tri_name;
                    rowObject.id = tri_assessmentquestioncategoryid;
                    sections.push(rowObject);

                    if (i === 0) {
                        $("#progressbar").append('<li class="active" id="' + tri_assessmentquestioncategoryid + '"><div class="liElement">' + tri_name + '</div></li>');
                    }
                    else {
                        //$("#progressbar").append('<li id="' + tri_assessmentquestioncategoryid + '">' + tri_name + '</li>');
                        $("#progressbar").append('<li id="' + tri_assessmentquestioncategoryid + '"><div class="liElement">' + tri_name + '</div></li>');
                    }

                    if (i == results.value.length - 1) {
                        isLastCategory = true;
                    }
                    GetAssesmentQuestions(tri_name, _tri_assessmenttypeid_value, tri_assessmentquestioncategoryid, categories.length);
                }
            }
            else {
                Xrm.Utility.alertDialogi(this.statusText);
            }
        }
    };
    req.send();
}

function GetAssesmentQuestions(sectionname, assessmenttypeid, questionCategoryId, categoryLength) {

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

                    //var getanswers = "";
                    window.getanswers = "";
                    var answerAlreadyGiven = GetAssesmentAnswers(sectionname, _tri_assessmenttypeid_value, questionsset, tri_assessmentquestionid, tri_answertype, tri_isrequired, tri_memofieldsize);
                    // display questions

                    var quesText = tri_questionnumber + ".&nbsp" + tri_name;
                    var doneSpan = '<span class="done">&#x2714; &nbsp; </span>';
                    if (tri_isrequired) {

                        questionsset = '<div class="question required">';
                        questionsset += '<div questionid="' + tri_assessmentquestionid + '" isrequired = "' + tri_isrequired + '" questionType="' + tri_answertype + '" questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + _tri_assessmentquestioncategoryid_value + '" class="question-text">' +
						'<span class="required">' + 'Required' + '</span>' +
						'<br />' +
						((answerAlreadyGiven) ? doneSpan : "") +
						quesText;
                    }
                    else {
                        questionsset = '<div class="question">';
                        questionsset += '<div questionid="' + tri_assessmentquestionid + '" isrequired = "' + tri_isrequired + '" questionType="' + tri_answertype + '" questionnumber="' + tri_questionnumber + '" sectionName="' + sectionname + '" weightedScore="" id="' + tri_assessmentquestionid + '_question" questionCat="' + _tri_assessmentquestioncategoryid_value + '" class="question-text">' +
						((answerAlreadyGiven) ? doneSpan : "") +
						quesText;
                    }
                    //var questionWithAns = '<div><div style="display:inline-block; text-align:left;">';
                    //var questionWithAns = '<div style="display:inline-block; text-align:left;">';
                    // var questionWithAns = '<div style="text-align:left;">'; --s

                    // Add the Question
                    // questionWithAns += questionsset; --s
                    var questionWithAns = questionsset;

                    // Is the question required
                    /*if (tri_isrequired) { --s
                        questionWithAns += '<div class="questionRequired">&nbsp*</div>';
                    }*/


                    // Add the Answers
                    //questionWithAns += '<br/>' + window.getanswers + '</div>';
                    //questionWithAns += '</div><div style="text-align:center;">' + window.getanswers + '</div>';
                    questionWithAns += '</div>' + window.getanswers + '</div>';
                    //questionWithAns += '<div style="text-align:center;">' + window.getanswers + '</div>';

                    if (j < results.value.length) {
                        if (j === 0) {
                            if (firstView === false) {

                                quesAnsHtm = '<div style= "display:block;" class="questions"' +
								' sectionid="' + _tri_assessmentquestioncategoryid_value + '"' +
								' id="' + _tri_assessmentquestioncategoryid_value + '_' + j + '"' +
								'>' +
								//'<div style="visibility:hidden;">' + sectionname + '</div>' +
								'<div class="main-section-title">' + sectionname + '</div>' +
								questionWithAns + "";
                                //document.getElementById('questionCategory').innerHTML = sectionname; --s
                            } else {

                                quesAnsHtm = '<div style ="display:none;" class="questions"' +
								' sectionid="' + _tri_assessmentquestioncategoryid_value + '"' +
								' id="' + _tri_assessmentquestioncategoryid_value + '_' + j + '"' +
								'>' +
								//'<div style="visibility:hidden;">' + sectionname + '</div>' +
								'<div class="main-section-title">' + sectionname + '</div>' +
								questionWithAns + "";
                            }
                        }
                        else {
                            quesAnsHtm += '' + questionWithAns + "";
                        }

                        j++;

                        if (j == results.value.length || i == results.value.length) {
                            j = 0;
                            quesAnsHtm += '';
                            quesAnsHtm += '<div class="buttons">';

                            if (firstView === false && categoryLength == 1) {

                                submitButton = '<div name="submit" class="submit button default-size navy-bg">Submit</div>&nbsp;';
                                closeButton = '<div name="close" class="close button default-size navy-bg">Close</div>&nbsp;';
                                quesAnsHtm += submitButton + closeButton + divClose;
                                firstView = true;

                            } else if (firstView === false) {
                                //quesAnsHtm += '<input type="button" name="next" class="next action-button" value="Next" />' + divClose;
                                quesAnsHtm += '<div name="next" class="next button default-size navy-bg">Next</div>&nbsp;' + divClose;

                                firstView = true;
                            } else {
                                var nextButton = '';
                                //quesAnsHtm += '<input type="button" name="previous" class="previous action-button" value="Previous" />';
                                quesAnsHtm += '<div name="previous" class="previous button default-size navy-bg">Previous</div>&nbsp;';

                                if (isLastCategory === true) {

                                    isLastCategory = false;

                                    //nextButton = '<input type="button" name="next" class="save action-button" value="Save" />';

                                    //submitButton = '<input type="button" name="submit" class="submit action-button" value="Submit" />';

                                    //closeButton = '<input type="button" name="close" class="close action-button" value="Close" />';

                                    nextButton = '<div name="next" class="save button default-size navy-bg">Save</div>&nbsp;';

                                    submitButton = '<div name="submit" class="submit button default-size navy-bg">Submit</div>&nbsp;';

                                    closeButton = '<div name="close" class="close button default-size navy-bg">Close</div>&nbsp;';

                                    if (inputDisabled === true) {
                                        // Do not Need Save Buttons at this point
                                        quesAnsHtm += closeButton + divClose;
                                    } else {
                                        quesAnsHtm += nextButton + submitButton + closeButton + divClose;
                                    }
                                } else {
                                    //nextButton = '<input type="button" name="next" class="next action-button" value="Next" />';
                                    nextButton = '<div name="next" class="next button default-size navy-bg">Next</div>&nbsp;';
                                    quesAnsHtm += nextButton + divClose;
                                }
                            }
                            quesAnsHtm += divClose;
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

    var answerAlreadyGiven = false;
    var requiredClass = "";
    if (isrequired) {
        requiredClass = "required ";
    }
    var answerType = answertype;

    var textRows = 4;
    if (typeof memoFieldSize !== "undefined" && memoFieldSize != null && $.isNumeric(memoFieldSize) && (answerType === 100000001 || answerType === 100000003)) {
        textRows = Number(memoFieldSize);
    }

    var answerValueToMatch = $.map(lstAnswerSelected, function (val) {
        if (val["tri_QuestionId@odata.bind"].indexOf(questionid) > -1) {
            if (answerType === 100000000) {
                return typeof (val.tri_answervalue) !== "undefined" && val.tri_answervalue != null ? val.tri_answervalue : "";
            }
            else if (answerType === 100000001 || answerType === 100000003) {
                return typeof val.tri_comments !== "undefined" && val.tri_comments != null ? val.tri_comments : "";
            }
            else {
                return typeof val.tri_answertext !== "undefined" && val.tri_answertext != null ? val.tri_answertext : "";
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

                            // check if answer matches to existing then introduce checked
                            var checked = "";
                            if (answerValueToMatch.length > 0 && answerValueToMatch != null) {
                                if (answerType === 100000005) {
                                    var chkBoxtxtArray = answerValueToMatch[0].split(",");
                                    if (chkBoxtxtArray.indexOf(tri_name) > -1) {
                                        checked = 'checked="checked"';
                                        answerAlreadyGiven = true;
                                    }
                                }
                                else {
                                    if (answerValueToMatch[0] == tri_answervalue && answerValueToMatch != null) {
                                        checked = 'checked="checked"';
                                        answerAlreadyGiven = true;
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
                                answercontrols = '<div class="answer"><input type="radio" questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '"  name="' + questionid + '_radiobtn_answerValue" ' + checked + ' text="' + tri_name + '" value="' + tri_answervalue + '"/> ' + tri_name + '</div>'; // checked="checked" 
                            }

                            else if (answerType === 100000005) {
                                //answercontrols = '<input type="checkbox"  questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '" name="' + questionid + '_chkbox_answerValue" ' + checked + ' value="' + tri_name + '" class="' + requiredClass + '">' + tri_name;// + '<br/>';
                                answercontrols = '<div class="answer"><input type="checkbox"  questionid = "' + questionid + '" answerid= "' + tri_assessmentanswerid + '" assessmenttypeid= "' + _tri_assessmenttypeid_value + '" name="' + questionid + '_chkbox_answerValue" ' + checked + ' value="' + tri_name + '"/>' + tri_name + '</div>';
                            }

                            window.getanswers += answercontrols; //CreateAnswers(tri_answervalue, tri_name, answertype, questionid); //'<span>' + tri_answervalue + '</span><div style="display:inline-block;">' + tri_name + '</div><br/>';
                        } // End for loop
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

        if (text.length > 0) {
            answerAlreadyGiven = true;
        }

        if (answerType === 100000001 || answerType === 100000003) {
            answercontrols = '<div class="answer"><textarea rows="' + textRows + '" class="' + requiredClass + '"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" id="' + questionid + '_textarea" maxlength="4000" cols="100"' + '>' + text + '</textarea></div><br/>'
        }
        else if (answerType === 100000002) {
            requiredClass = requiredClass + "datepicker";
            // answercontrols = '<input type="date" name="' + questionid + '_date" value="' + tri_answervalue + '" max="1979-12-31"><br>'; // we can show this with jquery date picker even
            //answercontrols = '<input type="text" name="' + questionid + '_date"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" value="' + text + '" class="' + requiredClass + '"><br>'; // we can show this with jquery date picker even
            answercontrols = '<div class="answer"><input type="text" name="' + questionid + '_date"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" value="' + text + '" class="' + requiredClass + '"/></div><br/>'; // we can show this with jquery date picker even
        }
        else if (answerType === 100000004) {
            requiredClass = requiredClass + "numeric";
            //answercontrols = '<input style="border-color: transparent;" type="text"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" name="' + questionid + '_numeric" value="' + text + '" class="' + requiredClass + '"><br>';  // , you can use the spinner control.
            answercontrols = '<div class="answer"><input style="border-color: transparent;" type="text"  questionid = "' + questionid + '" answerid= "" assessmenttypeid= "' + assessmenttypeid + '" name="' + questionid + '_numeric" value="' + text + '" class="' + requiredClass + '"/></div><br/>';  // , you can use the spinner control.
        }
        window.getanswers = window.getanswers + answercontrols;
    }

    return answerAlreadyGiven;
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
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}

function getAssessment(assesmentId) {
    var req = new XMLHttpRequest();
    var jsonQuery = getBaseWebUri() + assessmentEntitySetName + "(" + assesmentId + ")";
    jsonQuery += "?$select=tri_name,tri_overallscore,tri_weightedscore,statuscode,_tri_overallrisklevelid_value,_tri_riskleveloverrideid_value,_tri_assessmenttypeid_value&$expand=tri_patientid($select=contactid,birthdate,fullname,tri_mrn)";
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
                if (statusCode == assessmentIsComplete) {
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

                var asessmentTitle = results['_tri_assessmenttypeid_value@OData.Community.Display.V1.FormattedValue'];
                // tri_Provider.middlename
                //var vPatientId = results['_tri_patientid_value'];
                var vPatientId = results['tri_patientid']['contactid'];
                var index = asessmentTitle.indexOf(':');
                if (index > -1) {
                    asessmentTitle = asessmentTitle.substring(index, -1);
                }
                var patientName = results['tri_patientid']['fullname'];
                var patientDOB = "";
                var patientMRN = "";
                if (typeof (results['tri_patientid']['birthdate']) !== "undefined" && results['tri_patientid']['birthdate'] != null) {
                    var DOB = results['tri_patientid']['birthdate'];
                    patientDOB = getDateString(DOB);
                }
                if (typeof (results['tri_patientid']['tri_mrn']) !== "undefined" && results['tri_patientid']['tri_mrn'] != null) {
                    patientMRN = results['tri_patientid']['tri_mrn'];
                }

                SetTopBarText(patientName, patientDOB, patientMRN, asessmentTitle);
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
                Xrm.Utility.alertDialog(this.statusText);
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

function makeLiElementActiveTill(liElement) {


    var bAddActiveClass = true;
    var curElementId, clickedElementId;

    if (typeof liElement !== "undefined" && liElement != null) {
        clickedElementId = liElement.attr('id');
        updateClassForLIElementActiveTill(clickedElementId);
    }
}

function updateClassForLIElementActiveTill(clickedElementId) {

    var bAddActiveClass = true;
    var curElementId;

    var elements = $("#progressbar li");
    for (var i = 0 ; i < elements.length; i++) {
        curElementId = elements[i].id;
        if (bAddActiveClass) {
            if (elements[i].className !== "active") {
                elements[i].className = "active";
            }
        } else {
            if (elements[i].className === "active") {
                elements[i].className = "";
            }
        }

        if (curElementId == clickedElementId) {
            bAddActiveClass = false;
        }
    }
}

function MarkQuestionAnswered(answeredElement) {

    if (answeredElement == null || typeof answeredElement === "undefined") {

        return; // do nothing
    }

    var doneSpan = '<span class="done">&#x2714; &nbsp; </span>';
    var questionId = answeredElement.attr('questionId');
    var questionTextDivId = questionId + '_' + 'question';
    var questionTextDivElement = $('#' + questionTextDivId);

    if (typeof questionTextDivElement.attr('id') === "undefined") {
        return;
    }

    // check if alreadyMarked done
    var doneDiv = questionTextDivElement.children('span.done');
    if (doneDiv.length > 0) {

        return;
    }

    var requireSpan = questionTextDivElement.children('span.required');
    if (requireSpan.length > 0) {

        var questionTextDivElementChildBR = questionTextDivElement.children('br');
        $(doneSpan).insertAfter(questionTextDivElementChildBR);
    }
    else {

        var questionText = questionTextDivElement.text();
        $(doneSpan + questionText).prependTo(questionTextDivElement);
    }
}

function MarkQuestionUnAnswered(unansweredElement) {

    if (unansweredElement == null || typeof unansweredElement === "undefined") {

        return; // do nothing
    }

    var doneSpan = unansweredElement.parent().siblings('div.question-text').children('span.done');
    $(doneSpan).remove();
}

//function SetTopBarText(patientId, assessmentTypeName) {

//    RetrievePatientName(patientId,
//	function (contact) {
//	    var topBar = document.getElementById('top-bar-title');
//	    topBar.innerHTML = "Assessment Tool" + " | " + contact.FullName + " | " + assessmentTypeName;
//	},
//	function (err) {
//	    console.log(err);
//	});

//}

function SetTopBarText(patientName, patientDOB, patientMRN, assessmentTypeName) {
    var topBar = document.getElementById('top-bar-title');
    var message = patientName;
    if (typeof patientDOB !== "undefined" && patientDOB !== "") {
        message += ", " + patientDOB;
    }
    if (typeof patientMRN !== "undefined" && patientMRN !== "") {
        message += ", MRN: " + patientMRN;
    }

    topBar.innerHTML = message;
}

function RetrievePatientName(PatientId, SuccessCallback, ErrorCallback) {
    SDK.JQuery.retrieveRecord(
        PatientId,
        "Contact",
        null,
        null,
        function (contact) {
            if (typeof SuccessCallback === "function") {
                SuccessCallback(contact);
            }
            //alert("Retrieved the contact named \"" + contact.FullName + "\". This contact was created on : \"" + contact.CreatedOn + "\".");console.log(contact);
            //updateAccount(AccountId);
        },
        function (err) {
            if (typeof ErrorCallback === "function") {
                ErrorCallback(err);
            }
        }
      );
}

function CheckAllMandatoryQuestionsAnswered() {

    var isSectionValid = true;
    var allSectionsValid = true;
    var questionSections = $('.questions');
    var unAnsweredSection = "";

    $(questionSections).each(function (index, questionsSection) {
        if (index >= 0) {
            isSectionValid = validateSection(questionsSection);
            if (!isSectionValid) {
                allSectionsValid = false;
                if (unAnsweredSection == "") {
                    unAnsweredSection = "" + ++index;
                }
                else {
                    if (index < questionSections.length - 1) {
                        unAnsweredSection += ", " + ++index;
                    }
                    else {
                        unAnsweredSection += "and " + ++index;
                    }
                }
            }
        }
    });

    var userPromptMessage = 'You have unanswered required questions in Sections ' + unAnsweredSection + '.';
    return [allSectionsValid, userPromptMessage];
}

function CheckifAnyCheckBoxChecked(answerChkBoxElement) {
    if (answerChkBoxElement == null || typeof answerChkBoxElement === "undefined") {

        return false;
    }
    var isAnyCheckBoxChecked = false;

    if ($(answerChkBoxElement).prop('checked') === true) {

        isAnyCheckBoxChecked = true;
        return isAnyCheckBoxChecked;
    }

    var checkBoxesParent = answerChkBoxElement.parent().siblings('div.answer');

    $(checkBoxesParent).each(function (index, checkBoxParent) {
        var checkBox = $(checkBoxParent).children('input[type=checkbox]');
        if ($(checkBox).prop('checked') === true) {
            isAnyCheckBoxChecked = true;
        }
    });

    return isAnyCheckBoxChecked;
}