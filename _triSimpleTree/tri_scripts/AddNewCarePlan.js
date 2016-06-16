"use Strict";
///// Sample Goal Data
var careplangoal = [
{
    tri_CarePathGoalID: {
        Id: "35413781-8abf-e311-9876-0050568b4c09",
        LogicalName: "tri_cccarepathgoal",
        Name: "Optimal Start To RRT",
        RowVersion: null
    },
    tri_metricoperatortwo: {
        Value: null
    },
    tri_LastGoalDate: null,
    tri_LastTargetValue: null,
    tri_Metric: null,
    tri_LastResultDate: null,
    tri_activitydescription: null,
    tri_GoalSelected: null,
    tri_name: "Optimal Start To RRT",
    tri_targetvaluetwo: null,
    tri_targetmetricoperator: {
        Value: null
    },
    tri_MetricOperator: {
        Value: null
    },
    tri_typeofgoalcode: {
        Value: null
    },
    tri_NextDueDate: null,
    tri_activityassignmentrole: {
        Value: null
    },
    tri_PatientModifierId: {
        Id: null,
        LogicalName: null,
        Name: null,
        RowVersion: null
    },
    tri_measuredetails: null
}];

//// Sample CarePlan Join entity Data
var abc = [{
    tri_measuredetails: null,
    tri_NextDueDate: null,
    tri_PatientModifierId: {
        Id: null,
        LogicalName: null,
        Name: null,
        RowVersion: null
    },
    tri_metricoperatortwo: {
        Value: null
    },
    tri_typeofgoalcode: {
        Value: null
    },
    tri_targetvaluetwo: null,
    tri_name: "Sarnac Scott :: Care Plan",
    tri_LastTargetValue: null,
    tri_targetmetricoperator: {
        Value: null
    },
    tri_activitydescription: null,
    tri_CarePlanGoalID: {
        Id: "7382e9ef-9424-e411-8403-0050568f5c83",
        LogicalName: "tri_cccareplangoal",
        Name: "Blood Pressure - Systolic < 128, Diastolic < 88",
        RowVersion: null
    },
    tri_metric: null,
    new_GoalState: {
        Value: null
    },
    tri_LastGoalDate: null
}];

// sample code careplan goal update //
var entity = {};
entity.tri_GoalSelected = true;
entity.tri_activityassignmentrole = { Value: 167410000 };
entity.tri_activitydescription = "Test";
entity.tri_CarePlanGoalState = { Value: 167410001 };
entity.tri_LastGoalDate = new Date("06/16/2016").toLocaleString();
entity.tri_LastResultDate = new Date("06/17/2016").toLocaleString();
entity.tri_LastTargetValue = parseFloat(20).toFixed(2);
entity.tri_measuredetails = "test";
entity.tri_Metric = parseFloat(20).toFixed(2);
entity.tri_targetvaluetwo = parseFloat(40).toFixed(2);
entity.tri_metricoperatortwo = { Value: 167410001 };
entity.tri_NextDueDate = new Date("06/30/2016").toLocaleString();
entity.tri_PatientModifierId = {
    Id: null,
    LogicalName: null
};
entity.tri_targetmetricoperator = { Value: 167410001 };
entity.tri_typeofgoalcode = { Value: 100000000 };

SDK.JQuery.updateRecord(
    "dbf34939-a624-e611-80d1-005056810c7c",
    entity,
    "tri_cccareplangoal",
    function () {
        //Success - No Return Data - Do Something
    },
    function (error) {
        alert(error.message);
    }
);

