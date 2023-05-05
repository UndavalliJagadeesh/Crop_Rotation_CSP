// Example function to calculate crop rotation schedule

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
  options.forEach(option =>
    optionList.add(
      new Option(option, option, true)
      )
  );

  nextCrop(nextcrop);
}

function nextCrop(lst){
  var divElement = document.getElementById('nextCrop');
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 2; j++) {
      if (i == 2 && j == 1) {
        break
      } else {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('\u0020'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        tr.appendChild(td)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  divElement.appendChild(tbl)

}
