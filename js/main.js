var forEach = function(arr, func){
  for (var i = 0; i < arr.length; i++) {
    func(arr[i], i, arr)
  }
}

console.log($)
$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
		  console.log(serverRes)
      var memberInfoContainerEl = document.querySelector('.info-container')
      var congressObjList = serverRes.results

      var congressMemInfo = ''
      forEach(congressObjList, function(congressObj){
            var fullName = congressObj.first_name + " " + congressObj.last_name
            var polStatus = congressObj.title + " " + congressObj.party + " " + congressObj.state_name

            var congressDiv = '<div class = "congress-mem">'
            congressDiv += '<h2>' + fullName + '</h2>'
            congressDiv += '<h3>' + polStatus + '</h3>'
            congressDiv += '<ul>' + '<li>' + congressObj.oc_email + '</li>' + '<li>' +congressObj.website + '</li>' + '<li>' +'facebook: ' +congressObj.facebook_id + '</li>' + '<li>' +'twitter: ' +congressObj.twitter_id + '</li>' + '</ul>'
            congressDiv += '<p>' + 'Term End ' +congressObj.term_end + '</p>'
            congressDiv += '</div>'
            congressMemInfo += congressDiv

            


      })
        console.log(memberInfoContainerEl)
		  // document.querySelector('#app-container').innerHTML = '<h2> <mark>' + serverRes.results[0].name + '</mark> </h2>'
      memberInfoContainerEl.innerHTML = congressMemInfo


	})
