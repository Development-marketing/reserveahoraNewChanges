// This is just a sample script. Paste your real code (javascript or HTML) here.
const sessionSto = () => {
    let hotels = JSON.parse(sessionStorage.getItem('session'));
    if (hotels) {
        console.log(hotels);
    }
    let container = document.querySelector('.content');
    if (container) {
        for (let hotel of hotels) {
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
                                <div class="div-score">
                                    <p>Puntuación</p>
                                    <div class="div-scoreCircle">
                                        <h4 class="h4-pricehotel">${hotel.score}</h4>
                                    </div>
                                </div>
                                <span class="green size18"><b>${hotel.price}</b></span><br/>
                                <span class="green size18"><b>${hotel.price2}</b></span><br/>
                                <br></br><br></br>
                                <form action="details.html">
                                <a href="details.html"type="submit" class="seeRooms">Ver habitaciones</a>	
                                </form>			
                            </div>
                            <div class="labelleft2">			
                                <h3 class="h3-titleHotel"><a href="details.html" class="hotelName" name="https://www.booking.com${hotel.link}">${hotel.name}</a><a href="details.html" class="label-hidden" id="label-getLink"></a></h3 class="h3-titleHotel">
                                <p class="grey">
                                <div class="div-father-addres">
                                    <i class="fas fa-map-marker-alt fa-1x"></i>
                                    <p>${hotel.direccion}</p><p class="p-kilometers">[ ${hotel.kilometers} ]</p>
                                </div>
                                <p>${hotel.recommendation}</p>
                                <p>${hotel.services}</p>
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
            if (container) {
                container.insertAdjacentHTML('beforeEnd', allData);
            }
        }
    }
    // console.log(sessionStorage.getItem('session'));
}


const drawDataList = e => {
    let container = document.querySelector('.content'),
        allData = '',
        hotels = e.scrapped;
    if (hotels) {
        sessionStorage.setItem('session', JSON.stringify(hotels));
    }
}
// init ajaxApi
const searchHotel = (inputCity, inputCheckin, inputCheckout, inputRooms, inputAdults, inputChildrens) => {
    let api = new XMLHttpRequest();
<<<<<<< HEAD
    api.open('POST', 'http://206.189.205.135/api/v1/scrap');
=======
    api.open('POST', 'https://8a63ce94.ngrok.io/api/v1/scrap');
>>>>>>> 80a03fd404fe05a322731407f636652f1ba2103e
    api.setRequestHeader('Content-Type', 'application/json');
    api.onprogress = () => {
        console.log('On load');
    }
    api.onload = () => {
        if (api.status === 200) {
            let response = JSON.parse(api.responseText);
            drawDataList(response);
            sessionSto();
            console.log(response);
        }
    }
    api.send(JSON.stringify({
        "endpoint": {
            "id": 1,
            "name": "Search",
            "endpoint": "searchresults.es.html?",
            "site_id": "1"
        },
        "destiny": {
            "idcity": inputCity,
            "type": "city",
            "city": inputCity
        },
        "checkin": inputCheckin,
        "checkout": inputCheckout,
        "room": {
            "id": inputRooms,
            "quantity": inputRooms
        },
        "adult": {
            "id": inputAdults,
            "quantity": inputAdults
        },
        "child": {
            "id": inputChildrens,
            "quantity": inputChildrens,
            "age1": 5
        },
        "site": {
            "id": 1,
            "name": "Booking",
            "domain": "booking.com"
        }
        // "endpoint":"","destiny":{"idcity":inputCity,"type":"city","city":inputCity},"checkin":inputCheckin,"checkout":inputCheckout,"room":{"id":1,"quantity":inputRooms},"adult":{"id":3,"quantity":inputAdults},"child":""
    }))
}
// get data
const getDataList = () => {
    let inputCity = document.getElementById('city-app').value,
        inputCheckin = document.getElementById('checkin-app').value,
        inputCheckout = document.getElementById('checkout-app').value,
        inputRooms = document.getElementById('rooms-app').value,
        inputAdults = document.getElementById('adults-app').value,
        inputChildrens = document.getElementById('childrens-app').value;
    return {
        inputCity,
        inputCheckin,
        inputCheckout,
        inputRooms,
        inputAdults,
        inputChildrens
    };
}
const getEventList = () => {
    document.getElementById("sendData").addEventListener("click", () => {
        console.log(getDataList());
        let objectList = getDataList();
        searchHotel(objectList.inputCity, objectList.inputCheckin, objectList.inputCheckout, objectList.inputRooms, objectList.inputAdults, objectList.inputChildrens)
    });
}
if (document.getElementById("sendData")) {
    getEventList();
}
sessionSto()
if (true) {
    $('.hotelName').click(function(e) {
        e.preventDefault();
        const sessionDetail = () => {
<<<<<<< HEAD
            // alert("Hola");
=======
            alert("Hola");
>>>>>>> 80a03fd404fe05a322731407f636652f1ba2103e
            let nameLink = e.target.name;
            // alert(nameLink);
            // session storage
            let detailApp = JSON.parse(sessionStorage.getItem('sessionDetail'));    
            let linkName = sessionStorage.setItem('sessionName', nameLink);
            // draw function in the app
            const drawListDetails = e => {
                let detail = document.querySelector('.detailsApp'),
                    dataDetails = '',
                    detailApp = e.data;
                if (detailApp) {
                    sessionStorage.setItem('sessionDetail', JSON.stringify(detailApp));
                }
                let linkName = sessionStorage.setItem('sessionName', nameLink);
                window.location.href = "details.html";
            }
            // draw  in the app
            const getdataDetails = () => {
                let nameLink = document.getElementById("hotelName").name;
                let linkName = sessionStorage.setItem('sessionName', nameLink);
                alert(nameLink);
                console.log(nameLink);
            }
            const detailsHotel = (nameLink) => {
                let detailsapi = new XMLHttpRequest();
<<<<<<< HEAD
                detailsapi.open('POST', 'http://206.189.205.135/api/v1/scraphotel');
=======
                detailsapi.open('POST', 'https://8a63ce94.ngrok.io/api/v1/scraphotel');
>>>>>>> 80a03fd404fe05a322731407f636652f1ba2103e
                detailsapi.setRequestHeader('Content-Type', 'application/json');
                let getName = sessionStorage.getItem('sessionName', nameLink);
                console.log(getName);
                detailsapi.onprogress = () => {
                    console.log('On load');
                }
                detailsapi.onload = () => {
                    if (detailsapi.status === 200) {
                        let response = JSON.parse(detailsapi.responseText);
                        drawListDetails(response);
                    }
                }
                detailsapi.send(JSON.stringify({
                    "url": getName
                }))
            }
<<<<<<< HEAD


=======
            //   if(document.getElementById("label-getlink")){getdataDetails();}
>>>>>>> 80a03fd404fe05a322731407f636652f1ba2103e

            const getEventDetails = () => {
                let objectDetails = getdataDetails();
                console.log(objectDetails);
            }
            // 
            detailsHotel();

        }
        sessionDetail();
    });
}



