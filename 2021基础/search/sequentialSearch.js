// 顺序搜索
// 时间复杂度O(n)
Array.prototype.sequentialSearch = function(item) {
    for (let i = 0; i < this.length; i++) {
        if(this[i]===item) {
            return i
        }        
    }
    return -1
}

const res = [12,3,45,5].sequentialSearch(12)