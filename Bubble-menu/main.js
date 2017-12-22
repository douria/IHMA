
//circle showed when active mode bubble menu
var circle = document.getElementById('circleBase');


//all menus for menu1
var menu1 = document.getElementById('menu1');
var subMenu1 = menu1.childNodes[2];
var deepMenu0 = menu1.children[0].children[1];
var deepMenu1_list = subMenu1.children[1].children[1];
var deepMenu1_desc = subMenu1.children[1].children[0];
var deepMenu2_list = subMenu1.children[13].children[1];
var deepMenu2_desc = subMenu1.children[13].children[0];
var subdeep1_list = deepMenu2_list.children[0].children[1];
var subdeep1_desc = deepMenu2_list.children[0].children[0];


//all menus for menu2
var menu2 = document.getElementById('menu2');


//all menus for menu4
var menu4 = document.getElementById('menu4');
var undo = document.getElementById('undo');
var repeat = document.getElementById('repeat');
var clear = document.getElementById('clear');
var select = document.getElementById('select');
var subMenu4 = menu4.childNodes[2];
var deepMenu4_list = subMenu4.children[1].children[1];
var deepMenu4_desc = subMenu4.children[1].children[0];

//all menus for menu8
var menu8 = document.getElementById('menu8');
var subMenu8 = menu8.childNodes[2];
var originX = 150;
var originY = 20;
var menu_width = 102;
var menu_height = 32;


//record the mouse to active the floating menu when the mouse goes to left-down
var pointLast = [10000, 10000];
var pointCurrent = [10000, 10000];
var pointFloat = [0, 0];


// state of menu
var isMouseDown = false;

var isActiveMenu1 = false;
var isActiveMenu4 = false;
var isActiveMenu8 = false;

var isActiveSubMenu11 = false;
var isActiveSubMenu12 = false;

var isActiveSubDeep11 = false;
var isActiveSubDeep12 = false;

var isSubDeepItem1 = false;
var isSubDeepItem2 = false;




var isActiveSubMenu41 = false;
var isActiveSubDeep41 = false;

var isActiveSubMenu81 = false;


var isActiveFloatMenu = false;


var isShowedMenu1 = false;
var isShowedMenu4 = false;
var isShowedMenu8 = false;

var modeFix = false;
var modeMove = false;

var isInmenu1 = false;
var isInmenu2 = false;
var isInmenu4 = false;
var isInmenu8 = false;



var isBubble = false;
var isNormal = false;

menu1.onmouseenter = function() {
    isInmenu1 = true;
    console.log("test isinmenu1");
}
menu1.onmouseleave = function() {
    isInmenu1 = false;
}

menu2.onmouseenter = function() {
    isInmenu2 = true;
    console.log("test isinmenu1");
}
menu2.onmouseleave = function() {
    isInmenu2 = false;
}

menu4.onmouseenter = function() {
    isInmenu4 = true;
}
menu4.onmouseleave = function() {
    isInmenu4 = false;
}

menu8.onmouseenter = function() {
    isInmenu8 = true;
}
menu8.onmouseleave = function() {
    isInmenu8 = false;
}




document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);

function handleMouseDown(event) {

//    console.log(event.pageX, event.pageY);
    isMouseDown = true;
    isActiveFloatMenu = false;
    pointLast = [10000, 10000];
    pointCurrent = [10000, 10000];
    pointFloat = [10000, 10000];
    subMenu1.style.display = "none";
    subMenu4.style.display = "none";
    subMenu8.style.display = "none";

    console.log(isInmenu1);
    if ((isInmenu1 || isInmenu4 || isInmenu8) && modeMove == false) {
        modeFix = true;
        if (isInmenu1) {
            console.log("branch isInmenu1");
            var deepmenu2_top = deepMenu2_desc.getBoundingClientRect().top - 5;
            var deepmenu2_right = deepMenu2_desc.getBoundingClientRect().right;
            if(event.pageX > deepmenu2_right && event.pageY > deepmenu2_top){
                isActiveSubMenu12 = true;
            }
            var subdeep1_right = subdeep1_desc.getBoundingClientRect().right;
            var subdeep1_top = subdeep1_desc.getBoundingClientRect().top - 5;
            if(event.pageX > subdeep1_right && event.pageY > subdeep1_top){
                isActiveSubDeep11 = true;
            }
            if(event.pageX > deepmenu2_right && event.pageY < deepmenu2_top){
                isActiveSubMenu12 = false;
                isActiveSubDeep11 = false;
//                isShowedMenu1 = false;
                isInmenu1 = false;
//                modeFIx = false;
                return;
            }
            isShowedMenu1 = true;
            menu1.style.background = "#9400D3";
            subMenu1.style.display = "block";

        }
        if (isInmenu4) {

          var deepmenu4_top = deepMenu4_desc.getBoundingClientRect().top - 5;
          var deepmenu4_right = deepMenu4_desc.getBoundingClientRect().right;
          if(event.pageX > deepmenu4_right - 0.5*menu_width && event.pageX < deepmenu4_right){
              isBubble = true;
              isNormal = false;
          }
          if(event.pageX > deepmenu4_right - menu_width && event.pageX < deepmenu4_right - 0.5*menu_width){
              isBubble = false;
              isNormal = true;
          }
          if(event.pageX > deepmenu4_right && event.pageY > deepmenu4_top){
              isActiveSubMenu41 = true;
          }
            isShowedMenu4 = true;
            menu4.style.background = "#9400D3";
            subMenu4.style.display = "block";
        }
        if (isInmenu8) {
            isShowedMenu8 = true;
            menu8.style.background = "#9400D3";
            subMenu8.style.display = "block";
        }
        handleMouseMove(event);
        console.log("initial");
        return;
    }
    if (!(isInmenu1 || isInmenu2|| isInmenu4 || isInmenu8) && modeFix == false) {
        modeMove = true;
        modeFix = false;
        handleMouseMove(event);
        circle.style.visibility = "visible";
        console.log("big circle");
        return;
    } else {
        isShowedMenu1 = false;
        isShowedMenu4 = false;
        isShowedMenu8 = false;
        console.log("recover");
    }
}