const drawHotelDetail = () => {
    let detailApp = JSON.parse(sessionStorage.getItem('sessionDetail'));
<<<<<<< HEAD
    let detail = document.getElementById('detailsApp');
    if (detailApp) {
        console.log(detailApp);
    }
    if (detail) {
        let valueDetail = detailApp.length;
        console.log(valueDetail);
        if (valueDetail > 1) {
            let resultDetail1 = detailApp[1];
            console.log("estas aquí en el 1 hpta")
            console.log(resultDetail1);
            // for response
        } else {
            let resultDetail1 = detailApp[0];
            console.log("estas aquí en el 0 hpta")
            console.log(resultDetail1);
        }
        // ternaryOperator
        let ternaryOperator = detailApp.length > 1 ? detailApp[1] : detailApp[0];
        console.log(ternaryOperator);
        // for response
=======
    detail = document.getElementById('detailsApp');
    if (detailApp) {
        console.log(detailApp);
    }
    if (detail) {              
        let ternaryOperator = detailApp.length >1 ? detailApp[1]:detailApp[0];
        console.log(ternaryOperator);
>>>>>>> 80a03fd404fe05a322731407f636652f1ba2103e
        for (dataDetailapp of detailApp) {
            let servicioPorTipoHabitacion = dataDetailapp.servicios_por_tipo_habitacion;
            for (let i = 0; i < servicioPorTipoHabitacion.length; i++) {
                let detail = document.querySelector('.typeRoom');
                const servicesForTypeRoom = document.getElementById("servicesRoom");
                const value = document.createElement('li');
                value.textContent = servicioPorTipoHabitacion[i];
                if (servicesForTypeRoom) {
                    servicesForTypeRoom.querySelector('li').appendChild(value)
                }
            }
            let precioApp = dataDetailapp.precio;
            for (let i = 0; i < precioApp.length; i++) {
                let detail = document.querySelector('.typeRoom');
                const priceApp = document.getElementById("priceApp");
                const value = document.createElement('p');
                value.textContent = precioApp[i];
                if (priceApp) {
                    priceApp.querySelector('span').appendChild(value);
                }
            }
            let opcionesApp = dataDetailapp.opciones;
            for (let i = 0; i < opcionesApp.length; i++) {
                let detail = document.querySelector('.typeRoom');
                const options = document.getElementById("opcionesApp");
                const value = document.createElement('p');
                value.textContent = opcionesApp[i];
                if (options) {
                    options.querySelector('p').appendChild(value);
                }
            }
            let tipo_habitacion = dataDetailapp.Tipo_habitacion;
            for (let i = 0; i < tipo_habitacion.length; i++) {
                let detail = document.querySelector('.typeRoom');
                const typeRoom = document.getElementById("typeRoom");
                const value = document.createElement('h4');
                value.textContent = tipo_habitacion[i];
                if (typeRoom) {
                    typeRoom.querySelector('h4').appendChild(value);
                }
                data = `
<<<<<<< HEAD
                                <div class="divContentDetails">
                                    <div class="col-md-3 offset-0 rowContent1">
                                        <div class="div-circleTypeservice">
                                            <a href="#"><img src="${dataDetailapp.imagenes[2]}" alt="" class="fwimg"/></a>
                                        </div>
                                    </div>
                                    <div class="col-md-9 offset-0">
                                        <div class="col-md-9 mediafix1 contentAppDetails" id="typeRoom+${tipo_habitacion[i]}">
                                            <h4 class="opensans dark bold margtop1 lh1 h4App">${tipo_habitacion[i]}</h4>
                                            Ocupacion maxíma: ${dataDetailapp.Ocupacion[0]} adultos
                                            <ul class="hotelpreferences margtop10">
                                                <li class="icohp-internet"></li>
                                                <li class="icohp-air"></li>
                                                <li class="icohp-pool"></li>
                                                <li class="icohp-childcare"></li>
                                                <li class="icohp-fitness"></li>
                                                <li class="icohp-breakfast"></li>
                                                <li class="icohp-parking"></li>
                                            </ul>
                                            <div class="clearfix"></div>
                                            <ul class="checklist2 margtop10" id="servicesRoom+${servicioPorTipoHabitacion[i]}">
                                                <li>${servicioPorTipoHabitacion[i]}</li>
                                            </ul>									
                                        </div>
                                        <div class="col-md-3 center bordertype4 priceApp" id="priceApp+${precioApp[i]}">
                                            <span class="opensans green size23 "> ${precioApp[i]}</span><br/>
                                            <span class="opensans lightgrey size12" id="opcionesApp"><p></p></span>
                                            <span class="lred bold">
                                            <div id="availabilityApp">
                                            <select>
                                            </select>
                                            </div>
                                            </span>
                                            <button class="bookbtn mt1">Reservar</button>
                                            <div id="opcionesApp+${opcionesApp[i]}">
                                                <p>${opcionesApp[i]}</p>
                                            </div>	
                                            <div class="typeRoom">
                                            </div>
                                        </div>										
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="line2"></div>
                                </div>
                            `;
                if (detail) {
                    detail.insertAdjacentHTML('beforeEnd', data);
                }
            }
            // ${servicioPorTipoHabitacion[i]}
            // servicesRoom+${servicioPorTipoHabitacion[i]}
            // ${precioApp[i]}-
            // priceApp+${precioApp[i]}

            // let  disponibilidadApp = dataDetailapp.disponibilidad;
            // for(i =0; i < disponibilidadApp.length; i++){
            //     let detail = document.querySelector('.detailsApp');
            //     const availability = document.getElementById('availabilityApp');
            //     const value = document.createElement('option');
            //     value.textContent = disponibilidadApp[i];
            //     if(availability){availability.querySelector('select').appendChild(value);}
            // }
            dataDetails = `
            
                        <div class="container detailsApp">
                        <div class="container pagecontainer offset-0">	
                        <!-- SLIDER -->
                        <div class="col-md-8 details-slider">
            
                        <div id="c-carousel">
                        <div id="wrapper">
                        <div id="inner">
                            <div id="caroufredsel_wrapper2">
                                <div id="carousel">
                                    <img src="${dataDetailapp.imagenes[0]}" alt=""/>
                                    <img src="${dataDetailapp.imagenes[1]}" alt=""/>
                                    <img src="${dataDetailapp.imagenes[2]}" alt=""/>
                                    <img src="${dataDetailapp.imagenes[3]}" alt=""/>
                                    <img src="${dataDetailapp.imagenes[4]}" alt=""/>
                                    <img src="${dataDetailapp.imagenes[5]}" alt=""/>						
                                </div>
                            </div>
                            <div id="pager-wrapper">
                                <div id="pager">
                                    <img src="${dataDetailapp.imagenes[6]}" width="120" height="68" alt=""/>
                                    <img src="${dataDetailapp.imagenes[7]}" width="120" height="68" alt=""/>
                                    <img src="${dataDetailapp.imagenes[8]}" width="120" height="68" alt=""/>
                                    <img src="${dataDetailapp.imagenes[9]}" width="120" height="68" alt=""/>
                                    <img src="${dataDetailapp.imagenes[10]}" width="120" height="68" alt=""/>
                                    <img src="${dataDetailapp.imagenes[11]}" width="120" height="68" alt=""/>						
=======
                <div class="divContentDetails">
                    <div class="col-md-3 offset-0 rowContent1">
                        <div class="div-circleTypeservice">
                            <a href="#"><img src="${dataDetailapp.imagenes[2]}" alt="" class="fwimg"/></a>
                        </div>
                    </div>
                    <div class="col-md-9 offset-0">
                        <div class="col-md-9 mediafix1 contentAppDetails" id="typeRoom+${tipo_habitacion[i]}">
                            <h4 class="opensans dark bold margtop1 lh1 h4App">${tipo_habitacion[i]}</h4>
                            Ocupacion maxíma: ${dataDetailapp.Ocupacion[0]} adultos
                            <ul class="hotelpreferences margtop10">
                                <li class="icohp-internet"></li>
                                <li class="icohp-air"></li>
                                <li class="icohp-pool"></li>
                                <li class="icohp-childcare"></li>
                                <li class="icohp-fitness"></li>
                                <li class="icohp-breakfast"></li>
                                <li class="icohp-parking"></li>
                            </ul>
                            <div class="clearfix"></div>
                            <ul class="checklist2 margtop10" id="servicesRoom+${servicioPorTipoHabitacion[i]}">
                                <li>${servicioPorTipoHabitacion[i]}</li>
                            </ul>									
                        </div>
                        <div class="col-md-3 center bordertype4 priceApp" id="priceApp+${precioApp[i]}">
                            <span class="opensans green size23 "> ${precioApp[i]}</span><br/>
                            <span class="opensans lightgrey size12" id="opcionesApp"><p></p></span>
                            <span class="lred bold">
                            <div id="availabilityApp">
                            <select>
                            </select>
                            </div>
                            </span>
                            <button class="bookbtn mt1">Reservar</button>
                            <div id="opcionesApp+${opcionesApp[i]}">
                                <p>${opcionesApp[i]}</p>
                            </div>	
                            <div class="typeRoom">
                            </div>
                        </div>										
                    </div>
                    <div class="clearfix"></div>
                    <div class="line2"></div>
                </div>
        `;
                if (detail) {
                    detail.insertAdjacentHTML('beforeEnd', data);
                }
            }
            // ${servicioPorTipoHabitacion[i]}
            // servicesRoom+${servicioPorTipoHabitacion[i]}
            // ${precioApp[i]}-
            // priceApp+${precioApp[i]}

            // let  disponibilidadApp = dataDetailapp.disponibilidad;
            // for(i =0; i < disponibilidadApp.length; i++){
            //     let detail = document.querySelector('.detailsApp');
            //     const availability = document.getElementById('availabilityApp');
            //     const value = document.createElement('option');
            //     value.textContent = disponibilidadApp[i];
            //     if(availability){availability.querySelector('select').appendChild(value);}
            // }
            dataDetails = `

            <div class="container detailsApp">
            <div class="container pagecontainer offset-0">	
            <!-- SLIDER -->
            <div class="col-md-8 details-slider">

            <div id="c-carousel">
            <div id="wrapper">
            <div id="inner">
                <div id="caroufredsel_wrapper2">
                    <div id="carousel">
                        <img src="${dataDetailapp.imagenes[0]}" alt=""/>
                        <img src="${dataDetailapp.imagenes[1]}" alt=""/>
                        <img src="${dataDetailapp.imagenes[2]}" alt=""/>
                        <img src="${dataDetailapp.imagenes[3]}" alt=""/>
                        <img src="${dataDetailapp.imagenes[4]}" alt=""/>
                        <img src="${dataDetailapp.imagenes[5]}" alt=""/>						
                    </div>
                </div>
                <div id="pager-wrapper">
                    <div id="pager">
                        <img src="${dataDetailapp.imagenes[6]}" width="120" height="68" alt=""/>
                        <img src="${dataDetailapp.imagenes[7]}" width="120" height="68" alt=""/>
                        <img src="${dataDetailapp.imagenes[8]}" width="120" height="68" alt=""/>
                        <img src="${dataDetailapp.imagenes[9]}" width="120" height="68" alt=""/>
                        <img src="${dataDetailapp.imagenes[10]}" width="120" height="68" alt=""/>
                        <img src="${dataDetailapp.imagenes[11]}" width="120" height="68" alt=""/>						
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <button id="prev_btn2" class="prev2"><img src="../images/spacer.png" alt=""/></button>
            <button id="next_btn2" class="next2"><img src="../images/spacer.png" alt=""/></button>		
                
        </div>
        </div> <!-- /c-carousel -->





        </div>
        <!-- END OF SLIDER -->			

        <!-- RIGHT INFO -->
        <div class="col-md-4 detailsright offset-0">
            <div class="padding20">
                <h4 class="lh1">${dataDetailapp.Nombre_hotel}</h4>
                <h5>${dataDetailapp.estrellas}</h5>
            </div>
            
            <div class="line3"></div>
            
            <div class="hpadding20">
                <h2 class="opensans slim green2">${dataDetailapp.precio[0]}</h2>
            </div>
            
            <div class="line3 margtop20"></div>
            
            <div class="col-md-6 bordertype1 padding20">
                <span class="opensans size30 bold grey2">${dataDetailapp.puntuacion}</span><br/>
                Puntuacion<br/>
            </div>
            <div class="col-md-6 bordertype2 padding20">

            </div>
            
            <div class="col-md-6 bordertype3">
                <img src="../images/user-rating-4.png" alt=""/><br/>
                10 comentarios  
            </div>
            <div class="col-md-6 bordertype3">
                
            </div>
            <div class="clearfix"></div><br/>
            
            <div class="hpadding20">
                <a href="#" class="booknow margtop20 btnmarg">Reservar</a>
            </div>
        </div>
        <!-- END OF RIGHT INFO -->

        </div>
        <!-- END OF container-->

        <div class="container mt25 offset-0">

        <div class="col-md-8 pagecontainer2 offset-0">


            <ul class="nav nav-tabs" id="myTab">
                <li onclick="mySelectUpdate()" class=""><a data-toggle="tab" href="#summary"><span class="summary"></span><span class="hidetext">Información hotel</span>&nbsp;</a></li>
                <li onclick="mySelectUpdate()" class="active"><a data-toggle="tab" href="#roomrates"><span class="rates"></span><span class="hidetext">Habitaciones</span>&nbsp;</a></li>
                <li onclick="mySelectUpdate()" class=""><a data-toggle="tab" href="#preferences"><span class="preferences"></span><span class="hidetext">Servicios</span>&nbsp;</a></li>
                <li onclick="loadScript()" class=""><a data-toggle="tab" href="#maps"><span class="maps"></span><span class="hidetext">Mapas</span>&nbsp;</a></li>
                <li onclick="mySelectUpdate();" class=""><a data-toggle="tab" href="#reviews"><span class="reviews"></span><span class="hidetext">Comentarios</span>&nbsp;</a></li>

            </ul>			
            <div class="tab-content4" >
                <!-- TAB 1 -->				
                <div id="summary" class="tab-pane fade ">
                    <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse1">
                    Descripcion <span class="collapsearrow"></span>
                </button>
                
                <div id="collapse1" class="collapse in">
                    <div class="hpadding20">
                        ${dataDetailapp.descripcion}
                    </div>
                    <div class="clearfix"></div>
                </div>
                    <div class="line4"></div>
                    
                    <!-- Collapse 1 -->	
                    <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse1">
                    Direccion <span class="collapsearrow"></span>
                    </button>
                    
                    <div id="collapse1" class="collapse in">
                        <div class="hpadding20">
                        ${dataDetailapp.direccion}
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <!-- End of collapse 1 -->	
                    
                    <div class="line4"></div>						                                                															                    
                </div>
                <!-- TAB 2 -->
                <div id="roomrates" class="tab-pane fade active in">
                    <div class="hpadding20">
                        <div class="col-md-8 offset-0">
                        </div>
                    </div>
                    <br/>
                    

                    

                    <div class="padding20">
                        <h2 class="opensans size18 ">Room type</h2>                    
                        <div class="line4"></div>
                    <div class="typeRoom"></div>
                    </div>						
                    
                </div>
                
                <!-- TAB 3 -->					
                <div id="preferences" class="tab-pane fade">                                        
                    <!-- Collapse 8 -->	
                    <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse8">
                    Room facilities <span class="collapsearrow"></span>
                    </button>
                    
                    <div id="collapse8" class="collapse in">
                        <div class="hpadding20">
                            <div class="col-md-4">
                                <ul class="checklist">
                                    <li>${dataDetailapp.servicios[0]}</li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="checklist">
                                    <li>Wake-up calls</li>
                                    <li>Daily housekeeping</li>
                                    <li>Private bathroom</li>
                                    <li>Hair dryer</li>	
                                </ul>									
                            </div>	
                            <div class="col-md-4">
                                <ul class="checklist">								
                                    <li>Makeup/shaving mirror</li>
                                    <li>Shower/tub combination</li>
                                    <li>Satellite TV service</li>
                                    <li>Electronic/magnetic keys</li>	
                                </ul>									
                            </div>									
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <!-- End of collapse 8 -->				
                    
                    
                </div>
                
                <!-- TAB 4 -->					
                <div id="maps" class="tab-pane fade">
                    <div class="hpadding20">
                        <div id="map-canvas"></div>
                    </div>
                </div>
                
                <!-- TAB 5 -->					
                <div id="reviews" class="tab-pane fade ">
                    <div class="div-comments">
                        <h2>Comentarios via:</h2>
                        <img src="http://www.pngall.com/wp-content/uploads/2016/03/Booking-Logo-PNG.png">
                    </div>                                       
                    <div class="line2"></div>
                    
                    <div class="hpadding20">							
                        <div class="col-md-4 offset-0 center comentarios">
                            <div class="padding20">
                                <div class="bordertype5">
                                    <div class="circlewrap">
                                        <img src="${dataDetailapp.avatar[0]}" class="circleimg" alt=""/>
                                    </div>
                                    <p>${dataDetailapp.pais[0]}</p>
                                    <img src="../images/check.png" alt=""/>
                                    <span class="green">Recomendado</span>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-md-8 offset-0 comentarios">
                            <div class="padding20">
                                <span class="opensans size18 dark">${dataDetailapp.autor[0]}</span><br/>
                                <p class="opensans size16">${dataDetailapp.comentarios[0]}</p>		
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                        
                    <div class="line2"></div>
                    
                    <div class="hpadding20">	
                        <div class="col-md-4 offset-0 center comentarios">
                            <div class="padding20">
                                <div class="bordertype5">
                                    <div class="circlewrap">
                                        <img src="${dataDetailapp.avatar[1]}" class="circleimg" alt=""/>
                                    </div>                        
                                    <p>${dataDetailapp.pais[1]}</p>
                                    <img src="../images/check.png" alt=""/>
                                    <span class="green">Recomendado</span>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-md-8 offset-0 comentarios">
                            <div class="padding20">
                                <span class="opensans size18 dark">${dataDetailapp.autor[1]}</span><br/>
                                <p  class="opensans size16">${dataDetailapp.comentarios[1]}</p>	
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                        
                    <div class="line2"></div>
                        
                    <div class="hpadding20">	
                        <div class="col-md-4 offset-0 center comentarios">
                            <div class="padding20">
                                <div class="bordertype5">
                                    <div class="circlewrap">
                                        <img src="${dataDetailapp.avatar[2]}" class="circleimg" alt=""/>
                                    </div>
                                    <p>${dataDetailapp.pais[2]}</p>
                                    <img src="../images/check.png" alt=""/>
                                    <span class="green">Recomendado</span>
>>>>>>> 80a03fd404fe05a322731407f636652f1ba2103e
                                </div>
                                
                            </div>
                        </div>
<<<<<<< HEAD
                        <div class="clearfix"></div>
                        <button id="prev_btn2" class="prev2"><img src="../images/spacer.png" alt=""/></button>
                        <button id="next_btn2" class="next2"><img src="../images/spacer.png" alt=""/></button>		
                            
                    </div>
                    </div> <!-- /c-carousel -->
            
            
            
            
            
                    </div>
                    <!-- END OF SLIDER -->			
            
                    <!-- RIGHT INFO -->
                    <div class="col-md-4 detailsright offset-0">
                        <div class="padding20">
                            <h4 class="lh1">${dataDetailapp.Nombre_hotel}</h4>
                            <h5>${dataDetailapp.estrellas}</h5>
                        </div>
                        
                        <div class="line3"></div>
                        
                        <div class="hpadding20">
                            <h2 class="opensans slim green2">${dataDetailapp.precio[0]}</h2>
                        </div>
                        
                        <div class="line3 margtop20"></div>
                        
                        <div class="col-md-6 bordertype1 padding20">
                            <span class="opensans size30 bold grey2">${dataDetailapp.puntuacion}</span><br/>
                            Puntuacion<br/>
                        </div>
                        <div class="col-md-6 bordertype2 padding20">
            
                        </div>
                        
                        <div class="col-md-6 bordertype3">
                            <img src="../images/user-rating-4.png" alt=""/><br/>
                            10 comentarios  
                        </div>
                        <div class="col-md-6 bordertype3">
                            
                        </div>
                        <div class="clearfix"></div><br/>
                        
                        <div class="hpadding20">
                            <a href="#" class="booknow margtop20 btnmarg">Reservar</a>
                        </div>
                    </div>
                    <!-- END OF RIGHT INFO -->
            
                    </div>
                    <!-- END OF container-->
            
                    <div class="container mt25 offset-0">
            
                    <div class="col-md-8 pagecontainer2 offset-0">
            
            
                        <ul class="nav nav-tabs" id="myTab">
                            <li onclick="mySelectUpdate()" class=""><a data-toggle="tab" href="#summary"><span class="summary"></span><span class="hidetext">Información hotel</span>&nbsp;</a></li>
                            <li onclick="mySelectUpdate()" class="active"><a data-toggle="tab" href="#roomrates"><span class="rates"></span><span class="hidetext">Habitaciones</span>&nbsp;</a></li>
                            <li onclick="mySelectUpdate()" class=""><a data-toggle="tab" href="#preferences"><span class="preferences"></span><span class="hidetext">Servicios</span>&nbsp;</a></li>
                            <li onclick="loadScript()" class=""><a data-toggle="tab" href="#maps"><span class="maps"></span><span class="hidetext">Mapas</span>&nbsp;</a></li>
                            <li onclick="mySelectUpdate();" class=""><a data-toggle="tab" href="#reviews"><span class="reviews"></span><span class="hidetext">Comentarios</span>&nbsp;</a></li>
            
                        </ul>			
                        <div class="tab-content4" >
                            <!-- TAB 1 -->				
                            <div id="summary" class="tab-pane fade ">
                                <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse1">
                                Descripcion <span class="collapsearrow"></span>
                            </button>
                            
                            <div id="collapse1" class="collapse in">
                                <div class="hpadding20">
                                    ${dataDetailapp.descripcion}
                                </div>
                                <div class="clearfix"></div>
                            </div>
                                <div class="line4"></div>
                                
                                <!-- Collapse 1 -->	
                                <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse1">
                                Direccion <span class="collapsearrow"></span>
                                </button>
                                
                                <div id="collapse1" class="collapse in">
                                    <div class="hpadding20">
                                    ${dataDetailapp.direccion}
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <!-- End of collapse 1 -->	
                                
                                <div class="line4"></div>						                                                															                    
                            </div>
                            <!-- TAB 2 -->
                            <div id="roomrates" class="tab-pane fade active in">
                                <div class="hpadding20">
                                    <div class="col-md-8 offset-0">
                                    </div>
                                </div>
                                <br/>
                                
            
                                
            
                                <div class="padding20">
                                    <h2 class="opensans size18 ">Room type</h2>                    
                                    <div class="line4"></div>
                                <div class="typeRoom"></div>
                                </div>						
                                
                            </div>
                            
                            <!-- TAB 3 -->					
                            <div id="preferences" class="tab-pane fade">                                        
                                <!-- Collapse 8 -->	
                                <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse8">
                                Room facilities <span class="collapsearrow"></span>
                                </button>
                                
                                <div id="collapse8" class="collapse in">
                                    <div class="hpadding20">
                                        <div class="col-md-4">
                                            <ul class="checklist">
                                                <li>${dataDetailapp.servicios[0]}</li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4">
                                            <ul class="checklist">
                                                <li>Wake-up calls</li>
                                                <li>Daily housekeeping</li>
                                                <li>Private bathroom</li>
                                                <li>Hair dryer</li>	
                                            </ul>									
                                        </div>	
                                        <div class="col-md-4">
                                            <ul class="checklist">								
                                                <li>Makeup/shaving mirror</li>
                                                <li>Shower/tub combination</li>
                                                <li>Satellite TV service</li>
                                                <li>Electronic/magnetic keys</li>	
                                            </ul>									
                                        </div>									
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <!-- End of collapse 8 -->				
                                
                                
                            </div>
                            
                            <!-- TAB 4 -->					
                            <div id="maps" class="tab-pane fade">
                                <div class="hpadding20">
                                    <div id="map-canvas"></div>
                                </div>
                            </div>
                            
                            <!-- TAB 5 -->					
                            <div id="reviews" class="tab-pane fade ">
                                <div class="div-comments">
                                    <h2>Comentarios via:</h2>
                                    <img src="http://www.pngall.com/wp-content/uploads/2016/03/Booking-Logo-PNG.png">
                                </div>                                       
                                <div class="line2"></div>
                                
                                <div class="hpadding20">							
                                    <div class="col-md-4 offset-0 center comentarios">
                                        <div class="padding20">
                                            <div class="bordertype5">
                                                <div class="circlewrap">
                                                    <img src="${dataDetailapp.avatar[0]}" class="circleimg" alt=""/>
                                                </div>
                                                <p>${dataDetailapp.pais[0]}</p>
                                                <img src="../images/check.png" alt=""/>
                                                <span class="green">Recomendado</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-8 offset-0 comentarios">
                                        <div class="padding20">
                                            <span class="opensans size18 dark">${dataDetailapp.autor[0]}</span><br/>
                                            <p class="opensans size16">${dataDetailapp.comentarios[0]}</p>		
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                    
                                <div class="line2"></div>
                                
                                <div class="hpadding20">	
                                    <div class="col-md-4 offset-0 center comentarios">
                                        <div class="padding20">
                                            <div class="bordertype5">
                                                <div class="circlewrap">
                                                    <img src="${dataDetailapp.avatar[1]}" class="circleimg" alt=""/>
                                                </div>                        
                                                <p>${dataDetailapp.pais[1]}</p>
                                                <img src="../images/check.png" alt=""/>
                                                <span class="green">Recomendado</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-8 offset-0 comentarios">
                                        <div class="padding20">
                                            <span class="opensans size18 dark">${dataDetailapp.autor[1]}</span><br/>
                                            <p  class="opensans size16">${dataDetailapp.comentarios[1]}</p>	
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                    
                                <div class="line2"></div>
                                    
                                <div class="hpadding20">	
                                    <div class="col-md-4 offset-0 center comentarios">
                                        <div class="padding20">
                                            <div class="bordertype5">
                                                <div class="circlewrap">
                                                    <img src="${dataDetailapp.avatar[2]}" class="circleimg" alt=""/>
                                                </div>
                                                <p>${dataDetailapp.pais[2]}</p>
                                                <img src="../images/check.png" alt=""/>
                                                <span class="green">Recomendado</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-8 offset-0 comentarios">
                                        <div class="padding20">
                                            <span class="opensans size18 dark">${dataDetailapp.autor[2]}</span><br/>
                                            <p class="opensans size16">${dataDetailapp.comentarios[2]}</p>	
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>							
                                </div>	
                                
                                <div class="line2"></div>
            
                                <div class="hpadding20">	
                                <div class="col-md-4 offset-0 center comentarios">
                                    <div class="padding20">
                                        <div class="bordertype5">
                                            <div class="circlewrap">
                                                <img src="${dataDetailapp.avatar[3]}" class="circleimg" alt=""/>                                                                        
                                            </div>                                
                                            <p>${dataDetailapp.pais[3]}</p>
                                            <img src="../images/check.png" alt=""/>
                                            <span class="green">Recomendado</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-md-8 offset-0 comentarios">
                                    <div class="padding20">
                                        <span class="opensans size18 dark">${dataDetailapp.autor[3]}</span><br/>
                                        <p class="opensans size16">${dataDetailapp.comentarios[3]}</p>	
                                    </div>
                                </div>
                                <div class="clearfix"></div>							
                            </div>	
                            
                            <div class="line2"></div>
                                        <div class="hpadding20">	
                                    <div class="col-md-4 offset-0 center comentarios">
                                        <div class="padding20">
                                            <div class="bordertype5">
                                                <div class="circlewrap">
                                                    <img src="${dataDetailapp.avatar[4]}" class="circleimg" alt=""/>
                                                </div>
                                                <p>${dataDetailapp.pais[4]}</p>
                                                <img src="../images/check.png" alt=""/>
                                                <span class="green">Recomendado</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-8 offset-0 comentarios">
                                        <div class="padding20">
                                            <span class="opensans size18 dark">${dataDetailapp.autor[4]}</span><br/>
                                            <p class="opensans size16">${dataDetailapp.comentarios[4]}</p>	
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>							
                                </div>	
                                
                                <div class="line2"></div>
                                <div class="hpadding20">	
                                <div class="col-md-4 offset-0 center comentarios">
                                    <div class="padding20">
                                        <div class="bordertype5">
                                            <div class="circlewrap">
                                                <img src="${dataDetailapp.avatar[5]}" class="circleimg" alt=""/>
                                            </div>
                                            <p>${dataDetailapp.pais[5]}</p>
                                            <img src="../images/check.png" alt=""/>
                                            <span class="green">Recomendado</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-md-8 offset-0 comentarios">
                                    <div class="padding20">
                                        <span class="opensans size18 dark">${dataDetailapp.autor[5]}</span><br/>                    
                                        <p class="opensans size16">${dataDetailapp.comentarios[5]}</p>	
                                    </div>
                                </div>
                                <div class="clearfix"></div>							
                            </div>	
                            
                            <div class="line2"></div>
                            <div class="hpadding20">	
                            <div class="col-md-4 offset-0 center comentarios">
                                <div class="padding20">
                                    <div class="bordertype5">
                                        <div class="circlewrap">
                                            <img src="${dataDetailapp.avatar[6]}" class="circleimg" alt=""/>
                                        </div>
                                        <p>${dataDetailapp.pais[6]}</p>
                                        <img src="../images/check.png" alt=""/>
                                        <span class="green">Recomendado</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-md-8 offset-0 comentarios">
                                <div class="padding20">
                                    <span class="opensans size18 dark">${dataDetailapp.autor[6]}</span><br/>            
                                    <p class="opensans size16">${dataDetailapp.comentarios[6]}</p>	
                                </div>
                            </div>
                            <div class="clearfix"></div>							
                        </div>	
                        
                        <div class="line2"></div>
                        <div class="hpadding20">	
                        <div class="col-md-4 offset-0 center comentarios">
                            <div class="padding20">
                                <div class="bordertype5">
                                    <div class="circlewrap">
                                        <img src="${dataDetailapp.avatar[7]}" class="circleimg" alt=""/>
                                    </div>
                                    <p>${dataDetailapp.pais[7]}</p>
                                    <img src="../images/check.png" alt=""/>
                                    <span class="green">Recomendado</span>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-md-8 offset-0 comentarios">
                            <div class="padding20">
                                <span class="opensans size18 dark">${dataDetailapp.autor[7]}</span><br/>
                                <p class="opensans size16">${dataDetailapp.comentarios[7]}</p>	
                            </div>
                        </div>
                        <div class="clearfix"></div>							
                    </div>	
            
                    <div class="line2"></div>
                    <div class="hpadding20">	
                    <div class="col-md-4 offset-0 center comentarios">
                        <div class="padding20">
                            <div class="bordertype5">
                                <div class="circlewrap">
                                    <img src="${dataDetailapp.avatar[8]}" class="circleimg" alt=""/>
                                </div>
                                <p>${dataDetailapp.pais[8]}</p>
                                <img src="../images/check.png" alt=""/>
                                <span class="green">Recomendado</span>
                            </div>
                            
=======
                        <div class="col-md-8 offset-0 comentarios">
                            <div class="padding20">
                                <span class="opensans size18 dark">${dataDetailapp.autor[2]}</span><br/>
                                <p class="opensans size16">${dataDetailapp.comentarios[2]}</p>	
                            </div>
                        </div>
                        <div class="clearfix"></div>							
                    </div>	
                    
                    <div class="line2"></div>

                    <div class="hpadding20">	
                    <div class="col-md-4 offset-0 center comentarios">
                        <div class="padding20">
                            <div class="bordertype5">
                                <div class="circlewrap">
                                    <img src="${dataDetailapp.avatar[3]}" class="circleimg" alt=""/>                                                                        
                                </div>                                
                                <p>${dataDetailapp.pais[3]}</p>
                                <img src="../images/check.png" alt=""/>
                                <span class="green">Recomendado</span>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-8 offset-0 comentarios">
                        <div class="padding20">
                            <span class="opensans size18 dark">${dataDetailapp.autor[3]}</span><br/>
                            <p class="opensans size16">${dataDetailapp.comentarios[3]}</p>	
                        </div>
                    </div>
                    <div class="clearfix"></div>							
                </div>	
                
                <div class="line2"></div>
                            <div class="hpadding20">	
                        <div class="col-md-4 offset-0 center comentarios">
                            <div class="padding20">
                                <div class="bordertype5">
                                    <div class="circlewrap">
                                        <img src="${dataDetailapp.avatar[4]}" class="circleimg" alt=""/>
                                    </div>
                                    <p>${dataDetailapp.pais[4]}</p>
                                    <img src="../images/check.png" alt=""/>
                                    <span class="green">Recomendado</span>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-md-8 offset-0 comentarios">
                            <div class="padding20">
                                <span class="opensans size18 dark">${dataDetailapp.autor[4]}</span><br/>
                                <p class="opensans size16">${dataDetailapp.comentarios[4]}</p>	
                            </div>
                        </div>
                        <div class="clearfix"></div>							
                    </div>	
                    
                    <div class="line2"></div>
                    <div class="hpadding20">	
                    <div class="col-md-4 offset-0 center comentarios">
                        <div class="padding20">
                            <div class="bordertype5">
                                <div class="circlewrap">
                                    <img src="${dataDetailapp.avatar[5]}" class="circleimg" alt=""/>
                                </div>
                                <p>${dataDetailapp.pais[5]}</p>
                                <img src="../images/check.png" alt=""/>
                                <span class="green">Recomendado</span>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-8 offset-0 comentarios">
                        <div class="padding20">
                            <span class="opensans size18 dark">${dataDetailapp.autor[5]}</span><br/>                    
                            <p class="opensans size16">${dataDetailapp.comentarios[5]}</p>	
                        </div>
                    </div>
                    <div class="clearfix"></div>							
                </div>	
                
                <div class="line2"></div>
                <div class="hpadding20">	
                <div class="col-md-4 offset-0 center comentarios">
                    <div class="padding20">
                        <div class="bordertype5">
                            <div class="circlewrap">
                                <img src="${dataDetailapp.avatar[6]}" class="circleimg" alt=""/>
                            </div>
                            <p>${dataDetailapp.pais[6]}</p>
                            <img src="../images/check.png" alt=""/>
                            <span class="green">Recomendado</span>
>>>>>>> 80a03fd404fe05a322731407f636652f1ba2103e
                        </div>
                    </div>
<<<<<<< HEAD
                    <div class="col-md-8 offset-0 comentarios">
                        <div class="padding20">
                            <span class="opensans size18 dark">${dataDetailapp.autor[8]}</span><br/>
                            <p class="opensans size16">${dataDetailapp.comentarios[8]}</p>	
                        </div>
                    </div>
                    <div class="clearfix"></div>							
                    </div>	
            
                    <div class="line2"></div>
                    <div class="hpadding20">	
                    <div class="col-md-4 offset-0 center comentarios">
                        <div class="padding20">
                            <div class="bordertype5">
                                <div class="circlewrap">
                                    <img src="${dataDetailapp.avatar[9]}" class="circleimg" alt=""/>
                                </div>
                                <p>${dataDetailapp.pais[9]}</p>
                                <img src="../images/check.png" alt=""/>
                                <span class="green">Recomendado</span>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-8 offset-0 comentarios">
                        <div class="padding20">
                            <span class="opensans size18 dark">${dataDetailapp.autor[9]}</span><br/>
                            <p class="opensans size16">${dataDetailapp.comentarios[9]}</p>
                        </div>
                    </div>
                    <div class="clearfix"></div>							
                    </div>	
            
            
                                <div class="line2"></div>
            
            
                            </div>								
                        </div>
                    </div>
            
                    <div class="col-md-4" >
                        
            
                        <div class="pagecontainer2 mt20 needassistancebox">
                            <div class="cpadding1">
                                <span class="icon-help"></span>
                                <h3 class="opensans">Necesitas ayuda?</h3>
                                <p class="size14 grey">Correo</p>
                                <p class="opensans size23 lblue xslim">Info@reserveahora.com</p>
                                <p class="size14 grey">Telefono</p>
                                <p class="opensans size23 lblue xslim">+57 (4) 540 77 09</p>
                            </div>
                        </div><br/>        			
                    </div>
                    </div>
            
            
            
                    </div>
                    <!-- END OF CONTENT -->
            
            `;
            detail.insertAdjacentHTML('beforeEnd', dataDetails);
        }
    }
}

