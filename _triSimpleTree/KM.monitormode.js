﻿var joinEntityCollection = null;
var CPGoalSymptomsAll = null;
var tagCPGoalSymptomsAll = "";
var CPGoalSymptomsNotMet = null;
var CPGoalSymptomsOpen = null;
var CPGoalSymptomsMet = null;
var CPGoalSymptomsOverDue = null;
var intTotalSymptoms = null;
var intTotalSymptomsNotMet = null;
var intTotalSymptomsMet = null;
var intTotalSymptomsOpen = null;
var intTotalSymptomsOverDue = null;
var tagSymptomsAll = "";
var tagSymptomsRed = "";
var tagSymptomsOrange = "";
var tagSymptomsGreen = "";
var tagSymptomsGrey = "";
var strTargetVal = "";
var strDueDate = "";
var CPGoaltestcareAll = null;
var tagCPGoaltestcareAll = "";
var CPGoaltestcareNotMet = null;
var CPGoaltestcareOpen = null;
var CPGoaltestcareMet = null;
var CPGoaltestcareOverDue = null;
var intTotaltestcare = null;
var intTotaltestcareNotMet = null;
var intTotaltestcareMet = null;
var intTotaltestcareOpen = null;
var intTotaltestcareOverDue = null;
var tagtestcareAll = "";
var tagtestcareRed = "";
var tagtestcareOrange = "";
var tagtestcareGreen = "";
var tagtestcareGrey = "";
//---vitals--
var CPGoalvitalsAll = null;
var tagCPGoalvitalsAll = "";
var CPGoalvitalsNotMet = null;
var CPGoalvitalsOpen = null;
var CPGoalvitalsMet = null;
var CPGoalvitalsOverDue = null;
var intTotalvitals = null;
var intTotalvitalsNotMet = null;
var intTotalvitalsMet = null;
var intTotalvitalsOpen = null;
var intTotalvitalsOverDue = null;
var tagvitalsAll = "";
var tagvitalsRed = "";
var tagvitalsOrange = "";
var tagvitalsGreen = "";
var tagvitalsGrey = "";
//--medications
var CPGoalmedicationsAll = null;
var tagCPGoalmedicationsAll = "";
var CPGoalmedicationsNotMet = null;
var CPGoalmedicationsOpen = null;
var CPGoalmedicationsMet = null;
var CPGoalmedicationsOverDue = null;
var intTotalmedications = null;
var intTotalmedicationsNotMet = null;
var intTotalmedicationsMet = null;
var intTotalmedicationsOpen = null;
var intTotalmedicationsOverDue = null;
var tagmedicationsAll = "";
var tagmedicationsRed = "";
var tagmedicationsOrange = "";
var tagmedicationsGreen = "";
var tagmedicationsGrey = "";
//--activity
var CPGoalactivityAll = null;
var tagCPGoalactivityAll = "";
var CPGoalactivityNotMet = null;
var CPGoalactivityOpen = null;
var CPGoalactivityMet = null;
var CPGoalactivityOverDue = null;
var intTotalactivity = null;
var intTotalactivityNotMet = null;
var intTotalactivityMet = null;
var intTotalactivityOpen = null;
var intTotalactivityOverDue = null;
var tagactivityAll = "";
var tagactivityRed = "";
var tagactivityOrange = "";
var tagactivityGreen = "";
var tagactivityGrey = "";
//--nutrition
var CPGoalnutritionAll = null;
var tagCPGoalnutritionAll = "";
var CPGoalnutritionNotMet = null;
var CPGoalnutritionOpen = null;
var CPGoalnutritionMet = null;
var CPGoalnutritionOverDue = null;
var intTotalnutrition = null;
var intTotalnutritionNotMet = null;
var intTotalnutritionMet = null;
var intTotalnutritionOpen = null;
var intTotalnutritionOverDue = null;
var tagnutritionAll = "";
var tagnutritionRed = "";
var tagnutritionOrange = "";
var tagnutritionGreen = "";
var tagnutritionGrey = "";
//--psychosocial
var CPGoalpsychosocialAll = null;
var tagCPGoalpsychosocialAll = "";
var CPGoalpsychosocialNotMet = null;
var CPGoalpsychosocialOpen = null;
var CPGoalpsychosocialMet = null;
var CPGoalpsychosocialOverDue = null;
var intTotalpsychosocial = null;
var intTotalpsychosocialNotMet = null;
var intTotalpsychosocialMet = null;
var intTotalpsychosocialOpen = null;
var intTotalpsychosocialOverDue = null;
var tagpsychosocialAll = "";
var tagpsychosocialRed = "";
var tagpsychosocialOrange = "";
var tagpsychosocialGreen = "";
var tagpsychosocialGrey = "";
//--wrapup
var CPGoalwrapupAll = null;
var tagCPGoalwrapupAll = "";
var CPGoalwrapupNotMet = null;
var CPGoalwrapupOpen = null;
var CPGoalwrapupMet = null;
var CPGoalwrapupOverDue = null;
var intTotalwrapup = null;
var intTotalwrapupNotMet = null;
var intTotalwrapupMet = null;
var intTotalwrapupOpen = null;
var intTotalwrapupOverDue = null;
var tagwrapupAll = "";
var tagwrapupRed = "";
var tagwrapupOrange = "";
var tagwrapupGreen = "";
var tagwrapupGrey = "";
var patientModifierData = [];
var contactId;

