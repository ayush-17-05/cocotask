export default function Navbar() {
  return (
    <div className="bg-[#0f3460] text-white h-[50px] flex items-center px-6">
      {/* Logo */}
      <div className="font-extrabold text-sm mr-8">PayCollect</div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm">
        <a href="#" className="text-gray-300 hover:text-white">
          Dashboard
        </a>

        <a href="#" className="border-b-2 border-red-500 pb-[2px]">
          Collect Payments
        </a>

        <a href="#" className="text-gray-300 hover:text-white">
          Customers
        </a>

        <a href="#" className="text-gray-300 hover:text-white">
          Reports
        </a>
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center gap-4">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <span className="text-gray-300 text-sm">🔔</span>

          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Username */}
        <span className="text-xs text-gray-300 border-l border-gray-500 pl-3">
          Maria A.
        </span>

        {/* Avatar */}
        <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
          MA
        </div>
      </div>
    </div>
  );
}
