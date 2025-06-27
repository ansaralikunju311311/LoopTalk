const csvData =  `
 
Date,SKU,Unit Price,Quantity,Total Price
 
2019-02-01,Death by Chocolate,180,5,900
 
2019-02-01,Cake Fudge,150,1,150
 
2019-02-01,Cake Fudge,150,1,150
 
2019-02-01,Cake Fudge,150,3,450
 
2019-02-01,Death by Chocolate,180,1,180
 
2019-02-01,Vanilla Double Scoop,80,3,240
 
2019-02-01,Butterscotch Single Scoop,60,5,300
 
2019-02-01,Vanilla Single Scoop,50,5,250
 
2019-03-01,Cake Fudge,150,5,750
 
2019-03-01,Hot Chocolate Fudge,120,3,360
 
2019-03-01,Butterscotch Single Scoop,60,5,300
 
2019-03-01,Chocolate Europa Double Scoop,100,1,100
 
2019-03-01,Hot Chocolate Fudge,120,2,240
 
2019-03-01,Caramel Crunch Single Scoop,70,4,280
 
2019-03-01,Hot Chocolate Fudge,120,2,240
 
2019-03-01,Hot Chocolate Fudge,120,4,480
 
2019-03-01,Hot Chocolate Fudge,120,2,240
 
2019-03-01,Cafe Caramel,160,5,800
 
2019-01-01,Vanilla Double Scoop,80,4,320
 
2019-01-01,Butterscotch Single Scoop,60,3,180
 
2019-01-01,Butterscotch Single Scoop,60,3,180
 
2019-01-01,Vanilla Single Scoop,50,2,100
 
2019-01-01,Butterscotch Single Scoop,60,3,180
 
2019-01-01,Vanilla Double Scoop,80,1,80
 
2019-01-01,Death by Chocolate,180,2,360
 
2019-01-01,Cafe Caramel,160,2,320
 
2019-01-01,Pista Single Scoop,60,3,180
 
2019-01-01,Hot Chocolate Fudge,120,2,240
 
2019-01-01,Vanilla Single Scoop,50,3,150
 
2019-01-01,Vanilla Single Scoop,50,5,250
 
2019-01-01,Cake Fudge,150,1,150
2
 
Insert page here
2019-01-01,Vanilla Single Scoop,50,4,200
 
2019-01-01,Vanilla Double Scoop,80,3,240
 
2019-01-01,Cake Fudge,150,1,150
 
2019-01-01,Vanilla Double Scoop,80,5,400
 
2019-01-01,Hot Chocolate Fudge,120,5,600
 
2019-01-01,Vanilla Double Scoop,80,2,160
 
2019-01-01,Vanilla Double Scoop,80,3,240
 
2019-01-01,Hot Chocolate Fudge,120,5,600
 
`;
 
 
 
 
 
// // [   { Date: '2019-01-01', SKU: 'Death by Chocolate', 'Unit Price': '180', Quantity: '5', 'Total
 
// Price': '900' },   { Date: '2019-01-01', SKU: 'Cake Fudge', 'Unit Price': '150', Quantity: '1',
 
// 'Total Price': '150' },
 
// ]
 
 const rows = csvData.trim().split('\n').
 filter(row => row.trim() &&! row.toLowerCase().includes('insert page here')&&!/^\d+$/.test(row.trim()));
 const headers = rows[0].split(',').map(h=>h.trim());
 const  result = rows.slice(1).map(row => {
    const values = row.split(',').map(v => v.trim());
    return headers.reduce((obj,header,i)=>
    {
        obj[header] = values[i];
        return obj;
    },{});
});
console.log(result);