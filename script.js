
changeColor=()=>{
    // alert("d")
    let txtclr=document.querySelector('.txtclr').value;
    let bgclr=document.querySelector('.bgclr').value;
    let sampleTxt=document.querySelector('.sampleTxt');
    sampleTxt.style.color=txtclr
    sampleTxt.style.backgroundColor = bgclr;
}