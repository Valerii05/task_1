let data_base = {
    distance : 
    [ 
         { 
          meter : [ 
               { name  : "метр"}, 
               { value : 1000 },  
               { short_code : "м" }
             ]
        },

        { 
        centimeter : [
                { name : "сантиметр"},
                { value : 1000000 },  
                { short_code : "см" }
               ]
        },

        { 
            inches : [
                    { name : "дюйми"},
                    { value : 39370.07 },  
                    { short_code : "дюймів" }
                   ]
        },

        { 
            feet : [
                    { name : "фути"},
                    { value : 3280.83 },  
                    { short_code : "футів" }
                   ]
        },

        { 
            millimeters : [
                    { name : "міліметри"},
                    { value : 1000000 },  
                    { short_code : "мм" }
                   ]
        },

        { 
            yards : [
                    { name : "ярди"},
                    { value : 1093.61 },  
                    { short_code : "ярдів" }
                   ]
        }
     ]  
};


document.getElementById('output').style.visibility = 'hidden';

document.getElementById('km').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';

    let km = e.target.value;

    let countFilds = data_base.distance.length; // кількість можливих конвертацій


    for (let i = 0 ; i < countFilds ; i++){

        document.getElementById('output').innerHTML += `<div id="output_${i}" class="py-0"> </div>`;
    
        if (i == 0 ){
            for(let j = 0 ; j < data_base.distance[i].meter.length ; j++){
                switch(j){
                    case 0 :
                      document.getElementById(`output_${i}`).innerHTML = `
                      <div class="card my-3 p-2">
                      <div class="card-block d-flex justify-content-between">
                          <h5 class="mb-0 text-lowercase">${data_base.distance[i].meter[j].name}</h5>
                          <div id="mtOutput"></div>
                      </div>
                     </div>`; 
                      break;
                    case 1 :
                     document.getElementById('mtOutput').innerHTML = (data_base.distance[i].meter[j].value *km).toFixed(2);
                      break;
                    case 2 :
                    document.getElementById('mtOutput').innerHTML += " " + data_base.distance[i].meter[j].short_code ;
                      break;
    
                }
            
            }
        }


        if (i == 1){
            for(let j = 0 ; j < data_base.distance[i].centimeter.length ; j++){
                switch(j){
                    case 0 :
                      document.getElementById(`output_${i}`).innerHTML = `
                      <div class="card my-3 p-2">
                      <div class="card-block d-flex justify-content-between">
                          <h5 class="mb-0 text-lowercase">${data_base.distance[i].centimeter[j].name}</h5>
                          <div id="smOutput"></div>
                      </div>
                     </div>`; 
                      break;
                    case 1 :
                     document.getElementById('smOutput').innerHTML = (data_base.distance[i].centimeter[j].value *km).toFixed(2);
                      break;
                    case 2 :
                    document.getElementById('smOutput').innerHTML += " " + data_base.distance[i].centimeter[j].short_code ;
                      break;
    
                }
            
            }
        }

        if (i == 2){
            for(let j = 0 ; j < data_base.distance[i].inches.length ; j++){
                switch(j){
                    case 0 :
                      document.getElementById(`output_${i}`).innerHTML = `
                      <div class="card my-3 p-2">
                      <div class="card-block d-flex justify-content-between">
                          <h5 class="mb-0 text-lowercase">${data_base.distance[i].inches[j].name}</h5>
                          <div id="inOutput"></div>
                      </div>
                     </div>`; 
                      break;
                    case 1 :
                     document.getElementById('inOutput').innerHTML = (data_base.distance[i].inches[j].value *km).toFixed(2);
                      break;
                    case 2 :
                    document.getElementById('inOutput').innerHTML += " " + data_base.distance[i].inches[j].short_code ;
                      break;
    
                }
            
            }
        }

        if (i == 3){
            for(let j = 0 ; j < data_base.distance[i].feet.length ; j++){
                switch(j){
                    case 0 :
                      document.getElementById(`output_${i}`).innerHTML = `
                      <div class="card my-3 p-2">
                      <div class="card-block d-flex justify-content-between">
                          <h5 class="mb-0 text-lowercase">${data_base.distance[i].feet[j].name}</h5>
                          <div id="ftOutput"></div>
                      </div>
                     </div>`; 
                      break;
                    case 1 :
                     document.getElementById('ftOutput').innerHTML = (data_base.distance[i].feet[j].value *km).toFixed(2);
                      break;
                    case 2 :
                    document.getElementById('ftOutput').innerHTML += " " + data_base.distance[i].feet[j].short_code ;
                      break;
    
                }
            
            }
        }

        if (i == 4){
            for(let j = 0 ; j < data_base.distance[i].millimeters.length ; j++){
                switch(j){
                    case 0 :
                      document.getElementById(`output_${i}`).innerHTML = `
                      <div class="card my-3 p-2">
                      <div class="card-block d-flex justify-content-between">
                          <h5 class="mb-0 text-lowercase">${data_base.distance[i].millimeters[j].name}</h5>
                          <div id="mmOutput"></div>
                      </div>
                     </div>`; 
                      break;
                    case 1 :
                     document.getElementById('mmOutput').innerHTML = (data_base.distance[i].millimeters[j].value *km).toFixed(2);
                      break;
                    case 2 :
                    document.getElementById('mmOutput').innerHTML += " " + data_base.distance[i].millimeters[j].short_code ;
                      break;
    
                }
            
            }
        }

        if (i == 5){
            for(let j = 0 ; j < data_base.distance[i].yards.length ; j++){
                switch(j){
                    case 0 :
                      document.getElementById(`output_${i}`).innerHTML = `
                      <div class="card my-3 p-2">
                      <div class="card-block d-flex justify-content-between">
                          <h5 class="mb-0 text-lowercase">${data_base.distance[i].yards[j].name}</h5>
                          <div id="yaOutput"></div>
                      </div>
                     </div>`; 
                      break;
                    case 1 :
                     document.getElementById('yaOutput').innerHTML =  (data_base.distance[i].yards[j].value *km).toFixed(2);
                      break;
                    case 2 :
                    document.getElementById('yaOutput').innerHTML += " " + data_base.distance[i].yards[j].short_code ;
                      break;
    
                }
            
            }
        }
 
}
    
    if(!km){
        document.getElementById('output').style.visibility = 'hidden';
    }
});



