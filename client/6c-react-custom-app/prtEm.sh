#!/bin/bash

function prt( ) {

   echo ""
   echo "============================================================================================================"
   echo "  $1"
   echo "-----------------------------------------------------------------------------------------------"
   echo ""
    cat    "src/$1"
   echo ""
   echo "-----------------------------------------------------------------------------------------------"
   }


 prt  index.js
 prt  App.jsx
 prt  index.css

 prt  components/Toolbar/Toolbar.jsx
 prt  components/Toolbar/Toolbar.css

 prt  components/SideDrawer/ToggleButton.css
 prt  components/SideDrawer/ToggleButton.jsx

 prt  components/SideDrawer/SideDrawer.css
 prt  components/SideDrawer/SideDrawer.jsx

 prt  components/Backdrop/Backdrop.css
 prt  components/Backdrop/Backdrop.jsx