function handleMouseUp(event) {
    isMouseDown = false;

    modeMove = false;

    originX = 150;
    originY = 20;


    undo.style.background = "white";
    repeat.style.background = "white";
    clear.style.background = "white";
    select.style.background = "white";


    circle.style.visibility = "hidden";

//    if (isActiveMenu1 && isActiveFloatMenu == false) {
    // menu1.style.background = "#DDA0DD";
    // menu4.style.background = "#DDA0DD";
    // menu8.style.background = "#DDA0DD";

    if (isActiveMenu1 && isActiveFloatMenu == false) {
        disactiveSubMenu(subMenu1);
        menu1.style.background = "#DDA0DD";
        isActiveMenu1 = false;
    }
    console.log("isactivemenu4",isActiveMenu4, isActiveFloatMenu);
    if (isActiveMenu4 && isActiveFloatMenu == false) {
        disactiveSubMenu(subMenu4);
        menu4.style.background = "#DDA0DD";
        isActiveMenu4 = false;
    }
    if (isActiveMenu8 && isActiveFloatMenu == false) {
        disactiveSubMenu(subMenu8);
        menu8.style.background = "#DDA0DD";
        isActiveMenu8 = false;
    }

        // disactiveSubMenu(subMenu1);
        // menu1.style.background = "#DDA0DD";
        // isActiveMenu1 = false;
        // disactiveSubMenu(subMenu4);
        // menu4.style.background = "#DDA0DD";
        // isActiveMenu4 = false;
        // disactiveSubMenu(subMenu8);
        // menu8.style.background = "#DDA0DD";
        // isActiveMenu8 = false;

    if (isActiveSubMenu11) {
        if (!isShowedMenu1) {
            disactiveSubMenu(deepMenu1_list);
            deepMenu1_desc.style.background = "#DDA0DD";
            menu1.style.background = "#DDA0DD";
            isActiveSubMenu11 = false;
            modeFix = false;
        }

    }
    if (isActiveSubMenu12) {
        if (!isShowedMenu1) {
            disactiveSubMenu(deepMenu2_list);
            deepMenu2_desc.style.background = "#DDA0DD";
            menu1.style.background = "#DDA0DD";
            isActiveSubMenu12 = false;
            modeFix = false;
        }

    }

    if (isActiveSubMenu41) {
        if (!isShowedMenu4) {
            disactiveSubMenu(deepMenu4_list);
            deepMenu4_desc.style.background = "#DDA0DD";
            menu4.style.background = "#DDA0DD";
            isActiveSubMenu41 = false;
            modeFix = false;
        }
    }
    if(isNormal){
      disactiveSubMenu(deepMenu4_list);
      deepMenu4_desc.style.background = "#DDA0DD";
      //menu4.style.background = "#DDA0DD";
      isActiveSubMenu41 = false;
      modeFix = false;
    }

    if (isActiveSubMenu81) {
        if (!isShowedMenu8) {
            subMenu8.children[4].children[0].style.background = "#DDA0DD";
            menu8.style.background = "#DDA0DD";
            isActiveSubMenu81 = false;
            modeFix = false;
        }
    }

    if (isActiveSubDeep11) {
        if (!isShowedMenu1) {
            disactiveSubMenu(subdeep1_list);
            subdeep1_desc.style.background = "#DDA0DD";
            isActiveSubDeep11 = false;
            modeFix = false;
        }
    }

    if (isActiveSubDeep12) {
        if (!isShowedMenu1) {
            //            disactiveSubMenu(subdeep2);
            deepMenu2_list.children[4].children[0].style.background = "#DDA0DD";
            isActiveSubDeep12 = false;
            modeFix = false;
        }
    }

    if (isActiveSubDeep41) {
        if (!isShowedMenu4) {
            //            disactiveSubMenu(subdeep4);
            deepMenu4_list.children[4].children[0].style.background = "#DDA0DD";
            isActiveSubDeep41 = false;
            modeFix = false;
        }
    }


    if (isSubDeepItem1) {
        if (!isShowedMenu1) {
            disactiveSubMenu(subdeep1_list);
            subdeep1_list.children[0].children[0].style.background = "#DDA0DD";
            isSubDeepItem1 = false;
            modeFix = false;
        }
    }

    if (isSubDeepItem2) {
        if (!isShowedMenu1) {
            subdeep1_list.children[2].children[0].style.background = "#DDA0DD";
            isSubDeepItem2 = false;
            modeFix = false;
        }
    }



    isBubble = false;
    isNormal = false;


}

