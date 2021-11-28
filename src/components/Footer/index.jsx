import Container from '@/components/Container';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-200 text-xs py-2 text-gray-700 text-center">
      <Container>&copy; Copyright, All rights reserved {year}</Container>
    </div>
  );
};

export default Footer;
