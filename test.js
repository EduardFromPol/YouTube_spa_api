const arr = [
    {
        id: 1,
        prevToken: 'prev',
        nextToken: 'next',
    },
    {
        id: 2,
        prevToken: 'prev2',
    }
];

const result = arr.map(i => {
    const { id, prevToken, nextToken } = i;
    console.log(id);
    return { id, prevToken, nextToken };
});

console.log(result);