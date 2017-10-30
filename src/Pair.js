class Pair {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    val() {
       return `${this.from} ${this.to}`;
    }
}

exports.Pair = Pair;