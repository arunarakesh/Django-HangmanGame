// Script for canvas in playgame.html
window.addEventListener("load", function pagefunction(){
    createchrbuttons();
    gentextinput();   
    functionstg(); 
})


//This function is called from all pages to set sound and color.
function functionstg(){
    const clr = sessionStorage.getItem('color');
    const snd = sessionStorage.getItem('snd');
    aud = 1;
    const pathname = (window.location.pathname);
    console.log('pathname '+pathname);
    console.log('clr '+clr);
    console.log('snd '+snd);
    console.log('aud '+aud);
    const chkitemset = sessionStorage.getItem('chkitem');
    this.document.body.style.background = clr;
    allsound(snd,pathname,aud);
}

/* Plays all sound audios for the pages*/
const snd = sessionStorage.getItem('snd');
const pathname = window.location.pathname;

function allsound(snd,pathname,aud) {
    if (snd == "true") {
        console.log('before func allsound snd2 '+snd);
        console.log("inside true allsound function");
        if (pathname == '/setting/'){
        document.querySelector(".circle").style.left = "50px";
            aud = 1;
            allaudiofiles(aud);
        }
        else if (pathname == '/hanghome/' || pathname == '/hangtheme/'){
            aud = 1;
            allaudiofiles(aud);
        }
        else if (pathname == '/playgame/'){
            allaudiofiles(aud);
        }
    }}

function allaudiofiles(aud){
    DJANGO_STATIC_URL = '{{ STATIC_URL }}'; 
        var audio1 = new Audio("/static/ButtonClick.mp3");
        var audio2 = new Audio("/static/gamefail.mp3");
        var audio3 = new Audio("/static/gamesuccess.mp3");
        var audio4 = new Audio("/static/errorsound.mp3");
        if (aud == 1) {
        audio1.play();
        }
        if (aud == 2) {
            audio2.play();
        }
        if (aud == 3) {
            audio3.play();
        }
        if (aud == 4) {
            audio4.play();
        }


}


//This function is called from settings page to set the sound and move the circle on soundfx
function gmsound(){
    var sndchkbox = document.getElementById("switch");
    let sndchng = document.getElementById("GFG");
    let circle = document.querySelector(".circle");
    aud = 1;
    const pathname = (window.location.pathname);
    const swtval = sndchkbox.checked;
    console.log("inside switch value "+swtval);
    const chkitem = document.getElementById("switch").checked;
    console.log("chkitem "+chkitem);
    
    if (swtval) {
            allsound(swtval,pathname,aud);
            sessionStorage.setItem('snd', swtval);
            chkitem.checked = swtval;
            sessionStorage.setItem('chkitem', swtval);
            sessionStorage.setItem('circle', circle);
            circle.style.left = "50px";
        }
    else {
        sessionStorage.setItem('snd', swtval);
        chkitem.checked = swtval;
        sessionStorage.setItem('chkitem', swtval);
        sessionStorage.setItem('circle', circle);
        circle.style.left = "0px";
    }
    
}


/*This function is called on the settings page to set color for the entire gamesite*/
function clrchange(color){
    console.log("inside color change function"+color);
    console.log("sound val "+sessionStorage.getItem('snd'));
    if (sessionStorage.getItem('snd') == "true") {
        console.log("inside snd true");
        allsound(snd,pathname,aud);
    }
    let clrchng = document.getElementById("GFG");
    if (color == "aqua") {
    document.body.style.background = "aqua";
    sessionStorage.setItem('color',color);
    }
    else if (color == "pink") {
        document.body.style.background = "pink";
        sessionStorage.setItem('color',color);
    }
    }

function pagefunction(){
    createchrbuttons();
    gentextinput();
    }

function reload(){
        window.location.reload();
        }


function plyback() {
    var gmflg = sessionStorage.getItem("gmflg", gmflg);
        console.log("gmflg in plyback"+gmflg);   
    let text = confirm("Are you sure to exit this game?");
        
    if (text) {
        let txt = document.getElementById("plyback");
        if (gmflg == "true") {
            console.log("in gameover if true gmflg")
               txt.href = window.history.go(-2)
               
        }
        else 
            {
                console.log("in gameover else false gmflg")
                txt.href = window.history.go(-1)
            }      
    } else {
        let txt = document.getElementById("plyback");
        txt.href = document.URL;
    }

}

//This function creates button inputs based on the alphabets

