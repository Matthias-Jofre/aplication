
describe( 'Example Component', () =>{

  test( 'Debe de ser mayor a 10', () => {
    
    let value = 10

    value = value + 2

    // if( value>10 ) {
    // }else{
    //   throw `${value} No es mayor a 10`
    // }

    expect( value ).toBeGreaterThan( 10 )

  } )

} )
