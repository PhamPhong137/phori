import React, { useState, useEffect } from "react";

function Video() {
  const [padding, setPadding] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPadding(450);
    }, 2000);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <div className="bg-[#ff852f] shadow-md min-h-screen w-screen flex items-center justify-center">
        <div className=" m-auto">
            <img
              src="/logo_1.png"
              alt="Logo"
              width={150}
              height={150}
              className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                paddingBottom: padding,
                transition: "padding 1s ease-in-out",
              }}
            />
            <form
              onSubmit={handleSubmit}
              style={{
                opacity: isVisible ? 0 : 1,
                transition: "opacity 1s ease-in-out",
              }}
              className=" p-6 rounded-xl w-80"
            >
              <h2 className="text-xl text-white font-semibold text-center mb-4">
                Đăng nhập
              </h2>

              {/* Ô nhập Username */}
              <div className="mb-3">
                <label className="block text-white font-medium mb-1">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập tên..."
                  required
                />
              </div>

              {/* Ô nhập Password */}
              <div className="mb-4">
                <label className="block text-white font-medium mb-1">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập mật khẩu..."
                  required
                />
              </div>

              {/* Nút Đăng Nhập */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 border-1 border-white-500 rounded-md hover:bg-orange-600 transition duration-300"
              >
                Đăng nhập
              </button>
            </form>
        </div>
      </div>
    </>
  );
}

export default Video;
