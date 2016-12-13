function GetMetricOperatorTextBasedOnVal(OprtrVal) {
    switch (OprtrVal) {
        case 167410000:
            return (">");
            break;
        case 167410001:

            return ("<");
            break;
        case 167410002:

            return ("=");
            break;
        case 167410003:

            return ("% Increase");
            break;
        case 167410004:

            return ("% Decrease");
            break;
        case 167410005:

            return (">=");
            break;
        case 167410006:

            return ("<=");
            break;
    }
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

function GetOsetValFromTextGoalState(vGoalStateTxt) {
    //alert(vMetricOprtrTxt);
    var OprtrVal = "";

    if (vGoalStateTxt !== null && vGoalStateTxt.length > 0) {
        switch (vGoalStateTxt) {
            case "Open":
                OprtrVal = "167410000";
                break;
            case "Met":
                OprtrVal = "167410001";
                break;
            case "Not Met":
                OprtrVal = "167410002";
                break;
            case "Closed, Cancelled":
                OprtrVal = "167410003";
                break;

        }
    }
    else { OprtrVal = "-1"; };

    return OprtrVal;
    //alert(OprtrVal);
}

function updateSuccessCallback() {
    // alert("The record changes were saved");
}
function errorHandler(error) {
    alert(error.message);
}
