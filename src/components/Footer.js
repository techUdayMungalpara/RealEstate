const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-black py-8 text-center text-white  ">
      <div className="container mx-auto ">
        {`        Copyright &copy: ${date.getFullYear()} ,All rights reserved
`}{" "}
      </div>
    </footer>
  );
};

export default Footer;