function createchrbuttons(){
    let i; var btn; var ch_array = [];
    document.getElementById("Fp").style.visibility="hidden";
    document.getElementById("Cr").style.visibility="hidden";
    var themename = document.getElementById("plycontainer").getAttribute("aria-details");
    console.log("themename"+themename);
    if (themename == "Famous People"){
        console.log("inside Famous")
        var alloccupation = document.getElementById("Fp").getAttribute("value");
        console.log("alloccupation"+alloccupation);
        document.getElementById("Fp").style.visibility="visible";
    }
    else if (themename == "Currency"){
        console.log("inside currency")
        var alphacode = document.getElementById("Cr").getAttribute("value");
        console.log("alphacode"+alphacode);
        document.getElementById("Cr").style.visibility="visible";
    }
    var country_name = document.getElementById("plycontainer").getAttribute("value");
    console.log("country_name"+country_name);
    for(i = 65; i <= 90; i++) {
        let text = String.fromCharCode(i);
        ch_array.push(text);
    }
        //Loop through each ch_array and create buttons for 26 alphabets
        for (var c=0; c< ch_array.length; c++) {
            console.log(ch_array[c]);
            //create new button and assign to newbtn
            let newbtn = document.createElement("button");
            //assign innerhtml value for each buttons - button display name
            newbtn.innerHTML = ch_array[c]; 
            newbtn.value = ch_array[c]; 
            newbtn.id = ch_array[c];
            //Gather the newly created buttons in buttondiv
            var buttondiv = document.getElementById("buttons");
            //Append new button to existing buttondiv
            buttondiv.appendChild(newbtn);
            //console.log(newbtn);
            console.log("button id" +newbtn.id);
            }
            return country_name;
            }

let count = 0;    
let count_a = 0;
let hangcnt = 0;

