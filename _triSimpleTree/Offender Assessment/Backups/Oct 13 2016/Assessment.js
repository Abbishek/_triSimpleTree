
var typeId = "";
var typeIdName = "";
var assessmentId = "";
var assessmentIdName = "";
var assessmentStatus = "";
var totalQuestionCount = 0;
var totalRowsCreated = 0;
var QuestionsArray = [];
var totalRowsCreated = 0;
var totalScore = 0;
var CurrentCategory = "";
/**********************************************************************************************/
function CreateAssessment(overallScore, riskLevel) {
    var assessment = new Object();
    assessment.tri_OverallScore = overallScore;
    assessment.tri_OverallRiskLevelId = riskLevel;
    return assessment;
}
/**********************************************************************************************/
function RetrieveRiskLevel() {
    var filter = "tri_assessmentscoringSet?$select=tri_RiskLevelId&$filter=tri_LowEnd le " + totalScore + " and tri_HighEnd ge " + totalScore + " and tri_TypeId/Id eq guid'" + typeId + "'";
    var riskLevel = RetrieveEntity(filter);
    if ((riskLevel.length == 0) || (riskLevel == undefined)) {
        alert("No Risk Level Found for Score=" + totalScore);
        return;
    }
    else {
        return riskLevel.tri_RiskLevelId;
    }
}
/****************************************************************************************************/
function CreateAssessmentAnswer(questionNumber, questionId, answerId, questionName, answerName, detailId, detailName, comments, answerValue, answerType, categoryId, categoryName) {
    try {
        var classAnswer = new Object();

        classAnswer.tri_QuestionNumber = questionNumber;
        classAnswer.tri_AssessmentQuestionCategoryId = { Id: categoryId, LogicalName: "tri_assessmentquestioncategory", Name: categoryName };
        classAnswer.tri_QuestionId = { Id: questionId, LogicalName: "tri_assessmentquestion", Name: questionName };
        classAnswer.tri_AnswerType = answerType;
        if (answerType == "Optionset") {
            if (answerId != null) {
                classAnswer.tri_AnswerId = { Id: answerId, LogicalName: "tri_assessmentanswer", Name: answerName };
            }
            else {
                classAnswer.tri_AnswerId = null;
            }
            classAnswer.tri_AnswerValue = answerValue;
        }
        else if (answerType == "Multi-Select") {
            classAnswer.tri_AnswerText = answerName;

        }
        else {
            classAnswer.tri_AnswerText = answerValue;
        }
        classAnswer.tri_AssessmentId = { Id: assessmentId, LogicalName: "tri_assessment", Name: assessmentIdName };
        classAnswer.tri_AssessmentTypeId = { Id: typeId, LogicalName: "tri_assessmenttype", Name: typeIdName };
        classAnswer.tri_Comments = comments;


        return classAnswer;
    }
    catch (e) {

        alert("Error Creating Assessment Answer Object - " + e.description);
        //  HideProgressBar("container");
        return;
    }

}
/**********************************************************************************************/
function PopulateAnswersOnComplete() {

    //HideProgressBar("container");
}
/**********************************************************************************************/
function SetAnswers(retrievedTestResults) {
    try {
        if (retrievedTestResults != null) {
            for (var i = 0; i < retrievedTestResults.length; i++) {
                var answerIdTextBox = GetHTMLObject("txtAnswerGuid" + retrievedTestResults[i].tri_QuestionNumber);
                answerIdTextBox.value = retrievedTestResults[i].tri_AnswerId.Id;
                //set detailid
                var detailTextBox = GetHTMLObject("txtDetailGuid" + retrievedTestResults[i].tri_QuestionNumber);
                detailTextBox.value = retrievedTestResults[i].tri_assessmentdetailId;

                switch (retrievedTestResults[i].tri_AnswerType) {
                    case "Numeric":
                        //if (retrievedTestResults[i].tri_AnswerText != null) {
                        SetKendoNumericTextValue("numeric" + retrievedTestResults[i].tri_QuestionNumber, retrievedTestResults[i].tri_AnswerText);
                        //}
                        break;
                    case "Date":
                        //if (retrievedTestResults[i].tri_AnswerText != "") {
                        SetKendoDatePickerValue("date" + retrievedTestResults[i].tri_QuestionNumber, retrievedTestResults[i].tri_AnswerText);
                        // }
                        break;
                    case "Memo":
                        var memo = GetHTMLObject("txtArea" + retrievedTestResults[i].tri_QuestionNumber);
                        if (retrievedTestResults[i].tri_AnswerText != null) {
                            memo.value = retrievedTestResults[i].tri_AnswerText;
                        }
                        else {
                            memo.value = "";
                        }
                        break;
                    case "Text":
                        var txt = GetHTMLObject("txt" + retrievedTestResults[i].tri_QuestionNumber);
                        if (retrievedTestResults[i].tri_AnswerText != null) {
                            txt.value = retrievedTestResults[i].tri_AnswerText;
                        }
                        else {
                            txt.value = null;
                        }
                        break;
                    case "Multi-Select":
                        //if (retrievedTestResults[i].tri_AnswerText != "") {
                        SetKendoMultiSelectValue("multiselect" + retrievedTestResults[i].tri_QuestionNumber, retrievedTestResults[i].tri_AnswerText)
                        //}
                        break;
                    case "Optionset":
                        //set answer in drop down
                        if (retrievedTestResults[i].tri_AnswerValue != null) {
                            var ans = answerIdTextBox.value;
                            var atext = GetHTMLObject("txtAnswerText" + retrievedTestResults[i].tri_QuestionNumber);
                            atext.value = retrievedTestResults[i].tri_AnswerId.Name + "[" + retrievedTestResults[i].tri_AnswerValue + "]";
                            SetKendoDropDownListByText("select" + retrievedTestResults[i].tri_QuestionNumber, retrievedTestResults[i].tri_AnswerId.Name);
                        }
                        break;

                }

                //set detail name
                var detailNameTextBox = GetHTMLObject("txtDetailName" + retrievedTestResults[i].tri_QuestionNumber);
                detailNameTextBox.value = retrievedTestResults[i].tri_name;
                if (GetHTMLObject('txtComment' + retrievedTestResults[i].tri_QuestionNumber)) {
                    var commentTextBox = GetHTMLObject("txtComment" + retrievedTestResults[i].tri_QuestionNumber);
                    if (retrievedTestResults[i].tri_Comments != null) {
                        commentTextBox.value = retrievedTestResults[i].tri_Comments;
                    }
                    else {
                        commentTextBox.value = "";
                    }
                }

            }
        }
        else {
            alert("No Answers Found for Assessment");
        }
    }
    catch (e) {
        alert("Error Setting Answers --" + e.description);
    }
}
/**********************************************************************************************/
function PopulateAnswersAsync() {
    try {

        var filter = "tri_assessmentdetailSet?$orderby=tri_QuestionNumber asc&$filter=tri_AssessmentId/Id eq (guid'" + assessmentId + "')";
        var options = "$orderby=tri_QuestionNumber asc&$filter=tri_AssessmentId/Id eq (guid'" + assessmentId + "')";
        retrieveMultipleAsync("tri_assessmentdetail", options, SetAnswers, errorHandler, PopulateAnswersOnComplete);

    }
    catch (e) {
        alert("Error Populating Answers--" + e.description);
        // HideProgressBar("container");
        return;
    }
}
/***************************************************************************************************/
function ValidateAnswers() {

    for (var x = 0; x < QuestionsArray.length; x++) {
        var val = "";
        switch (QuestionsArray[x].answerType) {
            case "Numeric":
                val = GetHTMLObject("numeric" + QuestionsArray[x].questionNumber);
                break;
            case "Date":
                val = GetHTMLObject("date" + QuestionsArray[x].questionNumber);
                break;
            case "Memo":
                val = GetHTMLObject("txtArea" + QuestionsArray[x].questionNumber);
                break;
            case "Text":
                val = GetHTMLObject("txt" + QuestionsArray[x].questionNumber);
                break;
            case "Optionset":
                val = GetHTMLObject("txtAnswerGuid" + QuestionsArray[x].questionNumber);
                break;
            case "Multi-Select":
                val = GetKendoMultiSelectValue("multiselect" + QuestionsArray[x].questionNumber);
                break;
        }
        var questionText = GetHTMLObject("txtQuestion" + QuestionsArray[x].questionNumber);
        if (QuestionsArray[x].isRequired == 1) {
            if ((val.value == "") || (val == null)) {
                alert("Please Provide an Answer to " + questionText.outerText);
                return false;
            }
        }
    }
    return true;

}
/**********************************************************************************************/
function SaveAnswers(closeWindow) {
    try {
        if (ValidateAnswers()) {
            totalScore = 0;
            for (var x = 0; x < QuestionsArray.length; x++) {
                var atext = null;
                var aid = null;
                var answerGuid = null;
                var qtext = QuestionsArray[x].questionName;// GetHTMLObject("txtQuestion" + y);
                var answerText = null;
                var answerValue = null;
                var dId = GetHTMLObject("txtDetailGuid" + QuestionsArray[x].questionNumber);
                var qid = QuestionsArray[x].questionId;
                var dname = GetHTMLObject("txtDetailName" + QuestionsArray[x].questionNumber);
                var comments = "";
                switch (QuestionsArray[x].answerType) {
                    case "Numeric":
                        if (GetKendoNumericTextValue("numeric" + QuestionsArray[x].questionNumber) != null) {
                            answerValue = GetKendoNumericTextValue("numeric" + QuestionsArray[x].questionNumber).toString();
                        }
                        else {
                            answerValue = null;
                            answerText = null;
                        }
                        break;
                    case "Date":
                        if (GetKendoDatePickerValue("date" + QuestionsArray[x].questionNumber) != null) {
                            answerValue = GetKendoDatePickerValue("date" + QuestionsArray[x].questionNumber);
                        }
                        else {
                            answerValue = null;
                            answerText = null;
                        }

                        break;
                    case "Memo":
                        answerValue = GetHTMLObject("txtArea" + QuestionsArray[x].questionNumber).value;

                        break;
                    case "Text":
                        answerValue = GetHTMLObject("txt" + QuestionsArray[x].questionNumber).value;
                        break;
                    case "Multi-Select":
                        var dataItem = GetKendoMultiSelectItems("multiselect" + QuestionsArray[x].questionNumber);
                        var selectedNames = "";
                        if (dataItem.length > 0) {
                            for (var i = 0; i < dataItem.length; i++) {
                                selectedNames = selectedNames + dataItem[i].selectedtext + ",";
                            }
                            answerText = selectedNames.substring(0, selectedNames.length - 1);
                        }
                        break;
                    case "Optionset":
                        atext = GetHTMLObject("txtAnswerText" + QuestionsArray[x].questionNumber);
                        if (atext.value != "") {
                            aid = GetHTMLObject("txtAnswerGuid" + QuestionsArray[x].questionNumber);
                            answerGuid = aid.value;
                            answerText = atext.value.substring(0, atext.value.indexOf("["));
                            answerValue = atext.value.substring(atext.value.indexOf("[") + 1, atext.value.indexOf("]"));
                        }
                        else {
                            answerGuid = null;
                            answerText = null;
                            answerValue = null;
                        }
                        break;
                }
                if (GetHTMLObject('txtComment' + QuestionsArray[x].questionNumber)) {
                    var commentTextBox = GetHTMLObject("txtComment" + QuestionsArray[x].questionNumber);
                    comments = commentTextBox.value;
                }


                // totalScore = parseInt(totalScore) + parseInt(answerValue);
                var isDirty = GetHTMLObject("txtIsDirty" + QuestionsArray[x].questionNumber).value;
                var isCommentsDirty = "No";
                if (QuestionsArray[x].includeComments.Value == 167410000) {
                    isCommentsDirty = GetHTMLObject("txtCommentIsDirty" + QuestionsArray[x].questionNumber).value;
                }
                //     if ((isDirty == 'Yes') || (isCommentsDirty=='Yes')) {
                var detail = CreateAssessmentAnswer(QuestionsArray[x].questionNumber, qid, answerGuid, qtext, answerText, dId.value, dname.value, comments, answerValue, QuestionsArray[x].answerType, QuestionsArray[x].categoryId.Id, QuestionsArray[x].categoryName);
                dId.value = saveRecord("tri_assessmentdetailSet", detail, dId.value, "tri_assessmentdetailId");
                if (dId.value.substring(0, 4) == "Error") {
                    alert(dId.value);
                    break;
                }
                //   }
            }
            DisableKendoButton("cmdSave");
            //       var riskLevel = RetrieveRiskLevel();
            //         var AssessmentObject = CreateAssessment(parseInt(totalScore), riskLevel);
            //           saveRecord("tri_assessmentSet", AssessmentObject, assessmentId, "tri_assessmentId");
            if (closeWindow) {
                //  window.opener.Xrm.Page.data.entity.save("saveandclose");
                // var windowOptions = {
                //     openInNewWindow: true
                // };

                // Xrm.Utility.openEntityForm("tri_assessment", assessmentId,null,windowOptions);
                window.opener.Xrm.Page.data.entity.save();
                window.parent.opener.Xrm.Page.data.refresh(true);
                // window.parent.opener.location.reload(false);
                window.close();


            }
        }

    }
    catch (e) {
        alert("Error Saving Answers--" + e.description);
    }
}