function handleMouseMove(event) {
  var deepmenu4_top = deepMenu4_desc.getBoundingClientRect().top - 5;
  var deepmenu4_right = deepMenu4_desc.getBoundingClientRect().right;
  if(event.pageX > deepmenu4_right - 0.5*menu_width && event.pageX < deepmenu4_right){
      isBubble = true;
      isNormal = false;
  }
  if(event.pageX > deepmenu4_right - menu_width && event.pageX < deepmenu4_right - 0.5*menu_width){
      isBubble = false;
      isNormal = true;
  }
  console.log(isBubble, isNormal);
    if (isMouseDown == true && modeMove == true && isActiveFloatMenu == false) {
        var capturedPoint = getPointCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";

        pointLast = [pointCurrent[0], pointCurrent[1]];
        pointCurrent = [event.pageX, event.pageY];
        if (pointCurrent[0] > pointLast[0] && pointCurrent[1] > pointLast[1] &&
            isActiveFloatMenu == false) {
            isActiveFloatMenu = true;
            pointFloat = [pointCurrent[0], pointCurrent[1]];
            console.log("float menu!");
        }
        if (isActiveMenu1) {
            activeSubMenu(subMenu1);
            isShowedMenu1 = true;
            menu1.style.background = "#9400D3";
            subMenu4.style.display = "none";
            subMenu8.style.display = "none";
        }
        if (isActiveMenu4) {
            activeSubMenu(subMenu4);
            isShowedMenu4 = true;
            menu4.style.background = "#9400D3";
            subMenu1.style.display = "none";
            subMenu8.style.display = "none";
        }
        if (isActiveMenu8) {
            activeSubMenu(subMenu8);
            isShowedMenu8 = true;
            menu8.style.background = "#9400D3";
            subMenu4.style.display = "none";
            subMenu1.style.display = "none";
        }
        if (!isActiveMenu1) {
            disactiveSubMenu(subMenu1);
            menu1.style.background = "#DDA0DD";
        }
        if (!isActiveMenu4) {
            disactiveSubMenu(subMenu4);
            menu4.style.background = "#DDA0DD";
        }
        if (!isActiveMenu8) {
            disactiveSubMenu(subMenu8);
            menu8.style.background = "#DDA0DD";
        }

    }
    if (isMouseDown == true && (modeFix == true || isActiveFloatMenu == true) && isShowedMenu1) {
        console.log("handlemove menu1");
        circle.style.visibility = "visible";
        var capturedPoint = getMenuCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        //console.log(radius);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";

        if (isActiveSubMenu11) {
            activeSubMenu(deepMenu1_list);
//            console.log("active deepMenu1_list before");
            subMenu1.children[1].children[1].style.display = "block";
//            console.log("active deepMenu1_list after");
            //deepMenu1_desc.style.display = "block";
            deepMenu1_desc.style.background = "#9400D3";
            //deepMenu1_list.style.background = "#9400D3";
        }
        if (isActiveSubMenu12) {
            activeSubMenu(deepMenu2_list);
              console.log("active deepMenu2_list");
            deepMenu2_desc.style.background = "#9400D3";
        }
        if (!isActiveSubMenu11) {
            console.log("disactive deepMenu1_list");
            disactiveSubMenu(deepMenu1_list);
            deepMenu1_desc.style.background = "#DDA0DD";
        }
        if (!isActiveSubMenu12) {
            isActiveSubDeep11 = false;
            isActiveSubDeep12 = false;
            disactiveSubMenu(deepMenu2_list);
            deepMenu2_desc.style.background = "#DDA0DD";
        }



        if (isActiveSubDeep11) {
            activeSubMenu(subdeep1_list);
            //deepMenu1_desc.style.display = "block";
            //deepMenu1_list.children[0].children[0].style.display = "block";
            subdeep1_desc.style.background = "#9400D3";
            //deepMenu1_list.style.background = "#9400D3";
        }
        if (isActiveSubDeep12) {
            //activeSubMenu(subdeep2);
            //deepMenu1_list.children[4].children[0].style.display = "block";
            deepMenu2_list.children[4].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubDeep11) {
            disactiveSubMenu(subdeep1_list);
            isSubDeepItem1 = false;
            isSubDeepItem2 = false;
            //deepMenu1_desc.style.display = "block";
            subdeep1_desc.style.background = "#DDA0DD";
            //deepMenu1_list.style.background = "#9400D3";
        }
        if (!isActiveSubDeep12) {
            //disactiveSubMenu(subdeep2);
            deepMenu2_list.children[4].children[0].style.background = "#DDA0DD";
        }




        if (isSubDeepItem1) {
            subdeep1_list.children[0].children[0].style.background = "#9400D3";
        }
        if (isSubDeepItem2) {
            subdeep1_list.children[2].children[0].style.background = "#9400D3";
        }
        if (!isSubDeepItem1) {
            subdeep1_list.children[0].children[0].style.background = "#DDA0DD";
        }
        if (!isSubDeepItem2) {
            subdeep1_list.children[2].children[0].style.background = "#DDA0DD";
        }


    }
    if (isMouseDown == true && (modeFix == true || isActiveFloatMenu == true) && isShowedMenu4) {
        console.log("handlemove menu4");
        circle.style.visibility = "visible";
        var capturedPoint = getMenuCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";
        if (isActiveSubMenu41) {
            activeSubMenu(deepMenu4_list);
            deepMenu4_desc.style.background = "#9400D3";
        }
        if (!isActiveSubMenu41) {
            disactiveSubMenu(deepMenu4_list);
            deepMenu4_desc.style.background = "#DDA0DD";
        }
        if (isActiveSubDeep41) {
            deepMenu4_list.children[4].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubDeep41) {
            deepMenu4_list.children[4].children[0].style.background = "#DDA0DD";
        }
        undo.style.background = "white";
        repeat.style.background = "white";
        clear.style.background = "white";
        select.style.background = "white";

    }
    if (isMouseDown == true && (modeFix == true || isActiveFloatMenu == true) && isShowedMenu4 && isBubble && !isNormal) {
        console.log("handlemove menu4");
        circle.style.visibility = "visible";
        var capturedPoint = getMenuCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";
        if (isActiveSubMenu41) {
            activeSubMenu(deepMenu4_list);
            deepMenu4_desc.style.background = "#9400D3";
        }
        if (!isActiveSubMenu41) {
            disactiveSubMenu(deepMenu4_list);
            deepMenu4_desc.style.background = "#DDA0DD";
        }
        if (isActiveSubDeep41) {
            deepMenu4_list.children[4].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubDeep41) {
            deepMenu4_list.children[4].children[0].style.background = "#DDA0DD";
        }
        undo.style.background = "white";
        repeat.style.background = "white";
        clear.style.background = "white";
        select.style.background = "white";

    }
    if (isMouseDown == true && (modeFix == true || isActiveFloatMenu == true) && isShowedMenu4 && isNormal && !isBubble){
        var undo_top = undo.getBoundingClientRect().top - 5;
        var undo_bottom = undo.getBoundingClientRect().bottom;
        var repeat_top = repeat.getBoundingClientRect().top - 5;
        var repeat_bottom = repeat.getBoundingClientRect().bottom;
        var clear_top = clear.getBoundingClientRect().top - 5;
        var clear_bottom = clear.getBoundingClientRect().bottom;
        var select_top = select.getBoundingClientRect().top - 5;
        var select_bottom = select.getBoundingClientRect().bottom;

        var deepmenu4_top = deepMenu4_desc.getBoundingClientRect().top - 5;
        var deepmenu4_bottom = deepMenu4_desc.getBoundingClientRect().bottom;

        if(event.pageY > undo_top && event.pageY < undo_bottom){
            undo.style.background = "#9400D3";
            repeat.style.background = "white";
            clear.style.background = "white";
            select.style.background = "white";
            circle.style.visibility = "hidden";
            isActiveSubMenu41 = false;
        }
        if(event.pageY > repeat_top && event.pageY < repeat_bottom){
            repeat.style.background = "#9400D3";
            circle.style.visibility = "hidden";
            undo.style.background = "white";
            clear.style.background = "white";
            select.style.background = "white";
            isActiveSubMenu41 = false;
        }
        if(event.pageY > clear_top && event.pageY < clear_bottom){
            clear.style.background = "#9400D3";
            circle.style.visibility = "hidden";
            undo.style.background = "white";
            repeat.style.background = "white";
            select.style.background = "white";
            isActiveSubMenu41 = false;
        }
        if(event.pageY > select_top && event.pageY < select_bottom){
            select.style.background = "#9400D3";
            circle.style.visibility = "hidden";
            undo.style.background = "white";
            repeat.style.background = "white";
            clear.style.background = "white";
            isActiveSubMenu41 = false;
        }
        if(event.pageY > deepmenu4_top && event.pageY < deepmenu4_bottom){
            deepMenu4_desc.style.background = "#9400D3";
            activeSubMenu(deepMenu4_list);
            circle.style.visibility = "hidden";
            isActiveSubMenu41 = true;
        }


        if (isActiveSubMenu41) {
            activeSubMenu(deepMenu4_list);
            deepMenu4_desc.style.background = "#9400D3";
            undo.style.background = "white";
            repeat.style.background = "white";
            clear.style.background = "white";
            select.style.background = "white";
        }
        if (!isActiveSubMenu41) {
            disactiveSubMenu(deepMenu4_list);
            deepMenu4_desc.style.background = "#DDA0DD";
        }

    }
    if (isMouseDown == true && (modeFix == true || isActiveFloatMenu == true) && isShowedMenu8) {
        console.log("handlemove menu8");
        circle.style.visibility = "visible";
        var capturedPoint = getMenuCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";
        if (isActiveSubMenu81) {
            subMenu8.children[4].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubMenu81) {
            subMenu8.children[4].children[0].style.background = "#DDA0DD";
        }


    }

}