$(document).ready(function () {
    var PatientId1 = parent.Xrm.Page.data.entity.getId();
    var PatientId2 = PatientId1.replace("{", "");
    var PatientId = PatientId2.replace("}", "");
    var joinEntityCollection = null;

    // Set up the kendo window
    $(".window-wrapper").kendoWindow({
        width: "60%",
        height: "60%",
        visible: false,
    }).data("kendoWindow");
    contactId = parent.Xrm.Page.data.entity.getId();
    //SDK.JQuery.retrieveMultipleRecords(
    //"tri_cccareplangoal",
    //"?$select=tri_PatientModifierId&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_vitalsvaluetype/Id eq (guid'" + vitaltype + "')",
    //function (results) {
    //    for (var i = 0; i < results.length; i++) {
    //        var tri_PatientModifierId = results[i].tri_PatientModifierId;
    //    }
    //    patientModifierData = patientModifierData.concat(
    //                          Enumerable.From(results)
    //                                    .Where(function (x) { return x.tri_PatientModifierId.Id !== null && x.tri_PatientModifierId.Id !== undefined; })
    //                                    .Select(function (x) { return { 'Name': x.tri_PatientModifierId.Name, 'Id': x.tri_PatientModifierId.Id }; })
    //                                    .ToArray());
    //},
    //function (error) {
    //    alert(error.message);
    //},
    //function () {
    //    //On Complete - Do Something
    //    patientModifierData = patientModifierData;
    //});

    //// upadting the text container for Patitent Modifier
    //var textContainer, textareaSize, input;
    //var autoSize = function () {
    //    textareaSize.innerHTML = input.value + '\n';
    //};
    //document.addEventListener('DOMContentLoaded', function () {
    //    textContainer = document.querySelector('.textarea-container');
    //    textareaSize = textContainer.querySelector('.textarea-size');
    //    input = textContainer.querySelector('textarea');

    //    autoSize();
    //    input.addEventListener('input', autoSize);
    //});

    //var PatientIdTrimmed= .replace("{", "");
    //alert(PatientId);
    //getJoinsForContact(PatientId);
    getCPGoalSymptomsAll(PatientId);
    getCPGoalSymptomsNotMet(PatientId);
    getCPGoalSymptomsOpen(PatientId);
    getCPGoalSymptomsMet(PatientId);
    getCPGoalSymptomsOverDue(PatientId);
    getCPGoaltestcareAll(PatientId);
    getCPGoaltestcareNotMet(PatientId);
    getCPGoaltestcareOpen(PatientId);
    getCPGoaltestcareMet(PatientId);
    getCPGoaltestcareOverDue(PatientId);
    getCPGoalvitalsAll(PatientId);
    getCPGoalvitalsNotMet(PatientId);
    getCPGoalvitalsOpen(PatientId);
    getCPGoalvitalsMet(PatientId);
    getCPGoalvitalsOverDue(PatientId);
    getCPGoalmedicationsAll(PatientId);
    getCPGoalmedicationsNotMet(PatientId);
    getCPGoalmedicationsOpen(PatientId);
    getCPGoalmedicationsMet(PatientId);
    getCPGoalmedicationsOverDue(PatientId);
    getCPGoalactivityAll(PatientId);
    getCPGoalactivityNotMet(PatientId);
    getCPGoalactivityOpen(PatientId);
    getCPGoalactivityMet(PatientId);
    getCPGoalactivityOverDue(PatientId);
    getCPGoalnutritionAll(PatientId);
    getCPGoalnutritionNotMet(PatientId);
    getCPGoalnutritionOpen(PatientId);
    getCPGoalnutritionMet(PatientId);
    getCPGoalnutritionOverDue(PatientId);
    getCPGoalpsychosocialAll(PatientId);
    getCPGoalpsychosocialNotMet(PatientId);
    getCPGoalpsychosocialOpen(PatientId);
    getCPGoalpsychosocialMet(PatientId);
    getCPGoalpsychosocialOverDue(PatientId);
    getCPGoalwrapupAll(PatientId);
    getCPGoalwrapupNotMet(PatientId);
    getCPGoalwrapupOpen(PatientId);
    getCPGoalwrapupMet(PatientId);
    getCPGoalwrapupOverDue(PatientId);

    ChangeSectionTitleColor = function (parent, classtoadd) {
        var element = $(parent);
        element.removeClass("bluetxt redtxt orangetxt greentxt greytxt");
        element.addClass(classtoadd);
    }

    AppendtxtClassBasisGoalState = function (goalState, classtoappend) {
        var updatedClass;

        if (goalState === 167410000) // Open
            updatedClass = classtoappend + " orangetxt";
        else if (goalState === 167410001) // Met
            updatedClass = classtoappend + " greentxt";
        else if (goalState === 167410002) // Not Met
            updatedClass = classtoappend + " redtxt";
        else
            updatedClass = classtoappend + " greytxt";

        return updatedClass;
    }

    GetTargetMetricOperator = function (operatorValue) {
        var operator;

        if (operatorValue === 167410000) // >
            operator = ">";
        else if (operatorValue === 167410001) // <
            operator = "<";
        else if (operatorValue === 167410002) // =
            operator = "=";
        else if (operatorValue === 167410003)//% Decrease
            operator = "% Decrease";
        else if (operatorValue === 167410003) // % Increase
            operator = "% Increase";
        else if (operatorValue == -1)
            operator = "";

        return operator;
    }

    GetFactorModifier = function (factorValue) {
        var modifier;

        if (factorValue === 100000000) // >
            modifier = "Most Patients";
        else if (factorValue === 100000001) // <
            modifier = "Elderly Frail";
        else if (factorValue === 100000002) // =
            modifier = "Comorbid";
        else if (factorValue === 100000003)//% Decrease
            modifier = "Stage 2-3";
        else if (factorValue === 100000004) // % Increase
            modifier = "All";
        else if (factorValue === 100000005) // % Increase
            modifier = "Normal";
        else if (factorValue === 100000006) // % Increase
            modifier = "Abnormal";
        else if (factorValue == -1)
            modifier = "";

        return modifier;
    }

    GetActivityAssignmentRole = function (roleValue) {
        var role;

        if (roleValue === 167410000) // >
            role = "Care Manager";
        else if (roleValue === 167410001) // <
            role = "Nurse";
        else if (roleValue === 167410002) // =
            role = "Dietician";
        else if (roleValue === 167410003)//% Decrease
            role = "Care Navigator";
        else if (roleValue === 167410004) // % Increase
            role = "Physiatrist";
        else if (roleValue === 167410005) // % Increase
            role = "Cardiologist";
        else if (roleValue === 167410006) // % Increase
            role = "Physician";
        else if (roleValue == -1)
            role = "";

        return role;
    }

    $('.indicator-box-big_symptoms_all').click(function () {
        $('.tablecontent_symptoms_red,.tablecontent_symptoms_orange,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
        $('.tablecontent_symptoms_all').toggle('slow');
        $('.indicator-line_symptoms').removeClass("red orange green grey");
        $('.indicator-line_symptoms').addClass("blue");

        ChangeSectionTitleColor('.indicator-wrapper_symptoms div:nth-last-child(2)', 'bluetxt');
    });
    $('.indicator-box-small_symptoms_red').click(function () {
        $('.tablecontent_symptoms_all,.tablecontent_symptoms_orange,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
        $('.tablecontent_symptoms_red').toggle('slow');
        $('.indicator-line_symptoms').removeClass("blue orange green grey");
        $('.indicator-line_symptoms').addClass("red");

        ChangeSectionTitleColor('.indicator-wrapper_symptoms div:nth-last-child(2)', 'redtxt');
    });
    $('.indicator-box-small_symptoms_orange').click(function () {
        $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
        $('.tablecontent_symptoms_orange').toggle('slow');
        $('.indicator-line_symptoms').removeClass("red blue green grey");
        $('.indicator-line_symptoms').addClass("orange");

        ChangeSectionTitleColor('.indicator-wrapper_symptoms div:nth-last-child(2)', 'orangetxt');
    });
    $('.indicator-box-small_symptoms_green').click(function () {
        $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_orange,.tablecontent_symptoms_grey').hide();
        $('.tablecontent_symptoms_green').toggle('slow');
        $('.indicator-line_symptoms').removeClass("red orange blue grey");
        $('.indicator-line_symptoms').addClass("green");

        ChangeSectionTitleColor('.indicator-wrapper_symptoms div:nth-last-child(2)', 'greentxt');
    });
    $('.indicator-box-small_symptoms_grey').click(function () {
        $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_green,.tablecontent_symptoms_orange').hide();
        $('.tablecontent_symptoms_grey').toggle('slow');
        $('.indicator-line_symptoms').removeClass("red orange green blue");
        $('.indicator-line_symptoms').addClass("grey");

        ChangeSectionTitleColor('.indicator-wrapper_symptoms div:nth-last-child(2)', 'greytxt');
    });
    //----testcare
    $('.indicator-box-big_testcare_all').click(function () {
        $('.tablecontent_testcare_red,.tablecontent_testcare_orange,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
        $('.tablecontent_testcare_all').toggle('slow');
        $('.indicator-line_testcare').removeClass("red orange green grey");
        $('.indicator-line_testcare').addClass("blue");

        ChangeSectionTitleColor('.indicator-wrapper_testcare div:nth-last-child(2)', 'bluetxt');
    });
    $('.indicator-box-small_testcare_red').click(function () {
        $('.tablecontent_testcare_all,.tablecontent_testcare_orange,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
        $('.tablecontent_testcare_red').toggle('slow');
        $('.indicator-line_testcare').removeClass("blue orange green grey");
        $('.indicator-line_testcare').addClass("red");

        ChangeSectionTitleColor('.indicator-wrapper_testcare div:nth-last-child(2)', 'redtxt');
    });
    $('.indicator-box-small_testcare_orange').click(function () {
        $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
        $('.tablecontent_testcare_orange').toggle('slow');
        $('.indicator-line_testcare').removeClass("red blue green grey");
        $('.indicator-line_testcare').addClass("orange");

        ChangeSectionTitleColor('.indicator-wrapper_testcare div:nth-last-child(2)', 'orangetxt');
    });
    $('.indicator-box-small_testcare_green').click(function () {
        $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_orange,.tablecontent_testcare_grey').hide();
        $('.tablecontent_testcare_green').toggle('slow');
        $('.indicator-line_testcare').removeClass("red orange blue grey");
        $('.indicator-line_testcare').addClass("green");

        ChangeSectionTitleColor('.indicator-wrapper_testcare div:nth-last-child(2)', 'greentxt');
    });
    $('.indicator-box-small_testcare_grey').click(function () {
        $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_green,.tablecontent_testcare_orange').hide();
        $('.tablecontent_testcare_grey').toggle('slow');
        $('.indicator-line_testcare').removeClass("red orange green blue");
        $('.indicator-line_testcare').addClass("grey");

        ChangeSectionTitleColor('.indicator-wrapper_testcare div:nth-last-child(2)', 'greytxt');
    });
    //-----vitals
    $('.indicator-box-big_vitals_all').click(function () {
        $('.tablecontent_vitals_red,.tablecontent_vitals_orange,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
        $('.tablecontent_vitals_all').toggle('slow');
        $('.indicator-line_vitals').removeClass("red orange green grey");
        $('.indicator-line_vitals').addClass("blue");

        ChangeSectionTitleColor('.indicator-wrapper_vitals div:nth-last-child(2)', 'bluetxt');
    });
    $('.indicator-box-small_vitals_red').click(function () {
        $('.tablecontent_vitals_all,.tablecontent_vitals_orange,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
        $('.tablecontent_vitals_red').toggle('slow');
        $('.indicator-line_vitals').removeClass("blue orange green grey");
        $('.indicator-line_vitals').addClass("red");

        ChangeSectionTitleColor('.indicator-wrapper_vitals div:nth-last-child(2)', 'redtxt');
    });
    $('.indicator-box-small_vitals_orange').click(function () {
        $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
        $('.tablecontent_vitals_orange').toggle('slow');
        $('.indicator-line_vitals').removeClass("red blue green grey");
        $('.indicator-line_vitals').addClass("orange");

        ChangeSectionTitleColor('.indicator-wrapper_vitals div:nth-last-child(2)', 'orangetxt');
    });
    $('.indicator-box-small_vitals_green').click(function () {
        $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_orange,.tablecontent_vitals_grey').hide();
        $('.tablecontent_vitals_green').toggle('slow');
        $('.indicator-line_vitals').removeClass("red orange blue grey");
        $('.indicator-line_vitals').addClass("green");

        ChangeSectionTitleColor('.indicator-wrapper_vitals div:nth-last-child(2)', 'greentxt');
    });
    $('.indicator-box-small_vitals_grey').click(function () {
        $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_green,.tablecontent_vitals_orange').hide();
        $('.tablecontent_vitals_grey').toggle('slow');
        $('.indicator-line_vitals').removeClass("red orange green blue");
        $('.indicator-line_vitals').addClass("grey");

        ChangeSectionTitleColor('.indicator-wrapper_vitals div:nth-last-child(2)', 'greytxt');
    });
    //----medications
    $('.indicator-box-big_medications_all').click(function () {
        $('.tablecontent_medications_red,.tablecontent_medications_orange,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
        $('.tablecontent_medications_all').toggle('slow');
        $('.indicator-line_medications').removeClass("red orange green grey");
        $('.indicator-line_medications').addClass("blue");
        ChangeSectionTitleColor('.indicator-wrapper_medications div:nth-last-child(2)', 'bluetxt');
    });
    $('.indicator-box-small_medications_red').click(function () {
        $('.tablecontent_medications_all,.tablecontent_medications_orange,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
        $('.tablecontent_medications_red').toggle('slow');
        $('.indicator-line_medications').removeClass("blue orange green grey");
        $('.indicator-line_medications').addClass("red");
        ChangeSectionTitleColor('.indicator-wrapper_medications div:nth-last-child(2)', 'redtxt');
    });
    $('.indicator-box-small_medications_orange').click(function () {
        $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
        $('.tablecontent_medications_orange').toggle('slow');
        $('.indicator-line_medications').removeClass("red blue green grey");
        $('.indicator-line_medications').addClass("orange");
        ChangeSectionTitleColor('.indicator-wrapper_medications div:nth-last-child(2)', 'orangetxt');
    });
    $('.indicator-box-small_medications_green').click(function () {
        $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_orange,.tablecontent_medications_grey').hide();
        $('.tablecontent_medications_green').toggle('slow');
        $('.indicator-line_medications').removeClass("red orange blue grey");
        $('.indicator-line_medications').addClass("green");
        ChangeSectionTitleColor('.indicator-wrapper_medications div:nth-last-child(2)', 'greentxt');

    });
    $('.indicator-box-small_medications_grey').click(function () {
        $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_green,.tablecontent_medications_orange').hide();
        $('.tablecontent_medications_grey').toggle('slow');
        $('.indicator-line_medications').removeClass("red orange green blue");
        $('.indicator-line_medications').addClass("grey");
        ChangeSectionTitleColor('.indicator-wrapper_medications div:nth-last-child(2)', 'greytxt');
    });
    //----activity
    $('.indicator-box-big_activity_all').click(function () {
        $('.tablecontent_activity_red,.tablecontent_activity_orange,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
        $('.tablecontent_activity_all').toggle('slow');
        $('.indicator-line_activity').removeClass("red orange green grey");
        $('.indicator-line_activity').addClass("blue");
        ChangeSectionTitleColor('.indicator-wrapper_activity div:nth-last-child(2)', 'bluetxt');
    });
    $('.indicator-box-small_activity_red').click(function () {
        $('.tablecontent_activity_all,.tablecontent_activity_orange,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
        $('.tablecontent_activity_red').toggle('slow');
        $('.indicator-line_activity').removeClass("blue orange green grey");
        $('.indicator-line_activity').addClass("red");
        ChangeSectionTitleColor('.indicator-wrapper_activity div:nth-last-child(2)', 'redtxt');
    });
    $('.indicator-box-small_activity_orange').click(function () {
        $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
        $('.tablecontent_activity_orange').toggle('slow');
        $('.indicator-line_activity').removeClass("red blue green grey");
        $('.indicator-line_activity').addClass("orange");
        ChangeSectionTitleColor('.indicator-wrapper_activity div:nth-last-child(2)', 'orangetxt');
    });
    $('.indicator-box-small_activity_green').click(function () {
        $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_orange,.tablecontent_activity_grey').hide();
        $('.tablecontent_activity_green').toggle('slow');
        $('.indicator-line_activity').removeClass("red orange blue grey");
        $('.indicator-line_activity').addClass("green");
        ChangeSectionTitleColor('.indicator-wrapper_activity div:nth-last-child(2)', 'greentxt');
    });
    $('.indicator-box-small_activity_grey').click(function () {
        $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_green,.tablecontent_activity_orange').hide();
        $('.tablecontent_activity_grey').toggle('slow');
        $('.indicator-line_activity').removeClass("red orange green blue");
        $('.indicator-line_activity').addClass("grey");
        ChangeSectionTitleColor('.indicator-wrapper_activity div:nth-last-child(2)', 'greytxt');
    });
    //----nutrition
    $('.indicator-box-big_nutrition_all').click(function () {
        $('.tablecontent_nutrition_red,.tablecontent_nutrition_orange,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
        $('.tablecontent_nutrition_all').toggle('slow');
        $('.indicator-line_nutrition').removeClass("red orange green grey");
        $('.indicator-line_nutrition').addClass("blue");
        ChangeSectionTitleColor('.indicator-wrapper_nutrition div:nth-last-child(2)', 'bluetxt');
    });
    $('.indicator-box-small_nutrition_red').click(function () {
        $('.tablecontent_nutrition_all,.tablecontent_nutrition_orange,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
        $('.tablecontent_nutrition_red').toggle('slow');
        $('.indicator-line_nutrition').removeClass("blue orange green grey");
        $('.indicator-line_nutrition').addClass("red");
        ChangeSectionTitleColor('.indicator-wrapper_nutrition div:nth-last-child(2)', 'redtxt');
    });
    $('.indicator-box-small_nutrition_orange').click(function () {
        $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
        $('.tablecontent_nutrition_orange').toggle('slow');
        $('.indicator-line_nutrition').removeClass("red blue green grey");
        $('.indicator-line_nutrition').addClass("orange");
        ChangeSectionTitleColor('.indicator-wrapper_nutrition div:nth-last-child(2)', 'orangetxt');
    });
    $('.indicator-box-small_nutrition_green').click(function () {
        $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_orange,.tablecontent_nutrition_grey').hide();
        $('.tablecontent_nutrition_green').toggle('slow');
        $('.indicator-line_nutrition').removeClass("red orange blue grey");
        $('.indicator-line_nutrition').addClass("green");
        ChangeSectionTitleColor('.indicator-wrapper_nutrition div:nth-last-child(2)', 'greentxt');
    });
    $('.indicator-box-small_nutrition_grey').click(function () {
        $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_green,.tablecontent_nutrition_orange').hide();
        $('.tablecontent_nutrition_grey').toggle('slow');
        $('.indicator-line_nutrition').removeClass("red orange green blue");
        $('.indicator-line_nutrition').addClass("grey");
        ChangeSectionTitleColor('.indicator-wrapper_nutrition div:nth-last-child(2)', 'greytxt');
    });
    //----psychosocial
    $('.indicator-box-big_psychosocial_all').click(function () {
        $('.tablecontent_psychosocial_red,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
        $('.tablecontent_psychosocial_all').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("red orange green grey");
        $('.indicator-line_psychosocial').addClass("blue");
        ChangeSectionTitleColor('.indicator-wrapper_psychosocial div:nth-last-child(2)', 'bluetxt');
    });
    $('.indicator-box-small_psychosocial_red').click(function () {
        $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
        $('.tablecontent_psychosocial_red').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("blue orange green grey");
        $('.indicator-line_psychosocial').addClass("red");
        ChangeSectionTitleColor('.indicator-wrapper_psychosocial div:nth-last-child(2)', 'redtxt');
    });
    $('.indicator-box-small_psychosocial_orange').click(function () {
        $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
        $('.tablecontent_psychosocial_orange').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("red blue green grey");
        $('.indicator-line_psychosocial').addClass("orange");
        ChangeSectionTitleColor('.indicator-wrapper_psychosocial div:nth-last-child(2)', 'orangetxt');

    });
    $('.indicator-box-small_psychosocial_green').click(function () {
        $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_grey').hide();
        $('.tablecontent_psychosocial_green').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("red orange blue grey");
        $('.indicator-line_psychosocial').addClass("green");
        ChangeSectionTitleColor('.indicator-wrapper_psychosocial div:nth-last-child(2)', 'greentxt');

    });
    $('.indicator-box-small_psychosocial_grey').click(function () {
        $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_green,.tablecontent_psychosocial_orange').hide();
        $('.tablecontent_psychosocial_grey').toggle('slow');
        $('.indicator-line_psychosocial').removeClass("red orange green blue");
        $('.indicator-line_psychosocial').addClass("grey");
        ChangeSectionTitleColor('.indicator-wrapper_psychosocial div:nth-last-child(2)', 'greytxt');
    });
    //----wrapup
    $('.indicator-box-big_wrapup_all').click(function () {
        $('.tablecontent_wrapup_red,.tablecontent_wrapup_orange,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
        $('.tablecontent_wrapup_all').toggle('slow');
        $('.indicator-line_wrapup').removeClass("red orange green grey");
        $('.indicator-line_wrapup').addClass("blue");
        ChangeSectionTitleColor('.indicator-wrapper_wrapup div:nth-last-child(2)', 'bluetxt');
    });
    $('.indicator-box-small_wrapup_red').click(function () {
        $('.tablecontent_wrapup_all,.tablecontent_wrapup_orange,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
        $('.tablecontent_wrapup_red').toggle('slow');
        $('.indicator-line_wrapup').removeClass("blue orange green grey");
        $('.indicator-line_wrapup').addClass("red");
        ChangeSectionTitleColor('.indicator-wrapper_wrapup div:nth-last-child(2)', 'redtxt');
    });
    $('.indicator-box-small_wrapup_orange').click(function () {
        $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
        $('.tablecontent_wrapup_orange').toggle('slow');
        $('.indicator-line_wrapup').removeClass("red blue green grey");
        $('.indicator-line_wrapup').addClass("orange");
        ChangeSectionTitleColor('.indicator-wrapper_wrapup div:nth-last-child(2)', 'orangetxt');

    });
    $('.indicator-box-small_wrapup_green').click(function () {
        $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_orange,.tablecontent_wrapup_grey').hide();
        $('.tablecontent_wrapup_green').toggle('slow');
        $('.indicator-line_wrapup').removeClass("red orange blue grey");
        $('.indicator-line_wrapup').addClass("green");
        ChangeSectionTitleColor('.indicator-wrapper_wrapup div:nth-last-child(2)', 'greentxt');
    });
    $('.indicator-box-small_wrapup_grey').click(function () {
        $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_green,.tablecontent_wrapup_orange').hide();
        $('.tablecontent_wrapup_grey').toggle('slow');
        $('.indicator-line_wrapup').removeClass("red orange green blue");
        $('.indicator-line_wrapup').addClass("grey");
        ChangeSectionTitleColor('.indicator-wrapper_wrapup div:nth-last-child(2)', 'greytxt');
    });


    $('.maintable_symptoms_all,.maintable_symptoms_red,.maintable_symptoms_orange,.maintable_symptoms_green, .maintable_symptoms_grey,.maintable_testcare_all,.maintable_testcare_red,.maintable_testcare_orange,.maintable_testcare_green, .maintable_testcare_grey,.maintable_vitals_all,.maintable_vitals_red,.maintable_vitals_orange,.maintable_vitals_green, .maintable_vitals_grey,.maintable_medications_all,.maintable_medications_red,.maintable_medications_orange,.maintable_medications_green, .maintable_medications_grey,.maintable_activity_all,.maintable_activity_red,.maintable_activity_orange,.maintable_activity_green, .maintable_activity_grey,.maintable_nutrition_all, .maintable_nutrition_red,.maintable_nutrition_orange,.maintable_nutrition_green, .maintable_nutrition_grey,.maintable_psychosocial_all, .maintable_psychosocial_red,.maintable_psychosocial_orange,.maintable_psychosocial_green, .maintable_psychosocial_grey, .maintable_wrapup_all, .maintable_wrapup_red,.maintable_wrapup_orange,.maintable_wrapup_green, .maintable_wrapup_grey').on("click", "td", function () {
        //alert($(this).text());
        if ($(this).text() === "...") {
            var currentId = $(this).attr('id');

            ReviewAndUpdateGoal(currentId);

        }
    });

    //on click X button, close current form and go back to original window
    $('.x-close').click(function () {
        // alert("hello");
        $('.window-wrapper').hide();
        $('.monitor-wrapper').show('slow');
        //alert('x-close called');
    });

});





function getJoinsForContact(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
        "tri_careplanjoin",
       //"$select=tri_planname&$filter=_tri_patientid_value eq 0CDF8B04-C90B-E611-80D1-005056810C7C",
       "?$select=tri_PlanName,tri_GoalName&$filter=tri_PatientID/Id eq guid'" + PatientId + "' and tri_GoalSelected eq true",
        function (results) {
            var firstResult = results;
            //alert(firstResult.length);
            if (firstResult != null) {
                joinEntityCollection = results;
                //alert(joinEntityCollection[1].tri_GoalName);
            }
            else {
                alert("No Join records found.");
            }
        },
        errorHandler,
        function () {
            //OnComplete handler
            //alert('done');
        }
      );
}

function getCPGoalSymptomsAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000000 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalSymptoms = "ALL (" + results.length + ")";

        $('.indicator-box-big_symptoms_all').text(intTotalSymptoms);
        for (var i = 0; i < results.length; i++) {
            var targetClass = AppendtxtClassBasisGoalState(results[i].new_GoalState.Value, "target");
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagSymptomsAll = tagSymptomsAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="' + targetClass + '">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_symptoms_all').append(tagSymptomsAll);
        // ChangeSectionTitleColor('table.maintable_symptoms_all tr td:nth-child(2)', 'bluetxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}
///////////////////////////////////////////////////////////
function getCPGoalSymptomsNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_metric," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalSymptomsNotMet = "(" + results.length + ")";
        $('.indicator-box-small_symptoms_red').text(intTotalSymptomsNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagSymptomsRed = tagSymptomsRed + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_symptoms_red').append(tagSymptomsRed);
        ChangeSectionTitleColor('table.maintable_symptoms_red tr td:nth-child(2)', 'redtxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalSymptomsMet(PatientId) {
    SDK.JQuery.retrieveMultipleRecords(
      "tri_careplanjoin",
     // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
      "$select=new_GoalState," +
      "tri_GoalName," +
      "tri_CarePlanGoalID," +
      "tri_GoalSection," +
      "tri_LastGoalDate," +
      "tri_LastTargetValue," +
      "tri_measuredetails," +
      "tri_metric," +
      "tri_NextDueDate," +
      "tri_PlanName," +
      "tri_targetmetricoperator," +
    "tri_GoalSelected," +
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalSymptomsMet = "(" + results.length + ")";
          $('.indicator-box-small_symptoms_green').text(intTotalSymptomsMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              var merticOperator;
              //check between qualitative/quantitative vals
              if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                  strTargetVal = results[i].tri_metric;
                  merticOperator = results[i].tri_targetmetricoperator.Value;
                  strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
              }

              else {
                  strTargetVal = results[i].tri_qualitativetarget;
              };

              //format dates to correct formats
              strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

              tagSymptomsGreen = tagSymptomsGreen + '<tr>' +
                                                '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                 '<td class="target">' + strTargetVal + '</td>' +
                                                '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                                '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                                '<td class="duedate">' + strDueDate + '</td>' +
                                                '<td class="more" id="' + CPGoalId + '">...</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                                '</tr>'

          }
          $('.maintable_symptoms_green').append(tagSymptomsGreen);
          ChangeSectionTitleColor('table.maintable_symptoms_green tr td:nth-child(2)', 'greentxt');
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
      }
  );
}

function getCPGoalSymptomsOpen(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
     "tri_careplanjoin",
    // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
     "$select=new_GoalState," +
     "tri_GoalName," +
     "tri_CarePlanGoalID," +
     "tri_GoalSection," +
     "tri_LastGoalDate," +
     "tri_LastTargetValue," +
     "tri_measuredetails," +
     "tri_metric," +
     "tri_NextDueDate," +
     "tri_PlanName," +
     "tri_targetmetricoperator," +
    "tri_GoalSelected," +
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalSymptomsOpen = "(" + results.length + ")";
         $('.indicator-box-small_symptoms_orange').text(intTotalSymptomsOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             var merticOperator;
             //check between qualitative/quantitative vals
             if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                 strTargetVal = results[i].tri_metric;
                 merticOperator = results[i].tri_targetmetricoperator;
                 strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
             }

             else {
                 strTargetVal = results[i].tri_qualitativetarget;
             };

             //format dates to correct formats
             strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

             tagSymptomsOrange = tagSymptomsOrange + '<tr>' +
                                               '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                '<td class="target">' + strTargetVal + '</td>' +
                                               '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                               '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                               '<td class="duedate">' + strDueDate + '</td>' +
                                               '<td class="more" id="' + CPGoalId + '">...</td>' +
                                               '</tr>' +
                                               '<tr>' +
                                               '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                               '</tr>'

         }
         $('.maintable_symptoms_orange').append(tagSymptomsOrange);
         ChangeSectionTitleColor('table.maintable_symptoms_orange tr td:nth-child(2)', 'orangetxt');
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
     }
 );
}

function getCPGoalSymptomsOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalSymptomsOverDue = " (" + results.length + ")";
        //$('.indicator-box-small-grey_symptoms').text(intTotalSymptomsOverDue);
        $('.indicator-box-small_symptoms_grey').append(intTotalSymptomsOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;

            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagSymptomsGrey = tagSymptomsGrey + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>';
        }
        $('.maintable_symptoms_grey').append(tagSymptomsGrey);
        ChangeSectionTitleColor('table.maintable_symptoms_grey tr td:nth-child(2)', 'greytxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function errorHandler(error) {
    alert(error.message);
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

function ReviewAndUpdateGoal(currentId) {
    // alert('review & updated called');
    SDK.JQuery.retrieveMultipleRecords(
   "tri_cccareplangoal",
    "?$select=tri_actiontriggervalue,tri_activitydescription,tri_measuredetails,tri_LastTargetValue,tri_targetmetricoperator,tri_metricoperatortwo," +
    "tri_activitydescriptionabnormal,tri_CarePlanGoalState,tri_LastGoalDate,tri_LastResultDate,tri_name,tri_NextDueDate,tri_Metric,tri_targetvaluetwo,tri_activityassignmentrole," +
    "tri_patientfactor,tri_cccareplangoalId,tri_PatientModifierId,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_cccareplangoalId eq (guid'" + currentId + "')",
    function (results) {
        for (var i = 0; i < results.length; i++) {
            var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = $.datepicker.formatDate('mm/dd/yy', new Date(results[i].tri_NextDueDate));
            var tri_patientfactor = results[i].tri_patientfactor;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype;
            var tri_PatientModifierId = results[i].tri_PatientModifierId;
            var tri_CarePlanGoalID = results[i].tri_cccareplangoalId;
        }

        $('.monitor-wrapper').hide();
        $('#ddVitaltypesarea').hide();

        $('.sectiontitle_personalize').text(tri_name);
        $('.window-wrapper').show('slow')
        var myWindow = $(".window-wrapper");
        var temp = $("#PersonalizeCarePlanTemplate").html();
        var PersonalizeCarePlanTemplate = kendo.template(temp);
        var dataSource = new kendo.data.DataSource({
            data: results,
            change: function () { // subscribe to the CHANGE event of the data source
                $(".personalizeCarePlans").html(kendo.render(PersonalizeCarePlanTemplate, this.view()));
            }
        });
        dataSource.read();

        /// Drop down Selection
        $(".dropdown-menu li a").click(function () {
            $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
            $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        });

        // Patient Modifier Dropdown Values
       // CreatePatientModifierDropdown();

        myWindow.data("kendoWindow").center().open();
    }
    ,
  function (error) {
      alert(error.message);
  },
   function () {
       //On Complete - Do Something
   }
  );
}

function getCPGoaltestcareAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000000 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotaltestcare = "ALL (" + results.length + ")";
        $('.indicator-box-big_testcare_all').text(intTotaltestcare);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var targetClass = AppendtxtClassBasisGoalState(results[i].new_GoalState.Value, "target");
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagtestcareAll = tagtestcareAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="' + targetClass + '">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_testcare_all').append(tagtestcareAll);

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoaltestcareNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotaltestcareNotMet = "(" + results.length + ")";
        $('.indicator-box-small_testcare_red').text(intTotaltestcareNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagtestcareRed = tagtestcareRed + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_testcare_red').append(tagtestcareRed);
        ChangeSectionTitleColor('table.maintable_testcare_red tr td:nth-child(2)', 'redtxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoaltestcareOpen(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
     "tri_careplanjoin",
    // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
     "$select=new_GoalState," +
     "tri_GoalName," +
     "tri_CarePlanGoalID," +
     "tri_GoalSection," +
     "tri_LastGoalDate," +
     "tri_LastTargetValue," +
     "tri_measuredetails," +
     "tri_metric," +
     "tri_targetmetricoperator," +
    "tri_GoalSelected," +
     "tri_NextDueDate," +
     "tri_PlanName," +
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotaltestcareOpen = "(" + results.length + ")";
         $('.indicator-box-small_testcare_orange').text(intTotaltestcareOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             var merticOperator;
             //check between qualitative/quantitative vals
             if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                 strTargetVal = results[i].tri_metric;
                 merticOperator = results[i].tri_targetmetricoperator.Value;
                 strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
             }

             else {
                 strTargetVal = results[i].tri_qualitativetarget;
             };

             //format dates to correct formats
             strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

             tagtestcareOrange = tagtestcareOrange + '<tr>' +
                                               '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                '<td class="target">' + strTargetVal + '</td>' +
                                               '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                               '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                               '<td class="duedate">' + strDueDate + '</td>' +
                                               '<td class="more" id="' + CPGoalId + '">...</td>' +
                                               '</tr>' +
                                               '<tr>' +
                                               '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                               '</tr>'


         }
         $('.maintable_testcare_orange').append(tagtestcareOrange);
         ChangeSectionTitleColor('table.maintable_testcare_orange tr td:nth-child(2)', 'orangetxt');
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
     }
 );
}

function getCPGoaltestcareMet(PatientId) {
    SDK.JQuery.retrieveMultipleRecords(
      "tri_careplanjoin",
     // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
      "$select=new_GoalState," +
      "tri_GoalName," +
      "tri_CarePlanGoalID," +
      "tri_GoalSection," +
      "tri_LastGoalDate," +
      "tri_LastTargetValue," +
      "tri_measuredetails," +
      "tri_metric," +
      "tri_targetmetricoperator," +
    "tri_GoalSelected," +
      "tri_NextDueDate," +
      "tri_PlanName," +
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotaltestcareMet = "(" + results.length + ")";
          $('.indicator-box-small_testcare_green').text(intTotaltestcareMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              var merticOperator;
              //check between qualitative/quantitative vals
              if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                  strTargetVal = results[i].tri_metric;
                  merticOperator = results[i].tri_targetmetricoperator.Value;
                  strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
              }

              else {
                  strTargetVal = results[i].tri_qualitativetarget;
              };

              //format dates to correct formats
              strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

              tagtestcareGreen = tagtestcareGreen + '<tr>' +
                                                '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                 '<td class="target">' + strTargetVal + '</td>' +
                                                '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                                '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                                '<td class="duedate">' + strDueDate + '</td>' +
                                                '<td class="more" id="' + CPGoalId + '">...</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                                '</tr>'


          }
          $('.maintable_testcare_green').append(tagtestcareGreen);
          ChangeSectionTitleColor('table.maintable_testcare_green tr td:nth-child(2)', 'greentxt');

      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
      }
  );
}

function getCPGoaltestcareOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName
    //&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotaltestcareOverDue = " (" + results.length + ")";
        //$('.indicator-box-small-grey_testcare').text(intTotaltestcareOverDue);
        $('.indicator-box-small_testcare_grey').append(intTotaltestcareOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagtestcareGrey = tagtestcareGrey + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_testcare_grey').append(tagtestcareGrey);
        ChangeSectionTitleColor('table.maintable_testcare_grey tr td:nth-child(2)', 'greytxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalvitalsAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000007 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalvitals = "ALL (" + results.length + ")";
        $('.indicator-box-big_vitals_all').text(intTotalvitals);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var targetClass = AppendtxtClassBasisGoalState(results[i].new_GoalState.Value, "target");
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagvitalsAll = tagvitalsAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="' + targetClass + '">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_vitals_all').append(tagvitalsAll);

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalvitalsNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalvitalsNotMet = "(" + results.length + ")";
        $('.indicator-box-small_vitals_red').text(intTotalvitalsNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagvitalsRed = tagvitalsRed + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_vitals_red').append(tagvitalsRed);
        ChangeSectionTitleColor('table.maintable_vitals_red tr td:nth-child(2)', 'redtxt');

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalvitalsOpen(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
     "tri_careplanjoin",
    // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
     "$select=new_GoalState," +
     "tri_GoalName," +
     "tri_CarePlanGoalID," +
     "tri_GoalSection," +
     "tri_LastGoalDate," +
     "tri_LastTargetValue," +
     "tri_measuredetails," +
     "tri_metric," +
     "tri_targetmetricoperator," +
    "tri_GoalSelected," +
     "tri_NextDueDate," +
     "tri_PlanName," +
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalvitalsOpen = "(" + results.length + ")";
         $('.indicator-box-small_vitals_orange').text(intTotalvitalsOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             var merticOperator;
             //check between qualitative/quantitative vals
             if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                 strTargetVal = results[i].tri_metric;
                 merticOperator = results[i].tri_targetmetricoperator.Value;
                 strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
             }

             else {
                 strTargetVal = results[i].tri_qualitativetarget;
             };

             //format dates to correct formats
             strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

             tagvitalsOrange = tagvitalsOrange + '<tr>' +
                                               '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                '<td class="target">' + strTargetVal + '</td>' +
                                               '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                               '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                               '<td class="duedate">' + strDueDate + '</td>' +
                                               '<td class="more" id="' + CPGoalId + '">...</td>' +
                                               '</tr>' +
                                               '<tr>' +
                                               '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                               '</tr>'

         }
         $('.maintable_vitals_orange').append(tagvitalsOrange);
         ChangeSectionTitleColor('table.maintable_vitals_orange tr td:nth-child(2)', 'orangetxt');
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
     }
 );
}

function getCPGoalvitalsMet(PatientId) {
    SDK.JQuery.retrieveMultipleRecords(
      "tri_careplanjoin",
     // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
      "$select=new_GoalState," +
      "tri_GoalName," +
      "tri_CarePlanGoalID," +
      "tri_GoalSection," +
      "tri_LastGoalDate," +
      "tri_LastTargetValue," +
      "tri_measuredetails," +
      "tri_metric," +
      "tri_targetmetricoperator," +
    "tri_GoalSelected," +
      "tri_NextDueDate," +
      "tri_PlanName," +
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalvitalsMet = "(" + results.length + ")";
          $('.indicator-box-small_vitals_green').text(intTotalvitalsMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              var merticOperator;
              //check between qualitative/quantitative vals
              if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                  strTargetVal = results[i].tri_metric;
                  merticOperator = results[i].tri_targetmetricoperator.Value;
                  strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
              }

              else {
                  strTargetVal = results[i].tri_qualitativetarget;
              };

              //format dates to correct formats
              strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

              tagvitalsGreen = tagvitalsGreen + '<tr>' +
                                                '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                 '<td class="target">' + strTargetVal + '</td>' +
                                                '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                                '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                                '<td class="duedate">' + strDueDate + '</td>' +
                                                '<td class="more" id="' + CPGoalId + '">...</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                                '</tr>'

          }
          $('.maintable_vitals_green').append(tagvitalsGreen);
          ChangeSectionTitleColor('table.maintable_vitals_green tr td:nth-child(2)', 'greentxt');
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
      }
  );
}

function getCPGoalvitalsOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName
    //&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalvitalsOverDue = " (" + results.length + ")";
        //$('.indicator-box-small-grey_vitals').text(intTotalvitalsOverDue);
        $('.indicator-box-small_vitals_grey').append(intTotalvitalsOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagvitalsGrey = tagvitalsGrey + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_vitals_grey').append(tagvitalsGrey);
        ChangeSectionTitleColor('table.maintable_vitals_grey tr td:nth-child(2)', 'greytxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalmedicationsAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalmedications = "ALL (" + results.length + ")";
        $('.indicator-box-big_medications_all').text(intTotalmedications);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var targetClass = AppendtxtClassBasisGoalState(results[i].new_GoalState.Value, "target");
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagmedicationsAll = tagmedicationsAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="' + targetClass + '">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_medications_all').append(tagmedicationsAll);

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalmedicationsNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalmedicationsNotMet = "(" + results.length + ")";
        $('.indicator-box-small_medications_red').text(intTotalmedicationsNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagmedicationsRed = tagmedicationsRed + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_medications_red').append(tagmedicationsRed);
        ChangeSectionTitleColor('table.maintable_medications_red tr td:nth-child(2)', 'redtxt');

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalmedicationsOpen(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
     "tri_careplanjoin",
    // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
     "$select=new_GoalState," +
     "tri_GoalName," +
     "tri_CarePlanGoalID," +
     "tri_GoalSection," +
     "tri_LastGoalDate," +
     "tri_LastTargetValue," +
     "tri_measuredetails," +
     "tri_metric," +
     "tri_targetmetricoperator," +
    "tri_GoalSelected," +
     "tri_NextDueDate," +
     "tri_PlanName," +
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalmedicationsOpen = "(" + results.length + ")";
         $('.indicator-box-small_medications_orange').text(intTotalmedicationsOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             var merticOperator;
             //check between qualitative/quantitative vals
             if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                 strTargetVal = results[i].tri_metric;
                 merticOperator = results[i].tri_targetmetricoperator.Value;
                 strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
             }

             else {
                 strTargetVal = results[i].tri_qualitativetarget;
             };

             //format dates to correct formats
             strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

             tagmedicationsOrange = tagmedicationsOrange + '<tr>' +
                                               '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                '<td class="target">' + strTargetVal + '</td>' +
                                               '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                               '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                               '<td class="duedate">' + strDueDate + '</td>' +
                                               '<td class="more" id="' + CPGoalId + '">...</td>' +
                                               '</tr>' +
                                               '<tr>' +
                                               '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                               '</tr>'

         }
         $('.maintable_medications_orange').append(tagmedicationsOrange);
         ChangeSectionTitleColor('table.maintable_medications_orange tr td:nth-child(2)', 'orangetxt');

     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
     }
 );
}

function getCPGoalmedicationsMet(PatientId) {
    SDK.JQuery.retrieveMultipleRecords(
      "tri_careplanjoin",
     // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
      "$select=new_GoalState," +
      "tri_GoalName," +
      "tri_CarePlanGoalID," +
      "tri_GoalSection," +
      "tri_LastGoalDate," +
      "tri_LastTargetValue," +
      "tri_measuredetails," +
      "tri_metric," +
      "tri_targetmetricoperator," +
    "tri_GoalSelected," +
      "tri_NextDueDate," +
      "tri_PlanName," +
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalmedicationsMet = "(" + results.length + ")";
          $('.indicator-box-small_medications_green').text(intTotalmedicationsMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              var merticOperator;
              //check between qualitative/quantitative vals
              if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                  strTargetVal = results[i].tri_metric;
                  merticOperator = results[i].tri_targetmetricoperator.Value;
                  strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
              }

              else {
                  strTargetVal = results[i].tri_qualitativetarget;
              };

              //format dates to correct formats
              strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

              tagmedicationsGreen = tagmedicationsGreen + '<tr>' +
                                                '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                 '<td class="target">' + strTargetVal + '</td>' +
                                                '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                                '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                                '<td class="duedate">' + strDueDate + '</td>' +
                                                '<td class="more" id="' + CPGoalId + '">...</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                                '</tr>'

          }
          $('.maintable_medications_green').append(tagmedicationsGreen);
          ChangeSectionTitleColor('table.maintable_medications_green tr td:nth-child(2)', 'greentxt');

      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
      }
  );
}

function getCPGoalmedicationsOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName
    //&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalmedicationsOverDue = " (" + results.length + ")";
        //$('.indicator-box-small-grey_medications').text(intTotalmedicationsOverDue);
        $('.indicator-box-small_medications_grey').append(intTotalmedicationsOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagmedicationsGrey = tagmedicationsGrey + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_medications_grey').append(tagmedicationsGrey);
        ChangeSectionTitleColor('table.maintable_medications_grey tr td:nth-child(2)', 'greytxt');

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalactivityAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_typeofgoalcode," + //////
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalactivity = "ALL (" + results.length + ")";
        $('.indicator-box-big_activity_all').text(intTotalactivity);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var targetClass = AppendtxtClassBasisGoalState(results[i].new_GoalState.Value, "target");
            var merticOperator;
            // Check
            // alert(results[i].tri_typeofgoalcode.Value); // getting value
            // alert(results[i].tri_metric); // getting value

            // $('#temp').append(JSON.stringify(results[i]));
            //check between qualitative/quantitative vals
            //if (results[i].tri_qualitativetarget === "" || results[i].tri_qualitativetarget === null) {
            if (results[i].tri_typeofgoalcode.Value == 100000001 && results[i].tri_typeofgoalcode != null) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagactivityAll = tagactivityAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="' + targetClass + '">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_activity_all').append(tagactivityAll);

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalactivityNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalactivityNotMet = "(" + results.length + ")";
        $('.indicator-box-small_activity_red').text(intTotalactivityNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagactivityRed = tagactivityRed + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_activity_red').append(tagactivityRed);
        ChangeSectionTitleColor('table.maintable_activity_red tr td:nth-child(2)', 'redtxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalactivityOpen(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
     "tri_careplanjoin",
    // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
     "$select=new_GoalState," +
     "tri_GoalName," +
     "tri_CarePlanGoalID," +
     "tri_GoalSection," +
     "tri_LastGoalDate," +
     "tri_LastTargetValue," +
     "tri_measuredetails," +
     "tri_metric," +
     "tri_targetmetricoperator," +
    "tri_GoalSelected," +
     "tri_NextDueDate," +
     "tri_PlanName," +
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalactivityOpen = "(" + results.length + ")";
         $('.indicator-box-small_activity_orange').text(intTotalactivityOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             var merticOperator;
             //check between qualitative/quantitative vals
             if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                 strTargetVal = results[i].tri_metric;
                 merticOperator = results[i].tri_targetmetricoperator.Value;
                 strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
             }

             else {
                 strTargetVal = results[i].tri_qualitativetarget;
             };

             //format dates to correct formats
             strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

             tagactivityOrange = tagactivityOrange + '<tr>' +
                                               '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                '<td class="target">' + strTargetVal + '</td>' +
                                               '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                               '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                               '<td class="duedate">' + strDueDate + '</td>' +
                                               '<td class="more" id="' + CPGoalId + '">...</td>' +
                                               '</tr>' +
                                               '<tr>' +
                                               '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                               '</tr>'

         }
         $('.maintable_activity_orange').append(tagactivityOrange);
         ChangeSectionTitleColor('table.maintable_activity_orange tr td:nth-child(2)', 'orangetxt');
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
     }
 );
}

function getCPGoalactivityMet(PatientId) {
    SDK.JQuery.retrieveMultipleRecords(
      "tri_careplanjoin",
     // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
      "$select=new_GoalState," +
      "tri_GoalName," +
      "tri_CarePlanGoalID," +
      "tri_GoalSection," +
      "tri_LastGoalDate," +
      "tri_LastTargetValue," +
      "tri_measuredetails," +
      "tri_metric," +
      "tri_targetmetricoperator," +
    "tri_GoalSelected," +
      "tri_NextDueDate," +
      "tri_PlanName," +
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalactivityMet = "(" + results.length + ")";
          $('.indicator-box-small_activity_green').text(intTotalactivityMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              var merticOperator;
              //check between qualitative/quantitative vals
              if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                  strTargetVal = results[i].tri_metric;
                  merticOperator = results[i].tri_targetmetricoperator.Value;
                  strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
              }

              else {
                  strTargetVal = results[i].tri_qualitativetarget;
              };

              //format dates to correct formats
              strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

              tagactivityGreen = tagactivityGreen + '<tr>' +
                                                '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                 '<td class="target">' + strTargetVal + '</td>' +
                                                '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                                '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                                '<td class="duedate">' + strDueDate + '</td>' +
                                                '<td class="more" id="' + CPGoalId + '">...</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                                '</tr>'

          }
          $('.maintable_activity_green').append(tagactivityGreen);
          ChangeSectionTitleColor('table.maintable_activity_green tr td:nth-child(2)', 'greentxt');
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
      }
  );
}

function getCPGoalactivityOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName
    //&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalactivityOverDue = " (" + results.length + ")";
        //$('.indicator-box-small-grey_activity').text(intTotalactivityOverDue);
        $('.indicator-box-small_activity_grey').append(intTotalactivityOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagactivityGrey = tagactivityGrey + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_activity_grey').append(tagactivityGrey);
        ChangeSectionTitleColor('table.maintable_activity_grey tr td:nth-child(2)', 'greytxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalnutritionAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000004 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalnutrition = "ALL (" + results.length + ")";
        $('.indicator-box-big_nutrition_all').text(intTotalnutrition);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var targetClass = AppendtxtClassBasisGoalState(results[i].new_GoalState.Value, "target");
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagnutritionAll = tagnutritionAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="' + targetClass + '">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_nutrition_all').append(tagnutritionAll);

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalnutritionNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000004 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalnutritionNotMet = "(" + results.length + ")";
        $('.indicator-box-small_nutrition_red').text(intTotalnutritionNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagnutritionRed = tagnutritionRed + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_nutrition_red').append(tagnutritionRed);
        ChangeSectionTitleColor('table.maintable_nutrition_red tr td:nth-child(2)', 'redtxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalnutritionOpen(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
     "tri_careplanjoin",
    // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
     "$select=new_GoalState," +
     "tri_GoalName," +
     "tri_CarePlanGoalID," +
     "tri_GoalSection," +
     "tri_LastGoalDate," +
     "tri_LastTargetValue," +
     "tri_measuredetails," +
     "tri_metric," +
     "tri_targetmetricoperator," +
    "tri_GoalSelected," +
     "tri_NextDueDate," +
     "tri_PlanName," +
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000004 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalnutritionOpen = "(" + results.length + ")";
         $('.indicator-box-small_nutrition_orange').text(intTotalnutritionOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             var merticOperator;
             //check between qualitative/quantitative vals
             if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                 strTargetVal = results[i].tri_metric;
                 merticOperator = results[i].tri_targetmetricoperator.Value;
                 strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
             }

             else {
                 strTargetVal = results[i].tri_qualitativetarget;
             };

             //format dates to correct formats
             strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

             tagnutritionOrange = tagnutritionOrange + '<tr>' +
                                               '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                '<td class="target">' + strTargetVal + '</td>' +
                                               '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                               '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                               '<td class="duedate">' + strDueDate + '</td>' +
                                               '<td class="more" id="' + CPGoalId + '">...</td>' +
                                               '</tr>' +
                                               '<tr>' +
                                               '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                               '</tr>'

         }
         $('.maintable_nutrition_orange').append(tagnutritionOrange);
         ChangeSectionTitleColor('table.maintable_nutrition_orange tr td:nth-child(2)', 'orangetxt');
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
     }
 );
}

function getCPGoalnutritionMet(PatientId) {
    SDK.JQuery.retrieveMultipleRecords(
      "tri_careplanjoin",
     // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
      "$select=new_GoalState," +
      "tri_GoalName," +
      "tri_CarePlanGoalID," +
      "tri_GoalSection," +
      "tri_LastGoalDate," +
      "tri_LastTargetValue," +
      "tri_measuredetails," +
      "tri_metric," +
      "tri_targetmetricoperator," +
    "tri_GoalSelected," +
      "tri_NextDueDate," +
      "tri_PlanName," +
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000004 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalnutritionMet = "(" + results.length + ")";
          $('.indicator-box-small_nutrition_green').text(intTotalnutritionMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              var merticOperator;
              //check between qualitative/quantitative vals
              if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                  strTargetVal = results[i].tri_metric;
                  merticOperator = results[i].tri_targetmetricoperator.Value;
                  strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
              }

              else {
                  strTargetVal = results[i].tri_qualitativetarget;
              };

              //format dates to correct formats
              strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

              tagnutritionGreen = tagnutritionGreen + '<tr>' +
                                                '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                 '<td class="target">' + strTargetVal + '</td>' +
                                                '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                                '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                                '<td class="duedate">' + strDueDate + '</td>' +
                                                '<td class="more" id="' + CPGoalId + '">...</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                                '</tr>'

          }
          $('.maintable_nutrition_green').append(tagnutritionGreen);
          ChangeSectionTitleColor('table.maintable_nutrition_green tr td:nth-child(2)', 'greentxt');
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
      }
  );
}

function getCPGoalnutritionOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName
    //&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000004 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalnutritionOverDue = " (" + results.length + ")";
        //$('.indicator-box-small-grey_nutrition').text(intTotalnutritionOverDue);
        $('.indicator-box-small_nutrition_grey').append(intTotalnutritionOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagnutritionGrey = tagnutritionGrey + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_nutrition_grey').append(tagnutritionGrey);
        ChangeSectionTitleColor('table.maintable_nutrition_grey tr td:nth-child(2)', 'greytxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalpsychosocialAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000005 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalpsychosocial = "ALL (" + results.length + ")";
        $('.indicator-box-big_psychosocial_all').text(intTotalpsychosocial);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var targetClass = AppendtxtClassBasisGoalState(results[i].new_GoalState.Value, "target");
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagpsychosocialAll = tagpsychosocialAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="' + targetClass + '">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_psychosocial_all').append(tagpsychosocialAll);

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalpsychosocialNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000005 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalpsychosocialNotMet = "(" + results.length + ")";
        $('.indicator-box-small_psychosocial_red').text(intTotalpsychosocialNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagpsychosocialRed = tagpsychosocialRed + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_psychosocial_red').append(tagpsychosocialRed);
        ChangeSectionTitleColor('table.maintable_psychosocial_red tr td:nth-child(2)', 'redtxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalpsychosocialOpen(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
     "tri_careplanjoin",
    // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
     "$select=new_GoalState," +
     "tri_GoalName," +
     "tri_CarePlanGoalID," +
     "tri_GoalSection," +
     "tri_LastGoalDate," +
     "tri_LastTargetValue," +
     "tri_measuredetails," +
     "tri_metric," +
     "tri_targetmetricoperator," +
    "tri_GoalSelected," +
     "tri_NextDueDate," +
     "tri_PlanName," +
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000005 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalpsychosocialOpen = "(" + results.length + ")";
         $('.indicator-box-small_psychosocial_orange').text(intTotalpsychosocialOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             var merticOperator;
             //check between qualitative/quantitative vals
             if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                 strTargetVal = results[i].tri_metric;
                 merticOperator = results[i].tri_targetmetricoperator.Value;
                 strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
             }

             else {
                 strTargetVal = results[i].tri_qualitativetarget;
             };

             //format dates to correct formats
             strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

             tagpsychosocialOrange = tagpsychosocialOrange + '<tr>' +
                                               '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                '<td class="target">' + strTargetVal + '</td>' +
                                               '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                               '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                               '<td class="duedate">' + strDueDate + '</td>' +
                                               '<td class="more" id="' + CPGoalId + '">...</td>' +
                                               '</tr>' +
                                               '<tr>' +
                                               '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                               '</tr>'

         }
         $('.maintable_psychosocial_orange').append(tagpsychosocialOrange);
         ChangeSectionTitleColor('table.maintable_psychosocial_orange tr td:nth-child(2)', 'orangetxt');
     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
     }
 );
}

