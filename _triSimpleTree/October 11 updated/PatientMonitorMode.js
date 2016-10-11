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

function GetCarePlanfromPatitentId(PatientId) {
    var retrievedPlanRecords = [];

    var FetchXmlplan =
"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
"  <entity name='tri_careplanjoin'>" +
"    <attribute name='tri_careplanid' />" +
"    <attribute name='tri_careplangoalid' />" +
"    <attribute name='tri_planname' />" +
"   <attribute name='tri_schedulecategory'  />" +
"   <order attribute='tri_schedulecategory' descending='false' />" +
"   <order attribute='tri_goalsection' descending='false' />" +
"    <filter type='and'>" +
"      <condition attribute='tri_patientid' operator='eq' value='" + PatientId + "' />" +
"    </filter>" +
"  </entity>" +
"</fetch>";

    retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);
   return retrievedPlanRecords;
}

function GetSnoozeDatesfromPatitentId(PatientId) {
    var retrievedPlanRecords = [];

    var FetchXmlplan =
"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
"  <entity name='tri_cccareplangoal'>" +
"    <attribute name='tri_cccareplangoalid' />" +
"    <attribute name='tri_snoozeuntil' />" +
"    <filter type='and'>" +
"      <condition attribute='tri_patientid' operator='eq' value='" + PatientId + "' />" +
"    </filter>" +
"  </entity>" +
"</fetch>";

    retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);
    return retrievedPlanRecords;
}