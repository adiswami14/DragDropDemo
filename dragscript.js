var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");
for(var draggable of draggables)
{
    draggable.addEventListener("dragstart", function(ev){
        ev.dataTransfer.setData("srcId", ev.target.id);
        console.log("dragstart");
    });
}
dropTarget.addEventListener("dragover", function(ev){
    ev.preventDefault();
    console.log("dragover");
});
dropTarget.addEventListener("drop", function(ev){
    ev.preventDefault();
    var target = ev.target;
    var srcId = ev.dataTransfer.getData("srcId");
    target.appendChild(document.getElementById(srcId));
    console.log("drop");
});