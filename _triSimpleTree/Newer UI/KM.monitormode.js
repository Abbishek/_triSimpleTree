var joinEntityCollection = null;
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
var tri_PatientModifierName_join;

var isCarePlanUpdated = true;


$(document).ready(function () {
var PatientId1 = parent.Xrm.Page.data.entity.getId();
var PatientId2 = PatientId1.replace("{", "");
var PatientId = PatientId2.replace("}", "");
var joinEntityCollection = null;
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

$('.indicator-box-big_symptoms_all').click(function () {
    $('.tablecontent_symptoms_red,.tablecontent_symptoms_orange,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
    $('.tablecontent_symptoms_all').toggle('slow');
    $('.indicator-line_symptoms').removeClass("red orange green grey");
    $('.indicator-line_symptoms').addClass("blue");
});
$('.indicator-box-small_symptoms_red').click(function () {
    $('.tablecontent_symptoms_all,.tablecontent_symptoms_orange,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
    $('.tablecontent_symptoms_red').toggle('slow');
    $('.indicator-line_symptoms').removeClass("blue orange green grey");
    $('.indicator-line_symptoms').addClass("red");
});
$('.indicator-box-small_symptoms_orange').click(function () {
    $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_green,.tablecontent_symptoms_grey').hide();
    $('.tablecontent_symptoms_orange').toggle('slow');
    $('.indicator-line_symptoms').removeClass("red blue green grey");
    $('.indicator-line_symptoms').addClass("orange");
});
$('.indicator-box-small_symptoms_green').click(function () {
    $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_orange,.tablecontent_symptoms_grey').hide();
    $('.tablecontent_symptoms_green').toggle('slow');
    $('.indicator-line_symptoms').removeClass("red orange blue grey");
    $('.indicator-line_symptoms').addClass("green");
});
$('.indicator-box-small_symptoms_grey').click(function () {
    $('.tablecontent_symptoms_all,.tablecontent_symptoms_red,.tablecontent_symptoms_green,.tablecontent_symptoms_orange').hide();
    $('.tablecontent_symptoms_grey').toggle('slow');
    $('.indicator-line_symptoms').removeClass("red orange green blue");
    $('.indicator-line_symptoms').addClass("grey");
});
    //----testcare
$('.indicator-box-big_testcare_all').click(function () {
    $('.tablecontent_testcare_red,.tablecontent_testcare_orange,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
    $('.tablecontent_testcare_all').toggle('slow');
    $('.indicator-line_testcare').removeClass("red orange green grey");
    $('.indicator-line_testcare').addClass("blue");
});
$('.indicator-box-small_testcare_red').click(function () {
    $('.tablecontent_testcare_all,.tablecontent_testcare_orange,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
    $('.tablecontent_testcare_red').toggle('slow');
    $('.indicator-line_testcare').removeClass("blue orange green grey");
    $('.indicator-line_testcare').addClass("red");
});
$('.indicator-box-small_testcare_orange').click(function () {
    $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_green,.tablecontent_testcare_grey').hide();
    $('.tablecontent_testcare_orange').toggle('slow');
    $('.indicator-line_testcare').removeClass("red blue green grey");
    $('.indicator-line_testcare').addClass("orange");
});
$('.indicator-box-small_testcare_green').click(function () {
    $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_orange,.tablecontent_testcare_grey').hide();
    $('.tablecontent_testcare_green').toggle('slow');
    $('.indicator-line_testcare').removeClass("red orange blue grey");
    $('.indicator-line_testcare').addClass("green");
});
$('.indicator-box-small_testcare_grey').click(function () {
    $('.tablecontent_testcare_all,.tablecontent_testcare_red,.tablecontent_testcare_green,.tablecontent_testcare_orange').hide();
    $('.tablecontent_testcare_grey').toggle('slow');
    $('.indicator-line_testcare').removeClass("red orange green blue");
    $('.indicator-line_testcare').addClass("grey");
});
    //-----vitals
$('.indicator-box-big_vitals_all').click(function () {
    $('.tablecontent_vitals_red,.tablecontent_vitals_orange,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
    $('.tablecontent_vitals_all').toggle('slow');
    $('.indicator-line_vitals').removeClass("red orange green grey");
    $('.indicator-line_vitals').addClass("blue");
});
$('.indicator-box-small_vitals_red').click(function () {
    $('.tablecontent_vitals_all,.tablecontent_vitals_orange,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
    $('.tablecontent_vitals_red').toggle('slow');
    $('.indicator-line_vitals').removeClass("blue orange green grey");
    $('.indicator-line_vitals').addClass("red");
});
$('.indicator-box-small_vitals_orange').click(function () {
    $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_green,.tablecontent_vitals_grey').hide();
    $('.tablecontent_vitals_orange').toggle('slow');
    $('.indicator-line_vitals').removeClass("red blue green grey");
    $('.indicator-line_vitals').addClass("orange");
});
$('.indicator-box-small_vitals_green').click(function () {
    $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_orange,.tablecontent_vitals_grey').hide();
    $('.tablecontent_vitals_green').toggle('slow');
    $('.indicator-line_vitals').removeClass("red orange blue grey");
    $('.indicator-line_vitals').addClass("green");
});
$('.indicator-box-small_vitals_grey').click(function () {
    $('.tablecontent_vitals_all,.tablecontent_vitals_red,.tablecontent_vitals_green,.tablecontent_vitals_orange').hide();
    $('.tablecontent_vitals_grey').toggle('slow');
    $('.indicator-line_vitals').removeClass("red orange green blue");
    $('.indicator-line_vitals').addClass("grey");
});
    //----medications
$('.indicator-box-big_medications_all').click(function () {
    $('.tablecontent_medications_red,.tablecontent_medications_orange,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
    $('.tablecontent_medications_all').toggle('slow');
    $('.indicator-line_medications').removeClass("red orange green grey");
    $('.indicator-line_medications').addClass("blue");
});
$('.indicator-box-small_medications_red').click(function () {
    $('.tablecontent_medications_all,.tablecontent_medications_orange,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
    $('.tablecontent_medications_red').toggle('slow');
    $('.indicator-line_medications').removeClass("blue orange green grey");
    $('.indicator-line_medications').addClass("red");
});
$('.indicator-box-small_medications_orange').click(function () {
    $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_green,.tablecontent_medications_grey').hide();
    $('.tablecontent_medications_orange').toggle('slow');
    $('.indicator-line_medications').removeClass("red blue green grey");
    $('.indicator-line_medications').addClass("orange");
});
$('.indicator-box-small_medications_green').click(function () {
    $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_orange,.tablecontent_medications_grey').hide();
    $('.tablecontent_medications_green').toggle('slow');
    $('.indicator-line_medications').removeClass("red orange blue grey");
    $('.indicator-line_medications').addClass("green");
});
$('.indicator-box-small_medications_grey').click(function () {
    $('.tablecontent_medications_all,.tablecontent_medications_red,.tablecontent_medications_green,.tablecontent_medications_orange').hide();
    $('.tablecontent_medications_grey').toggle('slow');
    $('.indicator-line_medications').removeClass("red orange green blue");
    $('.indicator-line_medications').addClass("grey");
});
    //----activity
$('.indicator-box-big_activity_all').click(function () {
    $('.tablecontent_activity_red,.tablecontent_activity_orange,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
    $('.tablecontent_activity_all').toggle('slow');
    $('.indicator-line_activity').removeClass("red orange green grey");
    $('.indicator-line_activity').addClass("blue");
});
$('.indicator-box-small_activity_red').click(function () {
    $('.tablecontent_activity_all,.tablecontent_activity_orange,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
    $('.tablecontent_activity_red').toggle('slow');
    $('.indicator-line_activity').removeClass("blue orange green grey");
    $('.indicator-line_activity').addClass("red");
});
$('.indicator-box-small_activity_orange').click(function () {
    $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_green,.tablecontent_activity_grey').hide();
    $('.tablecontent_activity_orange').toggle('slow');
    $('.indicator-line_activity').removeClass("red blue green grey");
    $('.indicator-line_activity').addClass("orange");
});
$('.indicator-box-small_activity_green').click(function () {
    $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_orange,.tablecontent_activity_grey').hide();
    $('.tablecontent_activity_green').toggle('slow');
    $('.indicator-line_activity').removeClass("red orange blue grey");
    $('.indicator-line_activity').addClass("green");
});
$('.indicator-box-small_activity_grey').click(function () {
    $('.tablecontent_activity_all,.tablecontent_activity_red,.tablecontent_activity_green,.tablecontent_activity_orange').hide();
    $('.tablecontent_activity_grey').toggle('slow');
    $('.indicator-line_activity').removeClass("red orange green blue");
    $('.indicator-line_activity').addClass("grey");
});
    //----nutrition
$('.indicator-box-big_nutrition_all').click(function () {
    $('.tablecontent_nutrition_red,.tablecontent_nutrition_orange,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
    $('.tablecontent_nutrition_all').toggle('slow');
    $('.indicator-line_nutrition').removeClass("red orange green grey");
    $('.indicator-line_nutrition').addClass("blue");
});
$('.indicator-box-small_nutrition_red').click(function () {
    $('.tablecontent_nutrition_all,.tablecontent_nutrition_orange,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
    $('.tablecontent_nutrition_red').toggle('slow');
    $('.indicator-line_nutrition').removeClass("blue orange green grey");
    $('.indicator-line_nutrition').addClass("red");
});
$('.indicator-box-small_nutrition_orange').click(function () {
    $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_green,.tablecontent_nutrition_grey').hide();
    $('.tablecontent_nutrition_orange').toggle('slow');
    $('.indicator-line_nutrition').removeClass("red blue green grey");
    $('.indicator-line_nutrition').addClass("orange");
});
$('.indicator-box-small_nutrition_green').click(function () {
    $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_orange,.tablecontent_nutrition_grey').hide();
    $('.tablecontent_nutrition_green').toggle('slow');
    $('.indicator-line_nutrition').removeClass("red orange blue grey");
    $('.indicator-line_nutrition').addClass("green");
});
$('.indicator-box-small_nutrition_grey').click(function () {
    $('.tablecontent_nutrition_all,.tablecontent_nutrition_red,.tablecontent_nutrition_green,.tablecontent_nutrition_orange').hide();
    $('.tablecontent_nutrition_grey').toggle('slow');
    $('.indicator-line_nutrition').removeClass("red orange green blue");
    $('.indicator-line_nutrition').addClass("grey");
});
    //----psychosocial
$('.indicator-box-big_psychosocial_all').click(function () {
    $('.tablecontent_psychosocial_red,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
    $('.tablecontent_psychosocial_all').toggle('slow');
    $('.indicator-line_psychosocial').removeClass("red orange green grey");
    $('.indicator-line_psychosocial').addClass("blue");
});
$('.indicator-box-small_psychosocial_red').click(function () {
    $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
    $('.tablecontent_psychosocial_red').toggle('slow');
    $('.indicator-line_psychosocial').removeClass("blue orange green grey");
    $('.indicator-line_psychosocial').addClass("red");
});
$('.indicator-box-small_psychosocial_orange').click(function () {
    $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_green,.tablecontent_psychosocial_grey').hide();
    $('.tablecontent_psychosocial_orange').toggle('slow');
    $('.indicator-line_psychosocial').removeClass("red blue green grey");
    $('.indicator-line_psychosocial').addClass("orange");
});
$('.indicator-box-small_psychosocial_green').click(function () {
    $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_orange,.tablecontent_psychosocial_grey').hide();
    $('.tablecontent_psychosocial_green').toggle('slow');
    $('.indicator-line_psychosocial').removeClass("red orange blue grey");
    $('.indicator-line_psychosocial').addClass("green");
});
$('.indicator-box-small_psychosocial_grey').click(function () {
    $('.tablecontent_psychosocial_all,.tablecontent_psychosocial_red,.tablecontent_psychosocial_green,.tablecontent_psychosocial_orange').hide();
    $('.tablecontent_psychosocial_grey').toggle('slow');
    $('.indicator-line_psychosocial').removeClass("red orange green blue");
    $('.indicator-line_psychosocial').addClass("grey");
});
    //----wrapup
$('.indicator-box-big_wrapup_all').click(function () {
    $('.tablecontent_wrapup_red,.tablecontent_wrapup_orange,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
    $('.tablecontent_wrapup_all').toggle('slow');
    $('.indicator-line_wrapup').removeClass("red orange green grey");
    $('.indicator-line_wrapup').addClass("blue");
});
$('.indicator-box-small_wrapup_red').click(function () {
    $('.tablecontent_wrapup_all,.tablecontent_wrapup_orange,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
    $('.tablecontent_wrapup_red').toggle('slow');
    $('.indicator-line_wrapup').removeClass("blue orange green grey");
    $('.indicator-line_wrapup').addClass("red");
});
$('.indicator-box-small_wrapup_orange').click(function () {
    $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_green,.tablecontent_wrapup_grey').hide();
    $('.tablecontent_wrapup_orange').toggle('slow');
    $('.indicator-line_wrapup').removeClass("red blue green grey");
    $('.indicator-line_wrapup').addClass("orange");
});
$('.indicator-box-small_wrapup_green').click(function () {
    $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_orange,.tablecontent_wrapup_grey').hide();
    $('.tablecontent_wrapup_green').toggle('slow');
    $('.indicator-line_wrapup').removeClass("red orange blue grey");
    $('.indicator-line_wrapup').addClass("green");
});
$('.indicator-box-small_wrapup_grey').click(function () {
    $('.tablecontent_wrapup_all,.tablecontent_wrapup_red,.tablecontent_wrapup_green,.tablecontent_wrapup_orange').hide();
    $('.tablecontent_wrapup_grey').toggle('slow');
    $('.indicator-line_wrapup').removeClass("red orange green blue");
    $('.indicator-line_wrapup').addClass("grey");
});

    
    $('.maintable_symptoms_all,.maintable_symptoms_red,.maintable_symptoms_orange,.maintable_symptoms_green, .maintable_symptoms_grey,.maintable_testcare_all,.maintable_testcare_red,.maintable_testcare_orange,.maintable_testcare_green, .maintable_testcare_grey,.maintable_vitals_all,.maintable_vitals_red,.maintable_vitals_orange,.maintable_vitals_green, .maintable_vitals_grey,.maintable_medications_all,.maintable_medications_red,.maintable_medications_orange,.maintable_medications_green, .maintable_medications_grey,.maintable_activity_all,.maintable_activity_red,.maintable_activity_orange,.maintable_activity_green, .maintable_activity_grey,.maintable_nutrition_all, .maintable_nutrition_red,.maintable_nutrition_orange,.maintable_nutrition_green, .maintable_nutrition_grey,.maintable_psychosocial_all, .maintable_psychosocial_red,.maintable_psychosocial_orange,.maintable_psychosocial_green, .maintable_psychosocial_grey, .maintable_wrapup_all, .maintable_wrapup_red,.maintable_wrapup_orange,.maintable_wrapup_green, .maintable_wrapup_grey').on("click", "td", function () {
    //alert($(this).text());
    if ($(this).text() === "...") {
        var currentId = $(this).attr('id');
      
        ReviewAndUpdateGoal(currentId);
        
    }
});

    //on click X button, close current form and go back to original window
  $('#closepersonalizewindow').click(function () {  
      $('.Personalize-details,.personalize-section').hide();
   $('.monitor-wrapper').show('slow');

});

  $('#windowwrapperclose').click(function () {
      $('.monitor-wrapper').show('slow');
      $('.window-wrapper').hide('slow');
  });

  

}); //document ready function closes here


    




        
function getJoinsForContact(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
        "tri_careplanjoin",
       //"$select=tri_planname&$filter=_tri_patientid_value eq 0CDF8B04-C90B-E611-80D1-005056810C7C",
       "?$select=tri_PlanName,tri_GoalName&$filter=tri_PatientID/Id eq guid'" + PatientId + "'",
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
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    "$select=new_GoalState,"+
    "tri_GoalName,"+
    "tri_CarePlanGoalID,"+
    "tri_GoalSection,"+
    "tri_LastGoalDate,"+
    "tri_LastTargetValue,"+
    "tri_measuredetails,"+
    "tri_metric,"+
    "tri_NextDueDate,"+
    "tri_PlanName,"+
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget,"+
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId"+
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID"+
    "&$filter=tri_GoalSection/Value eq 100000000 and tri_PatientID/Id eq (guid'" + PatientId + "')  and tri_GoalSelected eq true",
    function (results) {
        intTotalSymptoms = "ALL " + results.length+"";

        $('.indicator-box-big_symptoms_all').text(intTotalSymptoms);
        for (var i = 0; i < results.length; i++) {
          
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);
            
            tagSymptomsAll = tagSymptomsAll + '<tr >' +
                                              '<td class="typedetails">' + results[i].tri_GoalName + '</td>' +
                                              '<td class="target">' + strTargetVal + '</td>' +
                                              '<td class="lastresult">'+results[i].tri_LastTargetValue+'</td>'+
                                              '<td class="lastresultdate">'+results[i].tri_LastGoalDate+'</td>'+
                                              '<td class="duedate">' + strDueDate + '</td>' +
                                              '<td class="more" id="' + CPGoalId + '">...</td>' +
                                              '</tr>'+
                                              '<tr>'+
                                              '<td colspan="6" style=" font-size:1px;"><hr class="grey"></td>'+
                                              '</tr>'
     
           
        }
        $('.maintable_symptoms_all').append(tagSymptomsAll);
        
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function getCPGoalSymptomsNotMet(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
   // "?$select=new_GoalState,tri_GoalName,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName"
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "')  and tri_GoalSelected eq true",


    function (results) {
        intTotalSymptomsNotMet = " " + results.length + " ";
        $('.indicator-box-small_symptoms_red').text(intTotalSymptomsNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "')  and tri_GoalSelected eq true",


      function (results) {
          intTotalSymptomsMet = " " + results.length + " ";
          $('.indicator-box-small_symptoms_green').text(intTotalSymptomsMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              //check between qualitative/quantitative vals
              if (results[i].tri_qualitativetarget == "") {
                  strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "')  and tri_GoalSelected eq true",


     function (results) {
         intTotalSymptomsOpen = " " + results.length + " ";
         $('.indicator-box-small_symptoms_orange').text(intTotalSymptomsOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             if (results[i].tri_qualitativetarget == "") {
                 strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "')  and tri_GoalSelected eq true",
    function (results) {
        intTotalSymptomsOverDue = " " + results.length + " ";
        //$('.indicator-box-small-grey_symptoms').text(intTotalSymptomsOverDue);
        $('.indicator-box-small_symptoms_grey').append(intTotalSymptomsOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
                                              '</tr>'

        }
        $('.maintable_symptoms_grey').append(tagSymptomsGrey);
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
    //alert(currentId);
   
    SDK.JQuery.retrieveRecord(
  currentId,
  "tri_cccareplangoal",
  "tri_actiontriggervalue,tri_vitalsvaluetype,tri_MetricOperator,tri_qualitativetarget,tri_Metric,tri_typeofgoalcode,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_qualitativeaction,tri_activityrecurrencemultiplierabnormal,tri_activityrecurrencemultipliernormal,tri_PatientModifierId,tri_activitydescription,tri_LastTargetValue,tri_activitydescriptionabnormal,tri_CarePlanGoalState,tri_LastGoalDate,tri_LastResultDate,tri_name,tri_NextDueDate,tri_typeofgoalcode,tri_patientmodifier_tri_cccareplangoal/tri_name,tri_tri_vitalsvaluetype_tri_cccareplangoal_vitalsvaluetype/tri_name",
  'tri_patientmodifier_tri_cccareplangoal,tri_tri_vitalsvaluetype_tri_cccareplangoal_vitalsvaluetype',
  function (result) {
      //alert(result.tri_name);
      var tri_actiontriggervalue = result.tri_actiontriggervalue;
      var tri_activitydescription = result.tri_activitydescription;
      var tri_activitydescriptionabnormal = result.tri_activitydescriptionabnormal;
      var tri_CarePlanGoalState = result.tri_CarePlanGoalState.Value;
      var tri_LastGoalDate = result.tri_LastGoalDate;
      var tri_LastTargetValue = result.tri_LastTargetValue;
      var tri_LastResultDate = result.tri_LastResultDate;
      var tri_name = result.tri_name;
      var tri_NextDueDate = result.tri_NextDueDate;
      var tri_typeofgoalcode = result.tri_typeofgoalcode;
      var tri_vitalsvaluetype = result.tri_vitalsvaluetype.Id;
      var tri_PatientModifierId = result.tri_PatientModifierId.Id;
      var tri_MetricOperator = result.tri_MetricOperator.Value;
      var tri_qualitativetarget = result.tri_qualitativetarget;
      var tri_Metric = result.tri_Metric;
      var tri_typeofgoalcode = result.tri_typeofgoalcode.Value;
      var tri_activityrecurrencemultiplierabnormal = result.tri_activityrecurrencemultiplierabnormal;
      var tri_activityrecurrencemultipliernormal = result.tri_activityrecurrencemultipliernormal;
      var tri_activityrecurrence = result.tri_activityrecurrence.Value;
      var tri_activityrecurrenceabnormal = result.tri_activityrecurrenceabnormal.Value;
      var tri_qualitativeaction = result.tri_qualitativeaction;
      var tri_patientmodifier_tri_cccareplangoal_tri_name = result.tri_patientmodifier_tri_cccareplangoal.tri_name;
      var tri_tri_vitalsvaluetype_tri_cccareplangoal_vitalsvaluetype_tri_name = result.tri_tri_vitalsvaluetype_tri_cccareplangoal_vitalsvaluetype.tri_name;

      var strLstGoalDt = $.datepicker.formatDate('mm/dd/yy', result.tri_LastGoalDate);
      var strNxtGoalDt = $.datepicker.formatDate('mm/dd/yy', result.tri_NextDueDate);

     // alert(tri_vitalsvaluetype);
      $('.monitor-wrapper').hide();
      $('.sectiontitle_personalize').text(tri_name);
      $('#lastresult_personalize').text(tri_LastTargetValue);
      $('#lastresultdate_personalize').val(strLstGoalDt).datepicker();
      $('#nextresultdate_personalize').val(strNxtGoalDt).datepicker();
      //$('#lastresultdate_personalize').datepicker();
      $('.personalizedropdownmenu').attr('id', tri_vitalsvaluetype + "_PRSNLUL");
      $('.personalizenormalmultiplier').val(tri_activityrecurrencemultipliernormal).spinner();
      $('.personalizeabnormalmultiplier').val(tri_activityrecurrencemultiplierabnormal).spinner();
      $('.personalizetriggeraction').val(tri_qualitativeaction).prop('readonly', true);
      $('.savebtn_prsnlize').attr('id', tri_vitalsvaluetype + "_PRSNLSAVEBTN");
      $('.personalizeULnormalrecurr').attr('id', tri_vitalsvaluetype + "_PRSNLULNRMLRCR");
      $('.personalizeULabnormalrecurr').attr('id', tri_vitalsvaluetype + "_PRSNLULABNRMLRCR");
      $('.personalizeULoperator').attr('id', tri_vitalsvaluetype + "_PRSNLULOPRTR");


      SDK.JQuery.retrieveRecord(
       tri_PatientModifierId,
        "tri_patientmodifier",
        "tri_name",
        null,
        function (result) {
            var tri_name = result.tri_name;
            $('.personalizemodifierbutton').html(tri_name);//append  modifier
           
        },
        function (error) {
            alert(error.message);
        }
    );

      switch (tri_CarePlanGoalState) {
          case 167410000:
              $('.personalizegoalbutton').text("Open");
              //$('.flag-box-big').text(" Open ");
              $('.personalizegoalbutton').val(167410000);
              $('.indicator-line,.flag-box-big').addClass("orange").removeClass("red grey green blue");
              break;
          case 167410001:
              $('.personalizegoalbutton').text("Met");
              $('.personalizegoalbutton').val(167410001);
              $('.indicator-line,.flag-box-big').addClass("green").removeClass("red grey orange blue");
              break;
          case 167410002:
              $('.personalizegoalbutton').text("Not Met");
              $('.personalizegoalbutton').val(167410002);
              $('.indicator-line,.flag-box-big').addClass("red").removeClass("orange grey green blue");
              break;
          case 167410003:
              $('.personalizegoalbutton').text("Closed, Cancelled");
              $('.personalizegoalbutton').val(167410003);
              $('.indicator-line,.flag-box-big').addClass('orange').removeClass("red grey green blue");
              break;
          
      }


      switch (tri_MetricOperator) {
          case 167410000:
              $('.personalizeoperator').text(">");
              $('.personalizeoperator').val(167410000);
              break;
          case 167410001:
              $('.personalizeoperator').text("<");
              $('.personalizeoperator').val(167410001);
              break;
          case 167410002:
              $('.personalizeoperator').text("=");
              $('.personalizeoperator').val(167410002);
              break;
          case 167410003:
              $('.personalizeoperator').text("% Increase");
              $('.personalizeoperator').val(167410003);
              break;
          case 167410004:
              $('.personalizeoperator').text("% Decrease");
              $('.personalizeoperator').val(167410004);
              break;
          case 167410005:
              $('.personalizeoperator').text(">=");
              $('.personalizeoperator').val(167410005);
              break;
          case 167410006:
              $('.personalizeoperator').text("<=");
              $('.personalizeoperator').val(167410006);
              break;
      }


      switch (tri_typeofgoalcode) {
          case 100000000:
              $('.personalizetargetval').val(tri_qualitativetarget).addClass('qualitative').removeClass('quantitative');
              $('.personalizeoperator').hide();

              break;
          case 100000001:
              $('.personalizetargetval').val(tri_Metric).removeClass('qualitative').addClass('quantitative');
              // $("#" + vMETRICselector).;
              $('.personalizeoperator').show();
             // GetSetTargetMetricOperator(tri_vitalsvaluetypeid, tri_targetmetricoperator);
              break;
          case null:
              $('.personalizetargetval').val(tri_qualitativetarget).addClass('qualitative').removeClass('quantitative');
              $('.personalizeoperator').hide();
              break;
      }

      switch (tri_activityrecurrence) {
          case 1:
              $('.personalizerecurrnormal').text("Daily");
              $('.personalizerecurrnormal').val(1);
              break;
          case 167410000:
              $('.personalizerecurrnormal').text("Weekly");
              $('.personalizerecurrnormal').val(167410000);
              break;
          case 167410001:
              $('.personalizerecurrnormal').text("Bi-Weekly");
              $('.personalizerecurrnormal').val(167410001);
              break;
          case 167410002:
              $('.personalizerecurrnormal').text("Monthly");
              $('.personalizerecurrnormal').val(167410002);
              break;
          case 167410003:
              $('.personalizerecurrnormal').text("Quarterly");
              $('.personalizerecurrnormal').val(167410003);
              break;
          case 167410004:
              $('.personalizerecurrnormal').text("Every 6 Months");
              $('.personalizerecurrnormal').val(167410004);
              break;
          case 167410005:
              $('.personalizerecurrnormal').text("Every 12 Months");
              $('.personalizerecurrnormal').val(167410005);
              break;
          case 167410006:
              $('.personalizerecurrnormal').text("3 times a day");
              $('.personalizerecurrnormal').val(167410006);
              break;
          case 167410007:
              $('.personalizerecurrnormal').text("Every Encounter");
              $('.personalizerecurrnormal').val(167410007);
              break;
      }

      switch (tri_activityrecurrenceabnormal) {
          case 1:
              $('.personalizerecurrabnormal').text("Daily");
              $('.personalizerecurrabnormal').val(1);
              break;
          case 167410000:
              $('.personalizerecurrabnormal').text("Weekly");
              $('.personalizerecurrabnormal').val(167410000);
              break;
          case 167410001:
              $('.personalizerecurrabnormal').text("Bi-Weekly");
              $('.personalizerecurrabnormal').val(167410001);
              break;
          case 167410002:
              $('.personalizerecurrabnormal').text("Monthly");
              $('.personalizerecurrabnormal').val(167410002);
              break;
          case 167410003:
              $('.personalizerecurrabnormal').text("Quarterly");
              $('.personalizerecurrabnormal').val(167410003);
              break;
          case 167410004:
              $('.personalizerecurrabnormal').text("Every 6 Months");
              $('.personalizerecurrabnormal').val(167410004);
              break;
          case 167410005:
              $('.personalizerecurrabnormal').text("Every 12 Months");
              $('.personalizerecurrabnormal').val(167410005);
              break;
          case 167410006:
              $('.personalizerecurrabnormal').text("3 times a day");
              $('.personalizerecurrabnormal').val(167410006);
              break;
          case 167410007:
              $('.personalizerecurrabnormal').text("Every Encounter");
              $('.personalizerecurrabnormal').val(167410007);
              break;
      }
      

      $('.window-wrapper').show('slow');
  },

  function (error) {
      alert(error.message);
  }



);

    
}



function getCPGoaltestcareAll(PatientId) {
    //alert(PatientId);
    SDK.JQuery.retrieveMultipleRecords(
    "tri_careplanjoin",
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000001 and tri_PatientID/Id eq (guid'" + PatientId + "')  and tri_GoalSelected eq true",
    function (results) {
        intTotaltestcare = "ALL  " + results.length + " ";
        $('.indicator-box-big_testcare_all').text(intTotaltestcare);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagtestcareAll = tagtestcareAll + '<tr >' +
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
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotaltestcareNotMet = " " + results.length + " ";
        $('.indicator-box-small_testcare_red').text(intTotaltestcareNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotaltestcareOpen = " " + results.length + " ";
         $('.indicator-box-small_testcare_orange').text(intTotaltestcareOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             if (results[i].tri_qualitativetarget == "") {
                 strTargetVal = results[i].tri_metric;
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
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotaltestcareMet = " " + results.length + " ";
          $('.indicator-box-small_testcare_green').text(intTotaltestcareMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              //check between qualitative/quantitative vals
              if (results[i].tri_qualitativetarget == "") {
                  strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000001 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotaltestcareOverDue = " " + results.length + " ";
        //$('.indicator-box-small-grey_testcare').text(intTotaltestcareOverDue);
        $('.indicator-box-small_testcare_grey').append(intTotaltestcareOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000007 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalvitals = "ALL " + results.length + " ";
        $('.indicator-box-big_vitals_all').text(intTotalvitals);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagvitalsAll = tagvitalsAll + '<tr >' +
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
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalvitalsNotMet = " " + results.length + " ";
        $('.indicator-box-small_vitals_red').text(intTotalvitalsNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalvitalsOpen = " " + results.length + " ";
         $('.indicator-box-small_vitals_orange').text(intTotalvitalsOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             if (results[i].tri_qualitativetarget == "") {
                 strTargetVal = results[i].tri_metric;
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
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalvitalsMet = " " + results.length + " ";
          $('.indicator-box-small_vitals_green').text(intTotalvitalsMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              //check between qualitative/quantitative vals
              if (results[i].tri_qualitativetarget == "") {
                  strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000007 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalvitalsOverDue = " " + results.length + " ";
        //$('.indicator-box-small-grey_vitals').text(intTotalvitalsOverDue);
        $('.indicator-box-small_vitals_grey').append(intTotalvitalsOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalmedications = "ALL " + results.length + " ";
        $('.indicator-box-big_medications_all').text(intTotalmedications);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagmedicationsAll = tagmedicationsAll + '<tr >' +
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
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalmedicationsNotMet = " " + results.length + " ";
        $('.indicator-box-small_medications_red').text(intTotalmedicationsNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalmedicationsOpen = " " + results.length + " ";
         $('.indicator-box-small_medications_orange').text(intTotalmedicationsOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             if (results[i].tri_qualitativetarget == "") {
                 strTargetVal = results[i].tri_metric;
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
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalmedicationsMet = " " + results.length + " ";
          $('.indicator-box-small_medications_green').text(intTotalmedicationsMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              //check between qualitative/quantitative vals
              if (results[i].tri_qualitativetarget == "") {
                  strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000002 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalmedicationsOverDue = " " + results.length + " ";
        //$('.indicator-box-small-grey_medications').text(intTotalmedicationsOverDue);
        $('.indicator-box-small_medications_grey').append(intTotalmedicationsOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalactivity = "ALL " + results.length + " ";
        $('.indicator-box-big_activity_all').text(intTotalactivity);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagactivityAll = tagactivityAll + '<tr >' +
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
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalactivityNotMet = " " + results.length + " ";
        $('.indicator-box-small_activity_red').text(intTotalactivityNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalactivityOpen = " " + results.length + " ";
         $('.indicator-box-small_activity_orange').text(intTotalactivityOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             if (results[i].tri_qualitativetarget == "") {
                 strTargetVal = results[i].tri_metric;
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
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalactivityMet = " " + results.length + " ";
          $('.indicator-box-small_activity_green').text(intTotalactivityMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              //check between qualitative/quantitative vals
              if (results[i].tri_qualitativetarget == "") {
                  strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalactivityOverDue = " " + results.length + " ";
        //$('.indicator-box-small-grey_activity').text(intTotalactivityOverDue);
        $('.indicator-box-small_activity_grey').append(intTotalactivityOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000004 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalnutrition = "ALL " + results.length + " ";
        $('.indicator-box-big_nutrition_all').text(intTotalnutrition);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagnutritionAll = tagnutritionAll + '<tr >' +
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
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000004 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalnutritionNotMet = " " + results.length + " ";
        $('.indicator-box-small_nutrition_red').text(intTotalnutritionNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000004 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalnutritionOpen = " " + results.length + " ";
         $('.indicator-box-small_nutrition_orange').text(intTotalnutritionOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             if (results[i].tri_qualitativetarget == "") {
                 strTargetVal = results[i].tri_metric;
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
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000004 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalnutritionMet = " " + results.length + " ";
          $('.indicator-box-small_nutrition_green').text(intTotalnutritionMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              //check between qualitative/quantitative vals
              if (results[i].tri_qualitativetarget == "") {
                  strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000004 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalnutritionOverDue = " " + results.length + " ";
        //$('.indicator-box-small-grey_nutrition').text(intTotalnutritionOverDue);
        $('.indicator-box-small_nutrition_grey').append(intTotalnutritionOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000005 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalpsychosocial = "ALL " + results.length + " ";
        $('.indicator-box-big_psychosocial_all').text(intTotalpsychosocial);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagpsychosocialAll = tagpsychosocialAll + '<tr >' +
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
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000005 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalpsychosocialNotMet = " " + results.length + " ";
        $('.indicator-box-small_psychosocial_red').text(intTotalpsychosocialNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000005 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalpsychosocialOpen = " " + results.length + " ";
         $('.indicator-box-small_psychosocial_orange').text(intTotalpsychosocialOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             if (results[i].tri_qualitativetarget == "") {
                 strTargetVal = results[i].tri_metric;
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
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000005 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalpsychosocialMet = " " + results.length + " ";
          $('.indicator-box-small_psychosocial_green').text(intTotalpsychosocialMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              //check between qualitative/quantitative vals
              if (results[i].tri_qualitativetarget == "") {
                  strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000005 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalpsychosocialOverDue = " " + results.length + " ";
        //$('.indicator-box-small-grey_psychosocial').text(intTotalpsychosocialOverDue);
        $('.indicator-box-small_psychosocial_grey').append(intTotalpsychosocialOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //"?$select=new_GoalState,tri_GoalName,tri_CarePlanGoalID,tri_GoalSection,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_NextDueDate,tri_PlanName,tri_VitalValueTypeName&$filter=tri_GoalSection/Value eq 100000003 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000006 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalwrapup = "ALL " + results.length + " ";
        $('.indicator-box-big_wrapup_all').text(intTotalwrapup);
        for (var i = 0; i < results.length; i++) {

            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
            }
            else {
                strTargetVal = results[i].tri_qualitativetarget;
            };
            //format dates to correct formats
            strDueDate = $.datepicker.formatDate('dd M yy', results[i].tri_NextDueDate);

            tagwrapupAll = tagwrapupAll + '<tr >' +
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
   //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000006 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


    function (results) {
        intTotalwrapupNotMet = " " + results.length + " ";
        $('.indicator-box-small_wrapup_red').text(intTotalwrapupNotMet);
        for (var i = 0; i < results.length; i++) {
            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
     "tri_VitalValueTypeName," +
     "tri_qualitativeaction," +
     "tri_qualitativetarget," +
     "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
     "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
     "&$filter=tri_GoalSection/Value eq 100000006 and new_GoalState/Value eq 167410000 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


     function (results) {
         intTotalwrapupOpen = " " + results.length + " ";
         $('.indicator-box-small_wrapup_orange').text(intTotalwrapupOpen);
         for (var i = 0; i < results.length; i++) {
             var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
             //check between qualitative/quantitative vals
             if (results[i].tri_qualitativetarget == "") {
                 strTargetVal = results[i].tri_metric;
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
     //&$filter=tri_GoalSection/Value eq 100000000 and new_GoalState/Value eq 167410002 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
      "tri_VitalValueTypeName," +
      "tri_qualitativeaction," +
      "tri_qualitativetarget," +
      "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
      "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
      "&$filter=tri_GoalSection/Value eq 100000006 and new_GoalState/Value eq 167410001 and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",


      function (results) {
          intTotalwrapupMet = " " + results.length + " ";
          $('.indicator-box-small_wrapup_green').text(intTotalwrapupMet);
          for (var i = 0; i < results.length; i++) {
              var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
              //check between qualitative/quantitative vals
              if (results[i].tri_qualitativetarget == "") {
                  strTargetVal = results[i].tri_metric;
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
    //&$filter=tri_GoalSection/Value eq 100000003 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
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
    "tri_VitalValueTypeName," +
    "tri_qualitativeaction," +
    "tri_qualitativetarget," +
    "tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID/tri_cccareplangoalId" +
    "&$expand=tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID" +
    "&$filter=tri_GoalSection/Value eq 100000006 and new_GoalState/Value eq 167410000  and tri_NextDueDate le datetime'" + dateMsg + "' and tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSelected eq true",
    function (results) {
        intTotalwrapupOverDue = " " + results.length + " ";
        //$('.indicator-box-small-grey_wrapup').text(intTotalwrapupOverDue);
        $('.indicator-box-small_wrapup_grey').append(intTotalwrapupOverDue);
        for (var i = 0; i < results.length; i++) {


            var CPGoalId = results[i].tri_tri_cccareplangoal_tri_careplanjoin_CarePlanGoalID.tri_cccareplangoalId;
            //check between qualitative/quantitative vals
            if (results[i].tri_qualitativetarget == "") {
                strTargetVal = results[i].tri_metric;
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
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
}

function GetSectionName(OptionSetVal) {

    var vSectnName = "";

    switch (OptionSetVal) {
        case 100000000:
            vSectnName = "Symptoms";
            break;
        case 100000001:
            vSectnName = "Tests/Care";
            break;
        case 100000002:
            vSectnName = "Medications";
            break;
        case 100000003:
            vSectnName = "Activity";
            break;
        case 100000004:
            vSectnName = "Nutrition";
            break;
        case 100000005:
            vSectnName = "Psycho-Social / Behavioural Health";
            break;
        case 100000006:
            vSectnName = "Wrap Up";
            break;
        case 100000007:
            vSectnName = "Home Vitals";
            break;
        case -1:
            vSectnName = "";
            break;

    }

    return vSectnName;
    
}
function gotoAddCarePlan() {
        $('.monitor-wrapper').hide('slow');
        $('.Personalize-details').html('');
        var vFinalTbl = "";
        var vTblRowsSymptoms = "";
        var vTblRowsTestCare = "";
        var vTblRowsMedications = "";
        var vTblRowsActivity = "";
        var vTblRowsNutrition = "";
        var vTblRowsPyschoSocial = "";
        var vTblRowsWrapUp = "";
        var vTblRowsHomeVitals = "";
        var vTblRowsNone = "";

        var VitalTypeArray = [];
        //var vSelectedGoal = [];
        if (parent.Xrm !== undefined) {
            var contactId = parent.Xrm.Page.data.entity.getId();
        }
        SDK.JQuery.retrieveMultipleRecords(
        "tri_careplanjoin",
        "?$select=tri_GoalSection,tri_typeofgoalcode,new_GoalState,tri_vitalsvaluetypeid,tri_VitalValueTypeName&$filter=tri_PatientID/Id eq (guid'" + contactId + "')&$orderby=tri_GoalSection",
        function (results) {
            for (var i = 0; i < results.length; i++) {
                var tri_GoalSection = GetSectionName(results[i].tri_GoalSection.Value);
                var tri_vitalsvaluetypeid = results[i].tri_vitalsvaluetypeid;
                var vVitalTypeId = results[i].tri_vitalsvaluetypeid.Id;
                var vVitalFactorButtonId = results[i].tri_vitalsvaluetypeid.Id + "_BTN";
                var vVitalMetricOperatorButtonId = results[i].tri_vitalsvaluetypeid.Id + "_MTRCOPRTRBTN";
                var vVitalFreqNormalButtonId = results[i].tri_vitalsvaluetypeid.Id + "_FRQNRMLBTN";
                var vVitalFreqAbNormalButtonId = results[i].tri_vitalsvaluetypeid.Id + "_FRQABNRMLBTN";
                var vVitalAssgnRoleButtonId = results[i].tri_vitalsvaluetypeid.Id + "_ASSGNROLEBTN";
                var vVitalSaveButtonId = results[i].tri_vitalsvaluetypeid.Id + "_SAVEBTN";
                var vVitalFactorULId = results[i].tri_vitalsvaluetypeid.Id + "_UL";// used in PatienModifier dropdown
                var vVitalMetricOperatorULId = results[i].tri_vitalsvaluetypeid.Id + "_MTRCOPRTRUL";// used in PatienModifier dropdown
                var vVitalFreqNormalULId = results[i].tri_vitalsvaluetypeid.Id + "_FRQNRMLUL";// used in PatienModifier dropdown
                var vVitalFreqAbNormalULId = results[i].tri_vitalsvaluetypeid.Id + "_FRQABNRMLUL";// used in PatienModifier dropdown
                var vVitalAssgnRoleULId = results[i].tri_vitalsvaluetypeid.Id + "_ASSGNROLEUL";
                var vVitalFactorMETRICId = results[i].tri_vitalsvaluetypeid.Id + "_METRIC";// used in Metric textbox
                var vVitalFactorMULTIPLIER_NORMALId = results[i].tri_vitalsvaluetypeid.Id + "_MULTIPLIER_NORMAL";// used in normal multipler textbox
                var vVitalFactorMULTIPLIER_ABNORMALId = results[i].tri_vitalsvaluetypeid.Id + "_MULTIPLIER_ABNORMAL";// used in abnormal textbox
                var vVitalFactorQUAL_ACTIONId = results[i].tri_vitalsvaluetypeid.Id + "_QUAL_ACTION";// used in trigger action textbox
                var tri_VitalValueTypeName = results[i].tri_VitalValueTypeName;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_GoalState = results[i].new_GoalState;

                //get the selected goal for this vital type


                var IndexOfVitalType = VitalTypeArray.indexOf(tri_VitalValueTypeName);

                if (IndexOfVitalType === -1) {

                    VitalTypeArray.push(tri_VitalValueTypeName)

                    //tri_PatientModifierName_join = "";


                    GetSelectedGoalForCurrentVitalType(results[i].tri_vitalsvaluetypeid.Id, contactId);  //need this to default the dropdownlist and all the fields when the page loads the first time.
                    var goalState;
                    var goalState

                    if (results[i].new_GoalState !== undefined && results[i].new_GoalState !== null)
                        goalState = results[i].new_GoalState.Value;

                    if (goalState == 167410000) {
                        goalClass = "orange";
                    }
                    else if (goalState == 167410001) {
                        goalClass = "green";
                    }
                    else if (goalState == 167410002) {
                        goalClass = "red";
                    }
                    else {
                        goalClass = "grey";
                    }
                    //alert(vSelectedGoal.length);

                    switch (results[i].tri_GoalSection.Value) {
                        case 100000000:
                            // vSectnName = "Symptoms";

                            vTblRowsSymptoms = vTblRowsSymptoms +
                                '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

          //<!-- FACTORS & VALUES -->     
         '<table class="maintable" align="left">' + //table 1 start
         '<tr>' +
            '<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
            '<td class="labelcenter" width="200px"> Target Value:</td>' +
            '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
            '<td class="labelcenter" width="120px"> Out of Range Frequency:</td>' +
         '</tr></table>' +//table 1 end

          '<table class="factors" align="left">' +//table 2 start
          '<tr>' +
          '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
            //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
          //<!-- FACTOR DROP-DOWN -->    
            '<div class="btn-group" style="width: 90px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFactorULId + '><li></li>' + GetModifierBasedOnValueType(vVitalTypeId) + '</ul>' +
              '</div>' +
              '</td></tr>' +
                '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

                 // '<table align="left"><tr><td>'+ //nested table3

                //<!-- MODIFIER DROP-DOWN -->    
                '<div class="btn-group">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalMetricOperatorULId + '>' +
                '<li role="presentation" class="dropdown-header"><</li>' +
                '<li role="presentation" class="dropdown-header">=</li>' +
                 '<li role="presentation" class="dropdown-header">></li>' +
                 '<li role="presentation" class="dropdown-header">>=</li>' +
                 '<li role="presentation" class="dropdown-header"><=</li>' +
                 '<li role="presentation" class="dropdown-header">% Increase</li>' +
                 '<li role="presentation" class="dropdown-header">% Decrease</li>' +
                '</ul>' +
                '</div>' +
                '</td>' +
                '<td class="labelcenter"  width="525px">' +//table2 column3
                '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;" ></td ><td>' + //
                '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                //<!-- MODIFIER DROP-DOWN -->    
                '<div class="btn-group" style="width:60px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
                  '<li role="presentation" class="dropdown-header">Daily</li>' +
                  '<li role="presentation" class="dropdown-header">Weekly</li>' +
                  '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
                  '<li role="presentation" class="dropdown-header">Monthly</li>' +
                  '<li role="presentation" class="dropdown-header">Quarterly</li>' +
                  '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
                  '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
                  '<li role="presentation" class="dropdown-header">3 times a day</li>' +
                  '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                '</ul>' +
              '</div>' +
              '</td>' +
                '<td> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                 //<!-- MODIFIER DROP-DOWN -->    
                '<div class="btn-group" style="width:60px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
                  '<li role="presentation" class="dropdown-header">Daily</li>' +
                  '<li role="presentation" class="dropdown-header">Weekly</li>' +
                  '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
                  '<li role="presentation" class="dropdown-header">Monthly</li>' +
                  '<li role="presentation" class="dropdown-header">Quarterly</li>' +
                  '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
                  '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
                  '<li role="presentation" class="dropdown-header">3 times a day</li>' +
                  '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
                '</ul>' +
              '</div>' +
         '<br></td>' +
             '</tr></table>' +//table 2 end
             '<br>' +
             //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
             '<table class="maintable" align="left">' + //table 3 start
            '<tr>' +
                '<td class="label-name"  style="width:600px">Trigger Description:</td>' +
                '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
             '</tr><tr class="label-name"></tr></table>' +
              '<table class="factors" align="left">' +//table4 start
            '<tr>' +
                '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                        //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
                '<div class="btn-group" style="width: 150px;">' +
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalAssgnRoleButtonId + '><span class="caret"></span></button>' +
                '<ul class="dropdown-menu" id=' + vVitalAssgnRoleULId + '>' +
                  '<li role="presentation" class="dropdown-header">Care Manager</li>' +
                  '<li role="presentation" class="dropdown-header">Nurse</li>' +
                  '<li role="presentation" class="dropdown-header">Dietician</li>' +
                  '<li role="presentation" class="dropdown-header">Care Navigator</li>' +
                  '<li role="presentation" class="dropdown-header">Physiatrist</li>' +
                  '<li role="presentation" class="dropdown-header">Cardiologist</li>' +
                  '<li role="presentation" class="dropdown-header">Physician</li>' +
                '</ul>' +
              '</div>' +
              '</td>' +
             '</tr></table>' +//table 4 end
            '<br>' +
            '<table class="maintable" >' +//table5 start
            '<tr></tr> <tr><td>' +
                '<br><div class = "center-wrapper" ><div class="center-wrapper" >' +//SAVE CHANGES' +
                '<button class="btn btn-primary savebtn" type="button"  id=' + vVitalSaveButtonId + '>Save Changes</button>' +
                '</div></div>' +
                '</td></tr></table>' +
            //'<br>'+
            '</div><br>';//tablecontent div closes here



                            break;
                        case 100000001:
                            //vSectnName = "Tests/Care";
                            vTblRowsTestCare = vTblRowsTestCare +
                                                         '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

          //<!-- FACTORS & VALUES -->     
         '<table class="maintable" align="left">' + //table 1 start
         '<tr>' +
            '<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
            '<td class="labelcenter" width="200px"> Target Value:</td>' +
            //'<td class="labelcenter" width="200px"> Target Value:</td>' +
            '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
            '<td class="labelcenter" width="120px"> Out of Range Frequency:<br></td>' +
         '</tr></table>' +//table 1 end

          '<table class="factors" align="left">' +//table 2 start
          '<tr>' +
          '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
            //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
          //<!-- FACTOR DROP-DOWN -->    
            '<div class="btn-group" style="width: 90px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' +
              GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
              //'<li role="presentation" class="dropdown-header">18-25</li>'+
              //'<li role="presentation" class="dropdown-header">15-18</li>'+
            '</ul>' +
          '</div>' +
          '</td></tr>' +
            '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

             // '<table align="left"><tr><td>'+ //nested table3

            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalMetricOperatorULId + '>' +
            '<li role="presentation" class="dropdown-header"><</li>' +
            '<li role="presentation" class="dropdown-header">=</li>' +
             '<li role="presentation" class="dropdown-header">></li>' +
             '<li role="presentation" class="dropdown-header">>=</li>' +
             '<li role="presentation" class="dropdown-header"><=</li>' +
             '<li role="presentation" class="dropdown-header">% Increase</li>' +
             '<li role="presentation" class="dropdown-header">% Decrease</li>' +
            '</ul>' +
            '</div>' +
            '</td>' +
            '<td class="labelcenter"  width="525px">' +//table2 column3
            '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;" ></td ><td>' + //
            '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
            '<td> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
             //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
     '<br></td>' +
         '</tr></table>' +//table 2 end
         '<br>' +
         //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
         '<table class="maintable" align="left">' + //table 3 start
        '<tr>' +
            '<td class="label-name"  style="width:600px">Trigger Description:</td>' +
            '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
         '</tr><tr class="label-name"></tr></table>' +
          '<table class="factors" align="left">' +//table4 start
        '<tr>' +
            '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                    //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
            '<div class="btn-group" style="width: 150px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalAssgnRoleButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalAssgnRoleULId + '>' +
              '<li role="presentation" class="dropdown-header">Care Manager</li>' +
              '<li role="presentation" class="dropdown-header">Nurse</li>' +
              '<li role="presentation" class="dropdown-header">Dietician</li>' +
              '<li role="presentation" class="dropdown-header">Care Navigator</li>' +
              '<li role="presentation" class="dropdown-header">Physiatrist</li>' +
              '<li role="presentation" class="dropdown-header">Cardiologist</li>' +
              '<li role="presentation" class="dropdown-header">Physician</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
         '</tr></table>' +//table 4 end
        '<br>' +
        '<table class="maintable" >' +//table5 start
        '<tr></tr> <tr><td>' +
            '<br><div class = "center-wrapper" ><div class="center-wrapper" >' +//SAVE CHANGES' +
            '<button class="btn btn-primary savebtn" type="button"  id=' + vVitalSaveButtonId + '>Save Changes</button>' +
            '</div></div>' +
            '</td></tr></table>' +
        //'<br>'+
        '</div><br>';//tablecontent div closes here


                            break;
                        case 100000002:
                            //vSectnName = "Medications";
                            vTblRowsMedications = vTblRowsMedications +
                                                          '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

          //<!-- FACTORS & VALUES -->     
         '<table class="maintable" align="left">' + //table 1 start
         '<tr>' +
            '<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
            '<td class="labelcenter" width="200px"> Target Value:</td>' +
            //'<td class="labelcenter" width="200px"> Target Value:</td>' +
            '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
            '<td class="labelcenter" width="120px"> Out of Range Frequency:<br></td>' +
         '</tr></table>' +//table 1 end

          '<table class="factors" align="left">' +//table 2 start
          '<tr>' +
          '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
            //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
          //<!-- FACTOR DROP-DOWN -->    
            '<div class="btn-group" style="width: 90px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' +
              GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
              //'<li role="presentation" class="dropdown-header">18-25</li>'+
              //'<li role="presentation" class="dropdown-header">15-18</li>'+
            '</ul>' +
          '</div>' +
          '</td></tr>' +
            '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

             // '<table align="left"><tr><td>'+ //nested table3

            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalMetricOperatorULId + '>' +
            '<li role="presentation" class="dropdown-header"><</li>' +
            '<li role="presentation" class="dropdown-header">=</li>' +
             '<li role="presentation" class="dropdown-header">></li>' +
             '<li role="presentation" class="dropdown-header">>=</li>' +
             '<li role="presentation" class="dropdown-header"><=</li>' +
             '<li role="presentation" class="dropdown-header">% Increase</li>' +
             '<li role="presentation" class="dropdown-header">% Decrease</li>' +
            '</ul>' +
            '</div>' +
            '</td>' +
            '<td class="labelcenter"  width="525px">' +//table2 column3
            '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;" ></td ><td>' + //
            '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
            '<td> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
             //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
     '<br></td>' +
         '</tr></table>' +//table 2 end
         '<br>' +
         //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
         '<table class="maintable" align="left">' + //table 3 start
        '<tr>' +
            '<td class="label-name"  style="width:600px">Trigger Description:</td>' +
            '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
         '</tr><tr class="label-name"></tr></table>' +
          '<table class="factors" align="left">' +//table4 start
        '<tr>' +
            '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                    //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
            '<div class="btn-group" style="width: 150px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalAssgnRoleButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalAssgnRoleULId + '>' +
              '<li role="presentation" class="dropdown-header">Care Manager</li>' +
              '<li role="presentation" class="dropdown-header">Nurse</li>' +
              '<li role="presentation" class="dropdown-header">Dietician</li>' +
              '<li role="presentation" class="dropdown-header">Care Navigator</li>' +
              '<li role="presentation" class="dropdown-header">Physiatrist</li>' +
              '<li role="presentation" class="dropdown-header">Cardiologist</li>' +
              '<li role="presentation" class="dropdown-header">Physician</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
         '</tr></table>' +//table 4 end
        '<br>' +
        '<table class="maintable" >' +//table5 start
        '<tr></tr> <tr><td>' +
            '<br><div class = "center-wrapper" ><div class="center-wrapper" >' +//SAVE CHANGES' +
            '<button class="btn btn-primary savebtn" type="button"  id=' + vVitalSaveButtonId + '>Save Changes</button>' +
            '</div></div>' +
            '</td></tr></table>' +
        //'<br>'+
        '</div><br>';//tablecontent div closes here

                            break;
                        case 100000003:
                            //vSectnName = "Activity";
                            vTblRowsActivity = vTblRowsActivity +
                                                           '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

          //<!-- FACTORS & VALUES -->     
         '<table class="maintable" align="left">' + //table 1 start
         '<tr>' +
            '<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
            '<td class="labelcenter" width="200px"> Target Value:</td>' +
            //'<td class="labelcenter" width="200px"> Target Value:</td>' +
            '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
            '<td class="labelcenter" width="120px"> Out of Range Frequency:<br></td>' +
         '</tr></table>' +//table 1 end

          '<table class="factors" align="left">' +//table 2 start
          '<tr>' +
          '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
            //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
          //<!-- FACTOR DROP-DOWN -->    
            '<div class="btn-group" style="width: 90px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' +
             GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
              //'<li role="presentation" class="dropdown-header">18-25</li>'+
              //'<li role="presentation" class="dropdown-header">15-18</li>'+
            '</ul>' +
          '</div>' +
          '</td></tr>' +
            '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

             // '<table align="left"><tr><td>'+ //nested table3

            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalMetricOperatorULId + '>' +
            '<li role="presentation" class="dropdown-header"><</li>' +
            '<li role="presentation" class="dropdown-header">=</li>' +
             '<li role="presentation" class="dropdown-header">></li>' +
             '<li role="presentation" class="dropdown-header">>=</li>' +
             '<li role="presentation" class="dropdown-header"><=</li>' +
             '<li role="presentation" class="dropdown-header">% Increase</li>' +
             '<li role="presentation" class="dropdown-header">% Decrease</li>' +
            '</ul>' +
            '</div>' +
            '</td>' +
            '<td class="labelcenter"  width="525px">' +//table2 column3
            '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;" ></td ><td>' + //
            '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
            '<td> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
             //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
     '<br></td>' +
         '</tr></table>' +//table 2 end
         '<br>' +
         //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
         '<table class="maintable" align="left">' + //table 3 start
        '<tr>' +
            '<td class="label-name"  style="width:600px">Trigger Description:</td>' +
            '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
         '</tr><tr class="label-name"></tr></table>' +
          '<table class="factors" align="left">' +//table4 start
        '<tr>' +
            '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                    //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
            '<div class="btn-group" style="width: 150px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalAssgnRoleButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalAssgnRoleULId + '>' +
              '<li role="presentation" class="dropdown-header">Care Manager</li>' +
              '<li role="presentation" class="dropdown-header">Nurse</li>' +
              '<li role="presentation" class="dropdown-header">Dietician</li>' +
              '<li role="presentation" class="dropdown-header">Care Navigator</li>' +
              '<li role="presentation" class="dropdown-header">Physiatrist</li>' +
              '<li role="presentation" class="dropdown-header">Cardiologist</li>' +
              '<li role="presentation" class="dropdown-header">Physician</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
         '</tr></table>' +//table 4 end
        '<br>' +
        '<table class="maintable" >' +//table5 start
        '<tr></tr> <tr><td>' +
            '<br><div class = "center-wrapper" ><div class="center-wrapper" >' +//SAVE CHANGES' +
            '<button class="btn btn-primary savebtn" type="button"  id=' + vVitalSaveButtonId + '>Save Changes</button>' +
            '</div></div>' +
            '</td></tr></table>' +
        //'<br>'+
        '</div><br>';//tablecontent div closes here

                            break;
                        case 100000004:
                            //vSectnName = "Nutrition";
                            vTblRowsNutrition = vTblRowsNutrition +
                                 '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

          //<!-- FACTORS & VALUES -->     
         '<table class="maintable" align="left">' + //table 1 start
         '<tr>' +
            '<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
            '<td class="labelcenter" width="200px"> Target Value:</td>' +
            //'<td class="labelcenter" width="200px"> Target Value:</td>' +
            '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
            '<td class="labelcenter" width="120px"> Out of Range Frequency:<br></td>' +
         '</tr></table>' +//table 1 end

          '<table class="factors" align="left">' +//table 2 start
          '<tr>' +
          '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
            //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
          //<!-- FACTOR DROP-DOWN -->    
            '<div class="btn-group" style="width: 90px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' +
              GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
              //'<li role="presentation" class="dropdown-header">18-25</li>'+
              //'<li role="presentation" class="dropdown-header">15-18</li>'+
            '</ul>' +
          '</div>' +
          '</td></tr>' +
            '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

             // '<table align="left"><tr><td>'+ //nested table3

            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalMetricOperatorULId + '>' +
            '<li role="presentation" class="dropdown-header"><</li>' +
            '<li role="presentation" class="dropdown-header">=</li>' +
             '<li role="presentation" class="dropdown-header">></li>' +
             '<li role="presentation" class="dropdown-header">>=</li>' +
             '<li role="presentation" class="dropdown-header"><=</li>' +
             '<li role="presentation" class="dropdown-header">% Increase</li>' +
             '<li role="presentation" class="dropdown-header">% Decrease</li>' +
            '</ul>' +
            '</div>' +
            '</td>' +
            '<td class="labelcenter"  width="525px">' +//table2 column3
            '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;" ></td ><td>' + //
            '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
            '<td> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
             //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
     '<br></td>' +
         '</tr></table>' +//table 2 end
         '<br>' +
         //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
         '<table class="maintable" align="left">' + //table 3 start
        '<tr>' +
            '<td class="label-name"  style="width:600px">Trigger Description:</td>' +
            '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
         '</tr><tr class="label-name"></tr></table>' +
          '<table class="factors" align="left">' +//table4 start
        '<tr>' +
            '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                    //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
            '<div class="btn-group" style="width: 150px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalAssgnRoleButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalAssgnRoleULId + '>' +
              '<li role="presentation" class="dropdown-header">Care Manager</li>' +
              '<li role="presentation" class="dropdown-header">Nurse</li>' +
              '<li role="presentation" class="dropdown-header">Dietician</li>' +
              '<li role="presentation" class="dropdown-header">Care Navigator</li>' +
              '<li role="presentation" class="dropdown-header">Physiatrist</li>' +
              '<li role="presentation" class="dropdown-header">Cardiologist</li>' +
              '<li role="presentation" class="dropdown-header">Physician</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
         '</tr></table>' +//table 4 end
        '<br>' +
        '<table class="maintable" >' +//table5 start
        '<tr></tr> <tr><td>' +
            '<br><div class = "center-wrapper" ><div class="center-wrapper" >' +//SAVE CHANGES' +
            '<button class="btn btn-primary savebtn" type="button"  id=' + vVitalSaveButtonId + '>Save Changes</button>' +
            '</div></div>' +
            '</td></tr></table>' +
        //'<br>'+
        '</div><br>';//tablecontent div closes here

                            break;
                        case 100000005:
                            //vSectnName = "Psycho-Social / Behavioural Health";
                            vTblRowsPyschoSocial = vTblRowsPyschoSocial +
                                '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

          //<!-- FACTORS & VALUES -->     
         '<table class="maintable" align="left">' + //table 1 start
         '<tr>' +
            '<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
            '<td class="labelcenter" width="200px"> Target Value:</td>' +
            //'<td class="labelcenter" width="200px"> Target Value:</td>' +
            '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
            '<td class="labelcenter" width="120px"> Out of Range Frequency:<br></td>' +
         '</tr></table>' +//table 1 end

          '<table class="factors" align="left">' +//table 2 start
          '<tr>' +
          '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
            //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
          //<!-- FACTOR DROP-DOWN -->    
            '<div class="btn-group" style="width: 90px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' +
              GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
              //'<li role="presentation" class="dropdown-header">18-25</li>'+
              //'<li role="presentation" class="dropdown-header">15-18</li>'+
            '</ul>' +
          '</div>' +
          '</td></tr>' +
            '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

             // '<table align="left"><tr><td>'+ //nested table3

            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalMetricOperatorULId + '>' +
            '<li role="presentation" class="dropdown-header"><</li>' +
            '<li role="presentation" class="dropdown-header">=</li>' +
             '<li role="presentation" class="dropdown-header">></li>' +
             '<li role="presentation" class="dropdown-header">>=</li>' +
             '<li role="presentation" class="dropdown-header"><=</li>' +
             '<li role="presentation" class="dropdown-header">% Increase</li>' +
             '<li role="presentation" class="dropdown-header">% Decrease</li>' +
            '</ul>' +
            '</div>' +
            '</td>' +
            '<td class="labelcenter"  width="525px">' +//table2 column3
            '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;" ></td ><td>' + //
            '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
            '<td> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
             //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
     '<br></td>' +
         '</tr></table>' +//table 2 end
         '<br>' +
         //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
         '<table class="maintable" align="left">' + //table 3 start
        '<tr>' +
            '<td class="label-name"  style="width:600px">Trigger Description:</td>' +
            '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
         '</tr><tr class="label-name"></tr></table>' +
          '<table class="factors" align="left">' +//table4 start
        '<tr>' +
            '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                    //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
            '<div class="btn-group" style="width: 150px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalAssgnRoleButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalAssgnRoleULId + '>' +
              '<li role="presentation" class="dropdown-header">Care Manager</li>' +
              '<li role="presentation" class="dropdown-header">Nurse</li>' +
              '<li role="presentation" class="dropdown-header">Dietician</li>' +
              '<li role="presentation" class="dropdown-header">Care Navigator</li>' +
              '<li role="presentation" class="dropdown-header">Physiatrist</li>' +
              '<li role="presentation" class="dropdown-header">Cardiologist</li>' +
              '<li role="presentation" class="dropdown-header">Physician</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
         '</tr></table>' +//table 4 end
        '<br>' +
        '<table class="maintable" >' +//table5 start
        '<tr></tr> <tr><td>' +
            '<br><div class = "center-wrapper" ><div class="center-wrapper" >' +//SAVE CHANGES' +
            '<button class="btn btn-primary savebtn" type="button"  id=' + vVitalSaveButtonId + '>Save Changes</button>' +
            '</div></div>' +
            '</td></tr></table>' +
        //'<br>'+
        '</div><br>';//tablecontent div closes here

                            break;
                        case 100000006:
                            //vSectnName = "Wrap Up";
                            vTblRowsWrapUp = vTblRowsWrapUp +
                                                       '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

          //<!-- FACTORS & VALUES -->     
         '<table class="maintable" align="left">' + //table 1 start
         '<tr>' +
            '<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
            '<td class="labelcenter" width="200px"> Target Value:</td>' +
            //'<td class="labelcenter" width="200px"> Target Value:</td>' +
            '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
            '<td class="labelcenter" width="120px"> Out of Range Frequency:<br></td>' +
         '</tr></table>' +//table 1 end

          '<table class="factors" align="left">' +//table 2 start
          '<tr>' +
          '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
            //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
          //<!-- FACTOR DROP-DOWN -->    
            '<div class="btn-group" style="width: 90px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' +
              GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
              //'<li role="presentation" class="dropdown-header">18-25</li>'+
              //'<li role="presentation" class="dropdown-header">15-18</li>'+
            '</ul>' +
          '</div>' +
          '</td></tr>' +
            '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

             // '<table align="left"><tr><td>'+ //nested table3

            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalMetricOperatorULId + '>' +
            '<li role="presentation" class="dropdown-header"><</li>' +
            '<li role="presentation" class="dropdown-header">=</li>' +
             '<li role="presentation" class="dropdown-header">></li>' +
             '<li role="presentation" class="dropdown-header">>=</li>' +
             '<li role="presentation" class="dropdown-header"><=</li>' +
             '<li role="presentation" class="dropdown-header">% Increase</li>' +
             '<li role="presentation" class="dropdown-header">% Decrease</li>' +
            '</ul>' +
            '</div>' +
            '</td>' +
            '<td class="labelcenter"  width="525px">' +//table2 column3
            '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;" ></td ><td>' + //
            '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
            '<td> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
             //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
     '<br></td>' +
         '</tr></table>' +//table 2 end
         '<br>' +
         //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
         '<table class="maintable" align="left">' + //table 3 start
        '<tr>' +
            '<td class="label-name"  style="width:600px">Trigger Description:</td>' +
            '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
         '</tr><tr class="label-name"></tr></table>' +
          '<table class="factors" align="left">' +//table4 start
        '<tr>' +
            '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                    //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
            '<div class="btn-group" style="width: 150px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalAssgnRoleButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalAssgnRoleULId + '>' +
              '<li role="presentation" class="dropdown-header">Care Manager</li>' +
              '<li role="presentation" class="dropdown-header">Nurse</li>' +
              '<li role="presentation" class="dropdown-header">Dietician</li>' +
              '<li role="presentation" class="dropdown-header">Care Navigator</li>' +
              '<li role="presentation" class="dropdown-header">Physiatrist</li>' +
              '<li role="presentation" class="dropdown-header">Cardiologist</li>' +
              '<li role="presentation" class="dropdown-header">Physician</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
         '</tr></table>' +//table 4 end
        '<br>' +
        '<table class="maintable" >' +//table5 start
        '<tr></tr> <tr><td>' +
            '<br><div class = "center-wrapper" ><div class="center-wrapper" >' +//SAVE CHANGES' +
            '<button class="btn btn-primary savebtn" type="button"  id=' + vVitalSaveButtonId + '>Save Changes</button>' +
            '</div></div>' +
            '</td></tr></table>' +
        //'<br>'+
        '</div><br>';//tablecontent div closes here

                            break;
                        case 100000007:
                            //vSectnName = "Home Vitals";
                            vTblRowsHomeVitals = vTblRowsHomeVitals +
                                 '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

          //<!-- FACTORS & VALUES -->     
         '<table class="maintable" align="left">' + //table 1 start
         '<tr>' +
            '<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
            '<td class="labelcenter" width="200px"> Target Value:</td>' +
            //'<td class="labelcenter" width="200px"> Target Value:</td>' +
            '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
            '<td class="labelcenter" width="120px"> Out of Range Frequency:<br></td>' +
         '</tr></table>' +//table 1 end

          '<table class="factors" align="left">' +//table 2 start
          '<tr>' +
          '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
            //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
          //<!-- FACTOR DROP-DOWN -->    
            '<div class="btn-group" style="width: 90px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' +
              GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
              //'<li role="presentation" class="dropdown-header">18-25</li>'+
              //'<li role="presentation" class="dropdown-header">15-18</li>'+
            '</ul>' +
          '</div>' +
          '</td></tr>' +
            '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

             // '<table align="left"><tr><td>'+ //nested table3

            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalMetricOperatorButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalMetricOperatorULId + '>' +
            '<li role="presentation" class="dropdown-header"><</li>' +
            '<li role="presentation" class="dropdown-header">=</li>' +
             '<li role="presentation" class="dropdown-header">></li>' +
             '<li role="presentation" class="dropdown-header">>=</li>' +
             '<li role="presentation" class="dropdown-header"><=</li>' +
             '<li role="presentation" class="dropdown-header">% Increase</li>' +
             '<li role="presentation" class="dropdown-header">% Decrease</li>' +
            '</ul>' +
            '</div>' +
            '</td>' +
            '<td class="labelcenter"  width="525px">' +//table2 column3
            '<input type="text" class="txtfield" onChange="validateQuantitative(this);" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;" ></td ><td>' + //
            '<input  type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
            //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
            '<td> <input type="text" class="txtfieldquantitative" style="width:45px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
             //<!-- MODIFIER DROP-DOWN -->    
            '<div class="btn-group" style="width:60px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFreqAbNormalButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalFreqAbNormalULId + '>' +
              '<li role="presentation" class="dropdown-header">Daily</li>' +
              '<li role="presentation" class="dropdown-header">Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Bi-Weekly</li>' +
              '<li role="presentation" class="dropdown-header">Monthly</li>' +
              '<li role="presentation" class="dropdown-header">Quarterly</li>' +
              '<li role="presentation" class="dropdown-header">Every 6 Months</li>' +
              '<li role="presentation" class="dropdown-header">Every 12 Months</li>' +
              '<li role="presentation" class="dropdown-header">3 times a day</li>' +
              '<li role="presentation" class="dropdown-header">Every Encounter</li>' +
            '</ul>' +
          '</div>' +
     '<br></td>' +
         '</tr></table>' +//table 2 end
         '<br>' +
         //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
         '<table class="maintable" align="left">' + //table 3 start
        '<tr>' +
            '<td class="label-name"  style="width:600px">Trigger Description:</td>' +
            '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
         '</tr><tr class="label-name"></tr></table>' +
          '<table class="factors" align="left">' +//table4 start
        '<tr>' +
            '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                    //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
            '<div class="btn-group" style="width: 150px;">' +
            '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalAssgnRoleButtonId + '><span class="caret"></span></button>' +
            '<ul class="dropdown-menu" id=' + vVitalAssgnRoleULId + '>' +
              '<li role="presentation" class="dropdown-header">Care Manager</li>' +
              '<li role="presentation" class="dropdown-header">Nurse</li>' +
              '<li role="presentation" class="dropdown-header">Dietician</li>' +
              '<li role="presentation" class="dropdown-header">Care Navigator</li>' +
              '<li role="presentation" class="dropdown-header">Physiatrist</li>' +
              '<li role="presentation" class="dropdown-header">Cardiologist</li>' +
              '<li role="presentation" class="dropdown-header">Physician</li>' +
            '</ul>' +
          '</div>' +
          '</td>' +
         '</tr></table>' +//table 4 end
        '<br>' +
        '<table class="maintable" >' +//table5 start
        '<tr></tr> <tr><td>' +
            '<br><div class = "center-wrapper" ><div class="center-wrapper" >' +//SAVE CHANGES' +
            '<button class="btn btn-primary savebtn" type="button"  id=' + vVitalSaveButtonId + '>Save Changes</button>' +
            '</div></div>' +
            '</td></tr></table>' +
        //'<br>'+
        '</div><br>';//tablecontent div closes here

                            break;
                        case -1:
                            //vSectnName = "";
                            //vTblRowsNone = vTblRowsNone +
                            //                          '<br><div class="indicator-wrapper"><div style="height:30px;padding:5px;" class="flag-box-big ' + goalClass + '" style="">SET<br>FLAG</div><div class="sectiontitle_personalize">' + tri_VitalValueTypeName + '</div><div class="indicator-line  ' + goalClass + '"></div></div>' +  // indicator wrapper div open-closes

                            //     //<!-- FACTORS & VALUES -->     
                            //    '<table class="maintable" align="left">' + //table 1 start
                            //    '<tr>' +
                            //   	'<td class="labelcenter" width="90px">Factor / Modifier:</td>' +
                            //       '<td class="labelcenter" width="200px"> Target Value:</td>' +
                            //       //'<td class="labelcenter" width="200px"> Target Value:</td>' +
                            //       '<td class="labelcenter" width="120px"> In Range Frequency:</td>' +
                            //       '<td class="labelcenter" width="120px"> Out of Range Frequency:<br></td>' +
                            //    '</tr></table>' +//table 1 end

                            //     '<table class="factors" align="left">' +//table 2 start
                            //     '<tr>' +
                            //     '<td class="labelcenter" style="width:90px; padding-right:20px;">' + //table2 column1 
                            //       //GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
                            //     //<!-- FACTOR DROP-DOWN -->    
                            //       '<div class="btn-group" style="width: 90px;">' +
                            //       '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id=' + vVitalFactorButtonId + '><span class="caret"></span></button>' +
                            //       '<ul class="dropdown-menu" id=' + vVitalFactorULId + '>' +
                            //         GetModifierBasedOnValueType(results[i].tri_vitalsvaluetypeid.Id) +
                            //         //'<li role="presentation" class="dropdown-header">18-25</li>'+
                            //         //'<li role="presentation" class="dropdown-header">15-18</li>'+
                            //       '</ul>' +
                            //     '</div>' +
                            //     '</td></tr>' +
                            //       '<tr><td  width="270px"></td><td class="labelcenter" width="75px">' + //table2 column2  width="270px"

                            //        // '<table align="left"><tr><td>'+ //nested table3

                            //       //<!-- MODIFIER DROP-DOWN -->    
                            //       '<div class="btn-group">' +
                            //       '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&lt; &nbsp; &nbsp;<span class="caret"></span></button>' +
                            //       '<ul class="dropdown-menu">' +
                            //       '<li role="presentation" class="dropdown-header">=</li>' +
                            //        '<li role="presentation" class="dropdown-header">&gt;</li>' +
                            //       '</ul>' +
                            //       '</td>' +
                            //       '<td class="labelcenter"  width="525px">' +//table2 column3
                            //       '<input type="text" class="txtfield" id=' + vVitalFactorMETRICId + ' style="width:480px;text-align: left; padding-left: 10px;"></td ><td>' +
                            //       '<input type="text" class="txtfield" style="width:30px;" id=' + vVitalFactorMULTIPLIER_NORMALId + '>' + //multiplier for normal reading
                            //       //<!-- MODIFIER DROP-DOWN -->    
                            //       '<div class="btn-group" style="width:60px;">' +
                            //       '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">months <span class="caret"></span></button>' +
                            //       '<ul class="dropdown-menu">' +
                            //         '<li role="presentation" class="dropdown-header">days</li>' +
                            //         '<li role="presentation" class="dropdown-header">weeks</li>' +
                            //         '<li role="presentation" class="dropdown-header">years</li>' +
                            //       '</ul>' +
                            //     '</div>' +
                            //     '</td>' +
                            //       '<td> <input type="text" class="txtfield" style="width:30px;" id=' + vVitalFactorMULTIPLIER_ABNORMALId + '>' +    //table2 column6, multiplier for abnormal reading
                            //        //<!-- MODIFIER DROP-DOWN -->    
                            //       '<div class="btn-group" style="width:60px;">' +
                            //       '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">months <span class="caret"></span></button>' +
                            //       '<ul class="dropdown-menu">' +
                            //         '<li role="presentation" class="dropdown-header">days</li>' +
                            //         '<li role="presentation" class="dropdown-header">weeks</li>' +
                            //         '<li role="presentation" class="dropdown-header">years</li>' +
                            //       '</ul>' +
                            //     '</div>' +
                            //'<br></td>' +
                            //    '</tr></table>' +//table 2 end
                            //    '<br>' +
                            //    //<!-- DESCRIPTION & ASSIGNMENT ROLE -->     
                            //    '<table class="maintable" align="left">' + //table 3 start
                            //   '<tr>' +
                            //   	'<td class="label-name"  style="width:600px">Trigger Description:</td>' +
                            //       '<td class="label-name"  style="width:175px">Assignment Role:</td>' +
                            //    '</tr><tr class="label-name"></tr></table>' +
                            //     '<table class="factors" align="left">' +//table4 start
                            //   '<tr>' +
                            //       '<td style="width:900px; padding-left:10px; padding-right: 0px;"><input type="text" class="txtfield" style="width:900px;text-align: left; padding-left: 10px;background-color:#FAFAFA" id=' + vVitalFactorQUAL_ACTIONId + '></td><td style="width:320px; text-align:left;"></td><td>' +
                            //               //<!-- ASSIGNMENT ROLE DROP-DOWN -->    
                            //       '<div class="btn-group" style="width: 150px;">' +
                            //       '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Care Navigator <span class="caret"></span></button>' +
                            //       '<ul class="dropdown-menu">' +
                            //         '<li role="presentation" class="dropdown-header">Nurse</li>' +
                            //         '<li role="presentation" class="dropdown-header">Item 3</li>' +
                            //       '</ul>' +
                            //     '</div>' +
                            //     '</td>' +
                            //    '</tr></table>' +//table 4 end
                            //   '<br>' +
                            //   '<table class="factors" align="left">' +//table5 start
                            //   '<tr></tr><tr><td>' +
                            //       '<div class="center-wrapper" ><button type="button" style="background-color:#99cc00;" >Save Changes</button></div>' +
                            //       '</td></tr></table>' +
                            //   '<br>' +
                            //   '</div><br>';//tablecontent div closes here


                            break;

                    }
                    //add current row to previous row

                }
            }

            vFinalTbl = '<div style="margin-bottom: 60px;"><div style="margin-top:-30px;">' +
                        '<span style="color: #333333; font-size: 18px; text-align: left;"><h4>Select the Care Plan you want to add:</h4></span></div>' +
                        '<div style="padding-bottom: 20px;"><div class="carePathDropdown" style="float: left;"><input class="txtfield" id="carePaths" style="width: 100%;"/></div>' +
                        '<input type="text" name="searchonAddCarePlan" placeholder="Search for entries" style="float: right; font-style: italic;" /></div></div>' +
                        '<table class="tg"><tr><th class="tg-typedetail" >Symptoms</th></tr></table>' + vTblRowsSymptoms +
                        '<table class="tg"><tr><th class="tg-typedetail" >Tests / Care</th></tr></table>' + vTblRowsTestCare +
                        '<table class="tg"><tr><th class="tg-typedetail" >Medications</th></tr></table>' + vTblRowsMedications +
                        '<table class="tg"><tr><th class="tg-typedetail" >Activity</th></tr></table>' + vTblRowsActivity +
                        '<table class="tg"><tr><th class="tg-typedetail" >Nutrition</th></tr></table>' + vTblRowsNutrition +
                        '<table class="tg"><tr><th class="tg-typedetail" >PsychoSocial</th></tr></table>' + vTblRowsPyschoSocial +
                        '<table class="tg"><tr><th class="tg-typedetail" >Wrap Up</th></tr></table>' + vTblRowsWrapUp +
                        '<table class="tg"><tr><th class="tg-typedetail" >Home Vitals</th></tr></table>' + vTblRowsHomeVitals;
            //'<table class="tg"><tr><th class="tg-typedetail" >None</th></tr></table>' + vTblRowsNone;

            $('.Personalize-details').append(vFinalTbl);
            /// Add care plan dropdown
            var selectedCarePath;
            var selectedCarePathId;
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
                        // Need to updated the new function here
                        // updateVitalTypeRecords(contactId);

                        carePathDropdownArray = Enumerable.From(carePathDropdownArray)
                                                .Where(function (x) { return x.text !== selectedCarePath; })
                                                .ToArray();
                        // Bind new data to KendAutocomplete
                        kendoAutoCompleteWC.setDataSource(carePathDropdownArray);
                        $('#carePaths').val('');
                    }
                }
            };
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something

        }
    );
        //show hidden div
        //$('.Personalize-details').show();
        //$('.Personalize-details > .tg').click(function () {
        //    alert("Hello");
        //    //$('.btn:first-child').text($(this).text());
        //    //$('.btn:first-child').val($(this).text());

        //});
    $('.Personalize-details,.personalize-section').show();
}

function GetModifierBasedOnValueType(tri_vitalsvaluetypeid) {
    //alert(tri_vitalsvaluetypeid);
    var FinalModifierTag = "";
    
    var vULselector = tri_vitalsvaluetypeid + "_UL";

    SDK.JQuery.retrieveMultipleRecords(
    "tri_patientmodifier",
    "?$select=tri_name,tri_patientmodifierId,tri_vitalsvaluetype_tri_patientmodifier/tri_vitalsvaluetypeId&$expand=tri_vitalsvaluetype_tri_patientmodifier&$filter=tri_vitalsvaluetype_tri_patientmodifier/tri_vitalsvaluetypeId eq (guid'" + tri_vitalsvaluetypeid + "')",
    function (results) {
        //alert(results.length);
        var IncrementalModifierTag = "";
        for (var i = 0; i < results.length; i++) {
            var tri_name = results[i].tri_name;
            var tri_patientmodifierId = results[i].tri_patientmodifierId;
            var tri_vitalsvaluetype_tri_patientmodifier_tri_vitalsvaluetypeId = results[i].tri_vitalsvaluetype_tri_patientmodifier.tri_vitalsvaluetypeId;
            if (tri_patientmodifierId !== null && tri_patientmodifierId !== undefined && $('#' + tri_patientmodifierId).length === 0) {
                IncrementalModifierTag = IncrementalModifierTag + '<li role="presentation" class="dropdown-header" id=' + tri_patientmodifierId + '>' + tri_name + '</li>';
            }
            
        }
        var vitalUlSelector = $("#" + vULselector);
        vitalUlSelector.html('');
        vitalUlSelector.append(IncrementalModifierTag);//for default stage when no goal selected yet
       // $("#" + vULselector).append(IncrementalModifierTag).listview('refresh');//for default stage when no goal selected yet
     
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
      
       
       
    }
);


}
function GetSelectedGoalForCurrentVitalType(tri_vitalsvaluetypeid, contactId)
{
    //alert(tri_vitalsvaluetypeid);
    var vBTNselector = tri_vitalsvaluetypeid + "_BTN";
    var vMETRICselector = tri_vitalsvaluetypeid + "_METRIC";
    var vMETRICOPERATORselector = tri_vitalsvaluetypeid + "_MTRCOPRTRBTN";
    var vMULTIPLIER_NORMALselector = tri_vitalsvaluetypeid + "_MULTIPLIER_NORMAL";
    var vMULTIPLIER_ABNORMALselector = tri_vitalsvaluetypeid + "_MULTIPLIER_ABNORMAL";
    var vQUAL_ACTIONselector = tri_vitalsvaluetypeid + "_QUAL_ACTION";
    var ModIdStr = "";
    var ButtonText = "";
    if (tri_vitalsvaluetypeid !== undefined && tri_vitalsvaluetypeid !== null && tri_vitalsvaluetypeid.length > 0) {

        SDK.JQuery.retrieveMultipleRecords(
"tri_careplanjoin",
"?$select=new_GoalState,tri_actiontriggervalue,tri_activitydescription,tri_activitydescriptionabnormal,tri_activityrcurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_activityassignmentrole,tri_activityrecurrencemultipliernormal,tri_GoalName,tri_GoalSelected,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_PatientModifierId,tri_PatientModifierName,tri_qualitativeaction,tri_qualitativetarget,tri_targetmetricoperator,tri_typeofgoalcode,tri_vitalsvaluetypeid,tri_VitalValueTypeName&$filter=tri_PatientID/Id eq (guid'" + contactId + "') and tri_GoalSelected eq true and tri_vitalsvaluetypeid/Id eq (guid'" + tri_vitalsvaluetypeid + "')",
function (resultsjoin) {
    //alert(resultsjoin.length);
    for (var i = 0; i < resultsjoin.length; i++) {
        //var new_GoalState = results[i].new_GoalState;
        //var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
        //var tri_activitydescription = results[i].tri_activitydescription;
        //var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
        var tri_activityrcurrence = resultsjoin[i].tri_activityrcurrence.Value;
        var tri_activityrecurrenceabnormal = resultsjoin[i].tri_activityrecurrenceabnormal.Value;
        var tri_activityrecurrencemultiplierabnormal = resultsjoin[i].tri_activityrecurrencemultiplierabnormal;
        var tri_activityrecurrencemultipliernormal = resultsjoin[i].tri_activityrecurrencemultipliernormal;
        var tri_activityassignmentrole = resultsjoin[i].tri_activityassignmentrole.Value;
        //var tri_GoalName = results[i].tri_GoalName;
        //var tri_GoalSelected = results[i].tri_GoalSelected;
        //var tri_LastGoalDate = results[i].tri_LastGoalDate;
        //var tri_LastTargetValue = results[i].tri_LastTargetValue;
        //var tri_measuredetails = results[i].tri_measuredetails;
        var tri_metric = resultsjoin[i].tri_metric;
        var tri_PatientModifierId = resultsjoin[i].tri_PatientModifierId;
        var tri_PatientModifierName = resultsjoin[i].tri_PatientModifierName;
        //var tri_patientmodifier_tri_careplanjoin_tri_name = resultsjoin[i].tri_patientmodifier_tri_careplanjoin.tri_name;
        var tri_qualitativeaction = resultsjoin[i].tri_qualitativeaction;
        var tri_qualitativetarget = resultsjoin[i].tri_qualitativetarget;
        var tri_targetmetricoperator = resultsjoin[i].tri_targetmetricoperator.Value;
        var tri_typeofgoalcode = resultsjoin[i].tri_typeofgoalcode.Value;
        //var tri_vitalsvaluetypeid = results[i].tri_vitalsvaluetypeid;
        //var tri_VitalValueTypeName = results[i].tri_VitalValueTypeName;
    }

    // Adding null check
    if (tri_PatientModifierId !== null && tri_PatientModifierId !== undefined) {
        SDK.JQuery.retrieveRecord(
           tri_PatientModifierId.Id,
            "tri_patientmodifier",
            "tri_name",
            null,
            function (result) {
                var tri_name = result.tri_name;
                //$("#" + vBTNselector).val(tri_name);//append  modifier
                $("#" + vBTNselector).text(tri_name);
                $("#" + vBTNselector).val(tri_name);
            },
            function (error) {
                alert(error.message);
            }
        );
    }

    
    switch (tri_typeofgoalcode) {
        case 100000000:
            $("#" + vMETRICselector).val(tri_qualitativetarget).addClass('qualitative').removeClass('quantitative');
            $("#" + vMETRICOPERATORselector).hide();

            break;
        case 100000001:
            $("#" + vMETRICselector).val(tri_metric).removeClass('qualitative').addClass('quantitative');
           // $("#" + vMETRICselector).;
            $("#" + vMETRICOPERATORselector).show();
            GetSetTargetMetricOperator(tri_vitalsvaluetypeid, tri_targetmetricoperator);
            break;
        case null:
            $("#" + vMETRICselector).val(tri_qualitativetarget).addClass('qualitative').removeClass('quantitative');
            $("#" + vMETRICOPERATORselector).hide();
            break;
    }



    //$("#" + vMETRICselector).val(tri_qualitativetarget);//append  metric
    $("#" + vMULTIPLIER_NORMALselector).val(tri_activityrecurrencemultipliernormal);//append  metric
    $("#" + vMULTIPLIER_NORMALselector).spinner();//append  metric
    $("#" + vMULTIPLIER_ABNORMALselector).val(tri_activityrecurrencemultiplierabnormal);//append  metric
    $("#" + vMULTIPLIER_ABNORMALselector).spinner();//append  metric
    $("#" + vQUAL_ACTIONselector).val(tri_qualitativeaction).prop('readonly', true);//append  metric, make readonly and change  background color to grey

    
    GetSetFreqOsetNormal(tri_vitalsvaluetypeid, tri_activityrcurrence);
    GetSetFreqOsetAbnormal(tri_vitalsvaluetypeid, tri_activityrecurrenceabnormal);
    GetSetAssgnmntRoleOset(tri_vitalsvaluetypeid, tri_activityassignmentrole);
},
function (error) {
    alert(error.message);
},
function () {
    //On Complete - Do Something
    }
);
    }//if condition closes here
}

$(document).on('click', '.dropdown-menu li', function () {
    var vParentUL = $(this).parent('ul').attr('id');
    var vModId = $(this).attr('id');
    var vULguid = vParentUL.substr(vParentUL.indexOf("_"), vParentUL.length);
    var vBTNid = "";
     //alert(vParentUL);
    switch (vULguid) {
        case "_UL":
             vBTNid = vParentUL.replace(vULguid, "_BTN");
             var vVitalTypeId = vParentUL.replace("_UL", "");

             if (parent.Xrm !== undefined) {
                 var contactId = parent.Xrm.Page.data.entity.getId();
             }
             
             GetGoalForCurrentModifier(vModId, vVitalTypeId, contactId, $(this).text());

            //$("#" + vBTNid).text($(this).text());
            //$("#" + vBTNid).val($(this).text());
             break;
        case "_PRSNLUL":
            vBTNid = vParentUL.replace(vULguid, "_BTN");
            var vVitalTypeId = vParentUL.replace("_PRSNLUL", "");

            if (parent.Xrm !== undefined) {
                var contactId = parent.Xrm.Page.data.entity.getId();
            }

            GetGoalForCurrentModifier(vModId, vVitalTypeId, contactId, $(this).text());

            //$("#" + vBTNid).text($(this).text());
            //$("#" + vBTNid).val($(this).text());
            break;
        case "_MTRCOPRTRUL":
            vBTNid = vParentUL.replace(vULguid, "_MTRCOPRTRBTN");
           
            $("#" + vBTNid).text($(this).text());
            $("#" + vBTNid).val($(this).text());
            break;
        case "_FRQNRMLUL":
            vBTNid = vParentUL.replace(vULguid, "_FRQNRMLBTN");

            $("#" + vBTNid).text($(this).text());
            $("#" + vBTNid).val($(this).text());
            //$("#" + vBTNid).spinner();
            break;
        case "_FRQABNRMLUL":
            vBTNid = vParentUL.replace(vULguid, "_FRQABNRMLBTN");

            $("#" + vBTNid).text($(this).text());
            $("#" + vBTNid).val($(this).text());
            //$("#" + vBTNid).spinner();
            break; 
        case "_ASSGNROLEUL":
            vBTNid = vParentUL.replace(vULguid, "_ASSGNROLEBTN");

            $("#" + vBTNid).text($(this).text());
            $("#" + vBTNid).val($(this).text());
            break;
        case "_PRSNLULNRMLRCR":
           // vBTNid = vParentUL.replace(vULguid, "_ASSGNROLEBTN");

            $('.personalizerecurrnormal').text($(this).text());
            $('.personalizerecurrnormal').val($(this).text());
            break;
        case "_PRSNLULABNRMLRCR":
            //vBTNid = vParentUL.replace(vULguid, "_ASSGNROLEBTN");

            $('.personalizerecurrabnormal').text($(this).text());
            $('.personalizerecurrabnormal').val($(this).text());
            break;
        case "_PRSNLULOPRTR":
            //vBTNid = vParentUL.replace(vULguid, "_ASSGNROLEBTN");

            $('.personalizeoperator').text($(this).text());
            $('.personalizeoperator').val($(this).text());
            break;

    }
   
});

function GetSetTargetMetricOperator(tri_vitalsvaluetypeid, Vmetricoperator) {
    
    if (tri_vitalsvaluetypeid !== null && Vmetricoperator !== null) {
         
        var vBTNselector = tri_vitalsvaluetypeid + "_MTRCOPRTRBTN";
               
        switch (Vmetricoperator) {
            case 167410000:
                $("#" + vBTNselector).text(">");
                $("#" + vBTNselector).val(167410000);
                break;
            case 167410001:
                $("#" + vBTNselector).text("<");
                $("#" + vBTNselector).val(167410001);
                break;
            case 167410002:
                $("#" + vBTNselector).text("=");
                $("#" + vBTNselector).val(167410002);
                break;
            case 167410003:
                $("#" + vBTNselector).text("% Increase");
                $("#" + vBTNselector).val(167410003);
                break;
            case 167410004:
                $("#" + vBTNselector).text("% Decrease");
                $("#" + vBTNselector).val(167410004);
                break;
            case 167410005:
                $("#" + vBTNselector).text(">=");
                $("#" + vBTNselector).val(167410005);
                break;
            case 167410006:
                $("#" + vBTNselector).text("<=");
                $("#" + vBTNselector).val(167410006);
                break;

        }
    }
};

function GetSetFreqOsetNormal(tri_vitalsvaluetypeid, VFreqOSVal) {

    if (tri_vitalsvaluetypeid !== null && VFreqOSVal !== null) {
        //var vBTNselector = "";
        //if (NormalAbnormalFlag === "Normal") {
        var vBTNselector = tri_vitalsvaluetypeid + "_FRQNRMLBTN";
        //};
        //if (NormalAbnormalFlag === "Abormal") {
        //    vBTNselector = tri_vitalsvaluetypeid + "_FRQABNRMLBTN";
        //};
        switch (VFreqOSVal) {
            case 1:
                $("#" + vBTNselector).text("Daily");
                $("#" + vBTNselector).val(1);
                break;
            case 167410000:
                $("#" + vBTNselector).text("Weekly");
                $("#" + vBTNselector).val(167410000);
                break;
            case 167410001:
                $("#" + vBTNselector).text("Bi-Weekly");
                $("#" + vBTNselector).val(167410001);
                break;
            case 167410002:
                $("#" + vBTNselector).text("Monthly");
                $("#" + vBTNselector).val(167410002);
                break;
            case 167410003:
                $("#" + vBTNselector).text("Quarterly");
                $("#" + vBTNselector).val(167410003);
                break;
            case 167410004:
                $("#" + vBTNselector).text("Every 6 Months");
                $("#" + vBTNselector).val(167410004);
                break;
            case 167410005:
                $("#" + vBTNselector).text("Every 12 Months");
                $("#" + vBTNselector).val(167410005);
                break;
            case 167410006:
                $("#" + vBTNselector).text("3 times a day");
                $("#" + vBTNselector).val(167410006);
                break;
            case 167410007:
                $("#" + vBTNselector).text("Every Encounter");
                $("#" + vBTNselector).val(167410007);
                break;

        }
    };
}

function GetSetFreqOsetAbnormal(tri_vitalsvaluetypeid, VFreqOSVal) {

    if (tri_vitalsvaluetypeid !== null && VFreqOSVal !== null) {
       
        var vBTNselector = tri_vitalsvaluetypeid + "_FRQABNRMLBTN";
        
        switch (VFreqOSVal) {
            case 1:
                $("#" + vBTNselector).text("Daily");
                $("#" + vBTNselector).val(1);
                break;
            case 167410000:
                $("#" + vBTNselector).text("Weekly");
                $("#" + vBTNselector).val(167410000);
                break;
            case 167410001:
                $("#" + vBTNselector).text("Bi-Weekly");
                $("#" + vBTNselector).val(167410001);
                break;
            case 167410002:
                $("#" + vBTNselector).text("Monthly");
                $("#" + vBTNselector).val(167410002);
                break;
            case 167410003:
                $("#" + vBTNselector).text("Quarterly");
                $("#" + vBTNselector).val(167410003);
                break;
            case 167410004:
                $("#" + vBTNselector).text("Every 6 Months");
                $("#" + vBTNselector).val(167410004);
                break;
            case 167410005:
                $("#" + vBTNselector).text("Every 12 Months");
                $("#" + vBTNselector).val(167410005);
                break;
            case 167410006:
                $("#" + vBTNselector).text("3 times a day");
                $("#" + vBTNselector).val(167410006);
                break;
            case 167410007:
                $("#" + vBTNselector).text("Every Encounter");
                $("#" + vBTNselector).val(167410007);
                break;

        }
    };
}

function GetSetAssgnmntRoleOset(tri_vitalsvaluetypeid, VRoleOSVal) {
    //alert(VRoleOSVal);
    if (tri_vitalsvaluetypeid !== null && VRoleOSVal !== null) {

        var vBTNselector = tri_vitalsvaluetypeid + "_ASSGNROLEBTN";

        switch (VRoleOSVal) {
            
            case 167410000:
                $("#" + vBTNselector).text("Care Manager");
                $("#" + vBTNselector).val(167410000);
                break;
            case 167410001:
                $("#" + vBTNselector).text("Nurse");
                $("#" + vBTNselector).val(167410001);
                break;
            case 167410002:
                $("#" + vBTNselector).text("Dietician");
                $("#" + vBTNselector).val(167410002);
                break;
            case 167410003:
                $("#" + vBTNselector).text("Care Navigator");
                $("#" + vBTNselector).val(167410003);
                break;
            case 100000000:
                $("#" + vBTNselector).text("Physiatrist");
                $("#" + vBTNselector).val(100000000);
                break;
            case 100000001:
                $("#" + vBTNselector).text("Cardiologist");
                $("#" + vBTNselector).val(100000001);
                break;
            case 100000002:
                $("#" + vBTNselector).text("Physician");
                $("#" + vBTNselector).val(100000002);
                break;
            

        }
    };
}

function GetGoalForCurrentModifier(vModId, tri_vitalsvaluetypeid, contactId,currText) {

    var vBTNselector = tri_vitalsvaluetypeid + "_BTN";
    var vMETRICselector = tri_vitalsvaluetypeid + "_METRIC";
    var vMETRICOPERATORselector = tri_vitalsvaluetypeid + "_MTRCOPRTRBTN";
    var vMULTIPLIER_NORMALselector = tri_vitalsvaluetypeid + "_MULTIPLIER_NORMAL";
    var vMULTIPLIER_ABNORMALselector = tri_vitalsvaluetypeid + "_MULTIPLIER_ABNORMAL";
    var vQUAL_ACTIONselector = tri_vitalsvaluetypeid + "_QUAL_ACTION";
    var ModIdStr = "";
    var ButtonText = "";
    if (tri_vitalsvaluetypeid !== undefined && tri_vitalsvaluetypeid !== null && tri_vitalsvaluetypeid.length > 0 && vModId !== undefined && vModId !== null && vModId.length > 0) {

        SDK.JQuery.retrieveMultipleRecords(
"tri_careplanjoin",
"?$select=new_GoalState,tri_actiontriggervalue,tri_activitydescription,tri_activitydescriptionabnormal,tri_activityrcurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_activityassignmentrole,tri_activityrecurrencemultipliernormal,tri_GoalName,tri_GoalSelected,tri_LastGoalDate,tri_LastTargetValue,tri_measuredetails,tri_metric,tri_PatientModifierId,tri_PatientModifierName,tri_qualitativeaction,tri_qualitativetarget,tri_targetmetricoperator,tri_typeofgoalcode,tri_vitalsvaluetypeid,tri_VitalValueTypeName&$filter=tri_PatientID/Id eq (guid'" + contactId + "') and tri_PatientModifierId/Id  eq (guid'" + vModId + "') and tri_vitalsvaluetypeid/Id eq (guid'" + tri_vitalsvaluetypeid + "')",
function (resultsjoin) {
    if (resultsjoin.length > 0) {
        //alert(resultsjoin.length);
        $("#" + vBTNselector).text(currText);
        $("#" + vBTNselector).val(currText);
        
        for (var i = 0; i < resultsjoin.length; i++) {
            //var new_GoalState = results[i].new_GoalState;
            //var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
            //var tri_activitydescription = results[i].tri_activitydescription;
            //var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activityrcurrence = resultsjoin[i].tri_activityrcurrence.Value;
            var tri_activityrecurrenceabnormal = resultsjoin[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = resultsjoin[i].tri_activityrecurrencemultiplierabnormal;
            var tri_activityrecurrencemultipliernormal = resultsjoin[i].tri_activityrecurrencemultipliernormal;
            var tri_activityassignmentrole = resultsjoin[i].tri_activityassignmentrole.Value;
            //var tri_GoalName = results[i].tri_GoalName;
            //var tri_GoalSelected = results[i].tri_GoalSelected;
            //var tri_LastGoalDate = results[i].tri_LastGoalDate;
            //var tri_LastTargetValue = results[i].tri_LastTargetValue;
            //var tri_measuredetails = results[i].tri_measuredetails;
            var tri_metric = resultsjoin[i].tri_metric;
            var tri_PatientModifierId = resultsjoin[i].tri_PatientModifierId;
            var tri_PatientModifierName = resultsjoin[i].tri_PatientModifierName;
            //var tri_patientmodifier_tri_careplanjoin_tri_name = resultsjoin[i].tri_patientmodifier_tri_careplanjoin.tri_name;
            var tri_qualitativeaction = resultsjoin[i].tri_qualitativeaction;
            var tri_qualitativetarget = resultsjoin[i].tri_qualitativetarget;
            var tri_targetmetricoperator = resultsjoin[i].tri_targetmetricoperator.Value;
            var tri_typeofgoalcode = resultsjoin[i].tri_typeofgoalcode.Value;
            //var tri_vitalsvaluetypeid = results[i].tri_vitalsvaluetypeid;
            //var tri_VitalValueTypeName = results[i].tri_VitalValueTypeName;
        }


        SDK.JQuery.retrieveRecord(
           tri_PatientModifierId.Id,
            "tri_patientmodifier",
            "tri_name",
            null,
            function (result) {
                var tri_name = result.tri_name;
                $("#" + vBTNselector).html(tri_name);//append  modifier
            },
            function (error) {
                alert(error.message);
            }
        );

        switch (tri_typeofgoalcode) {
            case 100000000:
                $("#" + vMETRICselector).val(tri_qualitativetarget).addClass('qualitative').removeClass('quantitative');
                $("#" + vMETRICOPERATORselector).hide();

                break;
            case 100000001:
                $("#" + vMETRICselector).val(tri_metric).removeClass('qualitative').addClass('quantitative');
                $("#" + vMETRICselector).toFixed(2);
                $("#" + vMETRICOPERATORselector).show();
                GetSetTargetMetricOperator(tri_vitalsvaluetypeid, tri_targetmetricoperator);
                break;
            case null:
                $("#" + vMETRICselector).val(tri_qualitativetarget).addClass('qualitative').removeClass('quantitative');
                $("#" + vMETRICOPERATORselector).hide();
                break;
        }

       // $("#" + vMETRICselector).val(tri_qualitativetarget);//append  metric
        $("#" + vMULTIPLIER_NORMALselector).val(tri_activityrecurrencemultipliernormal);//append  metric
        $("#" + vMULTIPLIER_NORMALselector).spinner();//append  metric
        $("#" + vMULTIPLIER_ABNORMALselector).val(tri_activityrecurrencemultiplierabnormal);//append  metric
        $("#" + vMULTIPLIER_ABNORMALselector).spinner();//append  metric
        $("#" + vQUAL_ACTIONselector).val(tri_qualitativeaction).prop('readonly', true);//append  metric, make readonly and change  background color to grey

        //GetSetTargetMetricOperator(tri_vitalsvaluetypeid, tri_targetmetricoperator);
        GetSetFreqOsetNormal(tri_vitalsvaluetypeid, tri_activityrcurrence);
        GetSetFreqOsetAbnormal(tri_vitalsvaluetypeid, tri_activityrecurrenceabnormal);
        GetSetAssgnmntRoleOset(tri_vitalsvaluetypeid, tri_activityassignmentrole);
    }
    else {
        alert("No Goals for this Modifier");
    }
},
function (error) {
    alert("There are no Goals for this Modifier");
},
function () {
    //On Complete - Do Something
}
);
    }//if condition closes here

}



$(document).on('click', '.savebtn', function () {
    //alert($(this).attr('id'));
    var vVitalTypIdStr = $(this).attr('id');
    var vVitalTypId = vVitalTypIdStr.replace("_SAVEBTN", "");
    var vModfrName = $("#" + vVitalTypId + "_BTN").text();
    var vMetricOprtrTxt = $("#" + vVitalTypId + "_MTRCOPRTRBTN").text();
    var vTargetValueTxt = $("#" + vVitalTypId + "_METRIC").val();
    var vFreqNormalTxt = $("#" + vVitalTypId + "_FRQNRMLBTN").text();
    var vFreqAbNormalTxt = $("#" + vVitalTypId + "_FRQABNRMLBTN").text();
    var vAssignmentRoleTxt = $("#" + vVitalTypId + "_ASSGNROLEBTN").text();
    var vMultiplierNormalTxt = $("#" + vVitalTypId + "_MULTIPLIER_NORMAL").val();
    var vMultiplierAbormalTxt = $("#" + vVitalTypId + "_MULTIPLIER_ABNORMAL").val();

    if (parent.Xrm !== undefined) {
        var contactId = parent.Xrm.Page.data.entity.getId();
    }
    var vOsetValMetricOperator = GetOsetValFromTextMtrcOprtr(vMetricOprtrTxt);
    var vOsetValFreqNormal = GetOsetValFromTextFreqNormal(vFreqNormalTxt);
    var vOsetValFreqAbNormal = GetOsetValFromTextFreqAbNormal(vFreqAbNormalTxt);
    var vOsetValAssignmentRole = GetOsetValFromTextAssignmentRole(vAssignmentRoleTxt);
    //alert(vOsetValAssignmentRole);
    GetModfrIdFromName(vVitalTypId,contactId,vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, vOsetValAssignmentRole, vMultiplierNormalTxt, vMultiplierAbormalTxt);
   //alert(strModfrId);
    //alert(vModfrName + "-" + vMetricOprtrTxt + "-" + vTargetValueTxt + "-" + vFreqNormalTxt + "-" + vFreqAbNormalTxt + "-" + vAssignmentRoleTxt + "-" + vMultiplierNormalTxt + "-" + vMultiplierAbormalTxt);

});

$(document).on('click', '.savebtn_prsnlize', function () {
    //alert($(this).attr('id'));
    var vVitalTypIdStr = $(this).attr('id');
    var vVitalTypId = vVitalTypIdStr.replace("_PRSNLSAVEBTN", "");
    var vModfrName = $('.personalizemodifierbutton').text();
    var vMetricOprtrTxt = $('.personalizeoperator').text();
    var vTargetValueTxt = $('.personalizetargetval').val();
    var vFreqNormalTxt = $('.personalizerecurrnormal').text();
    var vFreqAbNormalTxt = $('.personalizerecurrabnormal').text();
    var vAssignmentRoleTxt = "Care Manager" //$("#" + vVitalTypId + "_ASSGNROLEBTN").text();
    var vMultiplierNormalTxt = $('.personalizenormalmultiplier').val();
    var vMultiplierAbormalTxt = $('.personalizeabnormalmultiplier').val();

    //alert(vFreqNormalTxt);
    if (parent.Xrm !== undefined) {
        var contactId = parent.Xrm.Page.data.entity.getId();
    }
    var vOsetValMetricOperator = GetOsetValFromTextMtrcOprtr(vMetricOprtrTxt);
    var vOsetValFreqNormal = GetOsetValFromTextFreqNormal(vFreqNormalTxt);
    var vOsetValFreqAbNormal = GetOsetValFromTextFreqAbNormal(vFreqAbNormalTxt);
    var vOsetValAssignmentRole = GetOsetValFromTextAssignmentRole(vAssignmentRoleTxt);
    //alert(vOsetValMetricOperator);
    GetModfrIdFromName(vVitalTypId, contactId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, vOsetValAssignmentRole, vMultiplierNormalTxt, vMultiplierAbormalTxt);
    //alert(strModfrId);
    //alert(vModfrName + "-" + vMetricOprtrTxt + "-" + vTargetValueTxt + "-" + vFreqNormalTxt + "-" + vFreqAbNormalTxt + "-" + vAssignmentRoleTxt + "-" + vMultiplierNormalTxt + "-" + vMultiplierAbormalTxt);

});

function GetModfrIdFromName(vVitalTypId,contactId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, vOsetValAssignmentRole, vMultiplierNormalTxt, vMultiplierAbormalTxt) {
   var vModfrIdStr;

    SDK.REST.retrieveMultipleRecords(
    "tri_patientmodifier",
    "?$select=tri_name,tri_patientmodifierId,tri_VitalValueTypeId&$filter=tri_name eq '" + vModfrName + "'",
    function (results) {
        //alert(results.length);
        for (var i = 0; i < results.length; i++) {
            var tri_name = results[i].tri_name;
            var tri_patientmodifierId = results[i].tri_patientmodifierId;
            var tri_VitalValueTypeId = results[i].tri_VitalValueTypeId.Id;
           // alert(tri_VitalValueTypeId + "===" + vVitalTypId);
            if (tri_VitalValueTypeId === vVitalTypId && tri_patientmodifierId !== undefined && tri_patientmodifierId !== null && tri_patientmodifierId.length>0) {
                vModfrIdStr = tri_patientmodifierId;
                
                UpdateCarePlanJoin(vVitalTypId,contactId, tri_patientmodifierId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, vOsetValAssignmentRole, vMultiplierNormalTxt, vMultiplierAbormalTxt)
            };
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);
   // return vModfrIdStr;
}

function GetOsetValFromTextMtrcOprtr(vMetricOprtrTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

     if (vMetricOprtrTxt !== null && vMetricOprtrTxt.length > 0) {
         switch (vMetricOprtrTxt) {
             case ">":
                 OprtrVal = "167410000";
                 break;
             case "<":
                 OprtrVal = "167410001";
                 break;
             case "=":
                 OprtrVal = "167410002";
                 break;
             case "% Increase":
                 OprtrVal = "167410003";
                 break;
             case "% Decrease":
                 OprtrVal = "167410004";
                 break;
             case ">=":
                 OprtrVal = "167410005";
                 break;
             case "<=":
                 OprtrVal = "167410006";
                 break;
         }
     }
     else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function GetOsetValFromTextFreqNormal(vFreqNormalTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vFreqNormalTxt !== null && vFreqNormalTxt.length > 0) {
        switch (vFreqNormalTxt) {
            case "Daily":
                OprtrVal = "1";
                break;
            case "Weekly":
                OprtrVal = "167410000";
                break;
            case "Bi-Weekly":
                OprtrVal = "167410001";
                break;
            case "Monthly":
                OprtrVal = "167410002";
                break;
            case "Quarterly":
                OprtrVal = "167410003";
                break;
            case "Every 6 Months":
                OprtrVal = "167410004";
                break;
            case "Every 12 Months":
                OprtrVal = "167410005";
                break;
            case "3 times a day":
                OprtrVal = "167410006";
                break;
            case "Every Encounter":
                OprtrVal = "167410007";
                break;
        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function GetOsetValFromTextFreqAbNormal(vFreqAbNormalTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vFreqAbNormalTxt !== null && vFreqAbNormalTxt.length > 0) {
        switch (vFreqAbNormalTxt) {
            case "Daily":
                OprtrVal = "1";
                break;
            case "Weekly":
                OprtrVal = "167410000";
                break;
            case "Bi-Weekly":
                OprtrVal = "167410001";
                break;
            case "Monthly":
                OprtrVal = "167410002";
                break;
            case "Quarterly":
                OprtrVal = "167410003";
                break;
            case "Every 6 Months":
                OprtrVal = "167410004";
                break;
            case "Every 12 Months":
                OprtrVal = "167410005";
                break;
            case "3 times a day":
                OprtrVal = "167410006";
                break;
            case "Every Encounter":
                OprtrVal = "167410007";
                break;
        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function GetOsetValFromTextAssignmentRole(vAssignmentRoleTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vAssignmentRoleTxt !== null && vAssignmentRoleTxt.length > 0) {
        switch (vAssignmentRoleTxt) {
            
            case "Care Manager":
                OprtrVal = "167410000";
                break;
            case "Nurse":
                OprtrVal = "167410001";
                break;
            case "Dietician":
                OprtrVal = "167410002";
                break;
            case "Care Navigator":
                OprtrVal = "167410003";
                break;
            case "Physiatrist":
                OprtrVal = "100000000";
                break;
            case "Cardiologist":
                OprtrVal = "100000001";
                break;
            case "Physician":
                OprtrVal = "100000002";
                break;
           
        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function UpdateCarePlanJoin(vVitalTypId, contactId, modifierId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vOsetValFreqNormal, vOsetValFreqAbNormal, vOsetValAssignmentRole, vMultiplierNormalTxt, vMultiplierAbormalTxt) {
    //alert("hello");
    SDK.REST.retrieveMultipleRecords(
    "tri_careplanjoin",
    "?$select=tri_CarePlanGoalID,tri_careplanjoinId,tri_GoalSelected,tri_typeofgoalcode&$filter=tri_PatientID/Id eq (guid'" + contactId + "') and tri_vitalsvaluetypeid/Id eq (guid'" + vVitalTypId + "') and tri_PatientModifierId/Id eq (guid'" + modifierId + "')",
    function (results) {
        if (results.length > 0) {
            var boolCpgoal = true;

            for (var i = 0; i < results.length; i++) {
                var tri_CarePlanGoalID = results[i].tri_CarePlanGoalID.Id;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_careplanjoinId = results[i].tri_careplanjoinId;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;

                
                var tri_careplanjoin = {}
                var tri_cccareplangoal = {}

                //if (tri_typeofgoalcode = 100000000) {
                //    tri_careplanjoin.tri_qualitativetarget = vTargetValueTxt;
                //    tri_cccareplangoal.tri_qualitativetarget = vTargetValueTxt;
                //}

                //if (tri_typeofgoalcode = 100000001) {
                //    tri_careplanjoin.tri_metric = parseInt("vTargetValueTxt", 10);
                //    tri_cccareplangoal.tri_Metric = parseInt("vTargetValueTxt", 10);
                //}

                switch (tri_typeofgoalcode) {
                    case 100000000:
                        tri_careplanjoin.tri_qualitativetarget = vTargetValueTxt;
                        tri_careplanjoin.tri_qualitativetarget = vTargetValueTxt;
                        break;
                    case 100000001:
                        tri_careplanjoin.tri_metric = parseInt("vTargetValueTxt", 10);
                        tri_cccareplangoal.tri_Metric = parseInt("vTargetValueTxt", 10);
                        tri_careplanjoin.tri_targetmetricoperator = { Value: parseInt(vOsetValMetricOperator, 10) };
                        tri_cccareplangoal.tri_targetmetricoperator = { Value: parseInt(vOsetValMetricOperator, 10) };
                        break;
                }

                
                tri_careplanjoin.tri_activityrcurrence = { Value: parseInt(vOsetValFreqNormal, 10) };
                tri_cccareplangoal.tri_activityrecurrence = { Value: parseInt(vOsetValFreqNormal, 10) };
                tri_careplanjoin.tri_activityrecurrenceabnormal = { Value: parseInt(vOsetValFreqAbNormal, 10) };
                tri_cccareplangoal.tri_activityrecurrenceabnormal = { Value: parseInt(vOsetValFreqAbNormal, 10) };
                tri_careplanjoin.tri_GoalSelected = boolCpgoal;
                tri_cccareplangoal.tri_GoalSelected = boolCpgoal;
                tri_careplanjoin.tri_activityrecurrencemultipliernormal = parseInt(vMultiplierNormalTxt, 10);
                tri_cccareplangoal.tri_activityrecurrencemultipliernormal = parseInt(vMultiplierNormalTxt, 10);
                tri_careplanjoin.tri_activityrecurrencemultiplierabnormal = parseInt(vMultiplierAbormalTxt, 10);
                tri_cccareplangoal.tri_activityrecurrencemultiplierabnormal = parseInt(vMultiplierAbormalTxt, 10);
                tri_careplanjoin.tri_activityassignmentrole = { Value: parseInt(vOsetValAssignmentRole, 10) };
                tri_cccareplangoal.tri_activityassignmentrole = { Value: parseInt(vOsetValAssignmentRole, 10) };
                
                ////alert(planjoinid);
                SDK.REST.updateRecord(tri_careplanjoinId, tri_careplanjoin, "tri_careplanjoin", updateSuccessCallback, errorHandler);
                SDK.REST.updateRecord(tri_CarePlanGoalID, tri_cccareplangoal, "tri_cccareplangoal", updateSuccessCallback, errorHandler);
            }
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
        alert("done");
    }
);

}
function updateSuccessCallback() {
    // alert("The record changes were saved");
}
function errorHandler(error) {
    alert(error.message);
}

function validateQuantitative(thistxtBox) {
   
    if ($(thistxtBox).hasClass('quantitative')) {
        //alert($(thistxtBox).val());
    }

    //alert($(thistxtBox).attr('class'));
}
//$(function () {
 
//});
//$('.personalizedropdownmenu').click(function () {
//    alert("hello");
//});

