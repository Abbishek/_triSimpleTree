
function GetPlanNodefornewUI(PatientId) {

    var FetchXmlplan =
     "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
"  <entity name='tri_careplanjoin'>" +
"    <attribute name='tri_careplanid' />" +
"    <attribute name='tri_careplanactionid' />" +
"    <attribute name='tri_careplanissueid' />" +
"    <attribute name='tri_careplangoalid' />" +
"    <attribute name='tri_careplanjoinid' />" +
"    <attribute name='tri_planname' />" + /////////
"    <attribute name='tri_issuename' />" +
"    <attribute name='tri_goalname' />" +
"    <attribute name='tri_actionname' />" +
"    <attribute name='new_goalstate' />" +
"    <attribute name='tri_planselected'/>" +
"    <attribute name='tri_issueselected'/>" +
"    <attribute name='tri_goalselected'/>" +
"    <attribute name='tri_actionselected'/>" +
"   <attribute name='tri_vitalvaluetypename' />" +
"   <attribute name='tri_patientfactor' />" +
"   <attribute name='tri_metric' />" +
"   <attribute name='tri_targetmetricoperator' />" +
"   <attribute name='tri_actiontriggervalue' />" +
"   <attribute name='tri_activitydescription' />" +
"   <attribute name='tri_measuredetails' />" +
"   <attribute name='tri_activityassignmentrole'  />" +
"   <attribute name='tri_schedulecategory'  />" +
"   <attribute name='tri_goalsection'  />" +
"   <order attribute='tri_schedulecategory' descending='false' />" +
"   <order attribute='tri_goalsection' descending='false' />" +
"    <filter type='and'>" +
"      <condition attribute='tri_patientid' operator='eq' value='" + PatientId + "' />" +
"    </filter>" +
"  </entity>" +
"</fetch>"
    // alert(FetchXmlplan);
    retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);

    return retrievedPlanRecords;
}

function GetAllCarePath() {

    var FetchXmlplan =
        "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
          "<entity name='tri_cccarepath'>" +
            "<attribute name='tri_cccarepathid' />" +
            "<attribute name='tri_name' />" +
            "<attribute name='createdon' />" +
            "<order attribute='tri_name' descending='false' />" +
            "<filter type='and'>"+
            "<condition attribute='statecode' operator='eq' value='0' />"+
            "</filter>"+
          "</entity>"+
        "</fetch>";
    // alert(FetchXmlplan);
    retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);

    return retrievedPlanRecords;
}

function GetCarePathFromId(CarePathId) {

    var FetchXmlplan =
        "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
          "<entity name='tri_cccarepath'>" +
            "<attribute name='tri_cccarepathid' />" +
            "<attribute name='tri_name' />" +
            "<attribute name='createdon' />" +
            "<order attribute='tri_name' descending='false' />" +
                "<filter type='and'>" +
                  "<condition attribute='statecode' operator='eq' value='" + CarePathId + "' />" +
                "</filter>" +
          "</entity>"+
    "</fetch>";
    // alert(FetchXmlplan);
    retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);

    return retrievedPlanRecords;
}

function GetCarePlanfromPatitentIdandCarePlanName(PatientId, CarePlanName) {

    var FetchXmlplan =
"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
"  <entity name='tri_careplanjoin'>" +
"    <attribute name='tri_careplanid' />" +
"    <attribute name='tri_careplanactionid' />" +
"    <attribute name='tri_careplanissueid' />" +
"    <attribute name='tri_careplangoalid' />" +
"    <attribute name='tri_careplanjoinid' />" +
"    <attribute name='tri_planname' />" +
"    <attribute name='tri_issuename' />" +
"    <attribute name='tri_goalname' />" +
"    <attribute name='tri_actionname' />" +
"    <attribute name='new_goalstate' />" +
"    <attribute name='tri_planselected'/>" +
"    <attribute name='tri_issueselected'/>" +
"    <attribute name='tri_goalselected'/>" +
"    <attribute name='tri_actionselected'/>" +
"   <attribute name='tri_vitalvaluetypename' />" +
"   <attribute name='tri_patientfactor' />" +
"   <attribute name='tri_metric' />" +
"   <attribute name='tri_targetvaluetwo' />" +
"   <attribute name='tri_targetmetricoperator' />" +
"   <attribute name='tri_actiontriggervalue' />" +
"   <attribute name='tri_activitydescription' />" +
"   <attribute name='tri_measuredetails' />" +
"   <attribute name='tri_activityassignmentrole'  />" +
"   <attribute name='tri_schedulecategory'  />" +
"   <attribute name='tri_goalsection'  />" +
"   <attribute name='tri_metric'/> " +
"   <attribute name='tri_nextduedate'/> " +
"   <attribute name='tri_lastgoaldate'/> " +
"   <attribute name='tri_lasttargetvalue'/> " +
"   <order attribute='tri_schedulecategory' descending='false' />" +
"   <order attribute='tri_goalsection' descending='false' />" +
"    <filter type='and'>" +
"      <condition attribute='tri_patientid' operator='eq' value='" + PatientId + "' />" +
"      <condition attribute='tri_planname' operator='eq' value='" + CarePlanName + "' />" +
"    </filter>" +
"  </entity>" +
"</fetch>";
    // alert(FetchXmlplan);
    retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);

    return retrievedPlanRecords;
}

