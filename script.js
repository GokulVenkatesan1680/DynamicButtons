function createDynamicButtons(){
  let parent = document.getElementById('container');
  for(let i = 0 ; i < 10 ; i++){
    let btn = document.createElement('button');
    btn.setAttribute('id','button_id_'+(i+1));
    btn.setAttribute('class','dynamicButtons');
    btn.innerHTML = "Button "+(i+1);
    parent.appendChild(btn);
  }
}
function showResult(){
  let parent = document.getElementById('result');
  let table = document.createElement('table');
  table.setAttribute('id','resultTable');
  let tr1 = document.createElement('tr');
  let th1 = document.createElement('th');
  th1.innerHTML='Button Name';
  tr1.appendChild(th1);
  let th2 = document.createElement('th');
  th2.innerHTML = 'Button ID'
  tr1.appendChild(th2);
  table.appendChild(tr1);

  let buttons = document.getElementsByClassName('dynamicButtons');
  
  for(let i = 0 ; i < buttons.length ; i++){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML=buttons[i].innerHTML;
    let td2 = document.createElement('td');
    td2.innerHTML = buttons[i].getAttribute('id');
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
 if(buttons.length!=0){
      parent.appendChild(table);
  }
  
}

function reset(){
  document.getElementById('result').innerHTML = '';
  document.getElementById('container').innerHTML='';
}
