
const links = ["About Us", "Events", "Projects", "Blog", "Join Us"];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-28">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <span
                  as="a"
                  href="#"
                  color="white"
                  className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                >
                  {link}
                </span>
              </li>
            </ul>
          ))}
        </div>
        <span
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} SOWO
        </span>
      </div>
    </footer>
  );
}
export default Footer;