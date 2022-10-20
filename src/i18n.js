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
          book_your_appointment: "Book your appointment",
          press: "Press",
          articles: "articles",
          press_article: "press & articles",
          media_desc:
            "We invite you to follow us on our social media channels for the latest news and event updates! Be kept up to date with the freshest ideas of Peter Mason and his talented team, no matter where you are in the world.",
          watch_our_video: "Watch our videos",
          our_tailors: "các thợ may của chúng tôi",
          master_tailor: " tailor",
          tailor: "Tailor",
          testimonials: "Testimonials",
          testimonial1:
            "Trying my suit on for the first time was a really special moment. How it felt to wear and how it made me feel was amazing. Thank you so much for my wedding suit. Very enjoyable experience. On the big day the suits looked great and we had many positive comments.",
          testimonial2:
            "Hi, I just wanted to let you know that I received the suit this week and I love it. It’s been beautifully made and every detail is perfect. Please pass on my appreciation to the tailor and the team that made it. Thank you guys, you are the best. I will recommend you.",
          testimonial3:
            "This is by far the best suit I ’ve owned, and I’ve owned custom made suits before. The suit from Peter Mason fit like a glove. So did the shirt I ordered. I recommend booking an appointment to get measured properly and to choose your own fabric. You are the best!",
          our_story: "our story",
          story1:
            "Since our beginning in 1900 our goal has always been to create men’s clothing that looks great, fits perfectly, made from the world’s best fabric mills and is good value for money. Peter Mason’s success is built on understanding the principles of classic tailoring, combining them with modern designs and technology.",
          ready_to_wear: "Ready to wear",
          lastest_styles_and_trends: "The Latest Styles & Trends",
          collection_desc:
            "From shirts to formal wear we customize everything imaginable!",
          view_our_custom_collection: "View our custom collections",
          contact_info: "Contact Info",
          contact_info_desc:
            "Have a question? Our team always ready to help. Feel free and come to us anytime, we are glad to see you at our studio.",
          find_us_on_fb: "Find us on Facebook",
          find_us_on_twitter: "Find us on Twitter",
          find_us_on_ins: "Find us on Instagram",
          monday_friday: "Monday - Friday",
          sunday: "Sunday",
          send_mess: "Send Message",
          your_name: "Your name",
          your_email: "Your e-mail",
          your_mess: "Your message",
          submit: "Submit",
          gallery: "GALLERY",
          view_all_gallery: "View all Gallery",
          blog_update: "Blog update",
          top_suits: "Men’s Suit Patterns – Top Suit Patterns",
          top_10: "Top 10 Must Tries on The New Ultimate 3D.",
          november: "November",
          comment: "Comment",
          more_info: "More info",
        },
      },

      vi: {
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
            appointment: "Lịch hẹn",
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
          handcrafted1:
            "Chúng tôi cung cấp những bộ vest và áo sơ mi được thiết kế riêng chất lượng cao cho những người đàn ông nhìn thấy giá trị của vẻ ngoài sắc sảo và hào hoa. Các thợ may lành nghề của chúng tôi xử lý tất cả các khâu cắt và may của chúng tôi, đảm bảo độ chính xác trong tất cả các quy trình sản xuất với sự chú ý đến các chi tiết.",
          handcrafted2:
            "Một bộ vest luôn luôn là một sự lựa chọn sành điệu - nhưng khi nó được chế tác từ những chất liệu cao cấp. Có một bộ quần áo được làm từ các loại vải chất lượng xác định cách nó mặc và trông như thế nào. Chúng tôi đảm bảo rằng những bộ quần áo của chúng tôi sẽ phù hợp với lối sống và nhu cầu hàng ngày của bạn.",
          learn_about_us: "Đọc thêm về chúng tôi",
          about_us_desc:
            "Chúng tôi cung cấp cho bạn những bộ đồ tuyệt vời phù hợp với bạn và phong cách sống của bạn. Những bộ quần áo của chúng tôi được làm từ những loại vải chất lượng cao nhất và đảm bảo mang đến cho bạn chức năng, độ bền và sự thoải mái. Các thợ may lành nghề của chúng tôi xử lý tất cả các khâu cắt và may của chúng tôi, đảm bảo độ chính xác trong tất cả các quy trình sản xuất và chú ý đến các chi tiết. Hãy đến với chúng tôi và chọn những bộ đồ phù hợp nhất với phong cách sống của bạn.",
          our_service: "Dịch vụ của chúng tôi",
          custom_accessories: "Phụ kiện tùy chỉnh",
          custom_tailoring: "Mafy tùy chỉnh",
          suit_resizing: "Thay đổi kích thước",
          wedding_services: "Dịch vụ đám cưới",
          discover: "Khám phá",
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
          book_your_appointment: "Đặt lịch hẹn của bạn",
          press: "Báo chí",
          articles: "bài báo",
          press_article: "Báo chí và bài báo",
          media_desc:
            "Chúng tôi mời bạn theo dõi chúng tôi trên các kênh truyền thông xã hội của chúng tôi để cập nhật tin tức và sự kiện mới nhất! Luôn cập nhật những ý tưởng mới nhất của Peter Mason và đội ngũ tài năng của anh ấy, cho dù bạn ở đâu trên thế giới.",
          watch_our_video: "Xem các video của chúng tôi",
          our_tailors: "các thợ may của chúng tôi",
          master_tailor: "Thợ may chuyên nghiệp",
          tailor: "thợ may",
          testimonials: "những lời chứng thực",
          testimonial1:
            "Lần đầu tiên thử bộ đồ của tôi là một khoảnh khắc thực sự đặc biệt. Cảm giác khi mặc và nó khiến tôi cảm thấy thật tuyệt vời. Cảm ơn bạn rất nhiều vì bộ đồ cưới của tôi. Trải nghiệm rất thú vị. Vào ngày trọng đại, những bộ quần áo trông rất tuyệt và chúng tôi đã có nhiều nhận xét tích cực.",
          testimonial2:
            "Xin chào, tôi chỉ muốn cho bạn biết rằng tôi đã nhận được bộ đồ trong tuần này và tôi rất thích nó. Nó được làm rất đẹp và mọi chi tiết đều hoàn hảo. Xin hãy chuyển sự đánh giá cao của tôi đến người thợ may và đội ngũ đã làm ra nó. Cảm ơn các bạn, các bạn là tốt nhất. Tôi sẽ giới thiệu bạn.",
          testimonial3:
            "Cho đến nay, đây là bộ vest tốt nhất mà tôi sở hữu và trước đây tôi đã sở hữu những bộ đồ được đặt làm riêng. Bộ đồ của Peter Mason vừa vặn như một chiếc găng tay. Chiếc áo tôi đặt cũng vậy. Tôi khuyên bạn nên đặt một cuộc hẹn để được đo chính xác và chọn loại vải cho riêng bạn. Bạn là nhất!",
          our_story: "Câu chuyện của chúng ta",
          story1:
            "Kể từ khi bắt đầu vào năm 1900, mục tiêu của chúng tôi luôn là tạo ra quần áo nam trông đẹp, vừa vặn, được làm từ những nhà máy vải tốt nhất thế giới và đáng đồng tiền. Thành công của Peter Mason được xây dựng dựa trên sự hiểu biết các nguyên tắc may đo cổ điển, kết hợp chúng với các thiết kế và công nghệ hiện đại.",
          ready_to_wear: "Sẵn sàng để mặc",
          lastest_styles_and_trends: "Các phong cách & xu hướng mới nhất",
          collection_desc:
            "Từ áo sơ mi đến trang phục chính thức, chúng tôi tùy chỉnh mọi thứ có thể tưởng tượng được!",
          view_our_custom_collection: "xem bộ sưu tập tùy chỉnh của chúng tôi",
          contact_info: "Thông tin liên hệ",
          contact_info_desc:
            "Có một câu hỏi? Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ. Hãy thoải mái và đến với chúng tôi bất cứ lúc nào, chúng tôi rất vui khi được gặp bạn tại studio của chúng tôi.",
          find_us_on_fb: "Theo dõi chúng tôi facebook",
          find_us_on_twitter: "Theo dõi chúng tôi Twitter",
          find_us_on_ins: "Theo dõi chúng tôi Instagram",
          monday_friday: "Thứ Hai - Thứ Sáu",
          sunday: "Chủ Nhật",
          send_mess: "Gửi tin",
          your_name: "Tên của bạn",
          your_email: "tên email của bạn",
          your_mess: "Lời nhắn của bạn",
          submit: "Gửi đi",
          gallery: "Phòng trưng bày",
          view_all_gallery: "xem phòng trưng bày",
          blog_update: "Cập nhật tin tức",
          top_suits: "Các mẫu Suit nam - Các mẫu Suit hàng đầu",
          top_10: "Top 10 trò chơi phải thử trên 3D tối thượng mới.",
          november: "Tháng 11",
          comment: "bình luận",
          more_info: "Xem thêm",
        },
      },
    },
  });

export default i18n;
