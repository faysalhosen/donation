import swal from "sweetalert";

const setItem = (card) => {
    console.log(card);
    const storeItem = []
    const addToStorage = JSON.parse(localStorage.getItem("DonationItems"));
    if(!addToStorage){
      storeItem.push(card)
      localStorage.setItem("DonationItems",JSON.stringify(storeItem))
      swal("Good job!", "Donation added successfully!", "success");
     
    }
    else{
        storeItem.push(...addToStorage,card)
      localStorage.setItem("DonationItems",JSON.stringify(storeItem))
      swal("Good job!", "Donation added successfully!", "success");
    }

 }
 export default setItem;