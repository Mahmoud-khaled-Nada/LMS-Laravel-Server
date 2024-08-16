import BoardTrustees from "../components/trustees/BoardTrustees"
import ExecutiveOffice from "../components/trustees/ExecutiveOffice"
import Hero from "../components/trustees/Hero"

const Trustees = () => {
  return (
    <div>
        <Hero/>
         <div className="w-10/12 mx-auto">
             <BoardTrustees/>
             <ExecutiveOffice/>
         </div>
    </div>
  )
}

export default Trustees