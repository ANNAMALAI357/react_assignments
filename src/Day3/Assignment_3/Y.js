export default function Y(props){                   // component definition with props
    function sum(){
        return props.a+props.b+props.c              // return sum of all props a,b,c
    }
return (                                            // function call
    <h2>
        {sum()}
    </h2>
)
}