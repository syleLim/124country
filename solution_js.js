const solution = (n) => {
    var answer = [];
    const set = [1, 2, 4];    
    let num = 0;
    let group = 0;
    
    let pos;
    let j

    while (n > num)
        num += (3 ** (++group));
    pos = n - (num - (3 ** group)) - 1;
    let j = group;
    while (--group >= 0)
        answer.push(1);
    while (pos !== 0)
    {
        answer[--j] = set[pos % 3];
        pos = parseInt(pos / 3);
    }
    return answer.join('');
}