document.getElementById("buttons").addEventListener('click',function(event) {
        console.log("gameover flag in buttonclick"+gameover);
        console.log("inside buttonchkval you clicked a button");
        console.log(event.target.innerHTML);
        let btnval = event.target.innerHTML;
        console.log("count_a"+count_a);
        let country_name = (document.getElementById("buttons").getAttribute("aria-valuetext"));
        console.log("countryname" +country_name );
        var regex = new RegExp(btnval, "gi");
        let mtch = (country_name).match(regex);
        let mtchind = regex.exec(country_name);
        console.log("mtch" +mtch);
        console.log("index" +mtchind);
    

        if (mtch != null) 
            {
                let uppmtchind = {};
                uppmtchind = mtchind.toString().toUpperCase();
                for(let i=0;i< country_name.length;i++) {
                let resind = [];
                console.log("i" +i);
                console.log("length conname"+country_name.length);
                console.log("countryname" +country_name );
                if (country_name[i] == mtchind) {
                    count = 1;
                    console.log("i value" +i);
                    resind.push(i);
                        console.log("resind" +resind);
                        console.log("uppmtchind"+uppmtchind);
                        /*Logic to update the text input with button click value
                        by finding the index of the input field and disable button after
                        value is entered*/
                        aud = 1;
                        allsound(snd,pathname,aud);
                        var txtindiv = document.getElementById("input"+[resind]);
                        var btnindiv = document.getElementById([uppmtchind]);
                        txtindiv.innerHTML = uppmtchind;
                        txtindiv.value = uppmtchind;
                        console.log("count" +count);
                        
                        count_a = count_a + count;
                        console.log("count a" +count_a);
                        //Disable the button after its value is keyed in
                        btnindiv.disabled = true;
                        }   
                        console.log("trim logic"+country_name.replaceAll(" ","").length)
                        console.log("count a bottom"+count_a);
                        if (country_name.replaceAll(" ","").length == count_a){
                            console.log("well done");
                            gameover = "true";
                            aud = 3;
                            allsound(snd,pathname,aud);
                            count_a = 0;
                            console.log("test gameover"+document.getElementById("gameover"));
                            if (gameover) {
                                console.log("inside gameover if"+gameover);
                                
                                document.getElementById("gameover").style.display = "block";
                                document.getElementById("buttons").style.display = "none";
                                console.log("in true gameover" +gameover);
                                document.getElementById("gameover").setAttribute("value",true);
                                var gmflg = "true";
                                sessionStorage.setItem("gmflg",gmflg);
                                console.log("gmflg after gameover "+gmflg);
                            }
                            
                        }
                }
            }
        else
        //If button click value is not in the name String. Bring Hangman images
            {
                console.log("no match");
                hangcnt += 1;
                console.log("hangcnt"+hangcnt);
                var c = 0;
                aud = 4;
                allsound(snd,pathname,aud);
                //Array to get all the images from static folder
                const imgsrc_arr = [];
                //Create a new image
                const image = new Image();          
                DJANGO_STATIC_URL = '{{ STATIC_URL }}';  
                const imglist = document.getElementById("plyimages");
                console.log("imglist" +imglist);
                if (imglist.hasChildNodes()) {
                        console.log("inside has child if" +imglist);
                        imglist.removeChild(imglist.firstChild);
                        }

                if (hangcnt <= 8) {
                    console.log("btn "+btnval);
                    console.log('snd '+snd);    
                    document.getElementById(btnval).disabled = true;
                    //document.getElementById(btnval).blur();
                    console.log("hangcnt "+hangcnt);
                    for (c=0;c<hangcnt;c++){
                        console.log("inside for loop c  "+c);
                        console.log("inside for loop hangcnt "+hangcnt);
                        imgsrc_arr.push("/static/images/Screen"+hangcnt+".png");
                        //image.src = "https://picsum.photos/300/400";
                         //imgsrc_arr.push("https://picsum.photos/300/400");
                        console.log(imgsrc_arr);
                        image.src = imgsrc_arr[c];
                        document.getElementById("plyimages").appendChild(image);
                        image.innerHTML = "image"+hangcnt;
                        image.alt = "hang"+hangcnt;
                        //image.width = "100%";
                        //image.height = "50%";
                        //image.position = "absolute";
                        console.log("btn val" +event.target.innerHTML);
                    }
                }
                else if(hangcnt >= 9) {
                    console.log('btn '+event.target.innerHTML);
                    document.getElementById(btnval).disabled = true;
                    image.src = ("/static/images/Screen"+hangcnt+".png");
                    document.getElementById("plyimages").appendChild(image);
                    gameover = "true";
            
                    if (gameover) {
                        console.log("inside gameover if"+gameover);
                        aud = 2;
                        console.log('path '+pathname);
                        console.log('snd '+snd);
                        allsound(snd,pathname,aud);
                        document.getElementById("gameoverfail").style.display = "block";
                        document.getElementById("buttons").style.display = "none";
                        var gmflg = "true";
                        sessionStorage.setItem("gmflg",gmflg);
                        console.log("gmflg after gameover "+gmflg);
                     }
                }

        }
    }
)

//This function dynamically generates the input text fields based on name length.
function gentextinput(){
    let i=0;let txn = [];let txndiv = [];
    let name_len = document.getElementById("plycontainer").getAttribute("aria-valuetext");
    let country_name = document.getElementById("textinput").getAttribute("ariavaluetext");
    console.log("namelen "+name_len);
   console.log("country_name "+country_name);
   console.log("country_name len" +country_name.length);
    for (i=0;i<country_name.length;i++) {
            //create new text input and assign to txn variable
            if (country_name[i] == " "){
                console.log("whitespace");
                let txn = document.createElement("br");
                //txn.style.margin = "0rem";
                //txn.padding = "5px";
                txn.id = "input"+i;
                console.log("txnid "+txn.id);
                txndiv = document.getElementById("textinput");
                txndiv.appendChild(txn);
               // txnhid.id = "inputz";
                //txnhid.setAttribute("type","hidden");
            }
            else {

                let txn = document.createElement("input");
                //txn.innerHTML = "";
                //txn.value = "";
                txn.ariaValueText = "inputfields";
                console.log("txn inner" +txn.innerHTML);
                //txn.name = "input"+i;
                txn.id = "input"+i;
                console.log(i);
                txndiv = document.getElementById("textinput");
                txndiv.appendChild(txn);
                //txn.value = "";
                //txn.innerHTML = "";
                 txn.style.width = "30px";
            txn.style.height = "30px";
            txn.readonly = true;
            txn.style.margin = "0.5rem";
            txn.addEventListener("click", function() {
                txn.disabled = true;
            });
            console.log(txn);
            //console.log("ariavaluetext " +txn.ariaValueText);
            //console.log("name"+txn.name);
            console.log("id"+txn.id);
        }
            
    }
}



