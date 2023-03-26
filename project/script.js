var i = 0
        document.querySelectorAll('img').forEach(function () {
            var k = 1, inc, dec;
            var item = document.querySelectorAll('img')[i++]

            item.onmouseover = function () {
                clearInterval(inc)
                dec = setInterval(() => {
                    if (k > .3) {
                        k -= .1
                        this.style.opacity = k
                    } else {
                        clearInterval(dec)
                    }
                }, 50);
            }

            item.onmouseout = function () {
                clearInterval(dec)
                inc = setInterval(() => {
                    if (k < 1) {
                        k += .1
                        this.style.opacity = k
                    } else {
                        clearInterval(inc)
                    }
                }, 50);
            }
        })