import FlexContainer from "../components/layout/FlexContainer"
import Title from "../components/ui/Title"
import workspace from "../../public/assets/hero.jpg";
const Workspaces = () => {
  return (
    <div className="container">
      <Title>Workspaces</Title>
      <FlexContainer
        imageSrc={workspace}
        imageAlt="Hero Section SVG"
        imageWidth={1200}
        imageHeight={1200}
        title="Byte Basha"
        description="At ByteBasha, we pride ourselves on being leaders in the digital landscape, providing cutting-edge software services, comprehensive e-commerce solutions, and top-tier tech skill training. Our name, ByteBasha, combines the digital essence of Byte with Basha, a title of respect, reflecting our commitment to excellence and authority in the tech industry."
      />
    </div>
  )
}

export default Workspaces