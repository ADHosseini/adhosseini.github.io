const UtilityMethods = [
    {
        title: 'مرتب سازی و جستجو',
        text: [
            {
                title: `مرتب سازی`,
                code: `
                const obj = [
                    {id: 225, name: 'John'},
                    {id: 123, name: 'Aida'},
                    {id: 897, name: 'Elisabeth'},
                    {id: 242, name: 'Jamal'}
                ]
                 
                obj.sort(function(a,b) {
                    if (a.id > b.id) {
                        return 1;
                    }                 
                    return -1;
                })
                 
                //Result
                /*[
                    {id: 123, name: 'Aida'},
                    {id: 225, name: 'John'},
                    {id: 242, name: 'Jamal'},
                    {id: 897, name: 'Elisabeth'}
                ]
                */            
`,
            },
            {
                title: `جستجو`,
                code: `
                // Input array contain some elements.
                var array = [10, 20, 30, 40, 50];
              
                // Method (return element > 10).
                var found = array.find(function (element) {
                    return element > 20;
                });
              
                // Printing desired values.
               console.log(found);            
`,
            },
        ],
    },
];

export default UtilityMethods;
