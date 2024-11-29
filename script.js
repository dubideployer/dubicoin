document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
<script>
  window.onscroll = function() {toggleStickyNavbar()};

  var header = document.querySelector("header");
  var sticky = header.offsetTop;

  function toggleStickyNavbar() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
</script>
<script>
  document.querySelector('.dropdown').addEventListener('click', function(event) {
    var dropdownMenu = this.querySelector('.dropdown-content');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    event.stopPropagation();
  });

  // Zamknięcie menu, gdy użytkownik kliknie gdziekolwiek poza menu
  document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(menu) {
      if (!menu.contains(event.target)) {
        menu.style.display = 'none';
      }
    });
  });
</script>
