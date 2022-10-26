import Link from "next/link";
export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return{
    props: {ninjas: data}
  }
};
function index(props) {
  const {ninjas} = props;
  return (
    <div className="justify-centent-center">
      {ninjas.map(ninja =>(
        <div key={ninja.id}> <Link href={`/ninjas/${ninja.id}`}><span className='ninja'>{ninja.name}</span></Link></div>
      ))}
    </div>
  )
}

export default index;
