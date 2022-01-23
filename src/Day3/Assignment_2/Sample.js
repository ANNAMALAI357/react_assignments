export default function Sample({a,b,c}){   // component definition with destructured props
    function sum(){                        // function definition
        return a+b+c                       // returning sum of elements
    }
return (                                   // function call 
    <h2>
    {sum()}
    </h2>
)
}