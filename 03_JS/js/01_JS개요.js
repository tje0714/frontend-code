/*
파일이름.js

js 파일 내부를 <script> 태그 내부라고 보면 됨

html 내부에 <script> 를 작성 후 javascript 코드를 
작성해도 되고
또는

<script src="js파일위치/파일이름.js"> 를 이용해서 
html과 js 파일을 분리하여 작성해도됨

*/

function externalFn() {
  alert("HTML 외부 파일에 작성된 externalFn() 함수 기능이 호출되었습니다.");
}
//   document = html 파일 문서 . 안에서  선택하다  ("body") <body> 태그를
const html파일내의body태그 = document.querySelector("body");

function 어두움모드() {
  html파일내의body태그.style.color = "white";
  html파일내의body태그.style.backgroundColor = "black";
}

function 밝음모드() {
  html파일내의body태그.style.color = "black";
  html파일내의body태그.style.backgroundColor = "white";
}
