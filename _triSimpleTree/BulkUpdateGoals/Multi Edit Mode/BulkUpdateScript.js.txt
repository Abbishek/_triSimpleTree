var contactObjectId = '';
var carePlanGoalArray = [];

$(document).ready(function () {

    //alert("hello");
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function () {

        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();

        var vButtonName = $(this).attr("name");

        switch (vButtonName) {
            case "personalgoalsnext":
                $('.testsvitalsrowclass').show();
                $('.personalgoalrowclass,.medicationsrowclass, .supportservicesrowclass, .activitynutritionrowclass, .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "testsvitalsnext":
                $('.medicationsrowclass').show();
                $('.personalgoalrowclass,.testsvitalsrowclass, .supportservicesrowclass, .activitynutritionrowclass, .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "medicationsnext":
                $('.activitynutritionrowclass').show();
                $('.personalgoalrowclass,.medicationsrowclass,.testsvitalsrowclass, .supportservicesrowclass, .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "activitynutritionnext":
                $('.supportservicesrowclass').show();
                $('.personalgoalrowclass,.medicationsrowclass,.testsvitalsrowclass,.activitynutritionrowclass , .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "supportservicesnext":
                $('.behavioralhealthrowclass').show();
                $('.personalgoalrowclass,.medicationsrowclass,.testsvitalsrowclass,.activitynutritionrowclass ,.supportservicesrowclass , .wrapuprowclass').hide();
                break;
            case "behavioralhealthnext":
                $('.wrapuprowclass').show();
                $('.personalgoalrowclass,.medicationsrowclass,.testsvitalsrowclass,.activitynutritionrowclass ,.supportservicesrowclass , .behavioralhealthrowclass').hide();
                break;

        };


        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.0;
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

    //$(".submit").click(function () {
    //    return false;
    //})

    $("#progressbar li").on('click', function () {


        current_fs;
        next_fs;


        //get the current visible fieldset and set it to current_fs variable
        $("fieldset").each(function () {
            if ($(this).is(":visible")) {
                current_fs = $(this);
            };
        });

        var vCurrLIid = $(this).attr('id');


        switch (vCurrLIid) {
            case "lipersonalgoals":
                next_fs = $('.fspersonalgoals');
                $('.personalgoalrowclass').show();
                $('.testsvitalsrowclass,.medicationsrowclass, .supportservicesrowclass, .activitynutritionrowclass, .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "litestvitals":
                next_fs = $('.fstestvitals');
                $('.testsvitalsrowclass').show();
                $('.personalgoalrowclass,.medicationsrowclass, .supportservicesrowclass, .activitynutritionrowclass, .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "limedications":
                next_fs = $('.fsmedications');
                $('.medicationsrowclass').show();
                $('.personalgoalrowclass,.testsvitalsrowclass, .supportservicesrowclass, .activitynutritionrowclass, .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "liactivitynutrition":
                next_fs = $('.fsactivitynutrition');
                $('.activitynutritionrowclass').show();
                $('.personalgoalrowclass,.testsvitalsrowclass, .supportservicesrowclass,.medicationsrowclass , .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "lisupportservices":
                next_fs = $('.fssupportservices');
                $('.supportservicesrowclass').show();
                $('.personalgoalrowclass,.testsvitalsrowclass,.activitynutritionrowclass ,.medicationsrowclass , .behavioralhealthrowclass, .wrapuprowclass').hide();
                break;
            case "libehavioralhealth":
                next_fs = $('.fsbehavioralhealth');
                $('.behavioralhealthrowclass').show()
                $('.personalgoalrowclass,.testsvitalsrowclass,.activitynutritionrowclass ,.medicationsrowclass ,.supportservicesrowclass , .wrapuprowclass').hide();
                break;
            case "liwrapup":
                next_fs = $('.fswrapup');
                $('.wrapuprowclass').show();
                $('.personalgoalrowclass,.testsvitalsrowclass,.activitynutritionrowclass ,.medicationsrowclass ,.supportservicesrowclass ,.behavioralhealthrowclass ').hide();
                break;
        }

        //$(this).addClass("disabledli");
        //$(this).prevAll("li").removeClass("disabledli");
        //$(this).nextAll("li").removeClass("disabledli");

        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active").prevAll().addClass("active");
        $("#progressbar li").eq($("fieldset").index(next_fs)).nextAll().removeClass("active");

        if (current_fs.attr('class') !== next_fs.attr('class')) {
            next_fs.show();
            current_fs.animate({ opacity: 0 }, {

                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.0;
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

    });

    getDataParam();

});

function getDataParam() {
    //Get the any query string parameters and load them
    //into the vals array
    var vals = new Array();
    if (location.search != "") {
        vals = location.search.substr(1).split("&");
        for (var i in vals) {
            vals[i] = vals[i].replace(/\+/g, " ").split("=");
        }
        //look for the parameter named 'data'
        var found = false;
        for (var i in vals) {
            if (vals[i][0].toLowerCase() == "data") {
                parseDataValue(vals[i][1]);
                found = true;
                break;
            }
        }
        if (!found)
        { noParams(); }
    }
    else {
        noParams();
    }
}

function parseDataValue(datavalue) {
    if (datavalue != "") {
        var vals = new Array();

        //var message = document.createElement("p");
        //setText(message, "These are the data parameters values that were passed to this page:");
        //document.body.appendChild(message);

        vals = decodeURIComponent(datavalue).split("&");
        for (var i in vals) {
            vals[i] = vals[i].replace(/\+/g, " ").split("=");
        }
        //alert(vals[0]);
        //DisplayPersonalizeMode(vals[0]);
        contactObjectId = vals[0];

        ConstructSectionDetails(vals[0]);

    }
    else {
        noParams();
    }
}

function noParams() {
    var message = document.createElement("p");
    setText(message, "No data parameter was passed to this page");


    document.body.appendChild(message);
}

function setText(element, text) {
    if (typeof element.innerText != "undefined") {
        element.innerText = text;
    }
    else {
        element.textContent = text;
    }

}

function ConstructSectionDetails(contactid) {
    //$("#progressbar").before('<div style="display:inline;text-align:center;font-size:15px;margin-bottom:5px;opacity: 0.6;">Patient Information Goes here</div>');

    vTblStr = '  <table class="tg-blkupdt">' +
                     '<tr class="tg-blkupdt-hdr">' +
                         '<th class="tg-blkupdt-typedetail">Name</th>' +
                                '<th class="tg-blkupdt-modifier">Modifier</th>' +
                         '<th class="tg-blkupdt-target">Target</th>' +
                                '<th class="tg-blkupdt-observed">Observed Value</th>' +
                         '<th class="tg-blkupdt-LastResult">Last Result</th>' +
                         '<th class="tg-blkupdt-lastresultdate">Last Result Date</th>' +
                         '<th class="tg-blkupdt-duedate">Next Due Date</th>' +
                                 '<th class="tg-blkupdt-goalstate">Goal State</th>' +
                         //'<th class="tg-more">More</th>' +
                     '</tr>' +
                ' </table>';

    $('.blkupdt-symptoms-details, .blkupdt-testcare-details,.blkupdt-medications-details,.blkupdt-nutrition-details,.blkupdt-activity-details,.blkupdt-psychosocial-details,.blkupdt-wrap-details').append(vTblStr);

    BuildTableRows(contactid);
};

function createMetricOperatorDropDown(operator, goalid, idAttribute) {

    var id = goalid + idAttribute;
    var ddOperator = '<div class="btn-group">' +
                        '<button type="button" id="' + id + '" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                            operator + //'<span class="caret"></span>' +
                        '</button>' +
                    '</div>';

    return ddOperator;
}

function createMerticValueTextbox(metricValue, goalid, idAttribute) {
    var id = goalid + idAttribute;
    return '<input type="text" id="' + id + '" value="' + metricValue + '" class="txtfieldquantitative" style="width:40px; padding: 6px; border-color:transparent;">';//text-align: left;display:inline;
}

function BuildTableRows(vContactId) {
    //alert("hello");
    //var vPatientId = parent.Xrm.Page.data.entity.getId();
    // $('.tg-blkupdt').append('<div>' + GlobalVarPatientId + '</div>')

    var vAppendedRows = "";
    var vULselector = "";

    SDK.JQuery.retrieveMultipleRecords(

      "tri_cccareplangoal",
      "?$select=tri_cccareplangoalId,tri_SliderControlId,tri_CarePlanGoalState,tri_activitydescription," +
      "tri_lastresult,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence," +
      "tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_GoalSelected," +
      "tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator," +
      "tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_qualitativeaction,tri_qualitativetarget," +
     " tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_GoalSection,tri_PatientModifierId," +
     //" tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + PatientId + "') and tri_GoalSection/Value eq 100000004 and  tri_CarePlanGoalState/Value eq 167410000 and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
     " tri_vitalsvaluetype,tri_patientmodifier_tri_cccareplangoal/tri_name&$expand=tri_patientmodifier_tri_cccareplangoal&$filter=tri_PatientID/Id eq (guid'" + vContactId + "') and tri_GoalSelected eq true&$orderby=tri_vitalsvaluetype asc",// and tri_CarePlanGoalState/Value eq 167410000",
      function (results) {


          //alert(results.length);
          for (var i = 0; i < results.length; i++) {
              var vVitalName = "";
              var tri_activitydescription = results[i].tri_activitydescription;
              var tri_SliderControlId = results[i].tri_SliderControlId.Id;
              var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
              var tri_activitydueon = results[i].tri_activitydueon;
              var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
              var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState.Value;
              var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
              var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
              var tri_GoalSelected = results[i].tri_GoalSelected;
              var tri_LastGoalDate = results[i].tri_LastGoalDate;
              var tri_LastResultDate = results[i].tri_LastResultDate;
              var tri_LastTargetValue = results[i].tri_LastTargetValue;
              var tri_lastresult = results[i].tri_lastresult;
              var tri_Metric = results[i].tri_Metric;
              var tri_MetricOperator = results[i].tri_MetricOperator.Value;
              var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
              var tri_name = results[i].tri_name;
              var tri_NextDueDate = results[i].tri_NextDueDate;
              var tri_qualitativeaction = results[i].tri_qualitativeaction;
              var tri_qualitativetarget = results[i].tri_qualitativetarget;
              var tri_range = results[i].tri_range;
              var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
              var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
              var tri_GoalSection = results[i].tri_GoalSection.Value;
              var tri_cccareplangoalId = results[i].tri_cccareplangoalId;
              var strMdfrName = results[i].tri_patientmodifier_tri_cccareplangoal.tri_name;
              var vVitalId = results[i].tri_vitalsvaluetype.Id;

              strTargetVal = "";
              strLastTargetVal = "";
              strLastGoalDt = "";
              strNextDueDt = "";
              strRowClass = "";
              strGoalId = tri_cccareplangoalId;
              strSliderDiv = "";
              strMdfrBtnId = tri_cccareplangoalId + "_BLKUPDTMDFRBTN";
              vULselector = vVitalId + "_ULBLKUPDT_" + tri_cccareplangoalId; //vital id
              strUniqueRowClass = tri_cccareplangoalId + "_uniquerow";
              strUniqueGoalStateButtonClass = tri_cccareplangoalId + "_uniquegoalstatebutton";
              vGoalColorclass = "";
              //var targetStyle = "";

              switch (tri_typeofgoalcode) {
                  case 100000000: // Qualitative

                      strTargetVal = results[i].tri_qualitativetarget;
                      strLastTargetVal = tri_lastresult;
                      //build slider control if slider lookup has data
                      if (tri_SliderControlId !== null && tri_SliderControlId !== "undefined") {

                          var vSldrClass = tri_cccareplangoalId + "_sldr";
                          var vSldrtxtboxClass = tri_cccareplangoalId + "_sldrtxtbox txtfield tg-blkupdt-sldrtxtbox";
                          strSliderDiv = '<div class="' + vSldrClass + '"></div>' +
                              '<span><input type="text"  class=' + vSldrtxtboxClass + ' readonly style="text-align: left; padding-left: 10px;font-size:14px;border:none;background-color: #FAFAFA;"></span>';
                          SliderControlActivateandSetup(tri_SliderControlId, tri_cccareplangoalId);
                      }
                      break;
                  case 100000001: // Quantitative

                      var vMtrcOprtr1txt = "";
                      vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                      if (tri_range == true) {
                          var vMtrcOprtr2txt = "";
                          vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                          strTargetVal = createMetricOperatorDropDown(vMtrcOprtr1txt, tri_cccareplangoalId, "_MetricOpr1") + ' ' + createMerticValueTextbox(Number(tri_Metric).toFixed(2), tri_cccareplangoalId, "_MetricOprVal1") + ' and ' +
                                         createMetricOperatorDropDown(vMtrcOprtr2txt, tri_cccareplangoalId, "_MetricOpr2") + ' ' + createMerticValueTextbox(((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : Number(tri_targetvaluetwo).toFixed(2)), tri_cccareplangoalId, "_MetricOprVal2");
                      }
                      else {
                          // alert(vMtrcOprtr1txt);
                          strTargetVal = createMetricOperatorDropDown(vMtrcOprtr1txt, tri_cccareplangoalId, "_MetricOpr1") + ' ' + createMerticValueTextbox(Number(tri_Metric).toFixed(2), tri_cccareplangoalId, "_MetricOprVal1");
                      }

                      if (tri_LastTargetValue !== null) {
                          strLastTargetVal = Number(tri_LastTargetValue).toFixed(2);
                      }

                      //targetStyle = "style='width:40%;'"; //$('.tg-blkupdt-target').css('width', '40%');
                      break;

                  case null:
                      strTargetVal = results[i].tri_qualitativetarget;
                      break;
              };

              strMdfrDropdown =
              '<div class="btn-group" style="width: 90px;">' +
              '<button type="button" class="btn btn-default dropdown-toggle blkupdtmodifierbutton" id="' + strMdfrBtnId + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + strMdfrName + ' <span class="caret"></span></button>' +
              '<ul class="dropdown-menu personalizedropdownmenu ' + vULselector + '">'
              //'<li role="presentation" class="dropdown-header">18-25</li>' +
              //'<li role="presentation" class="dropdown-header">15-18</li>' +
              '</ul>' +
              '</div>';

              strGoalStateTxt = "";
              switch (tri_CarePlanGoalState) {
                  case 167410000:
                      strGoalStateTxt = "Open";
                      vGoalColorclass = "orangeborder";
                      break;
                  case 167410001:
                      strGoalStateTxt = "Met";
                      vGoalColorclass = "greenborder";
                      break;
                  case 167410002:
                      strGoalStateTxt = "Not Met";
                      vGoalColorclass = "redborder";
                      break;
                  case 167410003:
                      strGoalStateTxt = "Closed, Cancelled";
                      vGoalColorclass = "orangeborder";
                      break;
              };

              switch (tri_GoalSection) {
                  case 100000000:
                      strRowClass = "personalgoalrowclass";
                      break;
                  case 100000001:
                      strRowClass = "testsvitalsrowclass";
                      break;
                  case 100000002:
                      strRowClass = "medicationsrowclass";
                      break;
                  case 100000003:
                      strRowClass = "supportservicesrowclass";
                      break;
                  case 100000004:
                      strRowClass = "activitynutritionrowclass";
                      break;
                  case 100000005:
                      strRowClass = "behavioralhealthrowclass";
                      break;
                  case 100000006:
                      strRowClass = "wrapuprowclass";
                      break;
              }

              strGoalStateDropdownQualQuant = "";

              if (tri_typeofgoalcode === 100000000) {
                  strGoalStateDropdownQualQuant = '<button type="button" style="float:none;" class="btn btn-default dropdown-toggle blkupdtGoalStatebutton ' + strUniqueGoalStateButtonClass + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >' + strGoalStateTxt + ' <span class="caret"></span></button>' +
                  '<ul class="dropdown-menu personalizedropdownmenu">' +
                  '<li role="presentation" class="dropdown-header">Open</li>' +
                  '<li role="presentation" class="dropdown-header">Met</li>' +
                  '<li role="presentation" class="dropdown-header">Not Met</li>' +
                  '</ul>'
              }
              else {
                  strGoalStateDropdownQualQuant = '<button type="button" style="float:none;" class="btn btn-default dropdown-toggle blkupdtGoalStatebutton ' + strUniqueGoalStateButtonClass + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled="true" >' + strGoalStateTxt + ' </button>'
              };


              strGoalStateDrpDown =
              '<div class="btn-group" style="width: 90px;">' + strGoalStateDropdownQualQuant +
              '</div>';

              if (tri_LastGoalDate !== null) {
                  strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
              }

              if (tri_NextDueDate !== null) {
                  strNextDueDt = $.datepicker.formatDate('mm/dd/yy', tri_NextDueDate);
              }

              if (strLastTargetVal === null) {
                  strLastTargetVal = "";
              }

              vAppendedRows = '<tr style="display: block;" class="' + strRowClass + " " + strUniqueRowClass + " " + vGoalColorclass + '">' +
                              '<td class="tg-blkupdt-typedetail" style=" border-bottom:none;">' + tri_name + '</td>' +
                              '<td class="tg-blkupdt-modifier" style=" border-bottom:none;">' + strMdfrDropdown + '</td>' + GetModifierBasedOnValueType(vVitalId, vContactId, tri_cccareplangoalId) +
                              '<td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class=' + strRowClass + ' style="background-color: #FAFAFA;"><td class="tg-blkupdt-typedetail"></td><td class="tg-blkupdt-modifier"></td>' +
                              '<td class="tg-blkupdt-target" goalCode=' + tri_typeofgoalcode + '>' + strTargetVal + '</td>' +
                              '<td class="tg-blkupdt-observed">' + strSliderDiv + '</td>' +
                              '<td class="tg-blkupdt-LastResult">' + strLastTargetVal + '</td>' + // changed tri_lastresult to strLastTargetVal
                              '<td class="tg-blkupdt-lastresultdate">' + strLastGoalDt + '</td>' +
                              '<td class="tg-blkupdt-duedate">' + strNextDueDt + '</td>' +
                              '<td class="tg-blkupdt-goalstate">' + strGoalStateDrpDown + '</td>' +
                              '</tr>';

              CreateSectionFieldSet(tri_GoalSection, vAppendedRows);

              // '.blkupdt-symptoms-details, .blkupdt-testcare-details,.blkupdt-medications-details,.blkupdt-nutrition-details,.blkupdt-activity-details,.blkupdt-psychosocial-details,.blkupdt-wrap-details'
          }
          // return vAppendedRows;00

      },
      function (error) {
          alert(error.message);
      },
      function () {

          $('.txtfieldquantitative').spinner({ step: 1.00, numberFormat: "n" });
          //$('.tg-blkupdt-hdr').after(vAppendedRows);
          AddPatientInfoToForm(vContactId);
      }
  );
}

function CreateSectionFieldSet(goalSection, rowToAppend) {
    var section = "";
    switch (goalSection) {
        case 100000000:
            section = '.blkupdt-symptoms-details';
            break;
        case 100000001:
            section = '.blkupdt-testcare-details';
            break;
        case 100000002:
            section = '.blkupdt-medications-details';
            break;
        case 100000003:
            section = '.blkupdt-activity-details';
            break;
        case 100000004:
            section = '.blkupdt-nutrition-details';
            break;
        case 100000005:
            section = '.blkupdt-psychosocial-details';
            break;
        case 100000006:
            section = '.blkupdt-wrap-details';
            break;
    }

    if (section !== "") {
        $(section).append(rowToAppend);
    }
}

function GetModifierBasedOnValueType(tri_vitalsvaluetypeid, contactId, tri_cccareplangoalId) {

    //alert(tri_vitalsvaluetypeid+" "+ contactId+" "+ tri_cccareplangoalId);
    var FinalModifierTag = "";
    var vMdfrIdArray = [];
    var vMdfrIdGoalSelectedArray = [];
    //var vMdfrTagArray = [];
    var vULselector = tri_vitalsvaluetypeid + "_ULBLKUPDT_" + tri_cccareplangoalId;
    var modifierValue = "";

    //get modifier ids and put them in an array
    SDK.JQuery.retrieveMultipleRecords(
        "tri_cccareplangoal",
        "?$select=tri_PatientModifierId,tri_cccareplangoalId,tri_GoalSelected,tri_vitalsvaluetype&$filter=tri_vitalsvaluetype/Id eq (guid'" + tri_vitalsvaluetypeid + "') and tri_PatientID/Id eq (guid'" + contactId + "')&$orderby=tri_PatientModifierId asc",
        function (results) {
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {

                    var tri_PatientModifierId = results[i].tri_PatientModifierId.Id;
                    if (tri_PatientModifierId !== null && tri_PatientModifierId !== 'undefined') {
                        var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype;
                        var tri_GoalSelected = results[i].tri_GoalSelected;
                        var tri_cccareplangoalId = results[i].tri_cccareplangoalId;

                        modifierValue = results[i].tri_PatientModifierId.Name;

                        //if (modifierValue.trim() == "Patients reporting sleep disturbance as a component of depression : : Sleep") {
                        //    debugger;
                        //}

                        var IndexOfMdfrId = vMdfrIdArray.indexOf(tri_PatientModifierId);

                        if (IndexOfMdfrId === -1 && IndexOfMdfrId !== null && IndexOfMdfrId !== undefined) {

                            vMdfrIdArray.push(tri_PatientModifierId);
                            vMdfrIdGoalSelectedArray.push({ 'ModifierId': tri_PatientModifierId, 'GoalSelecetd': tri_GoalSelected, 'CarePlanGoalId': tri_cccareplangoalId });
                        }

                    }
                }
            }
        },
        function (error) {
            alert(error.message);
        },
        function () {
            //On Complete - Do Something
            // return vMdfrIdArray;
            // AppendModfrTagFromArray(vMdfrIdArray, vitalUlSelector);
            var MdfrarrayLength = vMdfrIdArray.length;
            var IncrementalModifierTag = "";

            if (MdfrarrayLength > 0) {
                // var vloopMdfrId = "";
                for (var i = 0; i < MdfrarrayLength; i++) {
                    // vloopMdfrId = vMdfrIdArray[i];
                    if (vMdfrIdArray[i] !== null) {
                        SDK.JQuery.retrieveMultipleRecords(
            "tri_patientmodifier",
            "?$select=tri_name,tri_patientmodifierId&$filter=tri_patientmodifierId eq (guid'" + vMdfrIdArray[i] + "')",
            function (results) {

                for (var i = 0; i < results.length; i++) {
                    var tri_name = results[i].tri_name;
                    var tri_patientmodId = results[i].tri_patientmodifierId;

                    if (tri_patientmodId !== null && tri_patientmodId !== undefined && $('#' + tri_patientmodId).length === 0) {
                        IncrementalModifierTag = IncrementalModifierTag + '<li role="presentation" class="dropdown-header" id=' + tri_patientmodId + '>' + tri_name + '</li>'; // modifier Id
                    }
                }
            },
            function (error) {
                alert(error.message);
            },
            function () {
                //On Complete - Do Something
                //alert(IncrementalModifierTag);
                var vitalUlSelector = $('.' + vULselector);
                vitalUlSelector.html('');

                if (IncrementalModifierTag.indexOf("_NAP") == -1) {
                    IncrementalModifierTag = IncrementalModifierTag + '<li role="presentation" class="dropdown-header" id= ' + tri_cccareplangoalId + '_NAP' + '>N/A</li>';   // goal id
                }

                vitalUlSelector.append(IncrementalModifierTag);
            }
        );
                    };// null check if closes here

                };// for clses here


            };// array count if closes here

        }
    );

    //}; //top if ends here
}

function AddPatientInfoToForm(contactId) {
    //alert(contactId);

    SDK.JQuery.retrieveMultipleRecords(
    "Contact",
    "?$select=BirthDate,EMailAddress1,FullName,MobilePhone,tri_MRN&$filter=ContactId eq guid'" + contactId + "'",
    function (results) {
        //for (var i = 0; i < results.length; i++) {
        var BirthDate = results[0].BirthDate;
        var EMailAddress1 = results[0].EMailAddress1;
        var FullName = results[0].FullName;
        var MobilePhone = results[0].MobilePhone;
        var tri_MRN = results[0].tri_MRN;
        //}
        //alert(FullName);
        strBirthDay = "";
        if (BirthDate !== null) {
            strBirthDay = $.datepicker.formatDate('mm/dd/yy', BirthDate);
        }
        $('.transbox').append('<p> Name: ' + FullName + ', Birth Day: ' + strBirthDay + ', MRN: ' + tri_MRN + '</p>');
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //On Complete - Do Something
    }
);

}

function SliderControlActivateandSetup(tri_SliderControlId, tri_cccareplangoalId) {

    //$("#slider").slider("option", "disabled", false);

    SDK.JQuery.retrieveRecord(
    tri_SliderControlId,
    "tri_slidercontrolconfig",
    "tri_DefaultValue,tri_GoalState1,tri_GoalState2,tri_GoalState3,tri_GoalState4,tri_GoalState5,tri_GoalState6,tri_GoalState7,tri_GoalState8,tri_GoalState9,tri_Max,tri_Min,tri_name,tri_Parameters,tri_Range,tri_slidercontrolconfigId,tri_StepColors,tri_StepLabels,tri_Value1,tri_Value1Color,tri_Value1Text,tri_Value2,tri_Value2Color,tri_Value2Text,tri_Value3,tri_Value3Color,tri_Value3Text,tri_Value4,tri_Value4Color,tri_Value4Text,tri_Value5,tri_Value5Color,tri_Value5Text,tri_Value6,tri_Value6Color,tri_Value6Text,tri_Value7,tri_Value7Color,tri_Value7Text,tri_Value8,tri_Value8Color,tri_Value8Text,tri_Value9,tri_Value9Color,tri_Value9Text",
    'user_tri_slidercontrolconfig',
    function (result) {
        var tri_DefaultValue = result.tri_DefaultValue;
        var tri_GoalState1 = result.tri_GoalState1.Value;
        var tri_GoalState2 = result.tri_GoalState2.Value;
        var tri_GoalState3 = result.tri_GoalState3.Value;
        var tri_GoalState4 = result.tri_GoalState4.Value;
        var tri_GoalState5 = result.tri_GoalState5.Value;
        var tri_GoalState6 = result.tri_GoalState6.Value;
        var tri_GoalState7 = result.tri_GoalState7.Value;
        var tri_GoalState8 = result.tri_GoalState8.Value;
        var tri_GoalState9 = result.tri_GoalState9.Value;
        var tri_Max = result.tri_Max;
        var tri_Min = result.tri_Min;
        var tri_name = result.tri_name;
        var tri_Parameters = result.tri_Parameters;
        var tri_Range = result.tri_Range.Value;
        var tri_slidercontrolconfigId = result.tri_slidercontrolconfigId;
        var tri_StepColors = result.tri_StepColors;
        var tri_StepLabels = result.tri_StepLabels;
        var tri_Value1 = result.tri_Value1;
        var tri_Value1Color = result.tri_Value1Color;
        var tri_Value1Text = result.tri_Value1Text;
        var tri_Value2 = result.tri_Value2;
        var tri_Value2Color = result.tri_Value2Color;
        var tri_Value2Text = result.tri_Value2Text;
        var tri_Value3 = result.tri_Value3;
        var tri_Value3Color = result.tri_Value3Color;
        var tri_Value3Text = result.tri_Value3Text;
        var tri_Value4 = result.tri_Value4;
        var tri_Value4Color = result.tri_Value4Color;
        var tri_Value4Text = result.tri_Value4Text;
        var tri_Value5 = result.tri_Value5;
        var tri_Value5Color = result.tri_Value5Color;
        var tri_Value5Text = result.tri_Value5Text;
        var tri_Value6 = result.tri_Value6;
        var tri_Value6Color = result.tri_Value6Color;
        var tri_Value6Text = result.tri_Value6Text;
        var tri_Value7 = result.tri_Value7;
        var tri_Value7Color = result.tri_Value7Color;
        var tri_Value7Text = result.tri_Value7Text;
        var tri_Value8 = result.tri_Value8;
        var tri_Value8Color = result.tri_Value8Color;
        var tri_Value8Text = result.tri_Value8Text;
        var tri_Value9 = result.tri_Value9;
        var tri_Value9Color = result.tri_Value9Color;
        var tri_Value9Text = result.tri_Value9Text;

        var sldrRange = "min";
        if (tri_Range == 100000001) {
            sldrRange = "max";
        };

        var vSldrClass = tri_cccareplangoalId + "_sldr";
        //var sldrid = tri_cccareplangoalId + "_slider";

        //$("#slider").after('<div id="'+ sldrid +'" style="width:450px;"></div>');
        $('.' + vSldrClass).data("sldrdata", {
            // $('.slider').data("sldrdata", {
            v1: tri_Value1, v1txt: tri_Value1Text, v1color: tri_Value1Color, v1goal: tri_GoalState1,
            v2: tri_Value2, v2txt: tri_Value2Text, v2color: tri_Value2Color, v2goal: tri_GoalState2,
            v3: tri_Value3, v3txt: tri_Value3Text, v3color: tri_Value3Color, v3goal: tri_GoalState3,
            v4: tri_Value4, v4txt: tri_Value4Text, v4color: tri_Value4Color, v4goal: tri_GoalState4,
            v5: tri_Value5, v5txt: tri_Value5Text, v5color: tri_Value5Color, v5goal: tri_GoalState5,
            v6: tri_Value6, v6txt: tri_Value6Text, v6color: tri_Value6Color, v6goal: tri_GoalState6,
            v7: tri_Value7, v7txt: tri_Value7Text, v7color: tri_Value7Color, v7goal: tri_GoalState7,
            v8: tri_Value8, v8txt: tri_Value8Text, v8color: tri_Value8Color, v8goal: tri_GoalState8,
            v9: tri_Value9, v9txt: tri_Value9Text, v9color: tri_Value9Color, v9goal: tri_GoalState9
        });

        // $('.slider').slider({
        $('.' + vSldrClass).slider({
            range: sldrRange,
            min: Number(tri_Min),
            max: Number(tri_Max),
            value: Number(tri_DefaultValue)
        });

        //$('.slider').slider({
        $('.' + vSldrClass).slider({

            //create: function (event, ui) {

            //    $(this).slider('option', 'range', sldrRange);
            //    $(this).slider('option', 'min', Number(tri_Min));
            //    $(this).slider('option', 'max', Number(tri_Max));
            //    $(this).slider('value', Number(tri_DefaultValue));

            //},
            stop: function (event, ui) {


                var strCurrval = $(this).slider('option', 'value').toString();
                var currTxbxClass = tri_cccareplangoalId + "_sldrtxtbox";;
                var strV1 = $('.' + vSldrClass).data("sldrdata").v1.toString();
                var strV1txt = $('.' + vSldrClass).data("sldrdata").v1txt.toString();
                var strV2 = $('.' + vSldrClass).data("sldrdata").v2.toString();
                var strV2txt = $('.' + vSldrClass).data("sldrdata").v2txt.toString();
                var strV3 = $('.' + vSldrClass).data("sldrdata").v3.toString();
                var strV3txt = $('.' + vSldrClass).data("sldrdata").v3txt.toString();
                var strV4 = $('.' + vSldrClass).data("sldrdata").v4.toString();
                var strV4txt = $('.' + vSldrClass).data("sldrdata").v4txt.toString();
                var strV5 = $('.' + vSldrClass).data("sldrdata").v5.toString();
                var strV5txt = $('.' + vSldrClass).data("sldrdata").v5txt.toString();
                var strV6 = $('.' + vSldrClass).data("sldrdata").v6.toString();
                var strV6txt = $('.' + vSldrClass).data("sldrdata").v6txt.toString();
                var strV7 = $('.' + vSldrClass).data("sldrdata").v7.toString();
                var strV7txt = $('.' + vSldrClass).data("sldrdata").v7txt.toString();
                var strV8 = $('.' + vSldrClass).data("sldrdata").v8.toString();
                var strV8txt = $('.' + vSldrClass).data("sldrdata").v8txt.toString();
                var strV9 = $('.' + vSldrClass).data("sldrdata").v9.toString();
                var strV9txt = $('.' + vSldrClass).data("sldrdata").v9txt.toString();
                var hex1 = $('.' + vSldrClass).data("sldrdata").v1color.toString();
                var hex2 = $('.' + vSldrClass).data("sldrdata").v2color.toString();
                var hex3 = $('.' + vSldrClass).data("sldrdata").v3color.toString();
                var hex4 = $('.' + vSldrClass).data("sldrdata").v4color.toString();
                var hex5 = $('.' + vSldrClass).data("sldrdata").v5color.toString();
                var hex6 = $('.' + vSldrClass).data("sldrdata").v6color.toString();
                var hex7 = $('.' + vSldrClass).data("sldrdata").v7color.toString();
                var hex8 = $('.' + vSldrClass).data("sldrdata").v8color.toString();
                var hex9 = $('.' + vSldrClass).data("sldrdata").v9color.toString();
                var goal1 = $('.' + vSldrClass).data("sldrdata").v1goal.toString();
                var goal2 = $('.' + vSldrClass).data("sldrdata").v2goal.toString();
                var goal3 = $('.' + vSldrClass).data("sldrdata").v3goal.toString();
                var goal4 = $('.' + vSldrClass).data("sldrdata").v4goal.toString();
                var goal5 = $('.' + vSldrClass).data("sldrdata").v5goal.toString();
                var goal6 = $('.' + vSldrClass).data("sldrdata").v6goal.toString();
                var goal7 = $('.' + vSldrClass).data("sldrdata").v7goal.toString();
                var goal8 = $('.' + vSldrClass).data("sldrdata").v8goal.toString();
                var goal9 = $('.' + vSldrClass).data("sldrdata").v9goal.toString();
                //alert($("#slider").data("sldrdata").v1txt + " " + $("#slider").data("sldrdata").v2txt + " " + $("#slider").data("sldrdata").v3txt + " " + $("#slider").data("sldrdata").v4txt + " " + $("#slider").data("sldrdata").v5txt + " " + $("#slider").data("sldrdata").v6txt + " ");
                if (strCurrval == strV1) {
                    $('.' + currTxbxClass).val(strV1txt)
                    $(this).css("background-color", "#" + hex1);
                    SliderSetGoalState(goal1, tri_cccareplangoalId);
                    //SliderSetBorder(goal1, tri_cccareplangoalId);
                };
                if (strCurrval == strV2) {
                    $('.' + currTxbxClass).val(strV2txt);
                    $(this).css("background-color", "#" + hex2);
                    SliderSetGoalState(goal2, tri_cccareplangoalId);
                    //SliderSetBorder(goal2, tri_cccareplangoalId);
                };
                if (strCurrval == strV3) {
                    $('.' + currTxbxClass).val(strV3txt);
                    $(this).css("background-color", "#" + hex3);
                    SliderSetGoalState(goal3, tri_cccareplangoalId);
                    //SliderSetBorder(goal3, tri_cccareplangoalId);
                };
                if (strCurrval == strV4) {
                    $('.' + currTxbxClass).val(strV4txt);
                    $(this).css("background-color", "#" + hex4);
                    SliderSetGoalState(goal4, tri_cccareplangoalId);
                    //SliderSetBorder(goal4, tri_cccareplangoalId);
                };
                if (strCurrval == strV5) {
                    $('.' + currTxbxClass).val(strV5txt);
                    $(this).css("background-color", "#" + hex5);
                    SliderSetGoalState(goal5, tri_cccareplangoalId);
                    //SliderSetBorder(goal5, tri_cccareplangoalId);
                };
                if (strCurrval == strV6) {
                    $('.' + currTxbxClass).val(strV6txt);
                    $(this).css("background-color", "#" + hex6);
                    SliderSetGoalState(goal6, tri_cccareplangoalId);
                    //SliderSetBorder(goal6, tri_cccareplangoalId);
                };
                if (strCurrval == strV7) {
                    $('.' + currTxbxClass).val(strV7txt);
                    $(this).css("background-color", "#" + hex7);
                    SliderSetGoalState(goal7, tri_cccareplangoalId);
                    //SliderSetBorder(goal7, tri_cccareplangoalId);
                };
                if (strCurrval == strV8) {
                    $('.' + currTxbxClass).val(strV8txt);
                    $(this).css("background-color", "#" + hex8);
                    SliderSetGoalState(goal8, tri_cccareplangoalId);
                    //SliderSetBorder(goal8, tri_cccareplangoalId);
                };
                if (strCurrval == strV9) {
                    $('.' + currTxbxClass).val(strV9txt);
                    $(this).css("background-color", "#" + hex9);
                    SliderSetGoalState(goal9, tri_cccareplangoalId);
                    //SliderSetBorder(goal9, tri_cccareplangoalId);
                };

                AddGoalIdToSave(tri_cccareplangoalId);
                //$("#" + currTxbxId).val(strCurrval);
            },


        });



    },


    function (error) {
        alert(error.message);
    }
);


}

function SliderSetGoalState(osetValue, tri_cccareplangoalId) {

    var vButtonClass = tri_cccareplangoalId + "_uniquegoalstatebutton";

    //alert($('.'+vRowClass).next('tr').attr('class'));

    switch (osetValue) {
        case "100000000":
            $('.' + vButtonClass).text("Open");
            $('.' + vButtonClass).val(167410000);
            //$('.' + vButtonClass).closest('tr').css('border-top', '3px solid orange');
            SliderSetBorder("100000000", tri_cccareplangoalId);
            break;
        case "100000001":
            $('.' + vButtonClass).text("Met");
            $('.' + vButtonClass).val(167410001);
            // $('.' + vButtonClass).closest('tr').css('border-top', '3px solid green');
            SliderSetBorder("100000001", tri_cccareplangoalId);
            break;
        case "100000002":
            $('.' + vButtonClass).text("Not Met");
            $('.' + vButtonClass).val(167410002);
            //$('.' + vButtonClass).closest('tr').css('border-top', '3px solid red');
            SliderSetBorder("100000002", tri_cccareplangoalId);
            break;
        case "100000003":
            $('.' + vButtonClass).text("Closed, Cancelled");
            $('.' + vButtonClass).val(167410003);
            //$('.' + vButtonClass).closest('tr').css('border-top', '3px solid orange');
            SliderSetBorder("100000003", tri_cccareplangoalId);
            break;
    }
}

function SliderSetBorder(osetValue, tri_cccareplangoalId) {

    var classToAdd = '';
    var vRowClass = tri_cccareplangoalId + "_uniquerow";
    $('.' + vRowClass).removeClass('orangeborder redborder greenborder');

    switch (osetValue) {
        case "100000000":
            classToAdd = "orangeborder";
            //$('.' + vRowClass).children().addClass("orangeborder");
            //$('.' + vRowClass).children().removeClass("redborder");
            //$('.' + vRowClass).children().removeClass("greenborder");
            break;
        case "100000001":
            classToAdd = "greenborder";
            //$('.' + vRowClass).children().addClass("greenborder");
            //$('.' + vRowClass).children().removeClass("redborder");
            //$('.' + vRowClass).children().removeClass("orangeborder");
            break;
        case "100000002":
            classToAdd = "redborder";
            //$('.' + vRowClass).children().addClass("redborder");
            //$('.' + vRowClass).children().removeClass("orangeborder");
            //$('.' + vRowClass).children().removeClass("greenborder");
            break;
        case "100000003":
            classToAdd = "orangeborder";
            //$('.' + vRowClass).children().addClass("orangeborder");
            //$('.' + vRowClass).children().removeClass("redborder");
            //$('.' + vRowClass).children().removeClass("greenborder");
            break;
    };

    $('.' + vRowClass).addClass(classToAdd);
}

$(document).on('click', '.personalizedropdownmenu li', function () {
    var objbtn = $(this).parent().prev()[0];
    var goalId = '';

    if ($(this).text() !== objbtn.innerText) {
        var ulClass = $(this).parent()[0].className;

        if (ulClass.indexOf('_ULBLKUPDT') > -1) {
            goalId = objbtn.id.replace("_BLKUPDTMDFRBTN", "");

            var modId = $(this)[0].id;
            var vitalTypeId = ulClass.replace("dropdown-menu personalizedropdownmenu ", "");
            vitalTypeId = vitalTypeId.replace("_ULBLKUPDT", "");
            vitalTypeId = vitalTypeId.replace("_"+goalId, "").trim();

            GetGoalForCurrentModifier(modId, vitalTypeId, contactObjectId, $(this).text(), this);
        }
        else {
            var classToAdd = '';
            var btnClass = objbtn.className;

            goalId = btnClass.replace("btn btn-default dropdown-toggle blkupdtGoalStatebutton ", "");
            goalId = goalId.replace("_uniquegoalstatebutton", "");
            $("." + goalId + "_uniquerow").removeClass('orangeborder redborder greenborder');

            var changedGoalState = $(this).text().trim();

            switch (changedGoalState) {
                case "Open":
                    classToAdd = "orangeborder";
                    break;
                case "Met":
                    classToAdd = "greenborder";
                    break;
                case "Not Met":
                    classToAdd = "redborder";
                    break;
                case "Closed, Cancelled":
                    classToAdd = "orangeborder";
                    break;
            };

            // set data
            $("." + goalId + "_uniquerow").addClass(classToAdd);
            $(objbtn).html(changedGoalState + " " + "<span class='caret'></span>");
        }

        AddGoalIdToSave(goalId);
    }
});

$(document).on('keyup click', 'input[type=text]', function () {
    AddGoalIdToSave(this.id);
});

$(document).on('click', '.ui-spinner-button', function () {
    var vSiblingId = $(this).siblings('input').attr('id')
    AddGoalIdToSave(vSiblingId);
});

function AddGoalIdToSave(goalId) {

    goalId = goalId.replace("_MetricOprVal1", "");
    goalId = goalId.replace("_MetricOprVal2", "");

    if (carePlanGoalArray.indexOf(goalId) === -1 & goalId !== null & goalId !== 'undefined' & goalId !== '') {
        carePlanGoalArray.push(goalId);
    }
}

$(document).on('click', '#progressbar li, input[class~="action-button"]', function () {
    // alert(carePlanGoalArray.length);
    if (carePlanGoalArray.length > 0) {
        for (i = 0; i < carePlanGoalArray.length; i++) {
            var goalId = carePlanGoalArray[i];
            debugger;

            //alert(goalId);
            var modifierObj = $('#' + goalId + '_BLKUPDTMDFRBTN');
            var vSliderTextValue = $('.' + goalId + '_sldrtxtbox').val();
            // alert(vSliderTextValue);
            var vModfrName = modifierObj.text().trim();

            var ulModifier = modifierObj.next();
            var modifierId = ulModifier.find('li:contains("' + vModfrName + '")')[0].id;

            if (modifierId.indexOf('_NAP') > -1) {
                modifierId = '';
            }

            var vVitalTypId = ulModifier[0].className.replace("dropdown-menu personalizedropdownmenu ", "");
            vVitalTypId = vVitalTypId.replace("_ULBLKUPDT", "");
            vVitalTypId = vVitalTypId.replace("_" + goalId, "").trim();

            var goalStateObj = $('[class~="' + goalId + '_uniquegoalstatebutton"]');
            var vGoalStateTxt1 = goalStateObj.text().trim();
            var nextrow = goalStateObj.parent().parent().parent();
            var targetDetails = nextrow.find('.tg-blkupdt-target');

            var vQualTxt = '';
            var vMetricOprtrTxt1 = '';
            var vTargetValueTxt = '';
            var vMetricOprtr2Txt1 = '';
            var vTargetValue2Txt = '';

            if (targetDetails.attr('goalCode') === '100000000') { // Qualitative
                vQualTxt = targetDetails.text();
            }
            else if (targetDetails.attr('goalCode') === '100000001') { // Quantitative
                vMetricOprtrTxt1 = $('#' + goalId + '_MetricOpr1').text();
                vTargetValueTxt = $('#' + goalId + '_MetricOprVal1').val();
                vMetricOprtr2Txt1 = $('#' + goalId + '_MetricOpr2').text();
                vTargetValue2Txt = $('#' + goalId + '_MetricOprVal2').val();
            }

            var vobservedValue = nextrow.find('.tg-blkupdt-LastResult').text();
            var vLastResultDate = new Date();

            var vOsetValMetricOperator = "";
            if (vMetricOprtrTxt1 !== null && vMetricOprtrTxt1 !== "") {
                vOsetValMetricOperator = GetOsetValFromTextMtrcOprtr(vMetricOprtrTxt1);
            }

            var vOsetValMetricOperator21 = "";
            if (vMetricOprtr2Txt1 !== null && vMetricOprtr2Txt1 !== "") {
                vOsetValMetricOperator21 = GetOsetValFromTextMtrcOprtr(vMetricOprtr2Txt1);
            }

            var vOsetValGoalState = "";
            if (vGoalStateTxt1 !== null && vGoalStateTxt1 !== "") {
                vOsetValGoalState = GetOsetValFromTextGoalState(vGoalStateTxt1);
            };

            if (vModfrName == "N/A") {
                //Update GoalSelected = False for this careplanId
                var obj = {};
                obj.tri_GoalSelected = false;
                SDK.REST.updateRecord(goalId, obj, "tri_cccareplangoal", updateSuccessCallback, errorHandler);
            }
            else {
                UpdateCarePlanJoin(vVitalTypId, contactObjectId[0], modifierId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vTargetValue2Txt, vQualTxt, vOsetValMetricOperator21, vOsetValGoalState, vobservedValue, vLastResultDate, vSliderTextValue, this.value);
            }
        }
        carePlanGoalArray.length = 0;
    }
    else if (this.value === 'Submit') {
        // alert('Goals are Submitted.');
        //window.opener.reload();
        self.opener.location.reload();
        window.close();
        //return false;
    }
});


function updateSuccessCallbackforMultiEdit() {
    // alert("The record changes were saved");
}

function GetGoalForCurrentModifier(vModId, tri_vitalsvaluetypeid, contactId, currText, currentObj) {

    var currentRow = $(currentObj).parent().parent().parent().parent();
    var nextRow = $(currentObj).parent().parent().parent().parent().next();

    var typedetail = currentRow.find('.tg-blkupdt-typedetail');
    var modifier = currentRow.find('.tg-blkupdt-modifier');

    var target = nextRow.find('.tg-blkupdt-target');
    var observed = nextRow.find('.tg-blkupdt-observed');
    var lastResult = nextRow.find('.tg-blkupdt-LastResult');
    var lastresultdate = nextRow.find('.tg-blkupdt-lastresultdate');
    var duedate = nextRow.find('.tg-blkupdt-duedate');
    var goalstate = nextRow.find('.tg-blkupdt-goalstate');

    if (currText === "N/A") {
        typedetail.text('');
        $(modifier).find('button').html("N/A <span class='caret'></span>");
        target.text('');
        observed.text('');
        lastResult.text('');
        lastresultdate.text('');
        duedate.text('');
        goalstate.find('button').html("<span class='caret'></span>").attr('disabled', true); //"Met "<span class='caret'></span>")
        currentRow.removeClass('orangeborder redborder greenborder');
        //currentRow.css('border-top', '1pt solid #aabcfe');
        currentRow.hide('slow');
        nextRow.hide();
        return;
    }

    if (tri_vitalsvaluetypeid !== undefined && tri_vitalsvaluetypeid !== null && tri_vitalsvaluetypeid.length > 0 && vModId !== undefined && vModId !== null && vModId.length > 0) {

        SDK.JQuery.retrieveMultipleRecords(
"tri_cccareplangoal",
 "?$select=tri_actiontriggermetricoperator,tri_SliderControlId,tri_lastresult,tri_actiontriggervalue,tri_activityassignmentrole,tri_activitydescription,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_activityrecurrencemultipliernormal,tri_CarePlanGoalState,tri_cccareplangoalId,tri_GoalSection,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_PatientID,tri_PatientModifierId,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + contactId + "') and tri_vitalsvaluetype/Id eq (guid'" + tri_vitalsvaluetypeid + "') and tri_PatientModifierId/Id eq (guid'" + vModId + "')",
function (results) {
    if (results.length > 0) {
        for (var i = 0; i < results.length; i++) {
            var tri_actiontriggermetricoperator = results[i].tri_actiontriggermetricoperator;
            var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
            var tri_activityassignmentrole = results[i].tri_activityassignmentrole;
            var tri_activitydescription = results[i].tri_activitydescription;
            var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
            var tri_activitydueon = results[i].tri_activitydueon;
            var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
            var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
            var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
            var tri_activityrecurrencemultipliernormal = results[i].tri_activityrecurrencemultipliernormal;
            var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState;
            var tri_cccareplangoalId = results[i].tri_cccareplangoalId;
            var tri_GoalSection = results[i].tri_GoalSection;
            var tri_GoalSelected = results[i].tri_GoalSelected;
            var tri_LastGoalDate = results[i].tri_LastGoalDate;
            var tri_LastResultDate = results[i].tri_LastResultDate;
            var tri_LastTargetValue = results[i].tri_LastTargetValue;
            var tri_lastresult = results[i].tri_lastresult;
            var tri_Metric = results[i].tri_Metric;
            var tri_MetricOperator = results[i].tri_MetricOperator.Value;
            var tri_metricoperatortwo = results[i].tri_metricoperatortwo.Value;
            var tri_name = results[i].tri_name;                     // vital details
            var tri_NextDueDate = results[i].tri_NextDueDate;
            var tri_PatientID = results[i].tri_PatientID;
            var tri_PatientModifierId = results[i].tri_PatientModifierId;
            var tri_qualitativeaction = results[i].tri_qualitativeaction;
            var tri_qualitativetarget = results[i].tri_qualitativetarget;
            var tri_range = results[i].tri_range;
            var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
            var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
            var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
            var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
            var tri_SliderControlId = results[i].tri_SliderControlId.Id;

            var strTargetVal = '';
            var strLastTargetVal = '';
            var strLastGoalDt = '';
            var strNextDueDt = '';
            var strSliderDiv = '';
            var strGoalStateTxt = '';
            var vGoalColorclass = '';

            switch (tri_typeofgoalcode) {
                case 100000000:

                    strTargetVal = results[i].tri_qualitativetarget;
                    strLastTargetVal = tri_lastresult;
                    //build slider control if slider lookup has data
                    if (tri_SliderControlId !== null && tri_SliderControlId !== "undefined") {

                        var vSldrClass = tri_cccareplangoalId + "_sldr";
                        var vSldrtxtboxClass = tri_cccareplangoalId + "_sldrtxtbox txtfield tg-blkupdt-sldrtxtbox";
                        strSliderDiv = '<div class="' + vSldrClass + '"></div>' +
                            '<span><input type="text"  class=' + vSldrtxtboxClass + ' readonly style="text-align: left; padding-left: 10px;font-size:14px;border:none;background-color: #FAFAFA;"></span>';
                        SliderControlActivateandSetup(tri_SliderControlId, tri_cccareplangoalId);
                    }
                    break;
                case 100000001:

                    var vMtrcOprtr1txt = "";
                    vMtrcOprtr1txt = GetMetricOperatorTextBasedOnVal(tri_MetricOperator);

                    if (tri_range == true) {
                        var vMtrcOprtr2txt = "";
                        vMtrcOprtr2txt = GetMetricOperatorTextBasedOnVal(tri_metricoperatortwo);
                        strTargetVal = createMetricOperatorDropDown(vMtrcOprtr1txt, tri_cccareplangoalId, "_MetricOpr1") + ' ' + createMerticValueTextbox(Number(tri_Metric).toFixed(2), tri_cccareplangoalId, "_MetricOprVal1") + ' and ' +
                                       createMetricOperatorDropDown(vMtrcOprtr2txt, tri_cccareplangoalId, "_MetricOpr2") + ' ' + createMerticValueTextbox(((tri_targetvaluetwo === null || tri_targetvaluetwo === undefined) ? 0 : Number(tri_targetvaluetwo).toFixed(2)), tri_cccareplangoalId, "_MetricOprVal2");
                    }
                    else {
                        // alert(vMtrcOprtr1txt);
                        strTargetVal = createMetricOperatorDropDown(vMtrcOprtr1txt, tri_cccareplangoalId, "_MetricOpr1") + ' ' + createMerticValueTextbox(Number(tri_Metric).toFixed(2), tri_cccareplangoalId, "_MetricOprVal1");
                    }

                    if (tri_LastTargetValue !== null) {
                        strLastTargetVal = Number(tri_LastTargetValue).toFixed(2);
                    }

                    break;

                case null:
                    strTargetVal = results[i].tri_qualitativetarget;
                    break;
            };

            if (tri_LastGoalDate !== null) {
                strLastGoalDt = $.datepicker.formatDate('mm/dd/yy', tri_LastGoalDate);
            }

            if (tri_NextDueDate !== null) {
                strNextDueDt = $.datepicker.formatDate('mm/dd/yy', tri_NextDueDate);
            }

            if (strLastTargetVal === null) {
                strLastTargetVal = "";
            }

            typedetail.html(tri_name);
            $(modifier).find('button').html($(currentObj).text() + " <span class='caret'></span>");
            target.html(strTargetVal);
            observed.html(strSliderDiv);
            lastResult.html(strLastTargetVal);
            lastresultdate.html(strLastGoalDt);
            duedate.html(strNextDueDt);

            switch (tri_CarePlanGoalState.Value) {
                case 167410000:
                    strGoalStateTxt = "Open";
                    vGoalColorclass = "orangeborder";
                    break;
                case 167410001:
                    strGoalStateTxt = "Met";
                    vGoalColorclass = "greenborder";
                    break;
                case 167410002:
                    strGoalStateTxt = "Not Met";
                    vGoalColorclass = "redborder";
                    break;
                case 167410003:
                    strGoalStateTxt = "Closed, Cancelled";
                    vGoalColorclass = "orangeborder";
                    break;
            };

            currentRow.removeClass('orangeborder redborder greenborder');
            currentRow.addClass(vGoalColorclass);
            goalstate.find('button').html(strGoalStateTxt + "<span class='caret'></span>").attr('disabled', false); //"Met "<span class='caret'></span>")
            $('.txtfieldquantitative').spinner({ step: 1.00, numberFormat: "n" });
        }
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

function UpdateCarePlanJoin(vVitalTypId, contactId, modifierId, vModfrName, vOsetValMetricOperator, vTargetValueTxt, vTargetValue2Txt, vQualTxt, vOsetValMetricOperator2, vOsetValGoalState, vobservedValue, vLastResultDate, vSliderTextValue,btnValue) {
    debugger;
    // alert(vobservedValue);
    SDK.REST.retrieveMultipleRecords(
    "tri_cccareplangoal",
    "?$select=tri_actiontriggermetricoperator,tri_SliderControlId,tri_actiontriggervalue,tri_activityassignmentrole,tri_activitydescription,tri_activitydescriptionabnormal,tri_activitydueon,tri_activityrecurrence,tri_activityrecurrenceabnormal,tri_activityrecurrencemultiplierabnormal,tri_activityrecurrencemultipliernormal,tri_CarePlanGoalState,tri_cccareplangoalId,tri_GoalSection,tri_GoalSelected,tri_LastGoalDate,tri_LastResultDate,tri_LastTargetValue,tri_Metric,tri_MetricOperator,tri_metricoperatortwo,tri_name,tri_NextDueDate,tri_PatientID,tri_PatientModifierId,tri_qualitativeaction,tri_qualitativetarget,tri_range,tri_targetmetricoperator,tri_targetvaluetwo,tri_typeofgoalcode,tri_vitalsvaluetype&$filter=tri_PatientID/Id eq (guid'" + contactId + "')   and  tri_PatientModifierId/Id eq (guid'" + modifierId + "') and tri_vitalsvaluetype/Id eq (guid'" + vVitalTypId + "')",
    function (results) {
        if (results.length > 0) {
            var boolCpgoal = true;

            for (var i = 0; i < results.length; i++) {
                var tri_actiontriggermetricoperator = results[i].tri_actiontriggermetricoperator;
                var tri_actiontriggervalue = results[i].tri_actiontriggervalue;
                var tri_activityassignmentrole = results[i].tri_activityassignmentrole;
                var tri_activitydescription = results[i].tri_activitydescription;
                var tri_activitydescriptionabnormal = results[i].tri_activitydescriptionabnormal;
                var tri_activitydueon = results[i].tri_activitydueon;
                var tri_activityrecurrence = results[i].tri_activityrecurrence.Value;
                var tri_activityrecurrenceabnormal = results[i].tri_activityrecurrenceabnormal.Value;
                var tri_activityrecurrencemultiplierabnormal = results[i].tri_activityrecurrencemultiplierabnormal;
                var tri_activityrecurrencemultipliernormal = results[i].tri_activityrecurrencemultipliernormal;
                var tri_CarePlanGoalState = results[i].tri_CarePlanGoalState;
                var tri_cccareplangoalId = results[i].tri_cccareplangoalId;
                var tri_GoalSection = results[i].tri_GoalSection;
                var tri_GoalSelected = results[i].tri_GoalSelected;
                var tri_LastGoalDate = results[i].tri_LastGoalDate;
                var tri_LastResultDate = results[i].tri_LastResultDate;
                var tri_LastTargetValue = results[i].tri_LastTargetValue;
                var tri_Metric = results[i].tri_Metric;
                var tri_MetricOperator = results[i].tri_MetricOperator;
                var tri_metricoperatortwo = results[i].tri_metricoperatortwo;
                var tri_name = results[i].tri_name;
                var tri_NextDueDate = results[i].tri_NextDueDate;
                var tri_PatientID = results[i].tri_PatientID;
                var tri_PatientModifierId = results[i].tri_PatientModifierId;
                var tri_qualitativeaction = results[i].tri_qualitativeaction;
                var tri_qualitativetarget = results[i].tri_qualitativetarget;
                var tri_range = results[i].tri_range;
                var tri_targetmetricoperator = results[i].tri_targetmetricoperator;
                var tri_targetvaluetwo = results[i].tri_targetvaluetwo;
                var tri_typeofgoalcode = results[i].tri_typeofgoalcode.Value;
                var tri_vitalsvaluetype = results[i].tri_vitalsvaluetype.Id;
                var tri_SliderControlId = results[i].tri_SliderControlId.Id;

                var tri_cccareplangoal = {}
                tri_cccareplangoal.tri_GoalSelected = boolCpgoal;

                switch (tri_typeofgoalcode) {
                    case 100000000:
                        //tri_careplanjoin.tri_qualitativetarget = vTargetValueTxt;
                        if (vQualTxt !== null && vQualTxt !== "" && typeof vQualTxt !== "undefined") {
                            tri_cccareplangoal.tri_qualitativetarget = vQualTxt;
                        }

                        if (vSliderTextValue !== null && vSliderTextValue !== "" && typeof vSliderTextValue !== "undefined") {
                            // tri_cccareplangoal.tri_lastresult = vobservedValue;
                            tri_cccareplangoal.tri_lastresult = vSliderTextValue;
                            tri_cccareplangoal.tri_LastResultDate = vLastResultDate;
                        }

                        // add slider data
                        break;
                    case 100000001:
                        if (vTargetValueTxt !== null && vTargetValueTxt !== "" && typeof vTargetValueTxt !== "undefined") {
                            tri_cccareplangoal.tri_Metric = parseFloat(vTargetValueTxt).toFixed(2);
                        }
                       
                        if (vOsetValMetricOperator !== null && vOsetValMetricOperator !== "" && typeof vOsetValMetricOperator !== "undefined") {
                            tri_cccareplangoal.tri_MetricOperator = { Value: parseInt(vOsetValMetricOperator, 10) };
                        }
                        if (vOsetValMetricOperator2 !== null && vOsetValMetricOperator2 !== "" && typeof vOsetValMetricOperator2 !== "undefined") {
                            tri_cccareplangoal.tri_metricoperatortwo = { Value: parseInt(vOsetValMetricOperator2, 10) };
                        }

                        if (tri_range && typeof tri_range !== "undefined" && tri_range !== null) {
                            if (vTargetValue2Txt !== null && vTargetValue2Txt !== "" && typeof vTargetValue2Txt !== "undefined") {
                                tri_cccareplangoal.tri_targetvaluetwo = parseFloat(vTargetValue2Txt).toFixed(2);
                            }

                            if (vobservedValue !== null && vobservedValue !== "" && typeof vobservedValue !== "undefined") {
                                tri_cccareplangoal.tri_LastTargetValue = vobservedValue;
                            }
                        }
                        break;
                }

                if (vOsetValGoalState !== null && vOsetValGoalState !== "" && typeof vOsetValGoalState !== "undefined") {
                    tri_cccareplangoal.tri_CarePlanGoalState = { Value: parseInt(vOsetValGoalState, 10) };
                };

                SDK.REST.updateRecord(tri_cccareplangoalId,
                                      tri_cccareplangoal,
                                      "tri_cccareplangoal",
                                     function () {
                                         if (btnValue === 'Submit') {
                                             //alert('Goals are Submitted.');
                                             //window.opener.reload();
                                             self.opener.location.reload();
                                             window.close();
                                             //return false;
                                         }
                                     },
                                      errorHandler);
            }
        }
    },
    function (error) {
        alert(error.message);
    },
    function () {
        //if (btnValue === 'Submit') {
        //    alert('Goals are Submitted.');
        //    //window.opener.reload();
        //    self.opener.location.reload();
        //    window.close();
        //    //return false;
        //}
    }
);
}