//tool functions
function distance(ptA, ptB) {
    var diff = [ptB[0] - ptA[0], ptB[1] - ptA[1]];
    return Math.sqrt(diff[0] * diff[0] + diff[1] * diff[1]);
}

function IsInMenu(event) {

    if (event.pageX >= originX && event.pageX <= originX + menu_width &&
        event.pageY >= originY && event.pageY <= originY + menu_height) {
        isInmenu1 = true;
        isInmenu4 = false;
        isInmenu8 = false;

    }
    if (event.pageX >= originX + 3 * menu_width && event.pageX <= originX + 4 * menu_width &&
        event.pageY >= originY && event.pageY <= originY + menu_height) {
        isInmenu4 = true;
        isInmenu1 = false;
        isInmenu8 = false;
    }
    if (event.pageX >= originX + 7 * menu_width && event.pageX <= originX + 8 * menu_width &&
        event.pageY >= originY && event.pageY <= originY + menu_height) {
        isInmenu8 = true;
        isInmenu1 = false;
        isInmenu4 = false;
    }
}



function activeSubMenu(submenu) {
    submenu.style.display = "block";
    if (submenu === subMenu1 && modeMove == true) {
        submenu.style.left = (event.pageX - originX) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }
    if (submenu === subMenu4 && modeMove == true) {
        submenu.style.left = (event.pageX - originX - 3 * menu_width) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }
    if (submenu === subMenu8 && modeMove == true) {
        submenu.style.left = (event.pageX - originX - 7 * menu_width) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }

}

