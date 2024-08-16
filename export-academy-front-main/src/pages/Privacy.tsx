import MainSection from "@/components/Page/MainSection"
import PageDetails from "@/components/Page/PageDetails"

const Privacy = () => {
  return (
    <div>
    <MainSection header="Privacy Policy" desc="We’re on a mission to deliver engaging, curated courses at a reasonable price."/>
    <div className="w-11/12 lg:w-3/4 mx-auto  my-10">
      <PageDetails />
    </div>
  </div>
  )
}

export default Privacy