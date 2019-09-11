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

let manCount = 0;
let womanCount = 0;
let manNameList = '';
let womanNameList = '';
const secondParticipantMan = document.querySelector('#second-party-man');
const secondParticipantWoman = document.querySelector('#second-party-woman');
const secondCountMan = document.querySelector('#second-count-man');
const secondCountWoman = document.querySelector('#second-count-woman');
for (var i = 0; i < wholeData.length; i++) {
  if (wholeData[i][1] == '1' && wholeData[i][6] == '○') {
    manNameList += wholeData[i][4] + ', ';
    manCount++;
  }
}
secondParticipantMan.textContent = manNameList;
secondCountMan.textContent = '男性 ' + manCount + '名';
for (var i = 0; i < wholeData.length; i++) {
  if (wholeData[i][1] == '2' && wholeData[i][6] == '○') {
    womanNameList += wholeData[i][4] + ', ';
    womanCount++;
  }
}
secondParticipantWoman.textContent = womanNameList;
secondCountWoman.textContent = '女性 ' + womanCount + '名';

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
