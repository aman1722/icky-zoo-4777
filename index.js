<<<<<<< HEAD
=======

            


>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
let product=[
    {
        img :"https://www.jiomart.com/images/product/150x150/rvfhjtvmfd/scotch-brite-2-in-1-bucket-spin-mop-product-images-orvfhjtvmfd-p590860581-0-202111130939.jpg",
        name:"<b>Scotch-Brite 2-in-1 Bucket Spin Mop</b>",
<<<<<<< HEAD
        price:1075.00,
=======
        price:"₹ 1075.00",
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rv2fef4arm/hic-floor-wiper-with-long-handle-wide-quality-rubber-strip-for-home-kitchen-bathroom-cleaning-product-images-orv2fef4arm-p591300135-0-202205140057.jpg",
        name:"HIC Floor Wiper with Long Handle",
<<<<<<< HEAD
        price: 185.00,
=======
        price:"₹ 185.00",
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rvioiaqsnn/mayfair-star-spin-mop-set-for-effortless-floor-cleaning-pocha-cleaning-set-with-1-microfiber-jali-free-product-images-orvioiaqsnn-p593817459-0-202209161709.jpg",
        name:"MAYFAIR+ Star Spin Mop Set",
<<<<<<< HEAD
        price: 699.00,
=======
        price:"₹ 699.00",
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rvll57d5dg/sez-6oz-180ml-black-pack-of-50-ripple-paper-disposable-coffee-cups-for-event-wedding-party-and-office-use-product-images-orvll57d5dg-p595383893-0-202211171037.jpg",
        name:"SEZ 6OZ (180ML Black) Pack Of 50",
<<<<<<< HEAD
        price:375.00,
=======
        price:"₹ 375.00",
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rvjsc1rhzo/the-honest-home-company-food-wrapping-paper-oilproof-reusable-parchment-paper-for-wrapping-roti-paratha-and-sandwich-paper-9-m-product-images-orvjsc1rhzo-p591852585-0-202206021907.jpg",
        name:"The Honest Home Company Food ",
<<<<<<< HEAD
        price: 125.00,
=======
        price:"₹ 125.00",
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
    },
    {
        img :"https://www.jiomart.com/images/product/150x150/rvkmkw8zqs/sez-12oz-360ml-brown-pack-of-50-ripple-paper-disposable-coffee-cups-for-event-wedding-party-and-office-use-product-images-orvkmkw8zqs-p595374092-0-202211162035.jpg",
        name:"SEZ 12OZ (360ML Brown)",
<<<<<<< HEAD
        price: 449.00,
=======
        price:"₹ 449.00",
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
    }
   
];

<<<<<<< HEAD



let pro=JSON.parse(localStorage.getItem("cart"))||[];
product.forEach(function(e){
    
=======
let pro=[];
product.forEach(function(e){
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
 let parent = document.getElementById("card");
  let card = document.createElement("div");
  card.setAttribute("class","pro")


  let Img = document.createElement("img");
  Img.setAttribute("src",e.img);
  

  let Name = document.createElement("p");
  Name.innerHTML = e.name;

  let Price = document.createElement("h3");
<<<<<<< HEAD
  Price.innerText = "₹"+" "+e.price;
=======
  Price.innerText = e.price;
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5

  let addbtn = document.createElement("button");
  addbtn.innerText="Add To Cart +";
  addbtn.addEventListener("click",function(){
<<<<<<< HEAD
   

    pro.push(e);
    
    
    // console.log(pro);
    
    
   localStorage.setItem("cart",JSON.stringify(pro));
   alert("Product Added To Cart!")
=======
    pro.push(e)
   localStorage.setItem("cart",JSON.stringify(pro));
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
  })

  card.append(Img,Name,Price,addbtn)
  parent.append(card);
<<<<<<< HEAD
});


=======
});
>>>>>>> db31e3db009bf1cefd1da06f5687aa33c653daa5
