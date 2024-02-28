

export const BasicTypes = () => {

  const name: string = 'Gerardo';
  const age: number = 33;
  const isActive: boolean = true;
  const powers:string[] = ['React','React Native','Angular','Vue'];

  powers.push('Next js')

  return (
    <>
        <h3>Tipos Básicos</h3>

        {name} {age} {isActive ? 'true':'false'} 
        
        <br />
        {powers.join(', ')}
    </>
  )
}
