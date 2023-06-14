import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-7">
          <div className="md:flex-1">
            <Title className="text-3xl">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-4">
              <div>
              <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Location</span>
              </div>
              <div>
              <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">Call +01 9521561161</span>
              </div>
              <div>
              <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">demo@gmail.com</span>
              </div>
            </div>
          </div>
        
        <div className="md:flex-1">
          <div>
            <Title className="text-[38px]">Feane</Title>
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea amet alias perspiciatis vitae enim, fuga eaque blanditiis optio labore.</p>
              
                <div className="flex items-center justify-center mt-5 gap-x-2">
                  <a href="" className="h-8 w-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="" className="h-8 w-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="" className="h-8 w-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="" className="h-8 w-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="" className="h-8 w-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              
          </div>
        </div>
        <div className="md:flex-1">
          <div>
            <Title className="text-3xl">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-4">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        </div>
          <p className="text-center mt-10">© 2023 All Rights Reserved By Yusuf</p>
      </div>
    </div>
  );
};

export default Footer;
