
let payment = JSON.parse(localStorage.getItem("paymentproducts"))||[];
let totalpro = document.getElementById("count");
let totalcost = document.getElementById("cost");
let Detail = document.getElementById("adddis");

  Detail.style.display="none";


totalpro.innerText=payment.length;
payment.forEach(function(e,i){
    let parent = document.getElementById("card");
     let card = document.createElement("div");
     card.setAttribute("class","pro")
   
     let Img = document.createElement("img");
     Img.setAttribute("src",e.img);
     let detail = document.createElement("div");
    let Name = document.createElement("p");
     Name.innerHTML = e.name;
   
     let Price = document.createElement("h3");
     Price.innerText = "₹"+" "+e.price;
     let del = document.createElement("button");
     del.textContent = "Delete";
     del.style.width="40%";
     del.style.marginLeft="40px"
     del.addEventListener("click",function(){
       payment.splice(i,1);
       if(payment.length === 0){
           payment = null;
       }
       localStorage.setItem("paymentproducts",JSON.stringify(payment));
       
       window.location.reload();
   
     })
     
     let totalprice = payment.reduce((acc,e)=>acc+(+e.price),0);
     let p = totalprice;
   
     totalcost.innerText="₹"+" "+p;
    
      detail.append(Name,Price)
     card.append(Img,detail,del)
     parent.append(card);
   
     
   
   });
  
   let Name = document.getElementById("disname")||"";
   let Address = document.getElementById("addres")||"";
   let Houseno = document.getElementById("housno")||"";
   let State = document.getElementById("city")||"";
   let Pincode = document.getElementById("pincode")||"";
   let land = document.getElementById("landmark")||"";
   let Mob = document.getElementById("Mobile")||"";

   let detail=document.getElementById("address");

   detail.addEventListener("submit",function(e){
      e.preventDefault();
      let pincode = detail.Pin.value;
      let houseno = detail.house.value;
      let address = detail.add.value;
      let landmark = detail.landmark.value;
      let city = detail.City.value;
      let name = detail.name.value;
      let mobile = detail.mob.value;

    //   console.log(pincode)

   
    Name.textContent= "Name:-"+ name;
    Address.textContent="Area:-" + address;
   Houseno.textContent= "House No:-"+ houseno;
   State.textContent= "City:-" + city;
   Pincode.textContent= "Pincode:-"+pincode;
   land.textContent= "Landscape:-"+ landmark;
   Mob.textContent= "Mobile No:-" + mobile;
   
      Detail.style.display="block";
      detail.style.display="none";

      
       
   })

   let O = document.getElementById("order");
   O.addEventListener("click",()=>{
     alert("Order Placed Successfully!")
     window.location.assign("./index.html");
   })


