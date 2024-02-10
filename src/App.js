import React from "react";

function App(){
    
    var level=1;
function increament(){
    level++;
    document.getElementById("introo").style.display="none"
    document.getElementById("stage11").style.display="none"
    document.getElementById("stage22").style.display="none"
    document.getElementById("stage33").style.display="none"
    document.getElementById("stage44").style.display="none"
    document.getElementById("stage55").style.display="none"
    document.getElementById("resultid").style.display="none"
    console.log(level)
    if(level==1){
        document.getElementById("introo").style.display="block"
    }
        else if(level==2){
            document.getElementById("stage11").style.display="block"
        }
        else if(level==3){
            document.getElementById("stage22").style.display="block"
        }
        else if(level==4){
            document.getElementById("stage33").style.display="block"
        }
        else if(level==5){
            document.getElementById("stage44").style.display="block"
        }
        else if(level==6){
            document.getElementById("stage55").style.display="block"
        }
        else{
            document.getElementById("resultid").style.display="block"
        }
}
function decrease(){
    level--;
    document.getElementById("introo").style.display="none"
    document.getElementById("stage11").style.display="none"
    document.getElementById("stage22").style.display="none"
    document.getElementById("stage33").style.display="none"
    document.getElementById("stage44").style.display="none"
    document.getElementById("stage55").style.display="none"
    document.getElementById("resultid").style.display="none"
    console.log(level)
    if(level==1){
        document.getElementById("introo").style.display="block"
    }
        else if(level==2){
            document.getElementById("stage11").style.display="block"
        }
        else if(level==3){
            document.getElementById("stage22").style.display="block"
        }
        else if(level==4){
            document.getElementById("stage33").style.display="block"
        }
        else if(level==5){
            document.getElementById("stage44").style.display="block"
        }
        else if(level==6){
            document.getElementById("stage55").style.display="block"
        }
        else{
            document.getElementById("resultid").style.display="block"
        }

}
function result(){
    level++;
    var point=0;
    let chorr1 = document.getElementById("corr1");
    if(chorr1.checked){
      point++;
    }
    let chorr2 = document.getElementById("corr2");
    if(chorr2.checked){
      point++;
    }
    let chorr3 = document.getElementById("corr3");
    if(chorr3.checked){
      point++;
    }
    let chorr4 = document.getElementById("corr4");
    if(chorr4.checked){
      point++;
    }
    let chorr5 = document.getElementById("corr5");
    if(chorr5.checked){
      point++;
    }
   
    document.getElementById("introo").style.display="none"
    document.getElementById("stage11").style.display="none"
    document.getElementById("stage22").style.display="none"
    document.getElementById("stage33").style.display="none"
    document.getElementById("stage44").style.display="none"
    document.getElementById("stage55").style.display="none"
    document.getElementById("resultid").style.display="block"
    document.getElementById("xx").innerHTML = "YOUR SCORE="+point+"/5";
}

function restart(){
    window.location.reload();
}


  return(
    <>
    <div className="entry">
        <div className="intro" id="introo">
            <h1>Welcome To The Game</h1>
            <h2>"This Is The Geography Quiz Game Cointain 5 Question Each Having 1 Marks"</h2>
            <h3>"Click Start Button To Initized The Game"</h3>
            <button onClick={increament}>START</button>
        </div>
        <div className="stage1" id="stage11">
            <h4>STAGE:1</h4>
            <hr />
            <h5>Q1:Where is the deepest mine in the world located?</h5>
            <input type="radio" id="corr1" name="aa" />
            <label for="sh">SOUTH AFRICA</label>
            <br />
            <input type="radio" id="as" name="aa" />
            <label for="as">AMERICA</label>
            <br />
            <input type="radio" id="r" name="aa" />
            <label for="r">INDIA</label>
            <br />
            <input type="radio" id="w" name="aa" />
            <label for="w">AUSTRALIA</label>
            <div className="buutton">
            <button onClick={increament} id="btn1">NEXT</button>
            <button onClick={decrease} id="btn2">BACK</button>
            </div>
            
        </div>
        <div className="stage2" id="stage22">
            <h4>STAGE:2</h4>
            <hr />
            <h5>Q2:Which one of the following is a basic life support system?</h5>
            <input type="radio" id="corr2" name="sg" />
            <label for="h">MUSIC SYSTEM</label>
            <br />
            <input type="radio" id="s" name="sg" />
            <label for="s">ENVIROMENT</label>
            <br />
            <input type="radio" id="rq" name="sg" />
            <label for="rq">TRANSPORTATION</label>
            <br />
            <input type="radio" id="ww" name="sg" />
            <label for="ww">NONE OF THESE</label>
            <div className="buutton">
            <button onClick={increament} id="btn1">NEXT</button>
            <button onClick={decrease} id="btn2">BACK</button>
            </div>
        </div>
        <div class="stage3" id="stage33">
            <h4>STAGE:3</h4>
            <hr />
            <h5>Q3:The earths crust is broken into a number of huge parts. They are called</h5>
            <input type="radio" id="corr3" name="ff" />
            <label for="hh">LITHOSPHERIC PLATES</label>
            <br />
            <input type="radio" id="sd" name="ff" />
            <label for="sd">METAMORPHIC PLATES</label>
            <br />
            <input type="radio" id="rqq" name="ff" />
            <label for="rqq">SEDIMENTARY PLATES</label>
            <br />
            <input type="radio" id="www" name="ff" />
            <label for="www">NONE OF THESE</label>
            <div className="buutton">
            <button onClick={increament} id="btn1">NEXT</button>
            <button onClick={decrease} id="btn2">BACK</button>
            </div>
        </div>
         <div class="stage4" id="stage44">
            <h4>STAGE:4</h4>
            <hr />
            <h5>Q4:Which gas released in the atmosphere creates a greenhouse effect trapping the heat?</h5>
            <input type="radio" id="corr4" name="g" />
            <label for="hhh">CARBON DIOXIDE</label>
            <br />
            <input type="radio" id="sdd" name="g" />
            <label for="sdd">OXYGEN</label>
            <br />
            <input type="radio" id="rqqq" name="g" />
            <label for="rqqq">NITROGEN</label>
            <br />
            <input type="radio" id="wwww" name="g" />
            <label for="wwww">ALL THE ABOVE</label>
            <div className="buutton">
            <button onClick={increament} id="btn1">NEXT</button>
            <button onClick={decrease} id="btn2">BACK</button>
            </div>
        </div>
        <div class="stage5" id="stage55">
            <h4>STAGE:5</h4>
            <hr />
            <h5>Q5: Which is the process through which water continuously changes its form?</h5>
            <input type="radio" id="corr5" name="u" />
            <label for="hhhh">WATER CYCLE</label>
            <br />
            <input type="radio" id="sddd" name="u" />
            <label for="sddd">FOOD CYCLE</label>
            <br />
            <input type="radio" id="rqqqq" name="u" />
            <label for="rqqqq">RAIN</label>
            <br />
            <input type="radio" id="wwwww" name="u" />
            <label for="wwwww">ALL THE ABOVE</label>
            <div class="buutton">
            <button onClick={result} id="btn1">NEXT</button>
            <button onClick={decrease} id="btn2">BACK</button>
            </div>
        </div>
        <div class="result" id="resultid">
            <p id="xx"></p>  
            <button onClick={restart} id="btn5">RESTART</button>
        </div>
     </div>
    </>
  );
}
export default App;