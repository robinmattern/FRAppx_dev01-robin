#!/bin/bash

function listIt( ) {

   aDir="$( dirname $0 )"
#  echo "${aDir}/$1"; # return

   cd "${aDir}/$1"

#  echo "------------------------------------------------------------------------------------------------------------"
   echo "============================================================================================================"

   echo "  ${aDir:17}/$1";  # return
   echo "--------------------------------------------------------------"
   echo "  package.json"
    cat    package.json  | awk '{ print "   " $0 }'
   echo "   -----------------------------------------------------------"
           frt app files | awk 'NR < 11 { next }; /- FR/ { next }; { print "   " $0 }'
#  echo "--------------------------------------------------------------------"
   echo ""
   }
#  ------------------------------------------------------------------------------------------------------------------

   listIt "client/1c1a-html-custom-app_byRick"
   listIt "client/1c-html-custom-app";
   listIt "client/1c1b-html-custom-app_final"

   exit

   listIt "client1/01c1a-html-custom-app_byRick"
   listIt "client1/01c1-html-custom-app"
   listIt "client1/01c1b-html-custom-app_final"
   listIt "client1/02c1-js-custom-app"
   listIt "client1/03c1_js-nav-toolbar"
   listIt "client1/04c1_js-nav-sidebar"
   listIt "client1/05c1_js-responsive-menubar"

   echo "============================================================================================================"