if (document.getElementById("detailsApp")) {
    drawHotelDetail();
}


// preloader
$(window).on('load', function () {
    setTimeout(function () {
  $(".loader-page").css({visibility:"hidden",opacity:"0"})
}, 2000);
   
});
=======
                </div>
                <div class="col-md-8 offset-0 comentarios">
                    <div class="padding20">
                        <span class="opensans size18 dark">${dataDetailapp.autor[6]}</span><br/>            
                        <p class="opensans size16">${dataDetailapp.comentarios[6]}</p>	
                    </div>
                </div>
                <div class="clearfix"></div>							
            </div>	
            
            <div class="line2"></div>
            <div class="hpadding20">	
            <div class="col-md-4 offset-0 center comentarios">
                <div class="padding20">
                    <div class="bordertype5">
                        <div class="circlewrap">
                            <img src="${dataDetailapp.avatar[7]}" class="circleimg" alt=""/>
                        </div>
                        <p>${dataDetailapp.pais[7]}</p>
                        <img src="../images/check.png" alt=""/>
                        <span class="green">Recomendado</span>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-8 offset-0 comentarios">
                <div class="padding20">
                    <span class="opensans size18 dark">${dataDetailapp.autor[7]}</span><br/>
                    <p class="opensans size16">${dataDetailapp.comentarios[7]}</p>	
                </div>
            </div>
            <div class="clearfix"></div>							
        </div>	

        <div class="line2"></div>
        <div class="hpadding20">	
        <div class="col-md-4 offset-0 center comentarios">
            <div class="padding20">
                <div class="bordertype5">
                    <div class="circlewrap">
                        <img src="${dataDetailapp.avatar[8]}" class="circleimg" alt=""/>
                    </div>
                    <p>${dataDetailapp.pais[8]}</p>
                    <img src="../images/check.png" alt=""/>
                    <span class="green">Recomendado</span>
                </div>
                
            </div>
        </div>
        <div class="col-md-8 offset-0 comentarios">
            <div class="padding20">
                <span class="opensans size18 dark">${dataDetailapp.autor[8]}</span><br/>
                <p class="opensans size16">${dataDetailapp.comentarios[8]}</p>	
            </div>
        </div>
        <div class="clearfix"></div>							
        </div>	

        <div class="line2"></div>
        <div class="hpadding20">	
        <div class="col-md-4 offset-0 center comentarios">
            <div class="padding20">
                <div class="bordertype5">
                    <div class="circlewrap">
                        <img src="${dataDetailapp.avatar[9]}" class="circleimg" alt=""/>
                    </div>
                    <p>${dataDetailapp.pais[9]}</p>
                    <img src="../images/check.png" alt=""/>
                    <span class="green">Recomendado</span>
                </div>
                
            </div>
        </div>
        <div class="col-md-8 offset-0 comentarios">
            <div class="padding20">
                <span class="opensans size18 dark">${dataDetailapp.autor[9]}</span><br/>
                <p class="opensans size16">${dataDetailapp.comentarios[9]}</p>
            </div>
        </div>
        <div class="clearfix"></div>							
        </div>	


                    <div class="line2"></div>


                </div>								
            </div>
        </div>

        <div class="col-md-4" >
            

            <div class="pagecontainer2 mt20 needassistancebox">
                <div class="cpadding1">
                    <span class="icon-help"></span>
                    <h3 class="opensans">Necesitas ayuda?</h3>
                    <p class="size14 grey">Correo</p>
                    <p class="opensans size23 lblue xslim">Info@reserveahora.com</p>
                    <p class="size14 grey">Telefono</p>
                    <p class="opensans size23 lblue xslim">+57 (4) 540 77 09</p>
                </div>
            </div><br/>        			
        </div>
        </div>



        </div>
        <!-- END OF CONTENT -->

`;
            detail.insertAdjacentHTML('beforeEnd', dataDetails);
        }
    }
}

if (document.getElementById("detailsApp")) {
    drawHotelDetail();
}
>>>>>>> 80a03fd404fe05a322731407f636652f1ba2103e
