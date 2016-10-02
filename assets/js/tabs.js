var mybtn = document.getElementsByClassName("tablinks__tab")[0];
mybtn.click();



function productosJemazar(evt, filtro) {
  var i, tablinks__grid, tablinks__tab;

  tablinks__grid = document.getElementsByClassName("tablinks__grid");
  for (var i = 0; i < tablinks__grid.length; i++) {
    tablinks__grid[i].style.display = "none";
  }

  tablinks__tab = document.getElementsByClassName("tablinks__tab");
  for (var i = 0; i < tablinks__tab.length; i++) {
    tablinks__tab[i].className = tablinks__tab[i].className.replace(" active", "");
  }

  document.getElementById(filtro).style.display="block";
  evt.currentTarget.className += " active";
}


// <script>
// var mybtn = document.getElementsByClassName("tablinks")[0];
// mybtn.click();
// </script>
