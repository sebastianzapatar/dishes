// components/Navbar.jsx
import Link from 'next/link';

export default function TheMostCalidosoMenu() {
  return (
    <nav className="bg-red-700 p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">El super Front :D</div>
        <div>
          <Link href="/dishes" className="text-white px-4 py-2 hover:bg-red-600 rounded">
            Dishes
          </Link>
          <Link href="/adddish" className="text-white px-4 py-2 hover:bg-red-600 rounded">
            Add Dish
          </Link>
          <Link href="/about" className="text-white px-4 py-2 hover:bg-red-600 rounded">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
