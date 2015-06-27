
$(document).ready(function(){
'use strict';

$('a').smoothScroll();


$(".progress").each(function(index, element){
var canevas = $('<canvas id="myChart'+ index +'" width="60" height="60"></canvas>');

var pourcent = $(element).children().attr('aria-valuenow');

$(element).replaceWith(canevas)

var ctx = document.getElementById("myChart"+ index).getContext("2d");

var dataHtml = [
    {
        value: pourcent,
        color:"#8FCF3C",
        highlight: "#B7CA79",
        label: "HTML",
		
    },
	{
        value: 100-pourcent,
        color: "transparent",
        
    }
];

var element = new Chart(ctx).Doughnut(dataHtml);

(element)
});

}
);
