﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(() => {
   const dayCheckBoxes = $('.day-check-box');
   
   $.each(dayCheckBoxes, (id, el) => {
       $(el).on('change', (event) => {
           if(event.target.checked) {
               
           }
       });
   });
});