function getCPGoalpsychosocialMet(PatientId) {
    SDK.JQuery.retrieveMultipleRecords(
      "tri_careplanjoin",
     // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
      "$select=new_GoalState," +
      "tri_GoalName," +
      "tri_CarePlanGoalID," +
      "tri_GoalSection," +
      "tri_LastGoalDate," +
      "tri_LastTargetValue," +
      "tri_measuredetails," +
      "tri_metric," +
      "tri_targetmetricoperator," +
    "tri_GoalSelected," +
      "tri_NextDueDate," +
      "tri_PlanName," +
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000005 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalpsychosocialMet = "(" + results.length + ")";
          $('.indicator-box-small_psychosocial_green').text(intTotalpsychosocialMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              var merticOperator;
              //check between qualitative/quantitative vals
              if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                  strTargetVal = results[i].tri_metric;
                  merticOperator = results[i].tri_targetmetricoperator.Value;
                  strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
              }

              else {
                  strTargetVal = results[i].tri_qualitativetarget;
              };

              //format dates to correct formats
              strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

              tagpsychosocialGreen = tagpsychosocialGreen + '<tr>' +
                                                '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                 '<td class="target">' + strTargetVal + '</td>' +
                                                '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                                '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                                '<td class="duedate">' + strDueDate + '</td>' +
                                                '<td class="more" id="' + CPGoalId + '">...</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                                '</tr>'

          }
          $('.maintable_psychosocial_green').append(tagpsychosocialGreen);
          ChangeSectionTitleColor('table.maintable_psychosocial_green tr td:nth-child(2)', 'greentxt');
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
      }
  );
}

function getCPGoalpsychosocialOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName
    //&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000005 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalpsychosocialOverDue = " (" + results.length + ")";
        //$('.indicator-box-small-grey_psychosocial').text(intTotalpsychosocialOverDue);
        $('.indicator-box-small_psychosocial_grey').append(intTotalpsychosocialOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagpsychosocialGrey = tagpsychosocialGrey + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_psychosocial_grey').append(tagpsychosocialGrey);
        ChangeSectionTitleColor('table.maintable_psychosocial_grey tr td:nth-child(2)', 'greytxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalwrapupAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000006 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalwrapup = "ALL (" + results.length + ")";
        $('.indicator-box-big_wrapup_all').text(intTotalwrapup);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var targetClass = AppendtxtClassBasisGoalState(results[i].new_GoalState.Value, "target");
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagwrapupAll = tagwrapupAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="' + targetClass + '">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'


        }
        $('.maintable_wrapup_all').append(tagwrapupAll);

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalwrapupNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000006 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalwrapupNotMet = "(" + results.length + ")";
        $('.indicator-box-small_wrapup_red').text(intTotalwrapupNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagwrapupRed = tagwrapupRed + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_wrapup_red').append(tagwrapupRed);
        ChangeSectionTitleColor('table.maintable_wrapup_red tr td:nth-child(2)', 'redtxt');

    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalwrapupOpen(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
     "tri_careplanjoin",
    // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
     "$select=new_GoalState," +
     "tri_GoalName," +
     "tri_CarePlanGoalID," +
     "tri_GoalSection," +
     "tri_LastGoalDate," +
     "tri_LastTargetValue," +
     "tri_measuredetails," +
     "tri_metric," +
     "tri_targetmetricoperator," +
    "tri_GoalSelected," +
     "tri_NextDueDate," +
     "tri_PlanName," +
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000006 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalwrapupOpen = "(" + results.length + ")";
         $('.indicator-box-small_wrapup_orange').text(intTotalwrapupOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             var merticOperator;
             //check between qualitative/quantitative vals
             if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                 strTargetVal = results[i].tri_metric;
                 merticOperator = results[i].tri_targetmetricoperator.Value;
                 strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
             }

             else {
                 strTargetVal = results[i].tri_qualitativetarget;
             };

             //format dates to correct formats
             strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

             tagwrapupOrange = tagwrapupOrange + '<tr>' +
                                               '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                '<td class="target">' + strTargetVal + '</td>' +
                                               '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                               '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                               '<td class="duedate">' + strDueDate + '</td>' +
                                               '<td class="more" id="' + CPGoalId + '">...</td>' +
                                               '</tr>' +
                                               '<tr>' +
                                               '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                               '</tr>'

         }
         $('.maintable_wrapup_orange').append(tagwrapupOrange);
         ChangeSectionTitleColor('table.maintable_wrapup_orange tr td:nth-child(2)', 'orangetxt');

     },
     function (error) {
         alert(error.message);
     },
     function () {
         //On Complete - Do Something
     }
 );
}