/**********************************************************************************************/
function GetQuestionsComplete(retrievedQuestions) {
    if (totalQuestionCount == totalRowsCreated) {
        PopulateAnswersAsync();
    }

}
/**********************************************************************************************/
function LoadQuestions(retrievedQuestions) {
    try {
        var qArrayLength = 0;  // used to handle more than 50 rows and not resetting array
        if (retrievedQuestions != null) {
            totalQuestionCount = totalQuestionCount + retrievedQuestions.length;
            if (QuestionsArray.length != 0)
            { qArrayLength = QuestionsArray.length; }

            for (var i = 0; i < retrievedQuestions.length; i++) {
                QuestionsArray[qArrayLength + i] =
                    {
                        questionName: retrievedQuestions[i].tri_name,
                        questionId: retrievedQuestions[i].tri_assessmentquestionId,
                        questionNumber: retrievedQuestions[i].tri_QuestionNumber,
                        includeComments: retrievedQuestions[i].tri_IncludeComments,
                        categoryId: retrievedQuestions[i].tri_AssessmentQuestionCategoryId,
                        categoryName: retrievedQuestions[i].tri_AssessmentQuestionCategoryId.Name,
                        answerType: retrievedQuestions[i].tri_AnswerTypeText,
                        commentsNumRows: retrievedQuestions[i].tri_CommentsFieldSize,
                        memoFieldNumRows: retrievedQuestions[i].tri_MemoFieldSize,
                        numericMaxValue: retrievedQuestions[i].tri_NumericMaxValue,
                        numericMinValue: retrievedQuestions[i].tri_NumericMinValue,
                        isRequired: retrievedQuestions[i].tri_IsRequired,
                        toolTipDescription: retrievedQuestions[i].tri_QuestionTip
                    };
                var answers = new Array(new Array());
                if ((QuestionsArray[qArrayLength + i].answerType == "Optionset") || (QuestionsArray[qArrayLength + i].answerType == "Multi-Select")) {
                    for (var a = 0; a < retrievedQuestions[i].tri_assessmentquestion_tri_answer.results.length; a++) {
                        var choices = retrievedQuestions[i].tri_assessmentquestion_tri_answer.results[a];
                        answers[a] =
                            {
                                displayText: choices.tri_name + '[' + choices.tri_AnswerValue + ']',
                                answerName: choices.tri_name,
                                answerValue: choices.tri_AnswerValue,
                                answerId: choices.tri_assessmentanswerId
                            }

                    }
                }
                addRow("assessmentTable", QuestionsArray[qArrayLength + i], answers);
                //      totalQuestionsProcessed = totalQuestionsProcessed + 1;


            }
        }
        else {
            alert("No Questions Found for Assessment");
        }
    }
    catch (e) {
        alert("Error Loading Questions--" + e.description);
        //  HideProgressBar("container");
        return;
    }
}
/**********************************************************************************************/
function GetQuestionsAsync() {
    //  ShowProgressBar("container");
    //  var filter = "tri_assessmentquestionSet?$select=tri_assessmentquestionId,tri_AssessmentQuestionCategoryId,tri_AssessmentTypeId,tri_name,tri_IncludeComments,tri_QuestionNumber,tri_AnswerType,tri_AnswerTypeText,tri_CommentsFieldSize,tri_IsQuestionScored,tri_MemoFieldSize,tri_WeightMultiplier,tri_NumericMaxValue,tri_NumericMinValue,tri_assessmentquestion_tri_answer/tri_name,tri_assessmentquestion_tri_answer/tri_AnswerValue,tri_assessmentquestion_tri_answer/tri_assessmentanswerId&$orderby=tri_QuestionNumber asc&$expand=tri_assessmentquestion_tri_answer&$filter=tri_AssessmentTypeId/Id eq (guid'" + typeId + "') and statecode/Value eq 0";
    var options = "select=tri_assessmentquestionId,tri_AssessmentQuestionCategoryId,tri_AssessmentTypeId,tri_name,tri_IncludeComments,tri_QuestionNumber,tri_AnswerType,tri_AnswerTypeText,tri_CommentsFieldSize,tri_IsQuestionScored,tri_IsRequired,tri_MemoFieldSize,tri_WeightMultiplier,tri_NumericMaxValue,tri_NumericMinValue,tri_QuestionTip,tri_assessmentquestion_tri_answer/tri_name,tri_assessmentquestion_tri_answer/tri_AnswerValue,tri_assessmentquestion_tri_answer/tri_assessmentanswerId&$orderby=tri_QuestionNumber asc&$expand=tri_assessmentquestion_tri_answer&$filter=tri_AssessmentTypeId/Id eq (guid'" + typeId + "') and statecode/Value eq 0";

    retrieveMultipleAsync("tri_assessmentquestion", options, LoadQuestions, errorHandler, GetQuestionsComplete);

}
/**********************************************************************************************/
function addRow(tableID, questions, answer) {

    var table = GetHTMLObject(tableID);
    var memoOffset = 0;
    var rowCount = table.rows.length;
    if ((CurrentCategory != questions.categoryName) && (questions.categoryName != null)) {
        row = table.insertRow(rowCount);
        var categoryCell = row.insertCell(0);
        var elementCategory = document.createElement("label");
        elementCategory.id = "lblcategory" + questions.categoryName;
        elementCategory.innerHTML = questions.categoryName;
        elementCategory.style.fontWeight = 'bold';
        categoryCell.appendChild(elementCategory);
    }
    CurrentCategory = questions.categoryName;
    rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);

    var element1 = document.createElement("label");
    element1.id = "lblquestion" + questions.questionNumber;
    element1.innerHTML = questions.questionNumber + ".";
    element1.style.cssFloat = "right";

    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    var element2 = document.createElement("label");
    element2.id = "txtQuestion" + questions.questionNumber;
    element2.name = "txtQuestion" + questions.questionNumber;
    if (questions.toolTipDescription != null) {
        element2.title = questions.toolTipDescription;
    }
    else {
        element2.title = questions.questionName;
    }

    element2.innerHTML = questions.questionName;
    if (questions.isRequired == 1) {
        element2.style.color = "red";
    }
    element2.style.width = "400px";
    element2.style.whiteSpace = "normal";
    cell2.appendChild(element2);

    switch (questions.answerType) {
        case "Numeric":
            var cell3 = row.insertCell(2);
            var element3 = document.createElement("input");
            element3.id = "numeric" + questions.questionNumber;
            element3.name = "numeric" + questions.questionNumber;
            element3.style.width = "200px";
            element3.onchange = function () { EnableKendoButton("cmdSave"); };
            cell3.appendChild(element3);
            $("#numeric" + questions.questionNumber).kendoNumericTextBox({
                format: "n0",
                min: questions.numericMinValue,
                max: questions.numericMaxValue,
                step: 1
            });
            break;
        case "Date":
            var cell3 = row.insertCell(2);
            var element3 = document.createElement("input");
            element3.id = "date" + questions.questionNumber;
            element3.name = "date" + questions.questionNumber;
            element3.style.width = "200px";
            cell3.appendChild(element3);
            element3.onchange = function () { EnableKendoButton("cmdSave"); };
            $("#date" + questions.questionNumber).kendoDatePicker();

            break;
        case "Memo":
            rowCount = table.rows.length;
            row = table.insertRow(rowCount);
            var cell3 = row.insertCell(0);
            var element3 = document.createElement("textarea");
            element3.id = "txtArea" + questions.questionNumber;
            element3.name = "txtArea" + questions.questionNumber;
            element3.style.width = "90%";
            element3.style.fontFamily = "Segoe UI";
            element3.style.fontSize = "12px";
            element3.style.fontStyle = "normal";
            cell3.colSpan = "8"
            element3.rows = questions.memoFieldNumRows;
            element3.onchange = function () { EnableKendoButton("cmdSave"); };
            cell3.appendChild(element3);
            memoOffset = 2;
            break;
        case "Text":
            var cell3 = row.insertCell(2);
            var element3 = document.createElement("input");
            element3.id = "txt" + questions.questionNumber;
            element3.name = "txt" + questions.questionNumber;
            element3.style.width = "200px";
            element3.style.fontFamily = "Segoe UI";
            element3.style.fontSize = "12px";
            element3.style.fontStyle = "normal";
            element3.onchange = function () { EnableKendoButton("cmdSave"); };
            cell3.appendChild(element3);
            break;
        case "Multi-Select":
            var cell3 = row.insertCell(2);
            var element3 = document.createElement("select");
            element3.id = "multiselect" + questions.questionNumber;
            element3.name = "multiselect" + questions.questionNumber;
            element3.style.width = "200px";
            cell3.appendChild(element3);

            var choices = [];
            for (var x = 0; x < answer.length; x++) {
                choices[x] = { selectedtext: answer[x].answerName, selectedvalue: answer[x].answerName, questionNumber: questions.questionNumber };

            }
            var data = choices;
            // create DropDownList from input HTML element
            $("#multiselect" + questions.questionNumber).kendoMultiSelect({
                dataTextField: "selectedtext",
                dataValueField: "selectedvalue",
                dataSource: data,
                change: MultiSelectonChange,
                select: MultiSelectonSelect
                // close: MultiSelectClose
            });
            break;
        case "Optionset":
            var cell3 = row.insertCell(2);
            var element3 = document.createElement("select");
            element3.id = "select" + questions.questionNumber;
            element3.name = "select" + questions.questionNumber;
            element3.style.width = "200px";
            cell3.appendChild(element3);

            var choices = [];
            for (var x = 0; x < answer.length; x++) {
                choices[x] = { selectedtext: answer[x].displayText, selectedvalue: answer[x].answerId, questionNumber: questions.questionNumber };
            }
            var data = choices;
            // create DropDownList from input HTML element
            $("#select" + questions.questionNumber).kendoDropDownList({
                dataTextField: "selectedtext",
                dataValueField: "selectedvalue",
                dataSource: data,
                optionLabel: {
                    selectedtext: "Select a Result...",
                    selectedvalue: null,
                    questionNumber: questions.questionNumber
                },
                change: onChange,
                select: onSelect

            });
            break;
    }

    var cell5 = row.insertCell(3 - memoOffset);
    var element5 = document.createElement("input");
    element5.id = "txtQuestionGuid" + questions.questionNumber;
    element5.name = "txtQuestionGuid" + questions.questionNumber;
    element5.value = questions.questionId;
    element5.style.display = "none";
    cell5.appendChild(element5);

    var cell6 = row.insertCell(4 - memoOffset);
    var element6 = document.createElement("input");
    element6.id = "txtAnswerGuid" + questions.questionNumber;
    element6.name = "txtAnswerGuid" + questions.questionNumber;
    element6.style.display = "none";
    cell6.appendChild(element6);

    var cell7 = row.insertCell(5 - memoOffset);
    var element7 = document.createElement("input");
    element7.id = "txtDetailGuid" + questions.questionNumber;
    element7.name = "txtDetailGuid" + questions.questionNumber;
    element7.style.display = "none";
    element7.value = "none";
    cell7.appendChild(element7);

    var cell8 = row.insertCell(6 - memoOffset);
    var element8 = document.createElement("input");
    element8.id = "txtDetailName" + questions.questionNumber;
    element8.name = "txtDetailName" + questions.questionNumber;
    element8.style.display = "none";
    element8.value = "none";
    cell8.appendChild(element8);

    var cell9 = row.insertCell(7 - memoOffset);
    var element9 = document.createElement("input");
    element9.id = "txtAnswerText" + questions.questionNumber;
    element9.name = "txtAnswerText" + questions.questionNumber;
    element9.style.display = "none";
    cell9.appendChild(element9);

    var cell10 = row.insertCell(8 - memoOffset);
    var element10 = document.createElement("input");
    element10.id = "txtIsDirty" + questions.questionNumber;
    element10.name = "txtIsDirty" + questions.questionNumber;
    element10.style.display = "none";
    cell10.appendChild(element10);

    if (questions.includeComments.Value == 167410000) {
        rowCount = table.rows.length;
        row = table.insertRow(rowCount);
        var commentCell = row.insertCell(0);
        var comment = document.createElement("textarea");
        comment.id = "txtComment" + questions.questionNumber;
        comment.name = "txtComment" + questions.questionNumber;
        comment.style.fontFamily = "Segoe UI";
        comment.style.fontSize = "11px";
        comment.style.fontStyle = "normal";
        comment.style.width = "90%";
        comment.rows = questions.commentsNumRows;
        comment.onchange = function () {
            var isDirty = GetHTMLObject("txtCommentIsDirty" + questions.questionNumber);
            isDirty.value = 'Yes';
            EnableKendoButton("cmdSave");
        };
        //comment.cols = 168;
        commentCell.colSpan = "8"
        commentCell.appendChild(comment);
        var commentDirty = row.insertCell(1);
        var cmt = document.createElement("input");
        cmt.id = "txtCommentIsDirty" + questions.questionNumber;
        cmt.name = "txtCommentIsDirty" + questions.questionNumber;
        cmt.style.display = "none";
        commentDirty.appendChild(cmt);
    }



    totalRowsCreated = totalRowsCreated + 1;
}
/***************************************************************************************************/
function onSelect(e) {

    var dataItem = this.dataItem(e.item.index());
    var indx = 0;
    for (var x = 0; x < QuestionsArray.length; x++) {
        if (QuestionsArray[x].questionId == dataItem.questionId) {
            indx = x;
        }
    }

    var txtAnswerGuidBox = GetHTMLObject("txtAnswerGuid" + dataItem.questionNumber);
    var txtAnswerTextBox = GetHTMLObject("txtAnswerText" + dataItem.questionNumber);

    txtAnswerGuidBox.value = dataItem.selectedvalue;
    txtAnswerTextBox.value = dataItem.selectedtext;
    var isDirty = GetHTMLObject("txtIsDirty" + dataItem.questionNumber);
    isDirty.value = 'Yes';
    EnableKendoButton("cmdSave");



    //  UpdateTest(formLoad);
};
/***************************************************************************************************/
function onChange(e) {
    var dataItem = this.dataItem(e.sender.selectedIndex);
    var indx = 0;
    for (var x = 0; x < QuestionsArray.length; x++) {
        if (QuestionsArray[x].questionId == dataItem.questionId) {
            indx = x;
        }
    }
    var txtAnswerGuidBox = GetHTMLObject("txtAnswerGuid" + dataItem.questionNumber);
    var txtAnswerTextBox = GetHTMLObject("txtAnswerText" + dataItem.questionNumber);
    txtAnswerGuidBox.value = dataItem.selectedvalue;
    txtAnswerTextBox.value = dataItem.selectedtext;
    var isDirty = GetHTMLObject("txtIsDirty" + dataItem.questionNumber);
    isDirty.value = 'Yes';
    EnableKendoButton("cmdSave");
};
/***************************************************************************************************/
function MultiSelectonSelect(e) {
    EnableKendoButton("cmdSave");

};
/***************************************************************************************************/
function MultiSelectonChange(e) {
    EnableKendoButton("cmdSave");
};
/***************************************************************************************************/
function MultiSelectClose(e) {

    EnableKendoButton("cmdSave");
}
/***************************************************************************************************/
function OpenNewWindow() {
    //   var customParameters = encodeURIComponent("version=2011");
    Xrm.Utility.openWebResource("tri_/Assessment/Assessment.html", null, 1300, 1300);

}
/***************************************************************************************************/
function FormLoad() {
    //SetBackGroundColor(GetCRMVersion());
    assessmentId = GetCurrentEntityID();
    if (assessmentId != null) {
        typeId = GetLookupFieldValue("tri_assessmenttypeid");
        typeIdName = GetLookupFieldText("tri_assessmenttypeid");
        assessmentIdName = GetTextFieldValue("tri_name");
        assessmentStatus = GetPickListText("statuscode");
        totalQuestionCount = 0;

        if (assessmentId.length > 0);
        {
            GetQuestionsAsync();
        }
        //   window.opener.Xrm.Page.data.entity.save("saveandclose");
    }
    DisableKendoButton("cmdSave");
}
/***************************************************************************************************/