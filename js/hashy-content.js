var hashes = {};

$.fn.addHash = function(hash, contentURL) {
    var id = this.attr("id");
    if (typeof hashes[id] === 'undefined') {
        hashes[id] = [];
    }
    hashes[id].push([hash, contentURL]);
}

$.fn.watch = function() {
    $(window).on('hashchange', function() {
        for (var insertionId in hashes) {
            for (var hashAssociationIndex in hashes[insertionId]) {
                var _hash = hashes[insertionId][hashAssociationIndex][0];
                var contentURL = hashes[insertionId][hashAssociationIndex][1];
                if (location.hash.slice(1) === _hash) {
                    $('#' + insertionId).load(contentURL);
                }
            }
        }
    });
};