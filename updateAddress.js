var empname;
function update(val){
    // alert("hello");
    location.href = './updateAddress.html';
    var obj;
    let list =JSON.parse(localStorage.getItem("addressData"));
            
    for(var i=0;i<list.length;i++){
        if(list[i].id==val){
           
            obj={
                "id":list[i].id,
                "name":list[i].fullname,
                "address":list[i].address,
                "city":list[i].city,
                "state":list[i].state,
                "pin":list[i].zip,
                "phone":list[i].phone
                
            }
        }
    }    
    localStorage.setItem("updateAddress",JSON.stringify(obj));
}

function updateData(){
    
    var data=JSON.parse(localStorage.getItem("updateAddress"));
    
    document.getElementById('fullname').value=data.name;
    document.getElementById('address').value=data.address;
    document.getElementById('city').value=data.city;
    document.getElementById('state').value=data.state;
    document.getElementById('pin').value=data.pin;
    document.getElementById('phone').value=data.phone;
}

function updateNewData(){
// alert();
    var obj={
        "fullname":document.getElementById('fullname').value,
        "address":document.getElementById('address').value,
        "city":document.getElementById('city').value,
        "state":document.getElementById('state').value,
        "zip":document.getElementById('pin').value,
        "phone":document.getElementById('phone').value
    }

            let list =JSON.parse(localStorage.getItem("addressData"));
            
            for(var i=0;i<list.length;i++){
                if(list[i].fullname===document.getElementById("fullname").value){
                    list.splice(i, 1);
                    list.splice(i, 0, obj);

                }
            }      
            localStorage.setItem("addressData",JSON.stringify(list));
            // console.log();
            location.href = './addressBook.html';

}

