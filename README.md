PURPOSE:
This project converts data from legacy format into a mobile-friendly web version which can be searched and sorted similar to leading ecommerce sites.


SCOPE:
This project is to handle the conversion, display and user interaction of the APSAC's Educational Programs data.


VERSION:
Revision 20170920


METHOD OF OPERATION:
(1) Our website is retrieved by the APSAC webpage via i-frame from the APSAC webhost's server (currently WIX).
Index.html pulls in third party libraries, displays the skeleton of the page and calls our javascripts.  File jasonboxes.js creates the list of menu items appearing on the left of the page.  
(2) Excel_data_module.js converts a file in .xlsx format into an array of JSON objects via function call against xlsx.full.min.js.  It then turns the JSON data into a bootstrap-formatted table and equips it with filter apparatus.
(3) Table_functions.js provides the following methods: display the data table to the screen, export the displayed data to .xls or .pdf, show/hide/clear checkboxes, and display and expanded details sub section for any program.
(4) App.js applies user filter input to data from the underlying excel data to return the data subset the user requested.


WORK INSTRUCTIONS:
(1) Update the spreadsheet per APSAC's existing standard work instruction.
(2) Place the spreadsheet in the server directory that holds this website. 


CLIENT MODIFICATION OF THE CODE IS NOT ENCOURAGED:
Be sure to keep a backup copy of this project.


DEPENDENCIES:
All dependancies function via CDN.

AUTHORS: 
Eli Steiger, Jason Hanlon, Ken McCollum
