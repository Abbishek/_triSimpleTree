if (typeof (MonitorMode) == "undefined")
{ MonitorMode = { __namespace: true }; }
MonitorMode.Helper = {

    GetAllCarePath: function () {

        var FetchXmlplan =
            "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
              "<entity name='tri_cccarepath'>" +
                "<attribute name='tri_cccarepathid' />" +
                "<attribute name='tri_name' />" +
                "<attribute name='createdon' />" +
                "<order attribute='tri_name' descending='false' />" +
                "<filter type='and'>" +
                "<condition attribute='statecode' operator='eq' value='0' />" +
                "</filter>" +
              "</entity>" +
            "</fetch>";
        retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);
        return retrievedPlanRecords;
    },
    GetCarePlanfromPatitentId: function (PatientId) {
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
    },
    GetSnoozeDatesfromPatitentId: function (PatientId) {
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
    },
    GetCarePlanfromCarePlanId: function (CarePlanId) {

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
        retrievedPlanRecords = XrmServiceToolkit.Soap.Fetch(FetchXmlplan);
        return retrievedPlanRecords;
    },
    __namespace: true
};