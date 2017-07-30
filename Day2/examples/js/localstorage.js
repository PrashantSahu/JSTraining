

function refreshLocalStorage() {

    //Read the name of each element in the Local Storage write it to the DOM
    $('#localStorageContents').html("");

    var items = "";
    var key = "";
    for (var x = 0; x < localStorage.length; x++) {
        key = localStorage.key[x];
        items = items + "Key: " + key + ", Value: " + localStorage.getItem(key) + "<br/>";
        $('#localStorageContents').html(items);
    }
    
}