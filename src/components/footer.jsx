
const navigation = [
  { name: "About Us", href: "about" },
  { name: "Services", href: "services" },
  { name: "Values", href: "values" },
  { name: "Blog", href: "#" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
        <ul className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <li
                key={item.href}
                className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
              >
                <a href={`#${item.href}`} preventScrollReset={true}>{item.name}</a>
              </li>
            ))}
            </ul>
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