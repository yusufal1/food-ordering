import Carousel from "../../components/Carousel"
import Campaigns from "../../components/ui/Campaigns"
import MenuWrapper from "../../components/product/MenuWrapper"
import About from "../../components/About"
import Reservation from "../../components/Reservation"

const Index = () => {
  return (
    <div>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
    </div>
  )
}

export default Index