function getCPGoalwrapupMet(PatientId) {
    SDK.JQuery.retrieveMultipleRecords(
      "tri_careplanjoin",
     // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')",
      "$select=new_GoalState," +
      "tri_GoalName," +
      "tri_CarePlanGoalID," +
      "tri_GoalSection," +
      "tri_LastGoalDate," +
      "tri_LastTargetValue," +
      "tri_measuredetails," +
      "tri_metric," +
      "tri_targetmetricoperator," +
    "tri_GoalSelected," +
      "tri_NextDueDate," +
      "tri_PlanName," +
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000006 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalwrapupMet = "(" + results.length + ")";
          $('.indicator-box-small_wrapup_green').text(intTotalwrapupMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              var merticOperator;
              //check between qualitative/quantitative vals
              if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                  strTargetVal = results[i].tri_metric;
                  merticOperator = results[i].tri_targetmetricoperator.Value;
                  strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
              }

              else {
                  strTargetVal = results[i].tri_qualitativetarget;
              };

              //format dates to correct formats
              strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

              tagwrapupGreen = tagwrapupGreen + '<tr>' +
                                                '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                                 '<td class="target">' + strTargetVal + '</td>' +
                                                '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                                '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                                '<td class="duedate">' + strDueDate + '</td>' +
                                                '<td class="more" id="' + CPGoalId + '">...</td>' +
                                                '</tr>' +
                                                '<tr>' +
                                                '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                                '</tr>'

          }
          $('.maintable_wrapup_green').append(tagwrapupGreen);
          ChangeSectionTitleColor('table.maintable_wrapup_green tr td:nth-child(2)', 'geentxt');
      },
      function (error) {
          alert(error.message);
      },
      function () {
          //On Complete - Do Something
      }
  );
}