var CarePlanDataPersonalize = [
{
    "id": "faf34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "DBP - All Diastolic"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "faf34939-a624-e611-80d1-005056810c7c"
        },
        "tri_lastgoaldate": {
            "type": "dateTime",
            "value": "2015-03-23T20:33:02.000Z",
            "formattedValue": "5/23/2016 4:33 PM"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "=",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 90,
            "formattedValue": "90.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Scheduled",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Diastolic"
        }
    }
},
{
    "id": "fcf34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Comorbid"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "fcf34939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000002,
            "formattedValue": "Comorbid",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 150,
            "formattedValue": "150.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Systolic"
        }
    }
},
{
    "id": "fef34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "fef34939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000001,
            "formattedValue": "Elderly / Frail",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 150,
            "formattedValue": "150.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Systolic"
        }
    }
},
{
    "id": "00f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "00f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 140,
            "formattedValue": "140.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Systolic"
        }
    }
},
{
    "id": "14f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "DB - Most Patients - Systolic"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "14f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 140,
            "formattedValue": "140.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": -1,
            "formattedValue": "",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Systolic"
        }
    }
},
{
    "id": "0af44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Statin - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "0af44939-a624-e611-80d1-005056810c7c"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "tri_activitydescription": {
            "type": "string",
            "value": "Medication Review for Adherence"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000002,
            "formattedValue": "Medications",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "10 year risk greater than or equal to 10% and age 21-75"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Statin"
        }
    }
},
{
    "id": "0cf44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Statin - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "0cf44939-a624-e611-80d1-005056810c7c"
        },
        "tri_patientfactor": {
            "value": 100000001,
            "formattedValue": "Elderly / Frail",
            "type": "OptionSetValue"
        },
        "tri_activitydescription": {
            "type": "string",
            "value": "Medication Review for Adherence"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000002,
            "formattedValue": "Medications",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "10 year risk < 10% and/or age > 75"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Statin"
        }
    }
},
{
    "id": "12f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Medication Adherence - All"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000002,
            "formattedValue": "Medications",
            "type": "OptionSetValue"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "12f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Medication Adherence"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        }
    }
},
{
    "id": "f4f34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Comorbid"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "f4f34939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000002,
            "formattedValue": "Comorbid",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 8,
            "formattedValue": "8.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "A1C"
        }
    }
},
{
    "id": "f6f34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "f6f34939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000001,
            "formattedValue": "Elderly / Frail",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 8,
            "formattedValue": "8.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "A1C"
        }
    }
},
{
    "id": "f8f34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "f8f34939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 7,
            "formattedValue": "7.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "A1C"
        }
    }
},
{
    "id": "02f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Dilated Eye Exam - All"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "02f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Dilated Eye Exam"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        }
    }
},
{
    "id": "04f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Foot Exam - All"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "04f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Foot Exam"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        }
    }
},
{
    "id": "06f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "eGFR - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "06f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410000,
            "formattedValue": ">",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 60,
            "formattedValue": "60.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "eGFR"
        }
    }
},
{
    "id": "08f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "ACR - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "08f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 30,
            "formattedValue": "30.00"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "ACR"
        }
    }
},
{
    "id": "0ef44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Vaccines"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "0ef44939-a624-e611-80d1-005056810c7c"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "tri_activitydescription": {
            "type": "string",
            "value": "Annual review for UTD"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Pneumovx x1 pre age 65, x2 after the age of 65; Flu shot annual; Hep B series once in life"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Vaccines"
        }
    }
},
{
    "id": "10f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "ASCVD - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "10f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "tri_activitydescription": {
            "type": "string",
            "value": "Every 3 years"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "40-75 years old if not already on max statin and ASA"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "ASCVD"
        }
    }
},
{
    "id": "16f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Breathing Symptoms - Short Of Breath"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "16f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Breathing Symptoms"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_activityassignmentrole": {
            "value": -1,
            "formattedValue": "",
            "type": "OptionSetValue"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        }
    }
}
];
var CarePlanData = [
{
    "id": "faf34939-a624-e611-80d1-005056810c7c",    // id "fcf34939-a624-e611-80d1-005056810c7c"
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "DBP - All Diastolic"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "faf34939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": ">",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 100,
            "formattedValue": "100.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 90,
            "formattedValue": "90.00"
        },
        "tri_careplangoalid": {
            "id": "dbf34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"                       //// Plan Name
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",             //// Goal Section
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Diastolic" ///// Type
        }
    }
},
{
    "id": "fcf34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Comorbid"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "fcf34939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "=",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 170,
            "formattedValue": "170.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 150,
            "formattedValue": "150.00"
        },
        "tri_careplangoalid": {
            "id": "d9f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000002,
            "formattedValue": "Comorbid",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Systolic"
        }
    }
},
{
    "id": "fef34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "fef34939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 170,
            "formattedValue": "170.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 150,
            "formattedValue": "150.00"
        },
        "tri_careplangoalid": {
            "id": "d7f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000001,
            "formattedValue": "Elderly / Frail",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Systolic"
        }
    }
},
{
    "id": "00f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "00f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 160,
            "formattedValue": "160.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 140,
            "formattedValue": "140.00"
        },
        "tri_careplangoalid": {
            "id": "d5f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Systolic"
        }
    }
},
{
    "id": "14f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "DB - Most Patients - Systolic"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "14f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 150,
            "formattedValue": "150.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 140,
            "formattedValue": "140.00"
        },
        "tri_careplangoalid": {
            "id": "eff34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": -1,
            "formattedValue": "",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Blood Pressure - Systolic"
        }
    }
},
{
    "id": "0af44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Statin - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "0af44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_careplangoalid": {
            "id": "e9f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000002,
            "formattedValue": "Medications",
            "type": "OptionSetValue"
        },
        "tri_activitydescription": {
            "type": "string",
            "value": "Medication Review for Adherence"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "10 year risk greater than or equal to 10% and age 21-75"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Statin"
        }
    }
},
{
    "id": "0cf44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Statin - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "0cf44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_patientfactor": {
            "value": 100000001,
            "formattedValue": "Elderly / Frail",
            "type": "OptionSetValue"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_careplangoalid": {
            "id": "e7f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000002,
            "formattedValue": "Medications",
            "type": "OptionSetValue"
        },
        "tri_activitydescription": {
            "type": "string",
            "value": "Medication Review for Adherence"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "10 year risk < 10% and/or age > 75"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Statin"
        }
    }
},
{
    "id": "12f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Medication Adherence - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "12f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_careplangoalid": {
            "id": "edf34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000002,
            "formattedValue": "Medications",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Medication Adherence"
        }
    }
},
{
    "id": "f4f34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Comorbid"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "f4f34939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 8,
            "formattedValue": "8.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 8,
            "formattedValue": "8.00"
        },
        "tri_careplangoalid": {
            "id": "d3f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000002,
            "formattedValue": "Comorbid",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "A1C"
        }
    }
},
{
    "id": "f6f34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "f6f34939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 8,
            "formattedValue": "8.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 8,
            "formattedValue": "8.00"
        },
        "tri_careplangoalid": {
            "id": "d1f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000001,
            "formattedValue": "Elderly / Frail",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "A1C"
        }
    }
},
{
    "id": "f8f34939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "f8f34939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 7,
            "formattedValue": "7.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 7,
            "formattedValue": "7.00"
        },
        "tri_careplangoalid": {
            "id": "cff34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "A1C"
        }
    }
},
{
    "id": "02f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Dilated Eye Exam - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "02f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_careplangoalid": {
            "id": "e1f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Scheduled",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Dilated Eye Exam"
        }
    }
},
{
    "id": "04f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Foot Exam - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "04f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 1,
            "formattedValue": "1.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_careplangoalid": {
            "id": "dff34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Met",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Foot Exam"
        }
    }
},
{
    "id": "06f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "eGFR - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "06f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410000,
            "formattedValue": ">",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 30,
            "formattedValue": "30.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 60,
            "formattedValue": "60.00"
        },
        "tri_careplangoalid": {
            "id": "e5f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "eGFR"
        }
    }
},
{
    "id": "08f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "ACR - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "08f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_targetmetricoperator": {
            "value": 167410001,
            "formattedValue": "<",
            "type": "OptionSetValue"
        },
        "tri_actiontriggervalue": {
            "type": "decimal",
            "value": 300,
            "formattedValue": "300.00"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_metric": {
            "type": "decimal",
            "value": 30,
            "formattedValue": "30.00"
        },
        "tri_careplangoalid": {
            "id": "e3f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Scheduled",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "ACR"
        }
    }
},
{
    "id": "0ef44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Vaccines"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "0ef44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_careplangoalid": {
            "id": "ddf34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_activitydescription": {
            "type": "string",
            "value": "Annual review for UTD"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Not Met",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Pneumovx x1 pre age 65, x2 after the age of 65; Flu shot annual; Hep B series once in life"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Vaccines"
        }
    }
},
{
    "id": "10f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "ASCVD - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "10f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_careplangoalid": {
            "id": "ebf34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": 167410003,
            "formattedValue": "Care Navigator",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "tri_activitydescription": {
            "type": "string",
            "value": "Every 3 years"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Not Met",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "40-75 years old if not already on max statin and ASA"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "ASCVD"
        }
    }
},
{
    "id": "16f44939-a624-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Breathing Symptoms - Short Of Breath"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "16f44939-a624-e611-80d1-005056810c7c"
        },
        "tri_issueselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_patientfactor": {
            "value": 100000000,
            "formattedValue": "Most patients",
            "type": "OptionSetValue"
        },
        "tri_goalselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_careplanid": {
            "id": "cef34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplan",
            "type": "EntityReference"
        },
        "tri_schedulecategory": {
            "value": 100000000,
            "formattedValue": "Care Management Schedule",
            "type": "OptionSetValue"
        },
        "tri_careplangoalid": {
            "id": "f1f34939-a624-e611-80d1-005056810c7c",
            "logicalName": "",
            "name": "tri_cccareplangoal",
            "type": "EntityReference"
        },
        "tri_actionselected": {
            "type": "boolean",
            "value": true,
            "formattedValue": "Yes"
        },
        "tri_planname": {
            "type": "string",
            "value": "KM DM"
        },
        "tri_activityassignmentrole": {
            "value": -1,
            "formattedValue": "",
            "type": "OptionSetValue"
        },
        "tri_goalsection": {
            "value": 100000001,
            "formattedValue": "Tests/Care",
            "type": "OptionSetValue"
        },
        "new_goalstate": {
            "value": 167410000,
            "formattedValue": "Not Met",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Breathing Symptoms"
        }
    }
}
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

