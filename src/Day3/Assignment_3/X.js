export default function X({a,b}){         // component definition with destructured props
    function sum(){                       // function definition
        return a+b                        // return sum
    }
return(                                   // call the function
    <h2>
     {sum()}   
    </h2>
)
}