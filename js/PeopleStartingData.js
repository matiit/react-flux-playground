

module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('people', JSON.stringify(
    	[
    		{
    			id: 1,
    			name: "TOM"
    		},
    		{
    			id: 2,
    			name: "JAMES"
    		}
    	]
    ));
  }
}
