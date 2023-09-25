 const setItem = (card) => {
    console.log(card);
    const storeItem = []
    const addToStorage = JSON.parse(localStorage.getItem("DonationItems"))
    if(!addToStorage){
      storeItem.push(card)
      localStorage.setItem("DonationItems",JSON.stringify(storeItem))
     
    }
    else{
        storeItem.push(...addToStorage,card)
      localStorage.setItem("DonationItems",JSON.stringify(storeItem))
    }

 }
 export default setItem;