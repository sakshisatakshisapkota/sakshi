
import ChildComp from './Components/ChildComp';
const Parentscomp = () => {
 const handleClick=()=>{
  alert('Button Clicked!');
 };
  return (
    <div>
    
      <h2>Sender Component</h2>

      <ChildComp click={handleClick} />
    </div>
  )
}
export default Parentscomp
