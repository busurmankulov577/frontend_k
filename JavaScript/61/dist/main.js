(() => {
    var o = {
            225: o => {
                o.exports = function () {
                    this.hello = function () {
                        console.log("Hello Busurmankulov")
                    }, this.bye = function () {
                        console.log("Bye Bye")
                    }
                }
            }
        },
        e = {};

    function n(t) {
        var r = e[t];
        if (void 0 !== r) return r.exports;
        var l = e[t] = {
            exports: {}
        };
        return o[t](l, l.exports, n), l.exports
    }(() => {
        const o = new(n(225));
        o.hello(), o.bye()
    })()
})();