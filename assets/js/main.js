
const list_nav1 = document.querySelector(".list_nav1");
const list_nav2 = document.querySelector(".list_nav2");
const list_nav3 = document.querySelector(".list_nav3");
const list_nav4 = document.querySelector(".list_nav4");
const list_nav5 = document.querySelector(".list_nav5");
list_nav1.style.display = "none";
list_nav2.style.display = "none";
list_nav3.style.display = "none";
list_nav4.style.display = "none";
list_nav5.style.display = "none";

const close_nav1 = document.getElementById("close_nav1");
const open_nav1 = document.getElementById("open_nav1");
const close_nav2 = document.getElementById("close_nav2");
const open_nav2 = document.getElementById("open_nav2");
const close_nav3 = document.getElementById("close_nav3");
const open_nav3 = document.getElementById("open_nav3");
const close_nav4 = document.getElementById("close_nav4");
const open_nav4 = document.getElementById("open_nav4");
const close_nav5 = document.getElementById("close_nav5");
const open_nav5 = document.getElementById("open_nav5");
function openNav1(){
  list_nav1.style.display = "block";
  open_nav1.style.display = "none";
  close_nav1.style.display = "block";
  
}
function closeNav1(){
  list_nav1.style.display = "none";
  open_nav1.style.display = "block";
  close_nav1.style.display = "none";

}

function openNav2(){
  list_nav2.style.display = "block";
  open_nav2.style.display = "none";
  close_nav2.style.display = "block";
  
}
function closeNav2(){
  list_nav2.style.display = "none";
  open_nav2.style.display = "block";
  close_nav2.style.display = "none";

}

function openNav3(){
  list_nav3.style.display = "block";
  open_nav3.style.display = "none";
  close_nav3.style.display = "block";
  
}
function closeNav3(){
  list_nav3.style.display = "none";
  open_nav3.style.display = "block";
  close_nav3.style.display = "none";

}

function openNav4(){
  list_nav4.style.display = "block";
  open_nav4.style.display = "none";
  close_nav4.style.display = "block";
  
}
function closeNav4(){
  list_nav4.style.display = "none";
  open_nav4.style.display = "block";
  close_nav4.style.display = "none";

}

function openNav5(){
  list_nav5.style.display = "block";
  open_nav5.style.display = "none";
  close_nav5.style.display = "block";
  
}
function closeNav5(){
  list_nav5.style.display = "none";
  open_nav5.style.display = "block";
  close_nav5.style.display = "none";

}



const show_more = document.getElementById("show_more_btn");
const show_less = document.getElementById("show_less_btn");
const seccond_list = document.getElementById("seccond_list");

function showMore(){
  show_more.style.display = "none";
  show_less.style.display = "block";
  seccond_list.style.display = "block";

}
function showLess(){
  show_more.style.display = "block";
  show_less.style.display = "none";
  seccond_list.style.display = "none";

}