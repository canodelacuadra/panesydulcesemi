const p=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerpolicy&&(e.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?e.credentials="include":a.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(a){if(a.ep)return;a.ep=!0;const e=c(a);fetch(a.href,e)}};p();function g(s,i){var c,l,a,e,n,t,o,r;for(c=document.getElementById("template-grid"),l=c.content.firstElementChild,t=0;t<s.length;t++)a=document.importNode(l,!0),e=a.firstElementChild.firstElementChild,e.dataset.bsTarget="#modal"+s[t].id,n=a.firstElementChild.firstElementChild.firstElementChild,n.src=s[t].src,n.alt=s[t].alt,n.dataset.caption=s[t].caption,e.lastElementChild.innerHTML=s[t].caption,o=a.firstElementChild.nextElementSibling,o.id="modal"+s[t].id,r=o.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild,r.firstElementChild.src=s[t].src,r.firstElementChild.alt=s[t].alt,r.lastElementChild.innerHTML=s[t].alt,console.log(r),document.getElementById(i).appendChild(a);document.getElementById(i).innerHTML+=`
    <p class="notification">
        Haga click en cualquier foto  para ampliarla y verla con estilo diapositiva
      </p>
  `}function d(s){document.getElementById(s).innerHTML="  "}var m=document.querySelectorAll(".mostrar-panes button");console.log(m);var u=[{src:"images/panes/baguette.png",srct:"images/panes/thumbnails/baguette-150x150.png",alt:"Baguette",caption:"Baguette",id:1,albumid:1},{src:"images/panes/barra-candeal.png",srct:"images/panes/thumbnails/barra-candeal-150x150.png",alt:"Barra Candeal",caption:"Barra Candeal",tags:"habitual",id:2,albumid:1},{src:"images/panes/barra-casera.png",srct:"images/panes/thumbnails/barra-casera-150x150.png",alt:"Barra Casera",caption:"Barra Casera",description:"barra tradicional casera",tags:"habitual",id:3,albumid:1},{src:"images/panes/barra-de-hogaza.jpg",srct:"images/panes/thumbnails/barra-de-hogaza-150x150.jpg",alt:"Barra de Hogaza",caption:"Barra de Hogaza",tags:"habitual",id:4,albumid:1},{src:"images/panes/barra-gallega.jpg",srct:"images/panes/thumbnails/barra-gallega-150x150.jpg",alt:"Barra Gallega",caption:"Barra Gallega",tags:"habitual",id:5,albumid:1},{src:"images/panes/barra-integral.png",srct:"images/panes/thumbnails/barra-integral-150x150.png",alt:"Barra Integral",caption:"Barra Integral",tags:"habitual",id:6,albumid:1},{src:"images/panes/chapata.png",srct:"images/panes/thumbnails/chapata-150x150.png",alt:"Chapata",caption:"Chapata",tags:"habitual",id:7,albumid:1},{src:"images/panes/pan-candeal.png",srct:"images/panes/thumbnails/pan-candeal-150x150.png",alt:"Pan Candeal",caption:"Pan Candeal",tags:"habitual",id:8,albumid:1},{src:"images/panes/pan-casero.png",srct:"images/panes/thumbnails/pan-casero-150x150.png",alt:"Pan Casero",caption:"Pan Casero",tags:"habitual",id:9,albumid:1},{src:"images/panes/pan-celta.jpg",srct:"images/panes/thumbnails/pan-celta-150x150.jpg",alt:"Pan Celta",caption:"Pan Celta",tags:"especial",id:10,albumid:1},{src:"images/panes/pan-con-chocolate.png",srct:"images/panes/thumbnails/pan-con-chocolate-150x150.png",alt:"Pan con chocolate",caption:"Pan con chocolate",tags:"especial",id:11,albumid:1},{src:"images/panes/pan-con-pasas-y-nueces.png",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Pan con pasas y nueces",caption:"Pan con pasas y nueces",tags:"especial",id:12,albumid:1},{src:"images/panes/pan-de-queso.jpg",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Pan de queso",caption:"Pan de queso",tags:"especial",id:13,albumid:1},{src:"images/panes/barra-de-centeno.png",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Barra de centeno",caption:"Barra de centeno",tags:"especial",id:14,albumid:1},{src:"images/panes/barra-de-torrijas.jpg",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Barra de torrijas",caption:"Barra de torrijas",tags:"especial",id:15,albumid:1},{src:"images/panes/barra-de-semillas.png",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Barra de Semillas",caption:"Barra de semillas",tags:"especial",id:16,albumid:1},{src:"images/panes/rosca-gallega.jpg",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Rosca Gallega",caption:"Rosca gallega",tags:"especial",id:17,albumid:1},{src:"images/panes/pan-de-centeno.jpg",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Pan de centeno",caption:"Pan de centeno",tags:"especial",id:18,albumid:1},{src:"images/panes/pan-trigo-grano-completo.jpg",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Pan de trigo grano completo",caption:"Pan de trigo grano completo",tags:"especial",id:19,albumid:1},{src:"images/panes/pan-masa-madre.jpg",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Pan de masa madre",caption:"Pan de masa madre",tags:"especial",id:20,albumid:1},{src:"images/panes/pan-de-maiz.jpg",srct:"images/panes/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Pan de maiz",caption:"Pan de maiz",tags:"especial",id:21,albumid:1}],b=[{src:"images/dulces/bizcocho-casero.jpg",srct:"images/dulces/thumbnails/bizcocho-casero-150x150.jpg",alt:"Bizcocho Casero",caption:"Bizcocho Casero",id:100,albumid:1},{src:"images/dulces/bollitos-de-aceite.jpg",srct:"images/dulces/thumbnails/barra-candeal-150x150.png",alt:"Bollitos de Aceite",caption:"Bollitos de Aceite",tags:"habitual",id:101,albumid:1},{src:"images/dulces/bollitos-de-manteca.jpg",srct:"images/dulces/thumbnails/barra-casera-150x150.png",alt:"Baoillitos de manteca",caption:"Bollitos de Manteca",tags:"habitual",id:102,albumid:1},{src:"images/dulces/bollo-azucar.jpg",srct:"images/dulces/thumbnails/barra-de-hogaza-150x150.jpg",alt:"Bollo de Az\xFAcar",caption:"Bollo de Az\xFAcar",tags:"habitual",id:103,albumid:1},{src:"images/dulces/empanadilla.jpg",srct:"images/dulces/thumbnails/barra-gallega-150x150.jpg",alt:"Empanadillas",caption:"Empanadillas",tags:"habitual",id:104,albumid:1},{src:"images/dulces/magdalenas.jpg",srct:"images/dulces/thumbnails/barra-integral-150x150.png",alt:"Magdalenas",caption:"Magdalenas Caseras",tags:"habitual",id:105,albumid:1},{src:"images/dulces/panecillos-san-anton.jpg",srct:"images/dulces/thumbnails/chapata-150x150.png",alt:"Panecillos de San Ant\xF3n",caption:"Panecillos de San Ant\xF3n",tags:"habitual",id:106,albumid:1},{src:"images/dulces/pastas-con-chocolate.jpg",srct:"images/dulces/thumbnails/pan-candeal-150x150.png",alt:"Pastas con Chocolate",caption:"Pastas con Chocolate",tags:"habitual",id:107,albumid:1},{src:"images/dulces/pastas-de-almendra.jpg",srct:"images/dulces/thumbnails/pan-casero-150x150.png",alt:"Pastas de Almendra",caption:"Pastas de Almendra",tags:"habitual",id:108,albumid:1},{src:"images/dulces/pastas-horno-integrales.jpg",srct:"images/dulces/thumbnails/pan-celta-150x150.jpg",alt:"Pastas de horno Integrales",caption:"Pastas de horno Integrales",tags:"especial",id:109,albumid:1},{src:"images/dulces/pastas-sin-azucar.jpg",srct:"images/dulces/thumbnails/pan-con-chocolate-150x150.png",alt:"Pastas Sin Az\xFAcar",caption:"Pastas Sin Az\xFAcar",tags:"especial",id:110,albumid:1},{src:"images/dulces/roscon.jpg",srct:"images/dulces/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Rosc\xF3n de Reyes",caption:"Rosc\xF3n de Reyes",tags:"especial",id:111,albumid:1},{src:"images/dulces/tortas-anis.jpg",srct:"images/dulces/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Tortas de An\xEDs",caption:"Tortas de an\xEDs",tags:"especial",id:112,albumid:1},{src:"images/dulces/perrunillas.jpg",srct:"images/dulces/thumbnails/pan-con-pasas-y-nueces-150x150.png",alt:"Perrunillas",caption:"Perrunillas",tags:"especial",id:113,albumid:1}];AOS.init({offset:200,duration:600,easing:"ease-in-sine",delay:100});document.getElementById("mostrar-panes").addEventListener("click",function(){this.value=="false"?(g(u,"container-panes"),this.className="btn btn-primary btn-lg",this.innerHTML=' Ocultar cat\xE1logo <i class="bi bi-hand-index-thumb"> ',this.value=!0):(d("container-panes"),this.className="btn btn-primary btn-lg",this.innerHTML='Ver cat\xE1logo <i class="bi bi-hand-index-thumb">  ',this.value=!1)});document.getElementById("mostrar-dulces").addEventListener("click",function(){this.value=="false"?(g(b,"container-dulces"),this.className="btn btn-primary btn-lg",this.innerHTML='Ocultar cat\xE1logo <i class="bi bi-hand-index-thumb">  ',this.value=!0):(d("container-dulces"),this.className="btn btn-primary btn-lg",this.innerHTML=' Ver cat\xE1logo <i class="bi bi-hand-index-thumb">  ',this.value=!1)});