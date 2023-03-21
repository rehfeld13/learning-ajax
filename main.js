/*

AJAX

Asynchronus JavaScript And XML

END POINT
https://jsonplaceholder.typicode.com/photos

*/


  const xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      const response = JSON.parse(this.responseText)

      console.log(response[0].url)
    }
  }

  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
  xhttp.send()




