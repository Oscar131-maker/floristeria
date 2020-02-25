// Full Page
const fullPage = new fullpage('#fullpage', {
    autoScrolling: false, // Se activa el scroll.
    fitToSection: true, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
	fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
    
    navigation: true, // Muesta la barra de navegación.
	menu: '#menu', // Menu de navegación.
	anchors: ['home', 'about-us', 'flowers', 'contact'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
 
});


