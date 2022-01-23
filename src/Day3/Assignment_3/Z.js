export default function Z(){                                    // component definition with no props
    function sum(){
        var a1= 4                                               // variable declaration using var keyword
        var b1 = 5
        var c1 = 1
        var d1 = 3

        return a1+b1+c1+d1                                      // returning sum of variables

    }
    return (                                                    // function call
        <h2>
        {sum()}
        </h2>
    )
}