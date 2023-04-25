module.exports = {
    queue: [],
    minVal: Infinity,
    maxVal: -Infinity,
  
    push(x) {
      this.queue.push(x);
      if (x < this.minVal) {
        this.minVal = x;
      }
      if (x > this.maxVal) {
        this.maxVal = x;
      }
    },
  
    shift() {
      if (this.queue.length == 0) return 0;
      const x = this.queue.shift();
      if (x == this.minVal) {
        this.minVal = Math.min(...this.queue);
      }
      if (x == this.maxVal) {
        this.maxVal = Math.max(...this.queue);
      }
      return x;
    },
  
    min() {
      if (this.queue.length == 0) return 0;
      return this.minVal;
    },
  
    max() {
      if (this.queue.length == 0) return 0;
      return this.maxVal;
    }
  };