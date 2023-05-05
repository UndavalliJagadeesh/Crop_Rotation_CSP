// Example function to calculate crop rotation schedule
var cropList=[]
function calculateSchedule() {
  
  var cropGroup = document.getElementById('currentCropFamily').value;
  var nextcrop = [];

  console.log(cropGroup);
  potatoFamily = ['Potato','Tomato'];
  legumesFamily = ['Peas','Broad Beans', 'French Beans', 'Runner Beans'];
  brassicasFamily = ['Brussels sprouts', 'Cabbage','Cauliflower', 'Kale', 'Kohl-rabi', 'Oriental geens', 'Radish', 'Swede', 'Turnips'];
  rootsFamily = ['Alliums', 'Beetroot', 'Carrot', 'Celeric', 'Celery', 'Florence', 'Fennel', 'Parsley', 'Parsnip']
  let options =[];
  let optionList = document.getElementById('currentCrop').options;
  switch(cropGroup){
    case 'potato':
      options = potatoFamily;
      nextcrop = legumesFamily;
      break;
    case 'legumes':
      options = legumesFamily;
      nextcrop = brassicasFamily;
      break;
    case 'brassicas':
      options = brassicasFamily;
      nextcrop = rootsFamily;
      break;
    case 'roots':
      options = rootsFamily;
      nextcrop = potatoFamily;
      break;
    default:
      options = potatoFamily;
  }
  var i, L = optionList.length - 1;
   for(i = L; i >= 0; i--) {
      optionList.remove(i);
   }
   var option = document.createElement("option");
   option.style.display="none";
   document.getElementById('currentCrop').options.add(option);
  options.forEach(option =>
    optionList.add(
      new Option(option, option, true)
      )
  );
  cropList = nextcrop;
  addTable();
}

function addTable(){
    var divElement = document.getElementById('nextCrop');
    divElement.innerHTML ='';
    var ul = document.createElement("ul");
    cropList.forEach(element => {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(element));
      ul.appendChild(li);
    });
    var p = document.createElement('p');
    var content = document.createTextNode("You can grow one of the following crops for the next turn");
    p.appendChild(content);
    p.className ="content-font";
    divElement.appendChild(p);
    divElement.appendChild(ul);
}
