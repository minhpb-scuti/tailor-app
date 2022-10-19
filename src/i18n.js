import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            home: "Home",
            features: "Features",
            about: "About",
            suits: "Suits",
            news: "News",
            contacts: "Contacts",
            homepage_fullwidth: "Homepage Fullwidth",
            homepage_shop: "Homepage Shop",
            homepage_boxed: "Homepage Boxed",
            pages: "Page",
            tools: "Tools",
            appointment: "Appointment",
            style1: "Style1",
            style2: "Style2",
            classic: "Classic",
            chess: "Chess",
            portfolio: "Portfolio",
            gallery: "Gallery",
            grid: "Grid",
            masonry: "Masonry",
            make_an_appointment: "Make an appointment",
            items: "items",
            money: "$",
            search: "Search",
          },
          collection_by_store: "Collections by tailor store",
          lastest_arrivals: "Latest arrivals",
          top_reasons: "Top reasons to choose tailored",
          recent_products: "Recent products",
          online_store: "online store",
          buy_now: "Buy Now",
          save_60: "Save up to 60%",
          learn_more: "learn more",
          top_sellers: "Top Sellers",
          styles: "Styles",
          and: "and",
          trends: "Trends",
          embrace: "Embrace",
          your: "Your",
          custom: "Custom",
          made: "Made",
          discover_more: "discover more",
          view_our_blog: "View Our Blog",
          book_an_appointment: "Book an Appointment",
          discovery_quality: "Discover true Quality",
          handcrafted_suit: "HANDCRAFTED Suit",
          learn_about_us: "Learn about us",
          about_us_desc:
            "We provide you with great suits that befit you and your lifestyle. Our suits are made from the highest quality fabrics and guaranteed to give you functionality, durability and comfort. Our skilled master tailors handle all of our cutting and sewing, ensuring precision in all production processes and paying attention to the details. Come to us and choose the best suit for your lifestyle.",
          our_service: "Our services",
          custom_accessories: "Custom Accessories",
          custom_tailoring: "Custom Tailoring",
          suit_resizing: "Suit Resizing",
          wedding_services: "Wedding Services",
          discover: "Discover",
          custom_acc_desc:
            "We have a wide range of bow ties which fit everyday fashion as well as special occasions",
          custom_tailor_desc:
            "You can choose all details you want, from buttons to pockets and lapels, we can do everything",
          suit_resizing_desc:
            "Each our suit is made to your exact measurements and fit your specific body type",
          wedding_service_desc:
            "You and your groomsmen deserve the sharpest suits. Let us help you create suits for your day.",
          your_design_we_deliver: "Your Design, We deliver",
          your_design_we_deliver_desc:
            "Providing you with maximum level of comfort & confidence in every suit!",
          peter_in_media: "peter in the media",
          book_your_appointment: 'Book your appointment',
          press: 'Press',
          articles: 'articles'
        },
      },
      vn: {
        translation: {
          header: {
            home: "Trang chủ",
            features: "Tính năng",
            about: "Về chúng tôi",
            suits: "Trang phục",
            news: "Tin tức",
            contacts: "Liên hệ",
            homepage_fullwidth: "Toàn bộ chiều rộng của trang chủ",
            homepage_shop: "Cửa hàng trang chủ",
            homepage_boxed: "Trang chủ được đóng hộp",
            pages: "Trang",
            tools: "Công cụ",
            appointment: "Cuộc hẹn",
            style1: "Phong cách 1",
            style2: "Phong cách 2",
            classic: "Cổ điển",
            chess: "Cờ vua",
            portfolio: "Danh mục đầu tư",
            gallery: "Phòng trưng bày",
            grid: "Lưới",
            masonry: "Nề",
            make_an_appointment: "Đặt một lịch hẹn",
            items: "sản phẩm",
            money: "VND",
            search: "Tìm kiếm",
          },
          collection_by_store: "Bộ sưu tập của cửa hàng may đo",
          lastest_arrivals: "Hàng mới nhất",
          top_reasons: "Những lý do hàng đầu để chọn phù hợp",
          online_store: "cửa hàng trực tuyến",
          recent_products: "Sản phẩm mới",
          buy_now: "Mua ngay",
          save_60: "Tiết kiệm tới 60%",
          learn_more: "Đọc thêm",
          top_sellers: "Bán chạy nhất",
          styles: "Phong cách",
          and: "và",
          trends: "Trào lưu",
          discover_more: "phát hiện",
          view_our_blog: "Xem Blog của chúng tôi",
          book_an_appointment: "Đặt lịch hẹn",
          discovery_quality: "Khám phá chất lượng thực sự",
          handcrafted_suit: "Bộ đồ THỦ CÔNG",
          learn_about_us: "Đọc thêm về chúng tôi",
          about_us_desc:
            "Chúng tôi cung cấp cho bạn những bộ đồ tuyệt vời phù hợp với bạn và phong cách sống của bạn. Những bộ quần áo của chúng tôi được làm từ những loại vải chất lượng cao nhất và đảm bảo mang đến cho bạn chức năng, độ bền và sự thoải mái. Các thợ may lành nghề của chúng tôi xử lý tất cả các khâu cắt và may của chúng tôi, đảm bảo độ chính xác trong tất cả các quy trình sản xuất và chú ý đến các chi tiết. Hãy đến với chúng tôi và chọn những bộ đồ phù hợp nhất với phong cách sống của bạn.",
          our_service: "Dịch vụ của chúng tôi",
          custom_accessories: "Phụ kiện tùy chỉnh",
          custom_tailoring: "Mafy tùy chỉnh",
          suit_resizing: "Thay đổi kích thước",
          wedding_services: "Dịch vụ đám cưới",
          disscover: "Khám phá",
          custom_acc_desc:
            "Chúng tôi có nhiều loại nơ phù hợp với thời trang hàng ngày cũng như những dịp đặc biệt",
          custom_tailor_desc:
            "Bạn có thể chọn tất cả các chi tiết bạn muốn, từ nút đến túi và ve áo, chúng tôi có thể làm mọi thứ",
          suit_resizing_desc:
            "Mỗi bộ quần áo của chúng tôi được làm theo số đo chính xác của bạn và phù hợp với loại cơ thể cụ thể của bạn",
          wedding_service_desc:
            "Bạn và dàn phù rể xứng đáng được diện những bộ vest chỉn chu nhất. Hãy để chúng tôi giúp bạn tạo ra những bộ quần áo cho ngày của bạn.",
          your_design_we_deliver: "Thiết kế của bạn, Chúng tôi cung cấp",
          your_design_we_deliver_desc:
            "Mang đến cho bạn sự thoải mái và tự tin tối đa trong mọi bộ đồ!",
          peter_in_media: "peter trên các phương tiện truyền thông",
          book_your_appointment: 'Đặt lịch hẹn của bạn',
          press: 'Báo chí',
          articles: 'bài báo'
        },
      },
    },
  });

export default i18n;
