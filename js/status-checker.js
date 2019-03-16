class StatusChecker {

  static check(url)
  {
    axios.get(url)
         .then(function (response)
         {
           console.log(response)
         })
         .catch(function (error)
         {
           console.log(error)
         });
  }
}