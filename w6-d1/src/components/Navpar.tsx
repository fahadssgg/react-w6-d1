export default function Navpar() {
  return (
    <div>
      <nav className="w-full rounded-b-sm px-5 py-3 bg-teal-800">
        <ol className="list-reset flex">
          <li>
            <a
              href="/"
              className="text-white font-bold transition duration-150 ease-in-out hover:text-gray-300   "
            >
              Home
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
