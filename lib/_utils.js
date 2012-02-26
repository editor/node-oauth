// Returns true if this is a host that closes *before* it ends?!?!
module.exports.isAnEarlyCloseHost= function( hostName ) {
	if( 'undefined' === typeof hostName || null === hostName ) {
		return false;
	}
  return hostName.match(".*google(apis)?.com$")
}
