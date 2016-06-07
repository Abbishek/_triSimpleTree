"use strict";

$(function () {
    $('#addplan').click(function () {
       // GetPlanNode(1);
    });

    openTab($('#detailsList li a'), "All", '#0072C6', true);
});

function htmlDecode(value) {
    return value.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function opendialog(page) {
    var $dialog = $('#addNewCarePlan')
    .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
    .dialog({
        title: "Type & Details Description",
        autoOpen: false,
        dialogClass: 'dialog_fixed,ui-widget-header',
        modal: true,
        height: 500,
        minWidth: 500,
        minHeight: 500,
        draggable: true,
        close: function () {
            $(this).remove();
        }
        ,
        buttons: {
            "Ok": function () {
                $(this).dialog("close");
            }
        }
    });
    $dialog.dialog('open');
}

function OpenPersonalizeWindow(CarePlanId) {
      debugger;
    var myWindow = $(".window-wrapper");

    //////////////////////////////////
    //var popupPlans = GetCarePlanfromCarePlanId(CarePlanId);
    var popupPlans = CarePlanDataPersonalize;

    var CarPlans = Enumerable.From(popupPlans)
                               .Where(function (x) { return x.attributes.tri_careplanid.id })
                               .ToArray();

    // create a template using the above definition
    var temp = $("#PersonalizeCarePlanTemplate").html();
    var PersonalizeCarePlanTemplate = kendo.template(temp);
    var dataSource = new kendo.data.DataSource({
        data: CarPlans,
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

    myWindow.data("kendoWindow").center().open();

    //$.ajax({
    //    type: "POST",
    //    data: carePlanId,
    //    //data: { ID: singleItem.ID }, //for passing single item parameter 
    //    url: 'personalizepopup.html',
    //    success: function (result) {
    //        console.log(result);
    //    }
    //});
}

function openTypeDetailsDescription(ele)
{

}

function openTab(listele, symptomName, color, Isfirstload) {
    //var i;
    //var x = document.getElementsByClassName("symptoms");
    //var ele = document.getElementById(symptomName);

    //if (symptomName === "All") {
    //    if (Isfirstload) {
    //        $(x).hide();
    //        for (i = 0; i < x.length; i++) {
    //            x[i].style.display = "none";
    //        }
    //        $(listele)[0].style.fontSize = "18px";
    //    }
    //    else if ($(listele)[0].innerText === "All (4)" && $(ele).is(":visible")){ //ele.style.display === "block") {
    //        for (i = 0; i < x.length; i++) {
    //            x[i].style.display = "none";
    //        }
    //        $(listele)[0].innerText = "+";
    //        //ele.style.display = "none";
    //        $(ele).hide(1000);
    //        $(ele).css("visibility", "hidden");
    //        $(listele)[0].style.fontSize = "18px";
    //    }
    //    else if ($(listele)[0].innerText === "All (4)" && !$(ele).is(":visible")) { //ele.style.display === "none") {
    //        for (i = 0; i < x.length; i++) {
    //            x[i].style.display = "none";
    //        }
    //        //ele.style.display = "block";
    //        $(ele).show(500);
    //        $(ele).css("visibility", "visible");
    //        $(listele)[0].style.fontSize = "10px";
    //    }
    //    else if ($(listele)[0].innerText === "+" && !$(ele).is(":visible") ){ // ele.style.display === "none") {
    //        for (i = 0; i < x.length; i++) {
    //            x[i].style.display = "none";
    //        }
    //        //ele.style.display = "block";
    //        $(ele).show(500);
    //        $(ele).css("visibility", "visible");
    //        $(listele)[0].innerText = "All (4)";
    //        $(listele)[0].style.fontSize = "10px";

    //    }
    //}
    //else {
    //    if (!$(ele).is(":visible")) {
    //        for (i = 0; i < x.length; i++) {
    //            x[i].style.display = "none";
    //        }
    //        $('#detailsList li a')[0].innerText = "All (4)";
    //        $('#detailsList li a')[0].style.fontSize = "10px";
    //        $(ele).show(500);
    //        $(ele).css("visibility", "visible");
    //    }
    //}

    //document.getElementById("detailsList").style.borderBottom = "thick solid " + color;
    //$('#detailsList li:last-child').css({ color: color, fontSize: "20px" });
}






