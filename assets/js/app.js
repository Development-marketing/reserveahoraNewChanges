const sessionSto = () =>{
    let hotels = JSON.parse(sessionStorage.getItem('session'));
    console.log(hotels);
    let container = document.querySelector('.content');
    let img = document.querySelector('.img');
    if(container){
        for(let hotel of hotels){
            allData = ` 
                <div class="offset-2">
                    <div class="col-md-4 offset-0">
                        <div class="listitem2">
                            <a href="#" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="${hotel.image}"></img></a>
                            <div class="liover"></div>
                        </div>
                    </div>
                    <div class="col-md-8 offset-0">
                        <div class="itemlabel3">
                            <div class="labelright">
                                <img src="../images/filter-rating-5.png" width="60" alt=""/><br/><br/><br/>
                                <img src="../images/user-rating-5.png" width="60" alt=""/><br/>
                                <span class="size11 grey">18 Reviews</span><br/><br/>
                                <span class="green size18"><b>$.${hotel.price}</b></span><br/>
                                <span class="size11 grey">avg/night</span><br/><br/><br/>
                                <form action="details.html">
                                <a class="bookbtn mt1" href="http://www.booking.com.${hotel.link}" type="submit">Ver habitaciones</a>	
                                </form>			
                            </div>
                            <div class="labelleft2">			
                                <h3 class="h3-titleHotel"><a href="http://www.booking.com.${hotel.link}">${hotel.name}</a></h3 class="h3-titleHotel">
                                <p class="grey">
                                <div class="div-father-addres">
                                    <i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>${hotel.direccion}</p>
                                </div>
                                <div class="div-score">
                                    <p>Puntuación</p>
                                    <div class="div-scoreCircle">
                                        <h4 class="h4-pricehotel">${hotel.score}</h4>
                                    </div>
                                </div>
                                <ul class="hotelpreferences">
                                    <li class="icohp-internet"></li>
                                    <li class="icohp-air"></li>
                                    <li class="icohp-pool"></li>
                                    <li class="icohp-childcare"></li>
                                    <li class="icohp-fitness"></li>
                                    <li class="icohp-breakfast"></li>
                                    <li class="icohp-parking"></li>
                                    <li class="icohp-pets"></li>
                                    <li class="icohp-spa"></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="clearfix"></div>       
                <div class="offset-2"><hr class="featurette-divider3"></div>        
            `;
            if(container){
                container.insertAdjacentHTML('beforeEnd', allData);
            }
        }
    }
} 

const drawDataList = e => {
    let container = document.querySelector('.content'),
    allData = '',
    hotels = e.scrapped; 
    sessionStorage.setItem('session',JSON.stringify(hotels));
    idLogin = e.scrapped;
    for(let idLog of idLogin){
        console.log(idLogin[0].id);
    //  let link = idLogin[1].link;
    }
}
// // draw  in the app
  // init ajaxApi
  const searchHotel = (inputCity,inputCheckin,inputCheckout,inputRooms,inputAdults,inputChildrens,res) =>{
    let api = new XMLHttpRequest();
    api.open('POST','https://cd1ff027.ngrok.io/api/v1/scrap');
    api.setRequestHeader('Content-Type','application/json');
    api.onprogress = () =>{
        console.log('On load');
    }
    api.onload = () => {
        if (api.status === 200) {
            let response = JSON.parse(api.responseText);
            drawDataList(response);
            sessionSto();
            //   let res = idLogin[0].id;
            console.log(response);
        }
    }
    api.send(JSON.stringify({
    //   "endpoint":"","destiny":{"idcity":"-592318","type":"city","city":inputCity},"checkin":inputCheckin,"checkout":inputCheckout,"room":{"id":1,"quantity":inputRooms},"adult":{"id":2,"quantity":inputAdults},"child":""
    // "endpoint":{"id":1,"name":"Search","endpoint":"searchresults.es.html?","site_id":"1"},"destiny":{"idcity":localStorage.getItem('idcityApp'),"type":"city","city":inputCity},"checkin":inputCheckin,"checkout":inputCheckout,"room":{"id":2,"quantity":inputRooms},"adult":{"id":2,"quantity":inputAdults},"child":"","site":{"id":1,"name":"Booking","domain":"booking.com"}
    "endpoint":{"id":1,"name":"Search","endpoint":"searchresults.es.html?","site_id":"1"},"destiny":{"idcity":"-592318","type":"city","city":inputCity},"checkin":inputCheckin,"checkout":inputCheckout,"room":{"id":2,"quantity":inputRooms},"adult":{"id":2,"quantity":inputAdults},"child":"","site":{"id":1,"name":"Booking","domain":"booking.com"}
    
    }))
  }
  // get data
  const getDataList = () =>{
      let inputCity= document.getElementById('city-app').value,
      inputCheckin= document.getElementById('checkin-app').value,
      inputCheckout= document.getElementById('checkout-app').value,
      inputRooms= document.getElementById('rooms-app').value,
      inputAdults= document.getElementById('adults-app').value,
      inputChildrens= document.getElementById('childrens-app').value;
      return{inputCity,inputCheckin,inputCheckout,inputRooms,inputAdults,inputChildrens};
  }
  const getEventList = () =>{ 
      document.getElementById("sendData").addEventListener("click",() =>{
          console.log(getDataList());
          let objectList = getDataList();
          searchHotel(objectList.inputCity,objectList.inputCheckin,objectList.inputCheckout,objectList.inputRooms,objectList.inputAdults,objectList.inputChildrens)
      });
  }
  if(document.getElementById("sendData")){
      getEventList();
  }
// //   searchHotel(); 

sessionSto();

