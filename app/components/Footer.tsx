import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t-1  text-center py-6 mt-10">
      <h2 className=" flex item-center justify-center text-center text-lg text-gray-500">
        <span className="font-bold">Spark</span>
        <Image
          src="/Union.svg"
          alt="Create Invoice"
          width={10}
          height={10}
          className=""
        />
        <span>nomy</span>
      </h2>
      <p className="text-sm text-gray-600">sparking the creator economy.</p>
    </footer>
  );
};

export default Footer;
