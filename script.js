document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('check')

    checkbox.addEventListener('change', () =>{
      var navigationList = document.getElementById('navlist')
      if (checkbox.checked) {
        navigationList.style.right = "0";
      }
      else {
        navigationList.style.right = "-100%"
      }
    })
});