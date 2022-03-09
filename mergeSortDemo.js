const combine = (l, r) => {
    var a = [];
    while (true) {
        if (l.length == 0) {
            a.push(...r);
            return a;
        } else if (r.length == 0) {
            a.push(...l);
            return a;
        } else if (l[0] <= r[0]) {
            a.push(l.shift());
        } else {
            a.push(r.shift());
        }
    }
};

left = [1, 2, 5];
right = [3, 4, 6];

console.log(combine(left, right));
