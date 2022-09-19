

//find the searchInput element add an event listener and listen for the keyup event
document.getElementById("searchInput").addEventListener("keyup", function(event) {

    //convert the value to lowercase
    let searchQuery = event.target.value.toLowerCase();

    //add all elements of the class name to the variable
    let allNamesDOMCollection = document.getElementsByClassName('name');
    
    //loop through all the items in the allNamesDOMCollection variable
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {

        //convert the element to lowercase
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        
        //if the search input matches the element in the collection
        if (currentName.includes(searchQuery)) {

            //set it's display property to block
            allNamesDOMCollection[counter].style.display = "block";
        } else {

            //if not do not display it
            allNamesDOMCollection[counter].style.display = "none";
        }
    }
});