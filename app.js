setTimeout('asd()', 100);

    function asd() {
        firebase.initializeApp({
 
            apiKey: "AIzaSyBHztxYHiV6lUMtG_sIdOhKGJzgVPTelt4",
            authDomain: "invianpush.firebaseapp.com",
            projectId: "invianpush",

        });

        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();
        //Leer documentos
        var contenido = document.getElementById('menuCasa');
        var contenidoCarta = document.getElementById('menuCarta');
        var contenidoNuestroMenu = document.getElementById('contenidoNuestroMenu');
        var contenidoProductos = document.getElementById('contenidoProductos');
 
        db.collection("restauranteDesayunos").orderBy('fecha', 'desc')
            .onSnapshot((querySnapshot  ) => {
                contenido.innerHTML = '';
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data().titulo}`);
                    contenido.innerHTML += ` 
                    <div class="owl-item">
                        <img class="img-responsive" style="height: 220px !important;width: 305px !important;" src="${doc.data().urlImagen}"/>
                        <p style="font-size: 1.26em">${doc.data().titulo}</p>
                        <p style="font-size: 1.2em">${doc.data().sumilla}</p>
                    </div>
                `
                });
            });

        db.collection("restauranteCarta").orderBy('fecha', 'desc')
        .onSnapshot((querySnapshot  ) => {
            contenidoCarta.innerHTML = '';
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().titulo}`);
                contenidoCarta.innerHTML += ` 
                <li class="wow fadeInLeft"  data-wow-duration="300ms" data-wow-delay="400ms">
                    <div class="blog-img">
                        <img src="${doc.data().urlImagen}" class="IA" alt="blog-img">
                    </div>
                    <div class="content-right">
                        <h3>${doc.data().titulo}</h3>
                        <p>${doc.data().sumilla}</p>
                    </div>
                </li>
            `
            });
        });

        db.collection("restaurantePlatos").orderBy('fecha', 'desc')
        .onSnapshot((querySnapshot  ) => {
            contenidoNuestroMenu.innerHTML = '';
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().titulo}`);
                contenidoNuestroMenu.innerHTML += ` 
                <li class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                    <div class="item">
                        <div class="item-title">
                            <h2>${doc.data().titulo}</h2>
                            <div class="border-bottom"></div>
                
                        </div>
                        <p>${doc.data().sumilla}</p>
                    </div>
                </li>
            `
            });
        });

        db.collection("contenidoProductos").orderBy('fecha', 'desc')
        .onSnapshot((querySnapshot  ) => {
            contenidoProductos.innerHTML = '';
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().titulo}`);
                contenidoProductos.innerHTML += ` 
                <div class="card card col-md-4 col-sm-6 col-xs-12">
                    <img class="card-img-top img-responsive" src="${doc.data().urlImagen}" alt="Card image cap">
                    <div class="card-body">
                        <br>
                        <h5 class="card-title">${doc.data().titulo}</h5>
                        <p class="card-text">${doc.data().sumilla}</p>
                        <br>
                    </div>
                </div>
            `
            });
        });

    }
            // <span>$ 25.00</span>
                        // <a href="#" class="btn btn-primary">Comprar</a>
