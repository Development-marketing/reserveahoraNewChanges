const sessionSto = () =>{
    let detailApp = JSON.parse(sessionStorage.getItem('sessionDetail'));
    if(detailApp){console.log(detailApp);}
    let detail = document.querySelector('.detailsApp');
    if(detail){
        for(dataDetailapp of detailApp){
            let tipo_habitacion = dataDetailapp.Tipo_habitacion;
                for(let i = 0; i < tipo_habitacion.length; i++){
                    let detail = document.querySelector('.detailsApp');
                    const value = document.createElement('p');
                    value.textContent = tipo_habitacion[i];
                    document.body.appendChild(value);
            }
            let servicioPorTipoHabitacion = dataDetailapp.servicios_por_tipo_habitacion;
                for(let i =0; i < servicioPorTipoHabitacion.length; i++){
                    let detail = document.querySelector('.detailsApp');
                    const value = document.createElement('p');
                    value.textContent = servicioPorTipoHabitacion[i];
                    document.body.appendChild(value);
                }
                let precioApp = dataDetailapp.precio;
                for(i =0; i< precioApp.length; i ++){
                    let detail = document.querySelector('.detailsApp');
                    const value = document.createElement('p');
                    value.textContent = precioApp[i];
                    document.body.appendChild(value);
                }
                let ocupacionApp = dataDetailapp.Ocupacion;
                for(i =0; i < ocupacionApp.length; i++){
                    let detail = document.querySelector('.detailsApp');
                    const value = document.createElement('p');
                    value.textContent = ocupacionApp[i];
                    document.body.appendChild(value);
                }
                let opcionesApp = dataDetailapp.opciones;
                for(i =0; i < opcionesApp.length; i++){
                    let detail = document.querySelector('.detailsApp');
                    const value = document.createElement('p');
                    value.textContent = opcionesApp[i];
                    document.body.appendChild(value);
                }
                let  disponibilidadApp = dataDetailapp.disponibilidad;
                for(i =0; i < disponibilidadApp.length; i++){
                    let detail = document.querySelector('.detailsApp');
                    const value = document.createElement('p');
                    value.textContent = disponibilidadApp[i];
                    document.body.appendChild(value);
                }
            dataDetails = `
            <div class="container">
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
                        <span class="opensans size30 bold grey2">4.5</span>/5<br/>
                        guest ratings
                    </div>
                    
                    <div class="col-md-6 bordertype3">
                        <img src="../images/user-rating-4.png" alt=""/><br/>
                        18 reviews
                    </div>
                    <div class="col-md-6 bordertype3">
                        <a href="#" class="grey">+Add review</a>
                    </div>
                    <div class="clearfix"></div><br/>
                    
                    <div class="hpadding20">
                        <a href="#" class="add2fav margtop5">Add to favourite</a>
                        <a href="#" class="booknow margtop20 btnmarg">Book now</a>
                    </div>
                </div>
                <!-- END OF RIGHT INFO -->
    
            </div>
            <!-- END OF container-->
            
            <div class="container mt25 offset-0">
    
                <div class="col-md-8 pagecontainer2 offset-0">
                    <div class="cstyle10"></div>
            
                    <ul class="nav nav-tabs" id="myTab">
                        <li onclick="mySelectUpdate()" class=""><a data-toggle="tab" href="#summary"><span class="summary"></span><span class="hidetext">Summary</span>&nbsp;</a></li>
                        <li onclick="mySelectUpdate()" class="active"><a data-toggle="tab" href="#roomrates"><span class="rates"></span><span class="hidetext">Room rates</span>&nbsp;</a></li>
                        <li onclick="mySelectUpdate()" class=""><a data-toggle="tab" href="#preferences"><span class="preferences"></span><span class="hidetext">Preferences</span>&nbsp;</a></li>
                        <li onclick="loadScript()" class=""><a data-toggle="tab" href="#maps"><span class="maps"></span><span class="hidetext">Maps</span>&nbsp;</a></li>
                        <li onclick="mySelectUpdate(); trigerJslider(); trigerJslider2(); trigerJslider3(); trigerJslider4(); trigerJslider5(); trigerJslider6();" class=""><a data-toggle="tab" href="#reviews"><span class="reviews"></span><span class="hidetext">Reviews</span>&nbsp;</a></li>
                        <li onclick="mySelectUpdate()" class=""><a data-toggle="tab" href="#thingstodo"><span class="thingstodo"></span><span class="hidetext">Things to do</span>&nbsp;</a></li>
    
                    </ul>			
                    <div class="tab-content4" >
                        <!-- TAB 1 -->				
                        <div id="summary" class="tab-pane fade ">
                            <p class="hpadding20">
                            ${dataDetailapp.descripcion}
                            </p>
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
                            
                            <!-- Collapse 2 -->	
                            <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse2">
                              2 restaurants, a bar/lounge <span class="collapsearrow"></span>
                            </button>
                            
                            <div id="collapse2" class="collapse in">
                                <div class="hpadding20">
                                    Situated near the sea, this hotel is close to Centre de Arte Contemporaneo, Malaga Cathedral, and Malaga Amphitheatre. Also nearby are Alcazaba and Picasso's Birthplace.
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <!-- End of collapse 2 -->	
                            
                            <div class="line4"></div>						
                            
                            <!-- Collapse 3 -->	
                            <button type="button" class="collapsebtn2 collapsed" data-toggle="collapse" data-target="#collapse3">
                              Complimentary Wi-Fi <span class="collapsearrow"></span>
                            </button>
                            
                            <div id="collapse3" class="collapse">
                                <div class="hpadding20">
                                    Yes
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <!-- End of collapse 3 -->	
                            
                            <div class="line4"></div>							
                            
                            <!-- Collapse 4 -->	
                            <button type="button" class="collapsebtn2 collapsed" data-toggle="collapse" data-target="#collapse4">
                              Internet <span class="collapsearrow"></span>
                            </button>
                            
                            <div id="collapse4" class="collapse">
                                <div class="hpadding20">
                                    Yes
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <!-- End of collapse 4 -->		
    
                            <div class="line4"></div>								
    
                            <!-- Collapse 5 -->	
                            <button type="button" class="collapsebtn2 collapsed" data-toggle="collapse" data-target="#collapse5">
                              Parking <span class="collapsearrow"></span>
                            </button>
                            
                            <div id="collapse5" class="collapse">
                                <div class="hpadding20">
                                    Yes
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <!-- End of collapse 5 -->				
    
                            <div class="line4"></div>								
    
							
                    
                        </div>
                        <!-- TAB 2 -->
                        <div id="roomrates" class="tab-pane fade active in">
                            <div class="hpadding20">
                                <p class="dark">Your travel rates</p>
                                <div class="col-md-4 offset-0">
                                    <div class="w50percent">
                                        <div class="wh90percent textleft">
                                            <span class="opensans size13"><b>Check in</b></span>
                                            <input type="text" class="form-control mySelectCalendar" id="datepicker" placeholder="mm/dd/yyyy"/>
                                        </div>
                                    </div>
    
                                    <div class="w50percentlast">
                                        <div class="wh90percent textleft right">
                                            <span class="opensans size13"><b>Check out</b></span>
                                            <input type="text" class="form-control mySelectCalendar" id="datepicker2" placeholder="mm/dd/yyyy"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8 ">
                                        <div class="room1" >
                                            <div class="w50percent">
                                                <div class="wh90percent textleft">
                                                    <span class="opensans size13"><b>ROOM 1</b></span><br/>
                                                    
                                                    <div class="addroom1 block"><a onclick="addroom2()" class="grey cpointer">+ Add room</a></div>
                                                </div>
                                            </div>
    
                                            <div class="w50percentlast">	
                                                <div class="wh90percent textleft right ohidden">
                                                    <div class="w50percent">
                                                        <div class="wh90percent textleft left">
                                                            <span class="opensans size13"><b>Adult</b></span>
                                                            <select class="form-control mySelectBoxClass">
                                                              <option>1</option>
                                                              <option selected>2</option>
                                                              <option>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>							
                                                    <div class="w50percentlast">
                                                        <div class="wh90percent textleft right ohidden">
                                                        <span class="opensans size13"><b>Child</b></span>
                                                            <select class="form-control mySelectBoxClass">
                                                              <option>0</option>
                                                              <option selected>1</option>
                                                              <option>2</option>
                                                              <option>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="room2 none">
                                            <div class="clearfix"></div><div class="line1"></div>
                                            <div class="w50percent">
                                                <div class="wh90percent textleft">
                                                    <span class="opensans size13"><b>ROOM 2</b></span><br/>
                                                    <div class="addroom2 block grey"><a onclick="addroom3()" class="grey cpointer">+ Add room</a> | <a onclick="removeroom2()" class="orange cpointer"><img src="../images/delete.png" alt="delete"/></a></div>
                                                </div>
                                            </div>
    
                                            <div class="w50percentlast">	
                                                <div class="wh90percent textleft right">
                                                    <div class="w50percent">
                                                        <div class="wh90percent textleft left">
                                                            <span class="opensans size13"><b>Adult</b></span>
                                                            <select class="form-control mySelectBoxClass">
                                                              <option>1</option>
                                                              <option>2</option>
                                                              <option selected>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>							
                                                    <div class="w50percentlast">
                                                        <div class="wh90percent textleft right">
                                                        <span class="opensans size13"><b>Child</b></span>
                                                            <select class="form-control mySelectBoxClass">
                                                              <option selected>0</option>
                                                              <option>1</option>
                                                              <option>2</option>
                                                              <option>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>		
    
                                        <div class="room3 none">
                                            <div class="clearfix"></div><div class="line1"></div>
                                            <div class="w50percent">
                                                <div class="wh90percent textleft">
                                                    <span class="opensans size13"><b>ROOM 3</b></span><br/>
                                                    <div class="addroom3 block grey"><a onclick="addroom3()" class="grey cpointer">+ Add room</a> | <a onclick="removeroom3()" class="orange cpointer"><img src="../images/delete.png" alt="delete"/></a></div>
                                                </div>
                                            </div>
    
                                            <div class="w50percentlast">	
                                                <div class="wh90percent textleft right">
                                                    <div class="w50percent">
                                                        <div class="wh90percent textleft left">
                                                            <span class="opensans size13"><b>Adult</b></span>
                                                            <select class="form-control mySelectBoxClass">
                                                              <option selected>1</option>
                                                              <option>2</option>
                                                              <option>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>							
                                                    <div class="w50percentlast">
                                                        <div class="wh90percent textleft right">
                                                        <span class="opensans size13"><b>Child</b></span>
                                                            <select class="form-control mySelectBoxClass">
                                                              <option selected>0</option>
                                                              <option>1</option>
                                                              <option>2</option>
                                                              <option>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4 center offset-0 left">
                                        <button class="updatebtn caps center margtop20">Update</button>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <br/>
                            
                            <p class="hpadding20 dark">Room type</p>
                            
                            <div class="line2"></div>
                            
                            <div class="padding20">
                                <div class="col-md-4 offset-0">
                                    <a href="#"><img src="${dataDetailapp.imagenes[0]}" alt="" class="fwimg"/></a>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8 mediafix1">
                                        <h4 class="opensans dark bold margtop1 lh1">${dataDetailapp.tipo_habitacion}</h4>
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
                                        <ul class="checklist2 margtop10">
                                            <li>${dataDetailapp.servicios_por_tipo_habitacion[0]}</li>
                                        </ul>									
                                    </div>
                                    <div class="col-md-4 center bordertype4">
                                        <span class="opensans green size24">${dataDetailapp.precio[0]}</span><br/>
                                        <span class="opensans lightgrey size12">${dataDetailapp.opciones[0]}</span><br/><br/>
                                        <span class="lred bold">
                                            <select>
                                                <option>${dataDetailapp.disponibilidad[0]}</option>
                                            </select>
                                        </span><br/><br/>
                                        <button class="bookbtn mt1">Book</button>	
                                    </div>										
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="line2"></div>		
    
                            <div class="padding20">
                                <div class="col-md-4 offset-0">
                                    <a href="#"><img src="../images/items2/item2.jpg" alt="" class="fwimg"/></a>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8">
                                        <h4 class="opensans dark bold margtop1 lh1">Double Room with Town View</h4>
                                        Max Occupancy: 3 adults
                                        <ul class="hotelpreferences margtop10">
                                            <li class="icohp-hairdryer"></li>
                                            <li class="icohp-garden"></li>
                                            <li class="icohp-grill"></li>
                                            <li class="icohp-kitchen"></li>
                                            <li class="icohp-bar"></li>
                                            <li class="icohp-living"></li>
                                            <li class="icohp-tv"></li>
                                        </ul>
                                        <div class="clearfix"></div>
                                        <ul class="checklist2 margtop10">
                                            <li>FREE Cancellation</li>
                                            <li>Pay at hotel or pay today </li>
                                        </ul>									
                                    </div>
                                    <div class="col-md-4 center bordertype4">
                                        <span class="opensans green size24">$105.78</span><br/>
                                        <span class="opensans lightgrey size12">avg/night</span><br/><br/>
                                        <span class="">9 available</span><br/><br/>
                                        <button class="bookbtn mt1">Book</button>	
                                    </div>										
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="line2"></div>	
    
                            <div class="padding20">
                                <div class="col-md-4 offset-0">
                                    <a href="#"><img src="../images/items2/item3.jpg" alt="" class="fwimg"/></a>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8">
                                        <h4 class="opensans dark bold margtop1 lh1">Family Suite</h4>
                                        Max Occupancy: 4 adults
                                        <ul class="hotelpreferences margtop10">
                                            <li class="icohp-fridge"></li>
                                            <li class="icohp-microwave"></li>
                                            <li class="icohp-washing"></li>
                                            <li class="icohp-roomservice"></li>
                                            <li class="icohp-safe"></li>
                                            <li class="icohp-playground"></li>
                                            <li class="icohp-conferenceroom"></li>
                                        </ul>
                                        <div class="clearfix"></div>
                                        <ul class="checklist2 margtop10">
                                            <li>FREE Cancellation</li>
                                            <li>Pay at hotel or pay today </li>
                                        </ul>									
                                    </div>
                                    <div class="col-md-4 center bordertype4">
                                        <span class="opensans green size24">$186.18</span><br/>
                                        <span class="opensans lightgrey size12">avg/night</span><br/><br/>
                                        <span class="red bold">booked</span><br/><br/>
                                        <button class="bookbtn mt1 cunvailable">Book</button>	
                                    </div>										
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="line2"></div>	
    
                            <div class="padding20">
                                <div class="col-md-4 offset-0">
                                    <a href="#"><img src="../images/items2/item4.jpg" alt="" class="fwimg"/></a>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8">
                                        <h4 class="opensans dark bold margtop1 lh1">Superior, Sea View</h4>
                                        Max Occupancy: 3 adults
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
                                        <ul class="checklist2 margtop10">
                                            <li>FREE Cancellation</li>
                                            <li>Pay at hotel or pay today </li>
                                        </ul>									
                                    </div>
                                    <div class="col-md-4 center bordertype4">
                                        <span class="opensans green size24">$211.57</span><br/>
                                        <span class="opensans lightgrey size12">avg/night</span><br/><br/>
                                        <span class="">12 available</span><br/><br/>
                                        <button class="bookbtn mt1">Book</button>	
                                    </div>										
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="line2"></div>							
                            
                        </div>
                        
                        <!-- TAB 3 -->					
                        <div id="preferences" class="tab-pane fade">
                            <p class="hpadding20">
                            The hotel offers a snack bar/deli. A bar/lounge is on site where guests can unwind with a drink. Guests can enjoy a complimentary breakfast. An Internet point is located on site and high-speed wireless Internet access is complimentary.
                            </p>
                            
                            <div class="line4"></div>
                            
                            <!-- Collapse 7 -->	
                            <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse7">
                            ${dataDetailapp.servicios[0]} <span class="collapsearrow"></span>
                            </button>
                            
                            <div id="collapse7" class="collapse in">
                                <div class="hpadding20">
                                    
                                    <div class="col-md-4 offset-0">
                                        <ul class="hotelpreferences2 left">
                                            <li class="icohp-internet"></li>
                                            <li class="icohp-air"></li>
                                            <li class="icohp-pool"></li>
                                            <li class="icohp-childcare"></li>
                                            <li class="icohp-fitness"></li>
                                            <li class="icohp-breakfast"></li>
                                            <li class="icohp-parking"></li>
                                            <li class="icohp-pets"></li>
                                            <li class="icohp-spa"></li>
                                            <li class="icohp-hairdryer"></li>
                                        </ul>
                                        <ul class="hpref-text left">
                                            <li>${dataDetailapp.servicios[1]}</li>
                                            <li>${dataDetailapp.servicios[2]}</li>
                                            <li>${dataDetailapp.servicios[3]}</li>
                                            <li>${dataDetailapp.servicios[4]}</li>
                                            <li>${dataDetailapp.servicios[5]}</li>
                                            <li>${dataDetailapp.servicios[6]}</li>
                                        </ul>
                                    </div>
    
                            
                                    <div class="col-md-4 offset-0">	
                                        <ul class="hotelpreferences2 left">
                                            <li class="icohp-garden"></li>
                                            <li class="icohp-grill"></li>
                                            <li class="icohp-kitchen"></li>
                                            <li class="icohp-bar"></li>
                                            <li class="icohp-living"></li>
                                            <li class="icohp-tv"></li>
                                            <li class="icohp-fridge"></li>
                                            <li class="icohp-microwave"></li>
                                            <li class="icohp-washing"></li>
                                            <li class="icohp-roomservice"></li>
                                        </ul>
                                        <ul class="hpref-text left">
                                            <li>Courtyard garden</li>
                                            <li>Grill / Barbecue</li>
                                            <li>Kitchen</li>
                                            <li>Bar</li>
                                            <li>Living</li>
                                            <li>TV</li>
                                            <li>Fridge</li>
                                            <li>Microwave</li>
                                            <li>Washing maschine</li>
                                            <li>Room service</li>
                                        </ul>		
                                    </div>		
                                    <div class="col-md-4 offset-0">	
                                        <ul class="hotelpreferences2 left">
                                            <li class="icohp-safe"></li>
                                            <li class="icohp-playground"></li>
                                            <li class="icohp-conferenceroom"></li>										
                                        </ul>
                                        <ul class="hpref-text left">
                                            <li>Reception Safe</li>
                                            <li>Playground</li>
                                            <li>Conference room</li>
                                        </ul>										
                                    </div>									
                                    <div class="clearfix"></div>
                                </div>
                                
                            </div>
                            <!-- End of collapse 7 -->		
                            <br/>
                            <div class="line4"></div>							
                            
                            <!-- Collapse 8 -->	
                            <button type="button" class="collapsebtn2" data-toggle="collapse" data-target="#collapse8">
                              Room facilities <span class="collapsearrow"></span>
                            </button>
                            
                            <div id="collapse8" class="collapse in">
                                <div class="hpadding20">
                                    <div class="col-md-4">
                                        <ul class="checklist">
                                            <li>${dataDetailapp.servicios_por_tipo_habitacion[0]}</li>
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
                            <div class="hpadding20">
                                <div class="col-md-4 offset-0">
                                    <span class="opensans dark size60 slim lh3 ">4.5/5</span><br/>
                                    <img src="../images/user-rating-4.png" alt=""/>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="progress progress-striped">
                                      <div class="progress-bar progress-bar-success wh75percent" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <span class="sr-only">4.5 out of 5</span>
                                      </div>
                                    </div>		
                                    <div class="progress progress-striped">
                                      <div class="progress-bar progress-bar-success wh100percent" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <span class="sr-only">100% of guests recommend</span>
                                      </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    Ratings based on 5 Verified Reviews
                                </div>			
                                <div class="clearfix"></div>
                                <br/>
                                <span class="opensans dark size16 bold">Average ratings</span>
                            </div>
                            
                            <div class="line4"></div>
                            
                            <div class="hpadding20">
                                <div class="col-md-4 offset-0">
                                    <div class="scircle left">4.4</div>
                                    <div class="sctext left margtop15">Cleanliness</div>
                                    <div class="clearfix"></div>
                                    <div class="scircle left">4.0</div>
                                    <div class="sctext left margtop15">Service & staff</div>
                                    <div class="clearfix"></div>								
                                </div>
                                <div class="col-md-4 offset-0">
                                    <div class="scircle left">3.8</div>
                                    <div class="sctext left margtop15">Room comfort</div>
                                    <div class="clearfix"></div>
                                    <div class="scircle left">4.4</div>
                                    <div class="sctext left margtop15">Sleep Quality</div>			
                                    <div class="clearfix"></div>										
                                </div>
                                <div class="col-md-4 offset-0">
                                    <div class="scircle left">4.2</div>
                                    <div class="sctext left margtop15">Location</div>
                                    <div class="clearfix"></div>
                                    <div class="scircle left">4.4</div>
                                    <div class="sctext left margtop15">Value for Price</div>		
                                    <div class="clearfix"></div>										
                                </div>		
                                <div class="clearfix"></div>
                                
                                <br/>
                                <span class="opensans dark size16 bold">Reviews</span>
                            </div>
                            
                            <div class="line2"></div>
                            
                            <div class="hpadding20">							
                                <div class="col-md-4 offset-0 center">
                                    <div class="padding20">
                                        <div class="bordertype5">
                                            <div class="circlewrap">
                                                <img src="../images/user-avatar.jpg" class="circleimg" alt=""/>
                                                <span>4.5</span>
                                            </div>
                                            <span class="dark">by Sena</span><br/>
                                            from London, UK<br/>
                                            <img src="../images/check.png" alt=""/><br/>
                                            <span class="green">Recommended<br/>for Everyone</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="padding20">
                                        <span class="opensans size16 dark">${dataDetailapp.autor[0]}</span><br/>
                                        <span class="opensans size13 lgrey">Posted Jun 02, 2013</span><br/>
                                        <p>${dataDetailapp.comentarios[0]}</p>	
                                        <ul class="circle-list">
                                            <li>4.5</li>
                                            <li>3.8</li>
                                            <li>4.2</li>
                                            <li>5.0</li>
                                            <li>4.6</li>
                                            <li>4.8</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                                
                            <div class="line2"></div>
                            
                            <div class="hpadding20">	
                                <div class="col-md-4 offset-0 center">
                                    <div class="padding20">
                                        <div class="bordertype5">
                                            <div class="circlewrap">
                                                <img src="../images/user-avatar.jpg" class="circleimg" alt=""/>
                                                <span>4.5</span>
                                            </div>
                                            <span class="dark">by Sena</span><br/>
                                            from London, UK<br/>
                                            <img src="../images/check.png" alt=""/><br/>
                                            <span class="green">Recommended<br/>for Everyone</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="padding20">
                                        <span class="opensans size16 dark">Great experience</span><br/>
                                        <span class="opensans size13 lgrey">Posted Jun 02, 2013</span><br/>
                                        <p>The view from our balcony in room # 409, was terrific. It was centrally located to everything on and around the port area. Wonderful service and everything was very clean. The breakfast was below average, although not bad. If back in Zante Town we would stay there again.</p>	
                                        <ul class="circle-list">
                                            <li>4.5</li>
                                            <li>3.8</li>
                                            <li>4.2</li>
                                            <li>5.0</li>
                                            <li>4.6</li>
                                            <li>4.8</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                                
                            <div class="line2"></div>
                                
                            <div class="hpadding20">	
                                <div class="col-md-4 offset-0 center">
                                    <div class="padding20">
                                        <div class="bordertype5">
                                            <div class="circlewrap">
                                                <img src="../images/user-avatar.jpg" class="circleimg" alt=""/>
                                                <span>4.5</span>
                                            </div>
                                            <span class="dark">by Sena</span><br/>
                                            from London, UK<br/>
                                            <img src="../images/check.png" alt=""/><br/>
                                            <span class="green">Recommended<br/>for Everyone</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="padding20">
                                        <span class="opensans size16 dark">Great experience</span><br/>
                                        <span class="opensans size13 lgrey">Posted Jun 02, 2013</span><br/>
                                        <p>It is close to everything but if you go in the lower season the pool won't be ready even though the temperature was quiet high already.</p>	
                                        <ul class="circle-list">
                                            <li>4.5</li>
                                            <li>3.8</li>
                                            <li>4.2</li>
                                            <li>5.0</li>
                                            <li>4.6</li>
                                            <li>4.8</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="clearfix"></div>							
                            </div>	
                            
                            <div class="line2"></div>
                            <br/>
                            <br/>
                            <div class="hpadding20">
                                <span class="opensans dark size16 bold">Reviews</span>
                            </div>
                            
                            <div class="line2"></div>
    
                            <div class="wh33percent left center">
                                <ul class="jslidetext">
                                    <li>Cleanliness</li>
                                    <li>Room comfort</li>
                                    <li>Location</li>
                                    <li>Service & staff</li>
                                    <li>Sleep quality</li>
                                    <li>Value for Price</li>
                                </ul>
                                
                                <ul class="jslidetext2">
                                    <li>Username</li>
                                    <li>Evaluation</li>
                                    <li>Title</li>
                                    <li>Comment</li>
                                </ul>
                            </div>
                            <div class="wh66percent right offset-0">
                                <script>
                                    //This is a fix for when the slider is used in a hidden div
                                    function testTriger(){
                                        setTimeout(function (){
                                            $(".cstyle01").resize();
                                        }, 500);	
                                    }
                                </script>
                                <div class="padding20 relative wh70percent">
                                    <div class="layout-slider wh100percent">
                                    <span class="cstyle01"><input id="Slider1" type="slider" name="price" value="0;4.2" /></span>
                                    </div>
                                    <script type="text/javascript" >
                                    function trigerJslider(){
                                      jQuery("#Slider1").slider({ from: 0, to: 5, step: 0.1, smooth: true, round: 1, dimension: "", skin: "round" });
                                      testTriger();
                                      }
                                    </script>
                                    
                                    
                                    
                                    <div class="layout-slider margtop10 wh100percent">
                                    <span class="cstyle01"><input id="Slider2" type="slider" name="price" value="0;5.0" /></span>
                                    </div>
                                    <script type="text/javascript" >
                                    function trigerJslider2(){
                                      jQuery("#Slider2").slider({ from: 0, to: 5, step: 0.1, smooth: true, round: 1, dimension: "", skin: "round" });
                                      }
                                    </script>
                                    
                                    <div class="layout-slider margtop10 wh100percent">
                                    <span class="cstyle01"><input id="Slider3" type="slider" name="price" value="0;2.5" /></span>
                                    </div>
                                    <script type="text/javascript" >
                                    function trigerJslider3(){
                                      jQuery("#Slider3").slider({ from: 0, to: 5, step: 0.1, smooth: true, round: 1, dimension: "", skin: "round" });
                                      }
                                    </script>
    
                                    <div class="layout-slider margtop10 wh100percent">
                                    <span class="cstyle01"><input id="Slider4" type="slider" name="price" value="0;3.8" /></span>
                                    </div>
                                    <script type="text/javascript" >
                                    function trigerJslider4(){
                                      jQuery("#Slider4").slider({ from: 0, to: 5, step: 0.1, smooth: true, round: 1, dimension: "", skin: "round" });
                                      }
                                    </script>
                                    
                                    <div class="layout-slider margtop10 wh100percent">
                                    <span class="cstyle01"><input id="Slider5" type="slider" name="price" value="0;4.4" /></span>
                                    </div>
                                    <script type="text/javascript" >
                                    function trigerJslider5(){
                                      jQuery("#Slider5").slider({ from: 0, to: 5, step: 0.1, smooth: true, round: 1, dimension: "", skin: "round" });
                                      }
                                    </script>
                                    
                                    <div class="layout-slider margtop10 wh100percent">
                                    <span class="cstyle01"><input id="Slider6" type="slider" name="price" value="0;4.0" /></span>
                                    </div>
                                    <script type="text/javascript" >
                                    function trigerJslider6(){
                                      jQuery("#Slider6").slider({ from: 0, to: 5, step: 0.1, smooth: true, round: 1, dimension: "", skin: "round" });
                                      }
                                    </script>
                                    
                                    <input type="text" class="form-control margtop10" placeholder="">
                                    <select class="form-control mySelectBoxClass margtop10">
                                      <option selected>Wonderful!</option>
                                      <option>Nice</option>
                                      <option>Neutral</option>
                                      <option>Don't recommend</option>
                                    </select>
                                    <input type="text" class="form-control margtop10" placeholder="">
                                    
                                    <textarea class="form-control margtop10" rows="3"></textarea>
                                    
                                    <div class="clearfix"></div>
                                    <button type="submit" class="btn-search4 margtop20">Submit</button>	
    
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    
                                </div>							
                            </div>
                            <div class="clearfix"></div>
    
                        </div>		
                        
                        <!-- TAB 6 -->					
                        <div id="thingstodo" class="tab-pane fade">
                        
                            <p class="hpadding20 opensans size16 dark bold">Attractions travelers recommend</p>
                            
                            <div class="line2"></div>
                            
                            <div class="padding20">
                                <div class="col-md-4 offset-0">
                                    <a href="#"><img src="../images/items2/item5.jpg" alt="" class="fwimg"/></a>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8 mediafix1">
                                        <span class="opensans dark size16 margtop1 margtop-5">Porto Limnionas Beach</span><br/>
                                            <span class="lblue">“Just Great!!!”</span> 08/27/2013<br/>
                                            <p class="margtop10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit augue, placerat quis est eget, cursus dictum felis. Morbi non dui vitae nisl pharetra placerat.</p>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="col-md-4 center bordertype4">
                                        <img src="../images/user-rating-4.png" alt=""/><br/>
                                        <span class="opensans grey size14">31 reviews</span>
                                        <br/><br/><br/><br/>
                                        <button class="bookbtn mt1">More</button>	
                                    </div>										
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="line2"></div>		
    
                            <div class="padding20">
                                <div class="col-md-4 offset-0">
                                    <a href="#"><img src="../images/items2/item6.jpg" alt="" class="fwimg"/></a>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8 mediafix1">
                                        <span class="opensans dark size16 margtop1 margtop-5">Marathonissi (Turtle Island), Laganas</span><br/>									
                                            <span class="lblue">“Beautiful”</span> 08/27/2013<br/>
                                            <p class="margtop10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit augue, placerat quis est eget, cursus dictum felis. Morbi non dui vitae nisl pharetra placerat.</p>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="col-md-4 center bordertype4">
                                        <img src="../images/user-rating-5.png" alt=""/><br/>
                                        <span class="opensans grey size14">23 reviews</span>
                                        <br/><br/><br/><br/>
                                        <button class="bookbtn mt1">More</button>	
                                    </div>										
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="line2"></div>		
    
                            <div class="padding20">
                                <div class="col-md-4 offset-0">
                                    <a href="#"><img src="../images/items2/item7.jpg" alt="" class="fwimg"/></a>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8 mediafix1">
                                        <span class="opensans dark size16 margtop1 margtop-5">Navagio Beach (Shipwreck Beach)</span><br/>											
                                            <span class="lblue">“like being on a tropical island”</span> 08/27/2013<br/>
                                            <p class="margtop10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit augue, placerat quis est eget, cursus dictum felis. Morbi non dui vitae nisl pharetra placerat.</p>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="col-md-4 center bordertype4">
                                        <img src="../images/user-rating-3.png" alt=""/><br/>
                                        <span class="opensans grey size14">17 reviews</span>
                                        <br/><br/><br/><br/>
                                        <button class="bookbtn mt1">More</button>	
                                    </div>										
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="line2"></div>		
    
                            <div class="padding20">
                                <div class="col-md-4 offset-0">
                                    <a href="#"><img src="../images/items2/item8.jpg" alt="" class="fwimg"/></a>
                                </div>
                                <div class="col-md-8 offset-0">
                                    <div class="col-md-8 mediafix1">
                                        <span class="opensans dark size16 margtop1 margtop-5">Blue Caves</span><br/>										
                                            <span class="lblue">“A must see”</span> 08/27/2013<br/>
                                            <p class="margtop10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit augue, placerat quis est eget, cursus dictum felis. Morbi non dui vitae nisl pharetra placerat.</p>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="col-md-4 center bordertype4">
                                        <img src="../images/user-rating-4.png" alt=""/><br/>
                                        <span class="opensans grey size14">10 reviews</span>
                                        <br/><br/><br/><br/>
                                        <button class="bookbtn mt1">More</button>	
                                    </div>										
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="line2"></div>								
                        
                        
                        
                        </div>						
                    </div>
                </div>
                
                <div class="col-md-4" >
                    
                    <div class="pagecontainer2 testimonialbox">
                        <div class="cpadding0 mt-10">
                            <span class="icon-quote"></span>
                            <p class="opensans size16 grey2">It was very comfortable to stay and staff were pleasant and welcoming.<br/>
                            <span class="lato lblue bold size13"><i>by Ellison from United Kingdom</i></span></p> 
                        </div>
                    </div>
                    
                    <div class="pagecontainer2 mt20 needassistancebox">
                        <div class="cpadding1">
                            <span class="icon-help"></span>
                            <h3 class="opensans">Need Assistance?</h3>
                            <p class="size14 grey">Our team is 24/7 at your service to help you with your booking issues or answer any related questions</p>
                            <p class="opensans size30 lblue xslim">1-866-599-6674</p>
                        </div>
                    </div><br/>
                    
                    <div class="pagecontainer2 mt20 alsolikebox">
                        <div class="cpadding1">
                            <span class="icon-location"></span>
                            <h3 class="opensans">You May Also Like</h3>
                            <div class="clearfix"></div>
                        </div>
                        <div class="cpadding1 ">
                            <a href="#"><img src="../images/smallthumb-1.jpg" class="left mr20" alt=""/></a>
                            <a href="#" class="dark"><b>Hotel Amaragua</b></a><br/>
                            <span class="opensans green bold size14">$36-$160</span> <span class="grey">avg/night</span><br/>
                            <img src="../images/filter-rating-5.png" alt=""/>
                        </div>
                        <div class="line5"></div>
                        <div class="cpadding1 ">
                            <a href="#"><img src="../images/smallthumb-2.jpg" class="left mr20" alt=""/></a>
                            <a href="#" class="dark"><b>Hotel Amaragua</b></a><br/>
                            <span class="opensans green bold size14">$36-$160</span> <span class="grey">avg/night</span><br/>
                            <img src="../images/filter-rating-5.png" alt=""/>
                        </div>
                        <div class="line5"></div>			
                        <div class="cpadding1 ">
                            <a href="#"><img src="../images/smallthumb-3.jpg" class="left mr20" alt=""/></a>
                            <a href="#" class="dark"><b>Hotel Amaragua</b></a><br/>
                            <span class="opensans green bold size14">$36-$160</span> <span class="grey">avg/night</span><br/>
                            <img src="../images/filter-rating-5.png" alt=""/>
                        </div>
                        <br/>
                    
                        
                    </div>				
                
                </div>
            </div>
            
            
            
        </div>
        <!-- END OF CONTENT -->


            

            

            
            
            `;
            detail.insertAdjacentHTML('beforeEnd', dataDetails);
        }
    }
    console.log(sessionStorage.getItem('session'));
} 
const drawListDetails = e => {
    let detail = document.querySelector('.detailsApp'),
        dataDetails = '',
        detailApp = e.data;
        console.log(e.data[0]);
        if(detailApp){sessionStorage.setItem('sessionDetail',JSON.stringify(detailApp));}
}
const detailsHotel = () =>{
    let detailsapi = new XMLHttpRequest();
    detailsapi.open('POST','https://c40d0c85.ngrok.io/api/v1/scraphotel');
    detailsapi.setRequestHeader('Content-Type','application/json');
    detailsapi.onprogress = () =>{
        console.log('On load');
    }
    detailsapi.onload = () => {
        if (detailsapi.status === 200) {
            let response = JSON.parse(detailsapi.responseText);
            drawListDetails(response);
            sessionSto();
            console.log(response);
        }
    }
    detailsapi.send(JSON.stringify({
        "url":"https://www.booking.com/hotel/co/aparta-bulerias.es.html?label=gen173nr-1FCAsoMkINc3VpdGVzLXJlY3Jlb0gKWARoMogBAZgBCsIBA3gxMcgBDNgBAegBAfgBA5ICAXmoAgM&sid=a592380752e948df9dce047d8a6b5b96&checkin=2018-06-08&checkout=2018-06-09&ucfs=1&srpvid=769f673ff4e200c6&srepoch=1528209663&highlighted_blocks=272712801_106314322_0_2_0&all_sr_blocks=272712801_106314322_0_2_0&bshb=2&room1=A,A&hpos=1&hapos=1&dest_type=city&dest_id=-592318&dotd_fb=1&srfid=2f72fd444ca9c7cfe2f6ecf7b7564eb345ba19a0X1&from=searchresults;from_hc_img=1#hotelTmpl","id":"261533"
    }))  
  }
detailsHotel();
