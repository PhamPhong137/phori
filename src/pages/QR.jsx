import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "../assets/qr.css";

export default function QR() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-expand");
            entry.target.classList.remove("opacity-0", "scale-x-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header with Logo */}
      <header className="w-full flex justify-center py-4 bg-[#ff852f] shadow-sm sticky top-0 z-10">
        <div className="flex items-center">
          <img
            src="/logo_1.png"
            alt="Biểu tượng Trang phục Dân tộc"
            className="mr-2 w-10 h-10"
          />
          <h1 className="text-xl text-white first-letter:font-bold">Phơ Ri</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full h-[70vh] relative">
        <img
          src="banner.jpg"
          alt="Trang phục Dân tộc Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Khám phá vẻ đẹp trang phục dân tộc
          </h2>
          <p className="text-center max-w-md mb-8">
            Tìm hiểu về di sản văn hóa và trang phục truyền thống của các dân
            tộc thiểu số
          </p>
          <button className="text-white border border-white px-4 py-2 hover:bg-white/20">
            Khám phá ngay
          </button>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* Content Sections that expand from left to right */}
      {[
        {
          title: "Trang phục truyền thống H'mông",
          text: "Trang phục truyền thống của người H'mông nổi tiếng với những hoa văn thêu tỉ mỉ và màu sắc rực rỡ. Mỗi họa tiết kể một câu chuyện về văn hóa, tín ngưỡng và đời sống hằng ngày của họ. Trang phục được làm thủ công bằng các kỹ thuật truyền thống được truyền lại qua nhiều thế hệ.",
          img: "/public/Hmong1.jpg",
          reverse: false,
        },
        {
          title: "Trang phục truyền thống Dao",
          text: "Trang phục của người Dao đặc trưng với những chiếc khăn đội đầu màu đỏ và trang phục nhuộm chàm. Họ còn trang trí bằng những món trang sức bạc và hoa văn thêu tay đầy màu sắc, thể hiện bản sắc văn hóa và nghệ thuật của dân tộc mình.",
          img: "/public/Dao.jpg",
          reverse: true,
        },
        {
          title: "Trang phục truyền thống Thái",
          text: "Trang phục của người Thái nổi bật với những thiết kế thanh lịch và kỹ thuật dệt tinh xảo. Phụ nữ thường mặc váy dài với hoa văn cầu kỳ và áo nhiều màu sắc, trong khi đàn ông mặc quần áo đơn giản cùng với những chiếc khăn đội đầu đặc trưng.",
          img: "public/Thai1.jpg",
          reverse: false,
        },
        {
          title: "Trang phục truyền thống TàyTày ",
          text: "Trang phục của người Thái nổi bật với những thiết kế thanh lịch và kỹ thuật dệt tinh xảo. Phụ nữ thường mặc váy dài với hoa văn cầu kỳ và áo nhiều màu sắc, trong khi đàn ông mặc quần áo đơn giản cùng với những chiếc khăn đội đầu đặc trưng.",
          img: "public/Tay.png",
          reverse: true,
        },
        {
          title: "Trang phục truyền thống Khơ me",
          text: "Trang phục của người Thái nổi bật với những thiết kế thanh lịch và kỹ thuật dệt tinh xảo. Phụ nữ thường mặc váy dài với hoa văn cầu kỳ và áo nhiều màu sắc, trong khi đàn ông mặc quần áo đơn giản cùng với những chiếc khăn đội đầu đặc trưng.",
          img: "public/kmer.jpg",
          reverse: !true,
        },
        {
          title: "Trang phục truyền thống Kinh ",
          text: "Trang phục của người Thái nổi bật với những thiết kế thanh lịch và kỹ thuật dệt tinh xảo. Phụ nữ thường mặc váy dài với hoa văn cầu kỳ và áo nhiều màu sắc, trong khi đàn ông mặc quần áo đơn giản cùng với những chiếc khăn đội đầu đặc trưng.",
          img: "public/Kinh.jpg",
          reverse: true,
        },
      ].map((section, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className={`w-full flex flex-col ${
            section.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } bg-$
            {index % 2 === 0 ? "white" : "gray-50"} my-4 opacity-0 origin-left scale-x-0 duration-700`}
        >
          <div className="w-full md:w-1/2 h-[300px] relative mx-10">
            {section.video ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={section.video} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            ) : (
              <img
                src={section.img}
                alt={section.title}
                className=" h-full object-cover pf-2"
              />
            )}
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            <p className="text-gray-700">{section.text}</p>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="w-full bg-[#d36d25] text-white p-6 mt-8">
        <div className="max-w-md mx-auto text-center">
          <h4 className="font-bold mb-4">PHƠ RI - HÀNH TRÌNH TÔN VINH VĂN HOÁ DÂN TỘC</h4>
          <p className="text-sm mb-4">
          Phơ Ri được lấy cảm hứng từ phong cách đặt tên của người dân tộc Sán Dìu. Giữa hàng trăm giá trị văn hóa truyền thống của Việt Nam, Phơ Ri được tạo nên với sứ mệnh như một hành trình, một cầu nối bản sắc giữa các dân tộc Việt Nam, nơi mà những câu chuyện văn hóa được gìn giữ,  truyền tải qua những sản phẩm độc đáo.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="text-white border border-white px-4 py-2 hover:bg-white/20">
              Liên hệ
            </button>
            <button className="text-white border border-white px-4 py-2 hover:bg-white/20">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