function GetCarePlanfromPatitentId(PatientId) {

    var FetchXmlplan =
"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
"  <entity name='tri_careplanjoin'>" +
"    <attribute name='tri_careplanid' />" +
"    <attribute name='tri_careplanactionid' />" +
"    <attribute name='tri_careplanissueid' />" +
"    <attribute name='tri_careplangoalid' />" +
"    <attribute name='tri_careplanjoinid' />" +
"    <attribute name='tri_planname' />" +
"    <attribute name='tri_issuename' />" +
"    <attribute name='tri_goalname' />" +
"    <attribute name='tri_actionname' />" +
"    <attribute name='new_goalstate' />" +
"    <attribute name='tri_planselected'/>" +
"    <attribute name='tri_issueselected'/>" +
"    <attribute name='tri_goalselected'/>" +
"    <attribute name='tri_actionselected'/>" +
"   <attribute name='tri_vitalvaluetypename' />" +
"   <attribute name='tri_patientfactor' />" +
"   <attribute name='tri_metric' />" +
"   <attribute name='tri_targetvaluetwo' />" +
"   <attribute name='tri_targetmetricoperator' />" +
"   <attribute name='tri_actiontriggervalue' />" +
"   <attribute name='tri_activitydescription' />" +
"   <attribute name='tri_measuredetails' />" +
"   <attribute name='tri_activityassignmentrole'  />" +
"   <attribute name='tri_schedulecategory'  />" +
"   <attribute name='tri_goalsection'  />" +
"   <attribute name='tri_metric'/> " +
"   <attribute name='tri_nextduedate'/> " +
"   <attribute name='tri_lastgoaldate'/> " +
"   <attribute name='tri_lasttargetvalue'/> " +
"   <order attribute='tri_schedulecategory' descending='false' />" +
"   <order attribute='tri_goalsection' descending='false' />" +
"    <filter type='and'>" +
"      <condition attribute='tri_patientid' operator='eq' value='" + PatientId + "' />" +
"    </filter>" +
"  </entity>" +
"</fetch>";
    // alert(FetchXmlplan);
    retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);

    return retrievedPlanRecords;
}

function GetCarePlanfromCarePlanId(CarePlanId) {

    var FetchXmlplan =
"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
"  <entity name='tri_careplanjoin'>" +
"    <attribute name='tri_careplanid' />" +
"    <attribute name='tri_careplanjoinid' />" +
"    <attribute name='tri_planname' />" +
"    <attribute name='tri_goalname' />" +
"    <attribute name='new_goalstate' />" +
"   <attribute name='tri_vitalvaluetypename' />" +
"   <attribute name='tri_patientfactor' />" +
"   <attribute name='tri_metric' />" +
"   <attribute name='tri_targetvaluetwo' />" +
"   <attribute name='tri_targetmetricoperator' />" +
"   <attribute name='tri_measuredetails' />" +
"   <attribute name='tri_activityassignmentrole'  />" +
"   <attribute name='tri_goalsection'  />" +
"   <attribute name='tri_activitydescription'/> " +
"   <attribute name='tri_nextduedate'/> " +
"   <attribute name='tri_lastgoaldate'/> " +
"   <attribute name='tri_lasttargetvalue'/> " +
"   <order attribute='tri_schedulecategory' descending='false' />" +
"   <order attribute='tri_goalsection' descending='false' />" +
"    <filter type='and'>" +
"      <condition attribute='tri_careplanid' operator='eq' value='" + CarePlanId + "' />" +
"    </filter>" +
"  </entity>" +
"</fetch>";
    // alert(FetchXmlplan);
    retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);

    return retrievedPlanRecords;
}