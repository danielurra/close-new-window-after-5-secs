function opNeWi(){
    // console.log("Onclick event is working");
    let ciscoarUrl = 'https://www.ciscoar.com';
    let opNeWi = window.open(ciscoarUrl, "", "width=1100, height=600");
    setTimeout(() => {
        opNeWi.close();
    }, 5000);   
}