function getCPGoalwrapupOverDue(PatientId) {

    var dateNowPlus7 = new Date();
    //var date2 = new Date().toISOString().substr(0, 19);
    dateNowPlus7.setDate(dateNowPlus7.getDate() + 7);

    var dateMsg = dateNowPlus7.getFullYear() + '-' + ("0" + (dateNowPlus7.getMonth() + 1)).slice(-2) + '-' + ("0" + dateNowPlus7.getDate()).slice(-2) + "T05:00:00.000Z";
    //alert(dateMsg);
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName
    //&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')",
    "$select=new_GoalState," +
    "tri_GoalName," +
    "tri_CarePlanGoalID," +
    "tri_GoalSection," +
    "tri_LastGoalDate," +
    "tri_LastTargetValue," +
    "tri_measuredetails," +
    "tri_metric," +
    "tri_targetmetricoperator," +
    "tri_GoalSelected," +
    "tri_NextDueDate," +
    "tri_PlanName," +
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000006 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalwrapupOverDue = " (" + results.length + ")";
        //$('.indicator-box-small-grey_wrapup').text(intTotalwrapupOverDue);
        $('.indicator-box-small_wrapup_grey').append(intTotalwrapupOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            var merticOperator;
            //check between qualitative/quantitative vals
            if (results[i].tri_typeofgoalcode != null && results[i].tri_typeofgoalcode.Value == 100000001) {
                strTargetVal = results[i].tri_metric;
                merticOperator = results[i].tri_targetmetricoperator.Value;
                strTargetVal = '<span>' + GetTargetMetricOperator(merticOperator) + '</span>' + " " + strTargetVal;
            }

            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };

            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagwrapupGrey = tagwrapupGrey + '<tr>' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                               '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">' + results[i].tri_LastTargetValue + '</td>' +
                                              '<td class="lastresultdate">' + results[i].tri_LastGoalDate + '</td>' +
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>' +
                                              '<tr>' +
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>' +
                                              '</tr>'

        }
        $('.maintable_wrapup_grey').append(tagwrapupGrey);
        ChangeSectionTitleColor('table.maintable_wrapup_grey tr td:nth-child(2)', 'greytxt');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}
function gotoAddCarePlan() {
    $('.monitor-wrapper').hide('slow');
    $('#ddVitaltypesarea').show('slow');
    $('.window-wrapper').show('slow');

    var selectedCarePath;
    var selectedCarePathId;

    // Select the dropdown
    if (parent.Xrm !== undefined) {
       
        var allPlans = GetCarePlanfromPatitentId(contactId);
        var allPaths = GetAllCarePath();

        // Get All CarePaths for DropDown
        var ddCarePath = Enumerable.From(allPaths)
        .Select(function (x) { return { 'text': x.attributes.tri_name.value, 'value': x.attributes.tri_cccarepathid.value }; })
        .ToArray();

        // Get All CarePlan to display on Page
        var ddCarePlans = Enumerable.From(allPlans)
        .Select(function (x) { return { 'text': x.attributes.tri_planname.value, 'value': x.attributes.tri_careplanid.id }; })
        .ToArray();

        // Get Distinct CarePlans
        var distinctCarePlansTextArray = Enumerable.From(ddCarePlans)
                                          .Select(function (x) { return x.text; })
                                          .Distinct(function (y) { return y; })
                                          .ToArray();

        // Get data to display on dropdown
        // AllCarePath - distinctCarePlans
        var carePathDropdownArray = ddCarePath.filter(function (x) { return !Enumerable.From(distinctCarePlansTextArray).Contains(x.text); });

        // create DropDownList from input HTML element
        var kendoAutoCompleteWC = $("#carePaths").kendoAutoComplete({
            dataTextField: "text",
            dataValueField: "value",
            filter: "startswith",
            placeholder: "Viewing All (Select Category)",
            dataSource: carePathDropdownArray,
            index: 0,
            change: onCarePlanChange
        }).data("kendoAutoComplete");

        function onCarePlanChange() {
            // Get the selected carepath from dropdown
            var selectedCarePath = $('#carePaths').val();
            var listCarePath = Enumerable.From(carePathDropdownArray);
            // Get the selected CarePathId
            var selectedCarePathId = listCarePath
                                     .Where(function (x) { return x.text === selectedCarePath })
                                     .Select(function (x) { return x.value; })
                                     .FirstOrDefault();
            // Check if the data selcted from datasource <> ''
            var IsSelectedCarePathfromDataSource = listCarePath
                                                   .Select(function (x) { return x.text; })
                                                   .Contains(selectedCarePath);

            if (selectedCarePath !== '' && IsSelectedCarePathfromDataSource) {

                var carePathdataToUpdate = {
                    tri_cccarepathid: { 'value': selectedCarePathId },
                    tri_name: { "value": selectedCarePath }
                };

                var contact = {};
                contact.tri_CarePlantoAddID = { Id: selectedCarePathId, LogicalName: "tri_cccarepath", Name: selectedCarePath };
                SDK.REST.updateRecord(
                    contactId, // Pass Contact ID
                    contact,
                    "Contact",
                   // updateSuccessCallback(selectedCarePath, selectedCarePathId, data, kendoAutoCompleteWC),
                    updateSuccessCallback,
                    errorHandler); //
            }

            // Function to execute after CarePlanToAdd is updated
            function updateSuccessCallback() {
                alert("The Patient record changes were saved");

                ///// Do we also need to update the GoalSelected as true for each added care plan or will there be any condition when it becomes true ??

                // get the newly added CarePlan Data
                // Recheck this logic
                var carePlanJoinData = GetCarePlanfromPatitentId(contactId)
                // Enumerable.From(GetCarePlanfromPatitentIdandCarePlanName(contactId, carePlan))
                var addedCarePlan = Enumerable.From(carePlanJoinData)
                    .Where(function (x) { return x.attributes.tri_planname.value === selectedCarePath })
                    .Select(function (x) { return { 'text': x.attributes.tri_planname.value, 'value': x.attributes.tri_careplanid.id }; })
                    .ToArray();

                // Check if added careplanjoin records were created, then update the UI & dropdown 
                if (addedCarePlan !== undefined && addedCarePlan !== null && addedCarePlan.length > 0) {
                    // Get Distinct CarePlans
                    var distinctAddedCarePlans = Enumerable.From(addedCarePlan)
                                                 .Select(function (x) { return { 'text': x.text, 'value': x.value }; })
                                                 .Distinct(function (y) { return y.text; })
                                                 .ToArray();

                    // Get data and show 
                    updateVitalTypeRecords(contactId);

                    carePathDropdownArray = Enumerable.From(carePathDropdownArray)
                                            .Where(function (x) { return x.text !== selectedCarePath; })
                                            .ToArray();
                    // Bind new data to KendAutocomplete
                    kendoAutoCompleteWC.setDataSource(carePathDropdownArray);
                    $('#carePaths').val('');
                }
            }

            // function to display Error Message
            function errorHandler(error) {
                alert(error.message);
            }
        };

        // Get data and show 
        updateVitalTypeRecords(contactId);
    }
}

function updateDropDownSelection() {
    $(".dropdown-menu li a").click(function () {
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });
}

function updateVitalTypeRecords(contactId) {
    var carePlansJoin = [];
    SDK.JQuery.retrieveMultipleRecords(
          "tri_careplanjoin",
          "?$select=new_GoalState,tri_activityassignmentrole,tri_CarePlanGoalID,tri_CarePlanID,tri_careplanjoinId,tri_GoalName,tri_GoalSection," +
          "tri_GoalSelected,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_metricoperatortwo,tri_name,tri_NextDueDate," +
          "tri_patientfactor,tri_PatientModifierId,tri_qualitativetarget,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_VitalValueTypeName,tri_vitalsvaluetypeid" +
          "&$filter=tri_PatientID/Id eq (guid'" + contactId + "') and tri_VitalValueTypeName ne '' and tri_VitalValueTypeName ne null", //  and tri_GoalSelected eq true
         function (results) {
             for (var i = 0; i < results.length; i++) {
                 var new_GoalState = results[i].new_GoalState;
                 var tri_activityassignmentrole = results[i].tri_activityassignmentrole;
                 var tri_CarePlanGoalID = results[i].tri_CarePlanGoalID;
                 var tri_CarePlanID = results[i].tri_CarePlanID;
                 var tri_careplanjoinId = results[i].tri_careplanjoinId;
                 var tri_GoalName = results[i].tri_GoalName;
                 var tri_GoalSection = results[i].tri_GoalSection;
                 var tri_GoalSelected = results[i].tri_GoalSelected;
                 var tri_LastGoalDate = results[i].tri_LastGoalDate;
                 var tri_LastTargetValue = results[i].tri_LastTargetValue;
                 var tri_measuredetails = results[i].tri_measuredetails;
                 var tri_metric = results[i].tri_metric;
                 var tri_metricoperatortwo = results[i].tri_metricoperatortwo;
                 var tri_name = results[i].tri_name;
                 //format dates to correct formats
                 //var tri_NextDueDate = $.datepicker.formatDate('mm/dd/yy', results[i].tri_NextDueDate);
                 var tri_NextDueDate = $.datepicker.formatDate('mm/dd/yy', new Date(results[i].tri_NextDueDate));
                 var tri_patientfactor = results[i].tri_patientfactor;
                 var tri_qualitativetarget = results[i].tri_qualitativetarget;
                 var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                 var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                 var tri_typeofgoalcode = results[i].tri_typeofgoalcode;
                 var tri_VitalValueTypeName = results[i].tri_VitalValueTypeName;
                 var tri_PatientModifierId = results[i].tri_PatientModifierId;
                 var tri_vitalsvaluetypeid = results[i].tri_vitalsvaluetypeid;
             }
             carePlansJoin = carePlansJoin.concat(results);
         },
         function (error) {
             alert(error.message);
         },
         function () {
             //On Complete - Do Something
             var distinctVitalTypeData = Enumerable.From(carePlansJoin)
                                         .Distinct(function (y) { return y.tri_VitalValueTypeName; })
                                         .ToArray();

             //carePlans = Enumerable.From(carePlans)
             //                      .Take(10)
             //                      .ToArray();

             var myWindow = $(".window-wrapper");
             var temp = $("#PersonalizeCarePlanTemplate").html();
             var PersonalizeCarePlanTemplate = kendo.template(temp);
             var dataSource = new kendo.data.DataSource({
                 data: distinctVitalTypeData,
                 change: function () { // subscribe to the CHANGE event of the data source
                     $(".personalizeCarePlans").html(kendo.render(PersonalizeCarePlanTemplate, this.view()));
                 }
             });
             dataSource.read();
             /// Drop down Selection
             updateDropDownSelection();
             // CreatePatientModifierDropdown();
             myWindow.data("kendoWindow").center().open();
         });
}