function disactiveSubMenu(submenu) {
    submenu.style.display = "none";
    submenu.style.left = "";
    submenu.style.top = "";
}


function getMenuCapturedByBubbleCursor(event) {
    var point = [];
    var submenu1_right = subMenu1.getBoundingClientRect().right;
    var submenu1_left = subMenu1.getBoundingClientRect().left  - 5;
    var deepMenu1_top = deepMenu1_desc.getBoundingClientRect().top - 5;
    var deepMenu1_bottom = deepMenu1_desc.getBoundingClientRect().bottom;
    var deepMenu1_right = deepMenu1_desc.getBoundingClientRect().right;
    var deepmenu2_top = deepMenu2_desc.getBoundingClientRect().top - 5;
    var deepmenu2_bottom = deepMenu2_desc.getBoundingClientRect().bottom;
    var deepmenu2_right = deepMenu2_desc.getBoundingClientRect().right;

    var deepmenu4_top = deepMenu4_desc.getBoundingClientRect().top - 5;
    var deepmenu4_bottom = deepMenu4_desc.getBoundingClientRect().bottom;
    var deepmenu4_right = deepMenu4_desc.getBoundingClientRect().right;
    var deepmenu4_left = deepMenu4_desc.getBoundingClientRect().left - 5;

    var deepmenu8_top = subMenu8.children[4].children[0].getBoundingClientRect().top - 5;
    var deepmenu8_bottom = subMenu8.children[4].children[0].getBoundingClientRect().bottom;
    var deepmenu8_right = subMenu8.children[4].children[0].getBoundingClientRect().right;
    var deepmenu8_left = subMenu8.children[4].children[0].getBoundingClientRect().left - 5;



    var subdeep1_right = subdeep1_desc.getBoundingClientRect().right;
    var subdeep1_top = subdeep1_desc.getBoundingClientRect().top - 5;
    var subdeep1_bottom = subdeep1_desc.getBoundingClientRect().bottom;
    var subdeep2_right = deepMenu2_list.children[4].children[0].getBoundingClientRect().right;
    var subdeep2_top = deepMenu2_list.children[4].children[0].getBoundingClientRect().top - 5;
    var subdeep2_bottom = deepMenu2_list.children[4].children[0].getBoundingClientRect().bottom;

    var subdeep4_right = deepMenu4_list.children[4].children[0].getBoundingClientRect().right;
    var subdeep4_left = deepMenu4_list.children[4].children[0].getBoundingClientRect().left - 5;
    var subdeep4_top = deepMenu4_list.children[4].children[0].getBoundingClientRect().top - 5;
    var subdeep4_bottom = deepMenu4_list.children[4].children[0].getBoundingClientRect().bottom;

    var deepsub1_right = subdeep1_list.children[0].children[0].getBoundingClientRect().right;
    var deepsub1_top = subdeep1_list.children[0].children[0].getBoundingClientRect().top - 5;
    var deepsub1_bottom = subdeep1_list.children[0].children[0].getBoundingClientRect().bottom;
    var deepsub2_right = subdeep1_list.children[2].children[0].getBoundingClientRect().right;
    var deepsub2_top = subdeep1_list.children[2].children[0].getBoundingClientRect().top - 5;
    var deepsub2_bottom = subdeep1_list.children[2].children[0].getBoundingClientRect().bottom;
    if (isShowedMenu1) {
        if (isActiveFloatMenu == true) {
            originX = pointFloat[0];
            originY = pointFloat[1] - menu_height;
            modeFix = true;
            modeMove = false;
        }
        if (event.pageX <= submenu1_right) {
            if (event.pageY <= deepMenu1_top) {
                if (event.pageX < submenu1_left) {
                    point = [submenu1_left, deepMenu1_top];
                } else {
                    point = [event.pageX, deepMenu1_top];
                }
                console.log("here");
                isActiveSubMenu11 = true;
                isActiveSubMenu12 = false;
                return point;
            }
            if (event.pageY > deepMenu1_top && event.pageY <= deepMenu1_bottom) {
                if (event.pageX < submenu1_left) {
                    point = [submenu1_left, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isActiveSubMenu11 = true;
                isActiveSubMenu12 = false;

                return point;
            }
            if (event.pageY > deepMenu1_bottom && event.pageY <= deepmenu2_top &&
                (event.pageY - deepMenu1_bottom) <= (deepmenu2_top - event.pageY)) {
                if (event.pageX < submenu1_left) {
                    point = [submenu1_left, deepMenu1_bottom];
                } else {
                    point = [event.pageX, deepMenu1_bottom];
                }
                isActiveSubMenu11 = true;
                isActiveSubMenu12 = false;
                return point;
            }
            if (event.pageY > deepMenu1_bottom && event.pageY <= deepmenu2_top &&
                (event.pageY - deepMenu1_bottom) > (deepmenu2_top - event.pageY)) {
                if (event.pageX < submenu1_left) {
                    point = [submenu1_left, deepmenu2_top];
                } else {
                    point = [event.pageX, deepmenu2_top];
                }
                isActiveSubMenu11 = false;
                isActiveSubMenu12 = true;
                return point;
            }
            if (event.pageY > deepmenu2_top && event.pageY <= deepmenu2_bottom) {
                if (event.pageX < submenu1_left) {
                    point = [submenu1_left, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isActiveSubMenu11 = false;
                isActiveSubMenu12 = true;
                return point;
            }
            if (event.pageY > deepmenu2_bottom) {
                if (event.pageX < submenu1_left) {
                    point = [submenu1_left, deepmenu2_bottom];
                } else {
                    point = [event.pageX, deepmenu2_bottom];
                }
                isActiveSubMenu11 = false;
                isActiveSubMenu12 = true;
                return point;
            }
        }
        if (event.pageX > submenu1_right && event.pageX <= subdeep1_right && isActiveSubMenu12) {
            if (event.pageY <= subdeep1_top) {
                point = [event.pageX, subdeep1_top];
                isActiveSubDeep11 = true;
                isActiveSubDeep12 = false;
                return point;
            }
            if (event.pageY > subdeep1_top && event.pageY <= subdeep1_bottom) {
                point = [event.pageX, event.pageY];
                isActiveSubDeep11 = true;
                isActiveSubDeep12 = false;
                return point;
            }
            if (event.pageY > subdeep1_bottom && event.pageY <= subdeep2_top &&
                (event.pageY - subdeep1_bottom) <= (subdeep2_top - event.pageY)) {
                point = [event.pageX, subdeep1_bottom];
                isActiveSubDeep11 = true;
                isActiveSubDeep12 = false;
                return point;
            }
            if (event.pageY > subdeep1_bottom && event.pageY <= subdeep2_top &&
                (event.pageY - subdeep1_bottom) > (subdeep2_top - event.pageY)) {
                point = [event.pageX, subdeep2_top];
                isActiveSubDeep11 = false;
                isActiveSubDeep12 = true;
                return point;
            }
            if (event.pageY > subdeep2_top && event.pageY <= subdeep2_bottom) {
                point = [event.pageX, event.pageY];
                isActiveSubDeep11 = false;
                isActiveSubDeep12 = true;
                return point;
            }
            if (event.pageY > subdeep2_bottom) {
                point = [event.pageX, subdeep2_bottom];
                isActiveSubDeep11 = false;
                isActiveSubDeep12 = true;
                return point;
            }

        }
        if (event.pageX > submenu1_right && isActiveSubMenu11) {
            if (event.pageY <= deepMenu1_top) {
                point = [submenu1_right, deepMenu1_top];
                return point;
            }
            if (event.pageY > deepMenu1_top && event.pageY <= deepMenu1_bottom) {
                point = [submenu1_right, event.pageY];
                return point;
            }
            if (event.pageY > deepMenu1_bottom && event.pageY <= deepmenu2_top &&
                (event.pageY - deepMenu1_bottom) <= (deepmenu2_top - event.pageY)) {
                point = [submenu1_right, deepMenu1_bottom];
                return point;
            }
            if (event.pageY > deepMenu1_bottom && event.pageY <= deepmenu2_top &&
                (event.pageY - deepMenu1_bottom) > (deepmenu2_top - event.pageY)) {
                point = [submenu1_right, deepmenu2_top];

                isActiveSubMenu11 = false;
                isActiveSubMenu12 = true;
                return point;
            }

        }

        if (event.pageX > subdeep1_right && isActiveSubDeep11) {
            if (event.pageY <= subdeep1_top) {
                if (event.pageX > deepsub1_right) {
                    point = [deepsub1_right, deepsub1_top];
                } else {
                    point = [event.pageX, deepsub1_top];
                }

                isSubDeepItem1 = true;
                isSubDeepItem2 = false;
                return point;
            }
            if (event.pageY > subdeep1_top && event.pageY <= subdeep1_bottom) {
                if (event.pageX > deepsub1_right) {
                    point = [deepsub1_right, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isSubDeepItem1 = true;
                isSubDeepItem2 = false;
                return point;
            }
            if (event.pageY > deepsub1_bottom && event.pageY <= deepsub2_top &&
                (event.pageY - deepsub1_bottom) <= (deepsub2_top - event.pageY)) {
                if (event.pageX > deepsub1_right) {
                    point = [deepsub1_right, deepsub1_bottom];
                } else {
                    point = [event.pageX, deepsub1_bottom];
                }
                isSubDeepItem1 = true;
                isSubDeepItem2 = false;
                return point;
            }
            if (event.pageY > deepsub1_bottom && event.pageY <= deepsub2_top &&
                (event.pageY - deepsub1_bottom) > (deepsub2_top - event.pageY)) {
                if (event.pageX > deepsub1_right) {
                    point = [deepsub1_right, deepsub2_top];
                } else {
                    point = [event.pageX, deepsub2_top];
                }

                isSubDeepItem1 = false;
                isSubDeepItem2 = true;
                return point;
            }
            if (event.pageY > deepsub2_top && event.pageY <= deepsub2_bottom) {
                if (event.pageX > deepsub1_right) {
                    point = [deepsub1_right, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isSubDeepItem1 = false;
                isSubDeepItem2 = true;
                return point;
            }
            if (event.pageY > deepsub2_bottom) {
                if (event.pageX > deepsub1_right) {
                    point = [deepsub1_right, deepsub2_bottom];
                } else {
                    point = [event.pageX, deepsub2_bottom];
                }
                isSubDeepItem1 = false;
                isSubDeepItem2 = true;
                return point;
            }

        }


        if (event.pageX > subdeep2_right && isActiveSubDeep12) {
            console.log("subdeep2");
            if (event.pageY <= subdeep2_top) {
                point = [subdeep2_right, subdeep2_top];
                return point;
            }
            if (event.pageY > subdeep2_top && event.pageY <= subdeep2_bottom) {
                point = [subdeep2_right, event.pageY];
                return point;
            }
            if (event.pageY > originY + subdeep2_bottom) {
                point = [subdeep2_right, subdeep2_bottom];
                return point;
            }
        }
    }
    if (isShowedMenu4) {
        if (isActiveFloatMenu == true) {
            originX = pointFloat[0] - 3 * menu_width;
            originY = pointFloat[1] - menu_height;
            modeFix = true;
            modeMove = false;
        }
        if (event.pageX <= deepmenu4_right) {
            if (event.pageY <= deepmenu4_top) {
                if (event.pageX < deepmenu4_left) {
                    point = [deepmenu4_left, deepmenu4_top];
                } else {
                    point = [event.pageX, deepmenu4_top];
                }
                isActiveSubMenu41 = true;
                return point;
            }
            if (event.pageY > deepmenu4_top && event.pageY <= deepmenu4_bottom) {
                if (event.pageX < deepmenu4_left) {
                    point = [deepmenu4_left, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isActiveSubMenu41 = true;
                return point;
            }
            if (event.pageY > deepmenu4_bottom) {
                if (event.pageX < deepmenu4_left) {
                    point = [deepmenu4_left, deepmenu4_bottom];
                } else {
                    point = [event.pageX, deepmenu4_bottom];
                }
                isActiveSubMenu41 = true;
                return point;
            }
        }
        if (event.pageX > subdeep4_left) {
            if (event.pageY <= subdeep4_top) {
                if (event.pageX > subdeep4_right) {
                    point = [subdeep4_right, subdeep4_top];
                } else {
                    point = [event.pageX, subdeep4_top];
                }
                isActiveSubDeep41 = true;
                return point;
            }
            if (event.pageY > subdeep4_top && event.pageY <= subdeep4_bottom) {
                if (event.pageX > subdeep4_right) {
                    point = [subdeep4_right, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isActiveSubDeep41 = true;
                return point;
            }
            if (event.pageY > subdeep4_bottom) {
                if (event.pageX > subdeep4_right) {
                    point = [subdeep4_right, subdeep4_bottom];
                } else {
                    point = [event.pageX, subdeep4_bottom];
                }
                isActiveSubDeep41 = true;
                return point;
            }
        }

    }
    if (isShowedMenu8) {
        if (isActiveFloatMenu == true) {
            originX = pointFloat[0] - 7 * menu_width;
            originY = pointFloat[1] - menu_height;
            modeFix = true;
            modeMove = false;
        }
        if (event.pageY <= deepmenu8_top) {
            if (event.pageX < deepmenu8_left) {
                point = [deepmenu8_left, deepmenu8_top];
            } else if (event.pageX >= deepmenu8_left && event.pageX < deepmenu8_right) {
                point = [event.pageX, deepmenu8_top];
            } else {
                point = [deepmenu8_right, deepmenu8_top];
            }
            isActiveSubMenu81 = true;
            return point;
        }
        if (event.pageY > deepmenu8_top && event.pageY <= deepmenu8_bottom) {
            if (event.pageX < deepmenu8_left) {
                point = [deepmenu8_left, event.pageY];
            } else if (event.pageX >= deepmenu8_left && event.pageX < deepmenu8_right) {
                point = [event.pageX, event.pageY];
            } else {
                point = [deepmenu8_right, event.pageY];
            }
            isActiveSubMenu81 = true;
            return point;
        }
        if (event.pageY > deepmenu8_bottom) {
            if (event.pageX < deepmenu8_left) {
                point = [deepmenu8_left, deepmenu8_bottom];
            } else if (event.pageX >= deepmenu8_left && event.pageX < deepmenu8_right) {
                point = [event.pageX, deepmenu8_bottom];
            } else {
                point = [deepmenu8_right, deepmenu8_bottom];
            }
            isActiveSubMenu81 = true;
            return point;
        }
    }
}


// when we in the mode "modeMove", we have to find the closest point from mouse
function getPointCapturedByBubbleCursor(event) {
    var point = [];
    // mouse above menu
    //if (event.pageY > originY + menu_height) {
    var bottom = menu1.getBoundingClientRect().bottom;
    var left = menu1.getBoundingClientRect().left;
    var right = menu1.getBoundingClientRect().right;
    var top = menu1.getBoundingClientRect().top;
    var right4 = menu4.getBoundingClientRect().right;
    var left4 = menu4.getBoundingClientRect().left;
    var right8 = menu8.getBoundingClientRect().right;
    var left8 = menu8.getBoundingClientRect().left;
    if (event.pageY > bottom) {
        if (event.pageX <= originX) {
            point = [originX, originY + menu_height];
            isActiveMenu1 = true;
            isActiveMenu4 = false;
            isActiveMenu8 = false;
            return point;
        }
        if (event.pageX > left && event.pageX <= right) {
            point = [event.pageX, bottom];
            isActiveMenu1 = true;
            isActiveMenu4 = false;
            isActiveMenu8 = false;
            return point;
        }
        if (event.pageX > right && event.pageX <= left4) {
            if ((event.pageX - right) <= (left4 - event.pageX)) {
                point = [right, bottom];
                isActiveMenu1 = true;
                isActiveMenu4 = false;
                isActiveMenu8 = false;
                return point;
            } else {
                point = [left4, bottom];
                isActiveMenu4 = true;
                isActiveMenu1 = false;
                isActiveMenu8 = false;
                return point;
            }
        }
        if (event.pageX > left4 && event.pageX <= right4) {
            point = [event.pageX, bottom];
            isActiveMenu4 = true;
            isActiveMenu1 = false;
            isActiveMenu8 = false;
            return point;
        }
        if (event.pageX > right4 && event.pageX <= left8) {
            if ((event.pageX - right4) <= (left8 - event.pageX)) {
                point = [right4, bottom];
                isActiveMenu4 = true;
                isActiveMenu1 = false;
                isActiveMenu8 = false;
                return point;
            } else {
                point = [left8, originY + menu_height];
                isActiveMenu8 = true;
                isActiveMenu4 = false;
                isActiveMenu1 = false;
                return point;
            }
        }
        if (event.pageX > left8 && event.pageX <= right8) {
            point = [event.pageX, bottom];
            isActiveMenu8 = true;
            isActiveMenu4 = false;
            isActiveMenu1 = false;
            return point;
        }
        if (event.pageX > right8) {
            point = [right8, bottom];
            isActiveMenu8 = true;
            isActiveMenu4 = false;
            isActiveMenu1 = false;
            return point;
        }
    }

}