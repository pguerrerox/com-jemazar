var mybtn = document.getElementsByClassName("tablinks__tab")[0];
mybtn.click();

function mapasJemazar(evt, filtro, filtro2) {
  var i, tablinks__grid, tablinks__tab, side__bar;

  tablinks__grid = document.getElementsByClassName("tablinks__grid");
  for (var i = 0; i < tablinks__grid.length; i++) {
    tablinks__grid[i].style.display = "none";
  }

  side__bar = document.getElementsByClassName("side__bar");
  for (var i = 0; i < side__bar.length; i++) {
    side__bar[i].style.display = "none";
  }

  tablinks__tab = document.getElementsByClassName("tablinks__tab");
  for (var i = 0; i < tablinks__tab.length; i++) {
    tablinks__tab[i].className = tablinks__tab[i].className.replace(" active", "");
  }

  document.getElementById(filtro).style.display="block";
  document.getElementById(filtro2).style.display="block";
  evt.currentTarget.className += " active";
}

// <script>
// var mybtn = document.getElementsByClassName("tablinks")[0];
// mybtn.click();
// </script>
