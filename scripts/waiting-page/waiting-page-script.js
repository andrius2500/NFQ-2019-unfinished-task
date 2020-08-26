function getDataFromLocalStorage() {
    let storageKey;
    let storageValue;
 
    //getting data from Local Storage and storing it to page

    /*for(let i = 0; i < localStorage.length; i++){
        storageKey = localStorage.key(i);
        storageValue = localStorage.getItem(storageKey);      
        
        if(storageValue === 'doctor'){
            document.getElementById('doctor-clients').innerHTML += storageKey + "<br></br>";
        } else if(storageValue === 'mechanic'){
            document.getElementById('mechanic-clients').innerHTML += storageKey + "<br></br>";
        } else if(storageValue === 'programmer'){
            document.getElementById('programmer-clients').innerHTML += storageKey + "<br></br>";
        } else if(storageValue === 'musician'){
            document.getElementById('musician-clients').innerHTML += storageKey + "<br></br>";
        }
    }*/
             

       // getting data from JSONbin server

        let request = new XMLHttpRequest();
              
        request.onload = function() {
            let clientId;
            let clientSpecialist;

            if(request.status == 200){
                let objectData = JSON.parse(request.responseText);
                console.log(objectData);  
                
                for(let i = 0; i < objectData.length; i++){
                    clientId = objectData[i].id;
                    clientSpecialist = objectData[i].specialist;
                    console.log(clientId);

                    if(objectData[i].specialist === 'doctor') {
                        document.getElementById('doctor-clients').innerHTML += clientId + "<br></br>"; 
                    } else if(objectData[i].specialist === 'mechanic'){
                        document.getElementById('mechanic-clients').innerHTML += clientId + "<br></br>";
                    } else if(objectData[i].specialist === 'programmer'){
                        document.getElementById('programmer-clients').innerHTML += clientId + "<br></br>";
                    } else if(objectData[i].specialist === 'musician'){
                        document.getElementById('musician-clients').innerHTML += clientId + "<br></br>";
                    }
                }         
            } 
        }
        


        request.open("GET", "https://api.jsonbin.io/b/5f452b364d8ce411138078c6", true);
        request.setRequestHeader("secret-key", "$2b$10$/.lo.D6dXydCe.YWs7TQN.P1S6ifdobX5odSq82lH6OMczb66JAPK");
        request.send();

      

 }
document.getElementById('get-data-from-jsonbin').addEventListener('click', getDataFromLocalStorage);
