// components/Header.tsx
const Header: React.FC = () => {
    return (
        <header className="bg-blue-800 p-5 flex justify-between items-center">
            <div className="text-yellow-500 text-2xl font-bold">Loot Monster Games</div>
            <nav>
                <ul className="flex space-x-5">
                    <li><a href="/" className="text-yellow-500 hover:underline">Home</a></li>
                    <li><a href="/games" className="text-yellow-500 hover:underline">Games</a></li>
                    <li><a href="/about" className="text-yellow-500 hover:underline">About Us</a></li>
                    <li><a href="/contact" className="text-yellow-500 hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
