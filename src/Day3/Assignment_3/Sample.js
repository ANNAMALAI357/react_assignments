export default function Sample(props){                        // component definition and exporting it
    function sum(){                                           // function definition
        var a = 5                                             // assigning value to variable using var
        let b = 3                                             // assigning value to variable using let
        const c = 3                                           // assigning value to variable using const

        return "X+A is "+(props.x+a)+" Y+B is "+(props.y+b)+" Z+C is "+(props.z+c)
                                                              // returning the sum by calling the props value and the local vaariables
    }
    return(                                                  //calling the function
        <h2>
            {sum()}                                           
        </h2>
    )
}