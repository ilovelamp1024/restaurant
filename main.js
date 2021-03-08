(()=>{"use strict";const e=()=>{console.log("home");const e=document.querySelector("#content"),t=["Fergus Henderson and Trevor Gulliver opened London’s St. JOHN Smithfield in 1994. Since then, Fergus and Trevor have been recognised as the original pioneers of nose-to-tail cooking, with the accolades to prove it. Often labelled an institution, St. JOHN is considered to be one of the cornerstones of the British restaurant scene.","For more than a quarter of a century, Fergus and Trevor have been serving up food that is as elegantly simple as it is heartfelt and generous. At once ever-evolving and steeped in tradition, theirs is a true celebration of British ingredients.","Where Fergus is responsible for putting food on the plate, Trevor is responsible for putting wine in the glass. Trevor’s close relationships with vignerons have formed the strong reputation enjoyed by St. JOHN’s all-French wine list, and the production of the critically-acclaimed wines at the St. JOHN winery in France is informed and built by his expertise."],n=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p");n.textContent=t[0],a.textContent=t[1],i.textContent=t[2],e.appendChild(n),e.appendChild(a),e.appendChild(i);const s=document.createElement("div");return s.classList.add("imageHero"),e.appendChild(s),null},t=()=>{console.log("menu");const e=document.querySelector("#content"),n=document.createElement("h2");n.textContent="Supper",e.appendChild(n);const a=[{item:"Venison and Barley Broth",price:"9.20"},{item:"Grilled Jerusalem Artichoke, Red Onion and Olives",price:"10.80"},{item:"Egg Mayonnaise and Anchovy",price:"12.50"},{item:"Brown Crab Meat on Toast",price:"12.80"},{item:"Cold Roast Middle White, Dandelion and Roast Shallots",price:"12.50"},{item:"Deep Fried Skate Cheeks and Ketchup",price:"12.50"},{item:"Roast Bone Marrow and Parsley Salad",price:"11.50"},{item:"--",price:""},{item:"Roast Teal, Bacon and Mash",price:"25.50"},{item:"Red Gurnard, Braised Chicory and Green Sauce",price:"21.50"},{item:"Celeriac and Baked Eggs",price:"17.20"},{item:"Devilled Kidneys on Toast",price:"19.80"},{item:"Ox Tongue, Beetroot and Horseradish",price:"21.00"},{item:"Braised Tripe, Carrots and Mint",price:"19.80"},{item:"Brill, Sea Purslane, Capers and Mayonnaise",price:"26.00"},{item:"Crispy Goose Leg and Braised Red Cabbage (for two)",price:"42.00"},{item:"--",price:""},{item:"Potatoes",price:"5.00"},{item:"Green Salad",price:"5.50"},{item:"Greens",price:"4.50"},{item:"Welsh Rarebit",price:"7.00"},{item:"--",price:""},{item:"Eccles Cake and Lancashire Cheese",price:"9.00"},{item:"Bitter Chocolate Cream",price:"9.00"},{item:"Bread Pudding and Butterscotch Sauce",price:"8.70"},{item:"Steamed Date Sponge",price:"8.70"},{item:"Quince and Hazelnut Trifle",price:"9.00"},{item:"Honeycomb Ice Cream (one scoop)",price:"4.40"},{item:"Crab Apple Sorbet and Sloe Gin",price:"9.00"},{item:"Madeleines Helf Dozen (fifteen minutes)",price:"5.00"},{item:"Madeleines One Dozen (fifteen minutes)",price:"10.00"},{item:"Cheese",price:"12.00"}],i=document.createElement("div");i.classList.add("menuList"),e.appendChild(i);const s=document.createElement("table");i.appendChild(s);for(let e=0;e<a.length;e++){let t=document.createElement("tr");if("--"===a[e].item)t.classList.add("blankRow"),document.createElement("td").setAttribute("colspan","2"),s.appendChild(t);else{s.appendChild(t);let n=document.createElement("td");n.textContent=a[e].item;let i=document.createElement("td");i.textContent=a[e].price,i.classList.add("rightAlign"),t.appendChild(n),t.appendChild(i)}}return t},n=t,a=()=>{console.log("contact");const e=document.querySelector("#content"),t=document.createElement("h2");t.textContent="Contact Us",e.appendChild(t);const n=document.createElement("h3");n.textContent="RESERVATIONS",e.appendChild(n);const i=document.createElement("p");i.classList.add("details"),i.innerHTML="Monday to Saturday, 9.00am to 9.00pm<br>Sundays from 10.00am to 9.00pm<br>--<br>020 7251 0848<br>reservations@stjohnrestaurant.com",e.appendChild(i);const s=document.createElement("div");s.classList.add("contactContainer"),e.appendChild(s);const o=document.createElement("iframe");return o.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6047622370206!2d-0.10251937832794043!3d51.52046673125472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5161b93317%3A0x86773f8e76f37d7!2sSt.%20John!5e0!3m2!1sen!2suk!4v1615228339442!5m2!1sen!2suk"),o.setAttribute("width","800"),o.setAttribute("height","400"),o.setAttribute("style","border:0"),o.setAttribute("allowfullscreen",""),o.setAttribute("loading","lazy"),s.appendChild(o),a},i=a;function s(){document.querySelector("#content").innerHTML=""}document.body.appendChild(function(){const t=document.createElement("div");return t.innerHTML=function(){const t=document.querySelector("#navigation"),a=document.createElement("object");a.classList.add("logo"),a.setAttribute("type","image/svg+xml"),a.setAttribute("data","../static/logo.svg"),t.appendChild(a);const o=document.createElement("div");o.classList.add("tabContainer"),t.appendChild(o);let c="home";const r=document.createElement("div");r.classList.add("tab","tabActive"),r.textContent="Home",o.appendChild(r);const d=document.createElement("div");d.classList.add("tab","tabBack"),d.textContent="Menu",o.appendChild(d);const l=document.createElement("div");l.classList.add("tab","tabBack"),l.textContent="Contact",o.appendChild(l);const m=document.createElement("div");return m.classList.add("tabBlank"),o.appendChild(m),r.addEventListener("click",(()=>{"home"!=c&&(c="home",s(),r.classList.remove("tabBack"),r.classList.add("tabActive"),d.classList.remove("tabActive"),d.classList.add("tabBack"),l.classList.remove("tabActive"),l.classList.add("tabBack"),e())})),d.addEventListener("click",(()=>{"menu"!=c&&(c="menu",s(),r.classList.remove("tabActive"),r.classList.add("tabBack"),d.classList.remove("tabBack"),d.classList.add("tabActive"),l.classList.remove("tabActive"),l.classList.add("tabBack"),n())})),l.addEventListener("click",(()=>{"contact"!=c&&(c="contact",s(),r.classList.remove("tabActive"),r.classList.add("tabBack"),d.classList.remove("tabActive"),d.classList.add("tabBack"),l.classList.remove("tabBack"),l.classList.add("tabActive"),i())})),t}(),t.innerHTML=e(),t}())})();