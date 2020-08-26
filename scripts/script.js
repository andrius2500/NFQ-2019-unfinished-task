function outputData() {
    const selectedSpecialist = document.getElementById('specialist-selector').value;
    const nextKey = localStorage.length + 1;
    let storageKey;
    let storageValue;
    let object = [];
    let myJson;
              
    if(selectedSpecialist == ""){
        alert('Please pick a specialist');
        return;
    } else {
        console.log('Client is registered to Local Storage');
    }

    //Sending to Local Storage
    localStorage.setItem(nextKey, selectedSpecialist);

    //Sending from Local Storage to JSONbin server
    for(let i = 0; i < localStorage.length; i++){
        storageKey = localStorage.key(i);
        storageValue = localStorage.getItem(storageKey);
        object.push({
            id: storageKey, 
            specialist: storageValue
        }); 
        myJson = JSON.stringify(object);
    }
  
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        console.log(request.responseText);
        }
    }
    request.open("PUT", "https://api.jsonbin.io/b/5f452b364d8ce411138078c6", true);
    //request.open("DELETE", "https://api.jsonbin.io/b/5f45064d993a2e110d36009c", true);
    //request.open("POST", "https://api.jsonbin.io/b", true); //only used once for posting data to JSONbin server
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("secret-key", "$2b$10$/.lo.D6dXydCe.YWs7TQN.P1S6ifdobX5odSq82lH6OMczb66JAPK");
    request.setRequestHeader("collection-id", "5f43a745514ec5112d0d1e35");
    request.setRequestHeader("versioning", "false");
    request.send(myJson);
      

    document.getElementById('selected-specialist').innerHTML = 'Your number for selected specialist is ' + nextKey;
}
document.getElementById('button').addEventListener('click', outputData);

//localStorage.clear();