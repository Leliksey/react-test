window.onload = function () {
  var dropdownListHide = document.querySelectorAll(".dropdown-list-hide");
  var btn__container = document.querySelectorAll(".btn__container");
  var btn = document.querySelector(".btn-group");
  var dropdownMenuPizza = document.querySelector(".dropdown-menu-pizza");
  var dropdownMenuSteak = document.querySelector(".dropdown-menu-steak");
  var dropdownMenuAll = document.querySelector(".dropdown-menu-all");
  var main__title = document.querySelector(".main__title");
  var main__abv = document.querySelector(".main__abv");
  var main__description = document.querySelector(".main__description");
  var main__foodPairing = document.querySelector(".main__food-pairing");
  var main__beerImg = document.querySelector(".main__beer-img");
  var main__tagline = document.querySelector(".main__tagline");
  var sortByNamePizza = document.querySelector(".sortByNamePizza");
  var sortByNameSteak = document.querySelector(".sortByNameSteak");
  var sortByNameAll = document.querySelector(".sortByNameAll");

  function getData(e) {
    e.preventDefault();
    if (e.target.classList.contains("beerForPizza")) {
      dropdownListHide[0].classList.toggle("dropdown-list-show");
      btn__container[0].classList.toggle("btn__container__show");
      if (dropdownMenuPizza.hasChildNodes()) {
        return;
      }
      fetch("https://api.punkapi.com/v2/beers?food=pizza&per_page=80")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            let name = data[i].name;
            let description = data[i].description;
            let foodPairing = data[i].food_pairing;
            let abv = data[i].abv;
            let img = data[i].image_url;
            let tagline = data[i].tagline;
            let newLi = document.createElement("li");
            newLi.innerHTML =
              "<a href='#' class='item__text__pizza'>" +
              name +
              " " +
              "<span class='value__abv__pizza'>" +
              abv +
              "</span>" +
              "%" +
              "<img src='" +
              img +
              "'>" +
              "</a>";
            newLi.classList.add("dropdown-item");
            newLi.classList.add("dropdown-item-pizza");
            dropdownMenuPizza.append(newLi);

            newLi.addEventListener("click", () => {
              main__title.innerHTML = name;
              main__abv.innerHTML = abv + "%";
              main__description.innerHTML = description;
              main__foodPairing.innerHTML = foodPairing;
              main__beerImg.src = img;
              main__tagline.innerHTML = tagline;
            });
          }
          sortByNamePizza.addEventListener("click", sortByName);
          var sortByAbvPizza = document.querySelector(".sortByAbvPizza");
      var toggle = false;
      
      sortByAbvPizza.addEventListener('click', function(){
        
        var items = document.querySelectorAll(".dropdown-item-pizza");
        var parent = document.querySelector(".dropdown-menu-pizza");
      var SortElements = new Object();
      items.forEach(function(item, indx){
        var itemValue = parseInt(item.querySelector('.value__abv__pizza').textContent * 100);
        SortElements[itemValue] = {'element': item, 'index': indx} ;
      });
      var keys = Object.keys(SortElements);
      function compareNumeric1(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a < b) return 1;
        if (a > b) return -1;
      }
        function compareNumeric2(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a > b) return 1;
        if (a < b) return -1;
      }
      if(toggle === false){
        keys.sort(compareNumeric1);
        toggle = !toggle;
      } else {
        keys.sort(compareNumeric2);
        toggle = !toggle;
      }
      
      keys.map(function(key, indx){
        parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
        SortElements[key]['index'] = indx;
      });
        return toggle;
      }, toggle);
        });
    }
    
     else if (e.target.classList.contains("beerForSteak")) {
      dropdownListHide[1].classList.toggle("dropdown-list-show");
      btn__container[1].classList.toggle("btn__container__show");
      if (dropdownMenuSteak.hasChildNodes()) {
        return;
      }
      fetch("https://api.punkapi.com/v2/beers?food=steak&per_page=80")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            let name = data[i].name;
            let description = data[i].description;
            let foodPairing = data[i].food_pairing;
            let abv = data[i].abv;
            let img = data[i].image_url;
            let tagline = data[i].tagline;
            let newLi = document.createElement("li");
            newLi.innerHTML =
              "<a href='#' class='item__text__steak'>" +
              name +
              " " +
              "<span class='value__abv__steak'>" +
              abv +
              "</span>" +
              "%" +
              "<img src='" +
              img +
              "'>" +
              "</a>";
            newLi.classList.add("dropdown-item");
            newLi.classList.add("dropdown-item-steak");
            dropdownMenuSteak.append(newLi);
            newLi.addEventListener("click", () => {
              main__title.innerHTML = name;
              main__abv.innerHTML = abv + "%";
              main__description.innerHTML = description;
              main__foodPairing.innerHTML = foodPairing;
              main__beerImg.src = img;
              main__tagline.innerHTML = tagline;
            });
          }
          sortByNameSteak.addEventListener("click", sortByName);
          var sortByAbvSteak = document.querySelector(".sortByAbvSteak");
      var toggle = false;
      
      sortByAbvSteak.addEventListener('click', function(){
        
        var items = document.querySelectorAll(".dropdown-item-steak");
        var parent = document.querySelector(".dropdown-menu-steak");
      var SortElements = new Object();
      items.forEach(function(item, indx){
        var itemValue = parseInt(item.querySelector('.value__abv__steak').textContent * 100);
        SortElements[itemValue] = {'element': item, 'index': indx} ;
      });
      var keys = Object.keys(SortElements);
      function compareNumeric1(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a < b) return 1;
        if (a > b) return -1;
      }
        function compareNumeric2(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a > b) return 1;
        if (a < b) return -1;
      }
      if(toggle === false){
        keys.sort(compareNumeric1);
        toggle = !toggle;
      } else {
        keys.sort(compareNumeric2);
        toggle = !toggle;
      }
      
      keys.map(function(key, indx){
        parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
        SortElements[key]['index'] = indx;
      });
        return toggle;
      }, toggle);
        });
    }
     else if (e.target.classList.contains("beerAll")) {
      dropdownListHide[2].classList.toggle("dropdown-list-show");
      btn__container[2].classList.toggle("btn__container__show");
      if (dropdownMenuAll.hasChildNodes()) {
        return;
      }
      fetch("https://api.punkapi.com/v2/beers?per_page=80")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            let name = data[i].name;
            let description = data[i].description;
            let foodPairing = data[i].food_pairing;
            let abv = data[i].abv;
            let img = data[i].image_url;
            let tagline = data[i].tagline;
            let newLi = document.createElement("li");
            newLi.innerHTML =
              "<a href='#' class='item__text__all'>" +
              name +
              " " +
              "<span class='value__abv__all'>" +
              abv +
              "</span>" +
              "%" +
              "<img src='" +
              img +
              "' alt='beer'>" +
              "</a>";
            newLi.classList.add("dropdown-item");
            newLi.classList.add("dropdown-item-all");
            dropdownMenuAll.append(newLi);
            newLi.addEventListener("click", () => {
              main__title.innerHTML = name;
              main__abv.innerHTML = abv + "%";
              main__description.innerHTML = description;
              main__foodPairing.innerHTML = foodPairing;
              main__beerImg.src = img;
              main__tagline.innerHTML = tagline;
            });
          }
          sortByNameAll.addEventListener("click", sortByName);
          var sortByAbvAll = document.querySelector(".sortByAbvAll");
      var toggle = false;
      
      sortByAbvAll.addEventListener('click', function(){
        var items = document.querySelectorAll(".dropdown-item-all");
        var parent = document.querySelector(".dropdown-menu-all");
      var SortElements = new Object();
      items.forEach(function(item, indx){
        var itemValue = parseInt(item.querySelector('.value__abv__all').textContent * 100);

        SortElements[itemValue] = {'element': item, 'index': indx} ;
        //console.log(SortElements)
      });
      var keys = Object.keys(SortElements);
      //console.log(keys)
      function compareNumeric1(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a < b) return 1;
        if (a > b) return -1;
      }
        function compareNumeric2(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a > b) return 1;
        if (a < b) return -1;
      }
      if(toggle === false){
        keys.sort(compareNumeric1);
        toggle = !toggle;
      } else {
        keys.sort(compareNumeric2);
        toggle = !toggle;
      }
      
      keys.map(function(key, indx){
        parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
        SortElements[key]['index'] = indx;
      });
        return toggle;
      }, toggle);
        });
    }
  }
  btn.addEventListener("click", getData);

  function sortByName(e) {
    if (e.target.classList.contains("sortByNamePizza")) {
      var list,
        i,
        switching,
        b,
        shouldSwitch,
        dir,
        switchcount = 0;
      list = document.querySelectorAll(".dropdown-menu-pizza");
      switching = true;
      dir = "asc";
      while (switching) {
        switching = false;
        for (var i = 0; i < list.length; i++) {
          b = list[i].querySelectorAll(".dropdown-item");
          for (i = 0; i < b.length - 1; i++) {
            shouldSwitch = false;
            if (dir == "asc") {
              if (
                b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()
              ) {
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (
                b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()
              ) {
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;

            switchcount++;
          } else {
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
    } else if (e.target.classList.contains("sortByNameSteak")) {
      var list,
        i,
        switching,
        b,
        shouldSwitch,
        dir,
        switchcount = 0;
      list = document.querySelectorAll(".dropdown-menu-steak");
      switching = true;
      dir = "asc";
      while (switching) {
        switching = false;
        for (var i = 0; i < list.length; i++) {
          b = list[i].querySelectorAll(".dropdown-item");
          for (i = 0; i < b.length - 1; i++) {
            shouldSwitch = false;
            if (dir == "asc") {
              if (
                b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()
              ) {
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (
                b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()
              ) {
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;

            switchcount++;
          } else {
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
    } else if (e.target.classList.contains("sortByNameAll")) {
      var list,
        i,
        switching,
        b,
        shouldSwitch,
        dir,
        switchcount = 0;
      list = document.querySelectorAll(".dropdown-menu-all");
      switching = true;
      dir = "asc";
      while (switching) {
        switching = false;
        for (var i = 0; i < list.length; i++) {
          b = list[i].querySelectorAll(".dropdown-item");
          for (i = 0; i < b.length - 1; i++) {
            shouldSwitch = false;
            if (dir == "asc") {
              if (
                b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()
              ) {
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (
                b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()
              ) {
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;

            switchcount++;
          } else {
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
    }
  }
};
