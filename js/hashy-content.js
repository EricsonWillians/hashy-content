var hashes = {};

$.fn.addHash = function (hash, contentURL, f) {
    var id = this.attr("id");
    if (typeof hashes[id] === 'undefined') {
        hashes[id] = [];
    }
    hashes[id].push([hash, contentURL, f]);
}

$.fn.watch = function () {

    for (var insertionId in hashes) {
        for (var hashAssociationIndex in hashes[insertionId]) {
            var _hash = hashes[insertionId][hashAssociationIndex][0];
            var contentURL = hashes[insertionId][hashAssociationIndex][1];
            var f = hashes[insertionId][hashAssociationIndex][2];
            if (_hash === "index") {
                if (location.hash === "") {
                   window.location.hash = "#index";
                   location.reload();
                }
            }
            if (location.hash.includes(_hash)) {
                var _f = f;
                $('#' + insertionId).load(contentURL, function (data) {
                    if (typeof _f != 'undefined') {
                        _f();
                    }
                }).hide().fadeIn();
            }
        }
    }
};

$(window).on('hashchange', function () {
    for (var insertionId in hashes) {
        for (var hashAssociationIndex in hashes[insertionId]) {
            var _hash = hashes[insertionId][hashAssociationIndex][0];
            var contentURL = hashes[insertionId][hashAssociationIndex][1];
            var f = hashes[insertionId][hashAssociationIndex][2];
            if (location.hash.slice(1) === _hash) {
                var _f = f;
                $('#' + insertionId).load(contentURL, function (data) {
                    if (typeof _f != 'undefined') {
                        _f();
                    }
                }).hide().fadeIn();
            }
        }
    }
});