//function CreatePatientModifierDropdown() {
//    // create dropdown list for Patient Modifier
//    debugger;
//    //On Complete - Do Something
//    var kendoAutoCompleteWC = $("'" + patientModifierData + "'").kendoAutoComplete({
//        dataTextField: "Name",
//        dataValueField: "Id",
//        filter: "startswith",
//        //placeholder: "Viewing All (Select Category)",
//        dataSource: patientModifierData,
//        index: 0,
//        //change: onPatitentModifierChange
//    }).data("kendoAutoComplete");
//}


function UpdateGoaldata(PatientModifierId, VitalValueTypeId, CurrentGoalId, carePlanJoinId) {
    // alert('review & updated called');
    var GoalData;
    SDK.JQuery.retrieveMultipleRecords(
   "tri_cccareplangoal",
    "?$select=tri_actiontriggervalue,tri_activitydescription,tri_measuredetails,tri_LastTargetValue,tri_targetmetricoperator,tri_metricoperatortwo," +
    "tri_activitydescriptionabnormal,tri_CarePlanGoalState,tri_LastGoalDate,tri_LastResultDate,tri_name,tri_NextDueDate,tri_Metric,tri_targetvaluetwo,tri_activityassignmentrole," +
    "tri_patientfactor,tri_cccareplangoalId,tri_PatientModifierId,tri_typeofgoalcode,tri_vitalsvaluetype"+
    "&$filter=tri_PatientModifierId/Id eq (guid'"+PatientModifierId+"') and tri_vitalsvaluetype/Id eq (guid'"+VitalValueTypeId+"')",
    function (results) {
        for (var i = 0; i < results.length; i++) {
            var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_name = results[i].tri_name;
            var tri_NextDueDate = $.datepicker.formatDate('mm/dd/yy', new Date(results[i].tri_NextDueDate));
            var tri_patientfactor = results[i].tri_patientfactor;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype;
            var tri_PatientModifierId = results[i].tri_PatientModifierId;
            var tri_CarePlanGoalID = results[i].tri_cccareplangoalId;
        }

        GoalData = results;
        /// Drop down Selection
        $(".dropdown-menu li a").click(function () {
            $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
            $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        });

    }
    ,
  function (error) {
      alert(error.message);
  },
   function () {
       //On Complete - Do Something

       var carePlanGoal = {};
       var carePlanJoin = {};
       var metricoperatortwo = -1;
       var metricoperator = -1;
       var goalcode = -1;
       var activityassignmentrole = -1;

       if (GoalData.tri_metricoperatortwo !== undefined && GoalData.tri_metricoperatortwo !== null)
           metricoperatortwo = GoalData.tri_metricoperatortwo.Value;

       if (GoalData.tri_targetmetricoperator !== undefined && GoalData.tri_targetmetricoperator !== null)
           metricoperator = GoalData.tri_targetmetricoperator.Value;

       if (GoalData.tri_typeofgoalcode !== undefined && GoalData.tri_typeofgoalcode !== null)
           goalcode = GoalData.tri_typeofgoalcoder.Value;

       if (GoalData.tri_activityassignmentrole !== undefined && GoalData.tri_activityassignmentrole !== null)
           activityassignmentrole = GoalData.tri_activityassignmentrole.Value;

       // Update CarePlan Goal Entity
       carePlanGoal = {
           tri_cccareplangoalId: {
                Id: CurrentGoalId, //Needs to be retrived from current careplan join entity
            },
            tri_metricoperatortwo: {
                Value: metricoperatortwo
            },
            tri_LastGoalDate: GoalData.tri_LastGoalDate,
            tri_LastTargetValue: GoalData.tri_LastTargetValue,
            tri_Metric: GoalData.tri_Metric,
            tri_LastResultDate: GoalData.tri_LastResultDate,
            tri_activitydescription: GoalData.tri_activitydescription,
            tri_GoalSelected: true,
            tri_targetvaluetwo: GoalData.tri_targetvaluetwo,
            tri_targetmetricoperator: {
                Value: metricoperator
            },
            tri_typeofgoalcode: {
                Value: goalcode
            },
            tri_NextDueDate: GoalData.tri_NextDueDate,
            tri_activityassignmentrole: {
                Value: activityassignmentrole
            },
            tri_PatientModifierId: {
                Id: PatientModifierId,
            },
            tri_measuredetails: GoalData.tri_measuredetails
        }
        SDK.REST.updateRecord(
            CurrentGoalId,
            carePlanGoal,
            "tri_cccareplangoal",
            function () {
                //On Complete
                alert('The Patient Goal data records are updated successfully.');
            },
            function (error) {
                alert(error.message);
            });

       // Update Care Plan Join Entity
        carePlanJoin = {
            tri_CarePlanGoalID: {
                Id: CurrentGoalId, //Needs to be retrived from current careplan join entity
            },
            tri_metricoperatortwo: {
                Value: metricoperatortwo
            },
            tri_LastGoalDate: GoalData.tri_LastGoalDate,
            tri_LastTargetValue: GoalData.tri_LastTargetValue,
            tri_metric: GoalData.tri_Metric,
            //tri_LastResultDate: GoalData.tri_LastResultDate,
            tri_activitydescription: GoalData.tri_activitydescription,
            tri_GoalSelected: true,
            tri_targetvaluetwo: GoalData.tri_targetvaluetwo,
            tri_targetmetricoperator: {
                Value: metricoperator
            },
            tri_typeofgoalcode: {
                Value: goalcode
            },
            tri_NextDueDate: GoalData.tri_NextDueDate,
            tri_activityassignmentrole: {
                Value: activityassignmentrole
            },
            tri_PatientModifierId: {
                Id: PatientModifierId,
            },
            tri_measuredetails: GoalData.tri_measuredetails
        }

        SDK.REST.updateRecord(
            carePlanJoinId,
            carePlanJoin,
            "tri_cccareplangoal",
            function () {
                //On Complete
                alert('The Patient Goal data records are updated successfully.');
            },
            function (error) {
                alert(error.message);
            });

        alert('Updating CarePlan join Entity');


       debugger;
       var table = $("#" + VitalValueTypeId).next().next()[0].children;

       // Set Last Result
       var lastResultSec = table[0];
       var lastResult;
       if (GoalData.tri_measuredetails !== undefined && GoalData.tri_measuredetails !== null) {
           lastResult = GoalData.tri_measuredetails;
       }
       $(lastResultSec.children).find('td:last').html(lastResult);

       // Set Result Score
       var resultScoreSec = table[1];
       var resultScore;
       if (GoalData.tri_LastTargetValue !== undefined && GoalData.tri_LastTargetValue !== null) {
           resultScore = GoalData.tri_LastTargetValue;
       }

       $(resultScoreSec.children).find('td:last').html(resultScore);

       // Set Dates
       var datesSec = table[2];
       var lastResultDate;
       var nextDueDate;

       if (GoalData.tri_LastResultDate !== undefined && GoalData.tri_LastResultDate !== null) {
           lastResultDate = $.datepicker.formatDate('mm/dd/yy', GoalData.tri_LastResultDate);
       }

       if (GoalData.tri_NextDueDate !== undefined && GoalData.tri_NextDueDate !== null) {
           nextDueDate = $.datepicker.formatDate('mm/dd/yy', GoalData.tri_NextDueDate);;
       }

       $(datesSec.children).find('td:nth-child(2)').html(lastResultDate);
       $(datesSec.children).find('td:last').html(nextDueDate);

       // Set Factor Modifier
       var factorModifierSec = table[6];

       var modifierOperator;
       if (GoalData.tri_targetmetricoperator !== undefined && GoalData.tri_targetmetricoperator !== null && GoalData.tri_targetmetricoperator.Value !== null) {
           modifierOperator = GetTargetMetricOperator(GoalData.tri_targetmetricoperator.Value);
       }
       else if (GoalData.tri_metricoperatortwo !== undefined && GoalData.tri_metricoperatortwo !== null && GoalData.tri_metricoperatortwo.Value !== null) {
           modifierOperator = GetTargetMetricOperator(GoalData.tri_metricoperatortwo.Value);
       }

       $(factorModifierSec.children).find('tbody tr td:nth-child(1) div button').text(modifierOperator);

       var modifierValue;
       if (GoalData.tri_metric !== undefined && GoalData.tri_metric !== null) {
           modifierValue = GoalData.tri_metric;
       }
       else if (GoalData.tri_targetvaluetwo !== undefined && GoalData.tri_targetvaluetwo !== null) {
           modifierValue = GoalData.tri_targetvaluetwo;
       }
       
       $(factorModifierSec.children).find('tbody tr td:nth-child(2) input').val(modifierValue);


       // Set Description 
       var descriptionSec = table[9];
       var descText;
       if (GoalData.tri_activitydescription !== undefined && GoalData.tri_activitydescription !== null) {
           descText = GoalData.tri_activitydescription;
       }
       
       $(descriptionSec.children).find('tr td:first-child input').val(descText);

       var assignmentRole;
       if (GoalData.tri_activityassignmentrole !== undefined && GoalData.tri_activityassignmentrole !== null) {
           assignmentRole = GetActivityAssignmentRole(GoalData.tri_activityassignmentrole.Value);
       }
      
       $(descriptionSec.children).find('tr td:last-child div button').text(assignmentRole);
       alert('Updated UI Attributes');
   }
  );
}
