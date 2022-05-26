function TopMenu() {
  return (
    <div className="testheader w-full bg-green-600">
      <div className="py-5 px-7">
        <div className="flex justify-between">
          <div className="flex items-center pr-6">
            <div className="space-x-2 px-5">(Icon?)</div>
            <div className="md:px-40 px-10">
              <ul className="flex flex-auto lg:space-x-20 space-x-4">
                <li
                  onClick="selected()"
                  className="text-center text-white bg-indigo-600 px-3.5 py-2.5 rounded"
                >
                  Home Page
                </li>
                <li
                  onClick="selected()"
                  className="text-center text-black bg-white px-2 py-2 rounded"
                >
                  Menu
                </li>
                <li
                  onClick="selected()"
                  className="text-center text-black bg-white px-2 py-2 rounded"
                >
                  Locations
                </li>
                <li
                  onClick="selected()"
                  className="text-center text-black bg-white px-2 py-2 rounded"
                >
                  About Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