var CarePathData =
    [
{
    "id": "168973cc-9bd1-e411-8453-0050568f7670",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "168973cc-9bd1-e411-8453-0050568f7670"
        },
        "tri_name": {
            "type": "string",
            "value": "Assisted Living - Base Care Path"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2015-03-23T20:33:02.000Z",
            "formattedValue": "3/23/2015 4:33 PM"
        }
    }
},
{
    "id": "6ab62559-c6ec-e311-8403-0050568f5c83",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "6ab62559-c6ec-e311-8403-0050568f5c83"
        },
        "tri_name": {
            "type": "string",
            "value": "Assisted Living - Fall Treatment"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-06-05T15:30:40.000Z",
            "formattedValue": "6/5/2014 11:30 AM"
        }
    }
},
{
    "id": "002b394a-c6ec-e311-8403-0050568f5c83",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "002b394a-c6ec-e311-8403-0050568f5c83"
        },
        "tri_name": {
            "type": "string",
            "value": "Assited Living - Fall Prevention"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-06-05T15:30:15.000Z",
            "formattedValue": "6/5/2014 11:30 AM"
        }
    }
},
{
    "id": "5506df9b-88bf-e311-9876-0050568b4c09",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "5506df9b-88bf-e311-9876-0050568b4c09"
        },
        "tri_name": {
            "type": "string",
            "value": "At Risk For Heart Disease"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-04-09T01:45:21.000Z",
            "formattedValue": "4/8/2014 9:45 PM"
        }
    }
},
{
    "id": "f2221e76-8ec9-e311-8403-0050568f5c83",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "f2221e76-8ec9-e311-8403-0050568f5c83"
        },
        "tri_name": {
            "type": "string",
            "value": "Care Path A"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-04-21T19:52:26.000Z",
            "formattedValue": "4/21/2014 3:52 PM"
        }
    }
},
{
    "id": "5591566c-88bf-e311-9876-0050568b4c09",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "5591566c-88bf-e311-9876-0050568b4c09"
        },
        "tri_name": {
            "type": "string",
            "value": "Chronic Kidney Disease (CKD)"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-04-09T01:44:01.000Z",
            "formattedValue": "4/8/2014 9:44 PM"
        }
    }
},
{
    "id": "a13092fd-26fe-e411-80ce-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "a13092fd-26fe-e411-80ce-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "CKD - short template"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2015-05-19T13:00:15.000Z",
            "formattedValue": "5/19/2015 9:00 AM"
        }
    }
},
{
    "id": "fc98a3cb-c6ec-e311-8403-0050568f5c83",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "fc98a3cb-c6ec-e311-8403-0050568f5c83"
        },
        "tri_name": {
            "type": "string",
            "value": "Diabetes Management"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-06-05T15:33:52.000Z",
            "formattedValue": "6/5/2014 11:33 AM"
        }
    }
},
{
    "id": "9a63ca26-2c18-e411-8403-0050568f5c83",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "9a63ca26-2c18-e411-8403-0050568f5c83"
        },
        "tri_name": {
            "type": "string",
            "value": "Diabetes Management"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-07-30T20:57:44.000Z",
            "formattedValue": "7/30/2014 4:57 PM"
        }
    }
},
{
    "id": "50b8e3fd-d3f0-e311-8403-0050568f5c83",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "50b8e3fd-d3f0-e311-8403-0050568f5c83"
        },
        "tri_name": {
            "type": "string",
            "value": "Diabetes Prevention"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-06-10T19:18:24.000Z",
            "formattedValue": "6/10/2014 3:18 PM"
        }
    }
},
{
    "id": "24715d19-ded0-e511-80cf-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "24715d19-ded0-e511-80cf-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "Hypertension"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2016-02-11T16:40:04.000Z",
            "formattedValue": "2/11/2016 11:40 AM"
        }
    }
},
{
    "id": "5000dedc-2c92-e511-80ce-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "5000dedc-2c92-e511-80ce-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "KM Adult CKD Stage 2-3"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2015-11-23T21:55:18.000Z",
            "formattedValue": "11/23/2015 4:55 PM"
        }
    }
},
{
    "id": "e4f9ea5a-cf8e-e511-80ce-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "e4f9ea5a-cf8e-e511-80ce-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "KM Adult Diabetes Monitoring"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2015-11-19T15:08:15.000Z",
            "formattedValue": "11/19/2015 10:08 AM"
        }
    }
},
{
    "id": "c351e7c6-2421-e611-80d1-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "c351e7c6-2421-e611-80d1-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "KM Cholesterol Management"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2016-05-23T20:27:33.000Z",
            "formattedValue": "5/23/2016 4:27 PM"
        }
    }
},
{
    "id": "49f432ba-2ee6-e511-80d0-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "49f432ba-2ee6-e511-80d0-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "KM CKD Goal Only"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2016-03-09T19:40:08.000Z",
            "formattedValue": "3/9/2016 2:40 PM"
        }
    }
},
{
    "id": "10e31708-85eb-e511-80d0-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "10e31708-85eb-e511-80d0-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "KM DM"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2016-03-16T14:40:40.000Z",
            "formattedValue": "3/16/2016 10:40 AM"
        }
    }
},
{
    "id": "0b24a9ca-2ae6-e511-80d0-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "0b24a9ca-2ae6-e511-80d0-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "KM DM Test Goal Only"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2016-03-09T19:11:57.000Z",
            "formattedValue": "3/9/2016 2:11 PM"
        }
    }
},
{
    "id": "07a00320-edd0-e511-80cf-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "07a00320-edd0-e511-80cf-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "Post Op ACL Surgery"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2016-02-11T18:27:38.000Z",
            "formattedValue": "2/11/2016 1:27 PM"
        }
    }
},
{
    "id": "6a531a34-edd0-e511-80cf-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "6a531a34-edd0-e511-80cf-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "Post Op ACL Surgery"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2016-02-11T18:28:18.000Z",
            "formattedValue": "2/11/2016 1:28 PM"
        }
    }
},
{
    "id": "dd9baa54-7abe-e311-9876-0050568b4c09",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "dd9baa54-7abe-e311-9876-0050568b4c09"
        },
        "tri_name": {
            "type": "string",
            "value": "Smoking Cessation"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-04-07T17:30:37.000Z",
            "formattedValue": "4/7/2014 1:30 PM"
        }
    }
},
{
    "id": "5846dcfa-2bea-e511-80d0-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "5846dcfa-2bea-e511-80d0-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "TEST"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2016-03-14T21:30:32.000Z",
            "formattedValue": "3/14/2016 5:30 PM"
        }
    }
},
{
    "id": "fb559a6e-72f9-e411-80ce-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "fb559a6e-72f9-e411-80ce-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "Weight Management"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2015-05-13T13:17:41.000Z",
            "formattedValue": "5/13/2015 9:17 AM"
        }
    }
},
{
    "id": "d2b5bc06-74f9-e411-80ce-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "d2b5bc06-74f9-e411-80ce-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "Weight Management"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2015-05-13T13:29:06.000Z",
            "formattedValue": "5/13/2015 9:29 AM"
        }
    }
},
{
    "id": "b50178b6-74f9-e411-80ce-005056810c7c",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "b50178b6-74f9-e411-80ce-005056810c7c"
        },
        "tri_name": {
            "type": "string",
            "value": "Weight Management"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2015-05-13T13:34:01.000Z",
            "formattedValue": "5/13/2015 9:34 AM"
        }
    }
},
{
    "id": "adb00e74-7abe-e311-9876-0050568b4c09",
    "logicalName": "tri_cccarepath",
    "attributes": {
        "tri_cccarepathid": {
            "type": "guid",
            "value": "adb00e74-7abe-e311-9876-0050568b4c09"
        },
        "tri_name": {
            "type": "string",
            "value": "Weight Management"
        },
        "createdon": {
            "type": "dateTime",
            "value": "2014-04-07T17:31:30.000Z",
            "formattedValue": "4/7/2014 1:31 PM"
        }
    }
}
];