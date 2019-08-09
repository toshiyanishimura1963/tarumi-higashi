//import { wholeData } from './data';
// import { wholeData } from './data.js';

const classes = {
  1: '.first-class',
  2: '.second-class',
  3: '.third-class',
  4: '.fourth-class',
  5: '.fifth-class',
  6: '.sixth-class',
  7: '.seventh-class',
  8: '.eighth-class'
};

let classNo;
let nameList = '';
for (let key in classes) {
  // console.log(key + '：' + classes[key]);
  classNo = document.querySelector('#name-list ' + classes[key]);
  for (var i = 0; i < wholeData.length; i++) {
    if (wholeData[i][0] == key) {
      nameList += wholeData[i][4] + ', ';
      // console.log(wholeData[i][24]);
    }
  }
  // console.log(nameList, key, classNo);
  classNo.textContent = nameList;
  nameList = '';
}

let participantCount = 0;
const participantHeader  = document.querySelector('#participant-count')
for (let key in classes) {
  classNo = document.querySelector('#participant ' + classes[key]);
  for (var i = 0; i < wholeData.length; i++) {
    if (wholeData[i][0] == key && wholeData[i][5] == '○') {
      nameList += wholeData[i][4] + ', ';
      participantCount++;
    }
  }
  classNo.textContent = nameList;
  // console.log(nameList);
  nameList = '';
  participantHeader.textContent = '参加予定者 ' + participantCount + '名';
}
