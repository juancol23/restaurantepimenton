setTimeout('asd()', 1000);


    function asd() {
        firebase.initializeApp({
            apiKey: "AIzaSyCE-n4QOuKmPQGnpLdT1svm5z5C1lobZs4",
            authDomain: "camaleonjuridico-92ad6.firebaseapp.com",
            projectId: "camaleonjuridico-92ad6"
        });

        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();
        //Leer documentos
        var contenido = document.getElementById('menuCasa');

        db.collection("restaurante").orderBy('fecha', 'desc')
            .onSnapshot((querySnapshot) => {
                contenido.innerHTML = '';
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data().titulo}`);
                    contenido.innerHTML += ` 
                    <div class="owl-item">
                        <img class="img-responsive" src="${doc.data().urlImagen}"/>
                        <p style="font-size: 1.6em">${doc.data().titulo}</p>
                        <p style="font-size: 1em">${doc.data().sumilla}</p>
                    </div>
                `
                });
            });
    }

