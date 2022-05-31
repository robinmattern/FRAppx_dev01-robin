    var backdrop            =  document.querySelector(    ".backdrop" );
    var modal               =  document.querySelector(    ".modal"    );
    var modalNoButton       =  document.querySelector(    ".modal_action-negative" );
    var selectPlanButtons   =  document.querySelectorAll( ".plan button"       );
    var toggleButton        =  document.querySelector(    ".toggle-button"     );
    var mobileNav           =  document.querySelector(    ".mobile-nav"        );
    var ctaButton           =  document.querySelector(    ".main-nav_item-cta" );

//      console.dir( backdrop.style['background-image']);

//      console.dir( backdrop);

   for (var i = 0; i < selectPlanButtons.length; i++) {

        selectPlanButtons[i].addEventListener("click", function() {
    //  modal.style.display = "block";
    //  backdrop.style.display = "block";
    //  modal.className = 'open'; // This will actually overwrite the complete class list
        modal.classList.add("open");
        backdrop.style.display = "block";
        setTimeout(function() {  backdrop.classList.add("open"); }, 10);
        });
    }
//  --- -----------------------------------------------------------------------

if (backdrop) {                                                                 // .(20528.01.1 RAM Don't add listener if not in HTML)
    backdrop.addEventListener( "click", function() {
  //    mobileNav.style.display = 'none';
        mobileNav.classList.remove("open");
        closeModal();
        } );
    }                                                                           // .(20528.01.2)
//  --- -----------------------------------------------------------------------

if (modalNoButton) {
    modalNoButton.addEventListener( "click", closeModal);
    }
//  --- -----------------------------------------------------------------------

function closeModal() {
  //    backdrop.style.display = "none";
  //    modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
        }
        backdrop.classList.remove("open");
        setTimeout(function() { backdrop.style.display = "none"; }, 200);
        }
//  --- -----------------------------------------------------------------------

if (toggleButton) {                                                             // .(20528.01.3 RAM Don't add listener if not in HTML)
    toggleButton.addEventListener("click", function() {
  //    mobileNav.style.display = 'block';
  //    backdrop.style.display = 'block';
        mobileNav.classList.add("open");
        backdrop.style.display = "block";
        setTimeout(function() { backdrop.classList.add("open"); }, 10);
        });
    }                                                                           // .(20528.01.4)
//  --- -----------------------------------------------------------------------

if (ctaButton) {                                                                // .(20528.01.5 RAM Don't add listener if not in HTML)
    ctaButton.addEventListener( 'animationstart',     function( event ) {
        console.log('Animation started', event);
        })

    ctaButton.addEventListener( 'animationend',       function( event ) {
        console.log('Animation ended', event);
        })

    ctaButton.addEventListener( 'animationiteration', function( event ) {
        console.log('Animation iteration', event);
        })
    }                                                                           // .(20528.01.6)
//  --- -----------------------------------------------------------------------

