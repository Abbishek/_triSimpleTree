"use strict";
var aggregatedObject;

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

//Extend the protype so you can make calls on the instance
Object.prototype.merge = function (obj2) {
    for (var attrname in obj2) {
        this[attrname] = obj2[attrname];
    }
    //Returning this is optional and certainly up to your implementation.  
    //It allows for nice method chaining.
    return this;
};
//Append to the object constructor function so you can only make static calls
Object.merge2 = function (obj1, obj2) {
    for (var attrname in obj2) {
        obj1[attrname] = obj2[attrname];
    }
    //Returning obj1 is optional and certainly up to your implementation
    return obj1;
};



var CarePlanMonData =
[
{
    "id": "1bebea61-b01e-e611-80d1-005056810c7c", 
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "DBP - All Diastolic"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "1bebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "09ebea61-b01e-e611-80d1-005056810c7c",
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
        "tri_goalsection": { //Goal
            "value": 100000007,
            "formattedValue": "Home Vitals",
            "type": "OptionSetValue"
        },
        "tri_patientfactor": {
            "value": 100000004,
            "formattedValue": "All",
            "type": "OptionSetValue"
        },
        "new_goalstate": {  // GoalState
            "value": 167410001,
            "formattedValue": "Met",
            "type": "OptionSetValue"
        },
        "tri_measuredetails": {
            "type": "string",
            "value": "Validated home cuff is acceptable"
        },
        "tri_vitalvaluetypename": {    // Type&Name
            "type": "string",
            "value": "Blood Pressure - Diastolic"
        }
    }
}
,
{          
    "id": "1debea61-b01e-e611-80d1-005056810c7c", 
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Comorbid"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "1debea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c", 
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
            "id": "08ebea61-b01e-e611-80d1-005056810c7c",
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
}
,
{
    "id": "1febea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "1febea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "07ebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "21ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "SBP - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "21ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "06ebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "35ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "DB - Most Patients - Systolic"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "35ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "13ebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "2bebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Statin - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "2bebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "10ebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "2debea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Statin - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "2debea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "0febea61-b01e-e611-80d1-005056810c7c",
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
    "id": "33ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Medication Adherence - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "33ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "12ebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "15ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Comorbid"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "15ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "05ebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "17ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Elderly/Frail"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "17ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "04ebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "19ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "A1C - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "19ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "03ebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "23ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Dilated Eye Exam - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "23ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "0cebea61-b01e-e611-80d1-005056810c7c",
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
            "formattedValue": "Open",
            "type": "OptionSetValue"
        },
        "tri_vitalvaluetypename": {
            "type": "string",
            "value": "Dilated Eye Exam"
        }
    }
},
{
    "id": "25ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Foot Exam - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "25ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "0bebea61-b01e-e611-80d1-005056810c7c",
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
            "value": "Foot Exam"
        }
    }
},
{
    "id": "27ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "eGFR - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "27ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "0eebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "29ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "ACR - All"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "29ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "0debea61-b01e-e611-80d1-005056810c7c",
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
            "value": "ACR"
        }
    }
},
{
    "id": "2febea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "Vaccines"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "2febea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "0aebea61-b01e-e611-80d1-005056810c7c",
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
    "id": "31ebea61-b01e-e611-80d1-005056810c7c",
    "logicalName": "tri_careplanjoin",
    "attributes": {
        "tri_goalname": {
            "type": "string",
            "value": "ASCVD - Most Patients"
        },
        "tri_careplanjoinid": {
            "type": "guid",
            "value": "31ebea61-b01e-e611-80d1-005056810c7c"
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
            "id": "02ebea61-b01e-e611-80d1-005056810c7c",
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
            "id": "11ebea61-b01e-e611-80d1-005056810c7c",
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
}
]