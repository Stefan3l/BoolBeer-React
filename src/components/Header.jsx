export default function Header() {
  return (
    <div className="flex justify-between items-center py-5 bg-[#0D2227] text-white ">
      <div>
        <img src="../images/logo-beer.png" alt="Logo" className="w-32" />
      </div>
      <div>
        <ul className="flex list-unstyled gap-4 mr-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
