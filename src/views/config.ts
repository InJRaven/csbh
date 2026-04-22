import {
  ActivityIcon,
  Ban,
  Binary,
  CalendarDays,
  CircleCheckBig,
  CircleFadingArrowUp,
  CircleUserRound,
  CircleX,
  ClockFading,
  Landmark,
  Mails,
  SendHorizontal,
  ShieldCheck,
  ShieldX,
  Timer,
} from "lucide-react";

export const CONFIG_DATA = [
  {
    id: "pham-vi-ap-dung",
    sectionNumber: "I.",
    title: "Phạm vi áp dụng",
    color: "Rose",
    subContents: [
      {
        icon: null,
        description:
          "Chính sách này áp dụng cho toàn bộ khách hàng mua sản phẩm và dịch vụ tại Việt Hà Premium Shop.",
      },
      {
        icon: null,
        description:
          "Việc khách hàng thực hiện thanh toán đồng nghĩa với việc đã đọc, hiểu và đồng ý toàn bộ các điều khoản trong chính sách này.",
      },
    ],
    definitions: [],
    content: [],
  },
  {
    id: "dinh-nghia-dich-vu",
    sectionNumber: "II.",
    title: "Định nghĩa dịch vụ",
    color: "Teal",
    subContents: [],
    definitions: [
      {
        icon: CircleUserRound,
        term: "Tài khoản",
        description:
          "Tài khoản dùng chung hoặc cá nhân do shop cấp cho khách hàng.",
      },
      {
        icon: Binary,
        term: "Mã kích hoạt",
        description: "Key dùng để kích hoạt dịch vụ premium cho tài khoản.",
      },
      {
        icon: CircleFadingArrowUp,
        term: "Nâng cấp",
        description:
          "Thêm quyền truy cập premium vào tài khoản của khách hàng.",
      },
      {
        icon: ActivityIcon,
        term: "Kích hoạt thành công",
        description: "Trạng thái có thể đăng nhập và sử dụng đầy đủ dịch vụ.",
      },
      {
        icon: Timer,
        term: "Thời gian sử dụng",
        description: "Được tính từ thời điểm kích hoạt thành công.",
      },
    ],
    content: [],
  },
  {
    id: "chinh-sach-bao-hanh",
    sectionNumber: "III.",
    title: "Chính sách bảo hành",
    color: "Indigo",
    subContents: [],
    definitions: [],
    content: [
      {
        id: "dieu-kien-bao-hanh",
        hierarchyNumber: "3.1.",
        title: "Điều kiện bảo hành",
        subContents: [
          {
            icon: ShieldCheck,
            description: "Sản phẩm còn thời gian bảo hành.",
          },
          {
            icon: ShieldCheck,
            description: "Lỗi phát sinh từ phía hệ thống hoặc nhà cung cấp.",
          },
        ],
        definitions: [],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
      {
        id: "khong-bao-hanh",
        hierarchyNumber: "3.2.",
        title: "Không bảo hành trong các trường hợp",
        subContents: [
          {
            icon: ShieldX,
            description: "Khách đăng nhập sai hướng dẫn.",
          },
          {
            icon: ShieldX,
            description: "Tự ý thay đổi thông tin tài khoản.",
          },
          {
            icon: ShieldX,
            description: "Chia sẻ tài khoản vượt quy định.",
          },
          {
            icon: ShieldX,
            description: "Bị nhà cung cấp khóa do vi phạm chính sách.",
          },
        ],
        definitions: [],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
      {
        id: "phuong-thuc-bao-hanh",
        hierarchyNumber: "3.3.",
        title: "Phương thức bảo hành",
        subContents: [
          {
            icon: SendHorizontal,
            description: "Ưu tiên sửa trực tiếp tài khoản.",
          },
          {
            icon: SendHorizontal,
            description: "Nếu không xử lý được thì cấp tài khoản tương đương.",
          },
          {
            icon: SendHorizontal,
            description: "Không hoàn tiền ngay khi vẫn còn phương án bảo hành.",
          },
        ],
        definitions: [],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
      {
        id: "thoi-gian-xu-ly-bao-hanh",
        hierarchyNumber: "3.4.",
        title: "Thời gian xử lý",
        subContents: [],
        definitions: [
          {
            icon: ClockFading,
            tern: "Thời gian tối đa",
            description: "7 ngày làm việc",
          },
          {
            icon: Mails,
            tern: "Tính từ khi",
            description: "Tiếp nhận lỗi",
          },
        ],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
    ],
  },
  {
    id: "chinh-sach-hoan-tien",
    sectionNumber: "IV.",
    title: "Chính sách hoàn tiền",
    color: "Sky",
    subContents: [],
    definitions: [],
    content: [
      {
        id: "dieu-kien-hoan-tien",
        hierarchyNumber: "4.1",
        title: "Điều kiện hoàn tiền",
        subContents: [
          {
            icon: CircleCheckBig,
            description: "Không thể bảo hành sau 07 ngày.",
          },
          {
            icon: CircleCheckBig,
            description: "Có yêu cầu hợp lệ từ khách hàng.",
          },
        ],
        definitions: [],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
      {
        id: "nguyen-tac-hoan-tien",
        hierarchyNumber: "4.2",
        title: "Nguyên tắc hoàn tiền",
        subContents: [
          {
            icon: CircleCheckBig,
            description: "Hoàn tiền theo thời gian chưa sử dụng.",
          },
          {
            icon: CircleCheckBig,
            description: "Giá trị chia đều theo tháng.",
          },
        ],
        definitions: [],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
      {
        id: "cong-thuc-hoan-tien",
        hierarchyNumber: "4.3",
        title: "Công thức hoàn tiền",
        formula: {
          text: "\\text{TIỀN HOÀN} = \\frac{\\text{Tổng Giá Trị} - 7\\%\\text{ Thuế} - 20{,}000\\text{ Phí Thiết Lập}}{\\text{Tổng Thời Gian Hiệu Lực Của Gói}} \\times \\text{Số Ngày Chưa Sử Dụng}",
          variables: [
            { name: "thuế:", value: "45.500đ" },
            {
              name: "Phí thiết lập:",
              value: "20.000đ (Tạo mail, OTP, hệ thống…)",
            },
          ],
        },
        definitions: [],
      },
      {
        id: "quy-tac-tinh-thoi-gian",
        hierarchyNumber: "4.4",
        title: "Quy tắc tính thời gian",
        subContents: [
          {
            icon: null,
            description: "Tính từ lúc kích hoạt thành công.",
          },
          {
            icon: null,
            description: "Áp dụng nguyên tắc: Trả trước – sử dụng sau.",
          },
          {
            icon: null,
            description:
              "Tháng đã kích hoạt được xem là đã sử dụng và không hoàn.",
          },
        ],
        definitions: [],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
      {
        id: "khong-hoan-tien",
        hierarchyNumber: "4.5",
        title: "Không hoàn tiền đối với",
        subContents: [
          {
            icon: Ban,
            description: "Thuế.",
          },
          {
            icon: Ban,
            description: "Phí thiết lập.",
          },
          {
            icon: Ban,
            description: "Thời gian đã sử dụng.",
          },
          {
            icon: Ban,
            description: "Các gói dùng chung, trừ khi lỗi từ shop.",
          },
          {
            icon: Ban,
            description: "Trường hợp khách không muốn sử dụng nữa.",
          },
        ],
        definitions: [],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
      {
        id: "thoi-gian-hoan-tien",
        hierarchyNumber: "4.6",
        title: "Thời gian hoàn tiền",
        subContents: [],
        definitions: [
          {
            icon: CalendarDays,
            tern: "Xử lý trong vòng ",
            description: "07 ngày làm việc.",
          },
          {
            icon: Landmark,
            tern: "Hoàn Về Tài Khoản",
            description: "Trùng thông tin người mua.",
          },
        ],
        formula: {
          text: "",
          variables: [
            { name: "", value: "" },
            {
              name: "",
              value: "",
            },
          ],
        },
      },
    ],
  },
  {
    id: "chinh-sach-doi-san-pham",
    sectionNumber: "V.",
    title: "Chính sách đổi sản phẩm",
    subTitle:
      "Áp dụng trong trường hợp không thể thực hiện bảo hành. Khách hàng có thể lựa chọn một trong các phương án:",
    color: "Cyan",
    subContents: [
      { icon: SendHorizontal, description: "Đổi tài khoản tương đương." },
      {
        icon: SendHorizontal,
        description: "Đổi sang gói khác, bù hoặc hoàn chênh lệch.",
      },
      { icon: SendHorizontal, description: "Hoặc hoàn tiền theo chính sách." },
    ],
    definitions: [],
    content: [],
  },
  {
    id: "gioi-han-trach-nhiem",
    sectionNumber: "VI.",
    title: "Giới hạn trách nhiệm",
    color: "Fuchsia",
    subTitle:
      "Việt Hà Premium Shop không chịu trách nhiệm trong các trường hợp sau:",
    subContents: [
      {
        icon: CircleX,
        description: "Lỗi từ nền tảng gốc như Google, OpenAI, Netflix, v.v.",
      },
      {
        icon: CircleX,
        description: "Tài khoản bị thu hồi do chính sách nhà cung cấp.",
      },
      {
        icon: CircleX,
        description: "Mất dữ liệu, lịch sử chat, file lưu trữ.",
      },
      {
        icon: CircleX,
        description: "Gián đoạn dịch vụ do thay đổi hệ thống.",
      },
    ],
    definitions: [],
    content: [],
  },
  {
    id: "dieu-khoan-rang-buoc",
    sectionNumber: "VII.",
    title: "Điều khoản ràng buộc",
    color: "Orange",
    subContents: [
      {
        icon: SendHorizontal,
        description: "Chính sách có thể cập nhật bất kỳ lúc nào.",
      },
      {
        icon: SendHorizontal,
        description: "Phiên bản mới nhất sẽ được áp dụng.",
      },
      {
        icon: SendHorizontal,
        description:
          "Trong mọi trường hợp, quyết định của Việt Hà Premium Shop là quyết định cuối cùng.",
      },
    ],
    definitions: [],
    content: [],
  },
  {
    id: "giai-quyet-tranh-chap",
    sectionNumber: "VIII.",
    title: "Giải quyết tranh chấp",
    color: "Purple",
    subContents: [
      {
        icon: SendHorizontal,
        description: "Ưu tiên thương lượng giữa 2 bên.",
      },
      {
        icon: SendHorizontal,
        description:
          "Nếu không đạt thỏa thuận thì xử lý theo quy định pháp luật Việt Nam.",
      },
    ],
    definitions: [],
    content: [],
  },
];

export const SECTION_COLOR_MAP = {
  Rose: {
    section:
      "bg-rose-900/5 border-rose-600/20 border-l-rose-600 hover:bg-rose-900/10 hover:border-rose-600 [&:hover>div]:border-b-rose-600",
    headerSection: "border-b border-b-rose-600/20",
    title: "text-rose-400",
    checkIcon: "",
    errorIcon: "",
    definitionsSection: "",
    definitionsTitle: "",
  },
  Teal: {
    section:
      "bg-teal-900/5 border-teal-600/20 border-l-teal-600 hover:bg-teal-900/10 hover:border-teal-600 [&:hover>div]:border-b-teal-600",
    headerSection: "border-b border-b-teal-600/20",
    title: "text-teal-400",
    checkIcon: "",
    errorIcon: "",
    definitionsSection:
      "border-teal-400/10 bg-teal-900/10 hover:bg-teal-800/10 hover:border-teal-400/50",
    definitionsTitle: "",
  },
  Indigo: {
    section:
      "bg-indigo-900/5 border border-indigo-600/20 border-l-4 border-l-indigo-600 hover:bg-indigo-900/10 hover:border-indigo-600 [&:hover>div]:border-b-indigo-600",
    headerSection: "border-b border-b-indigo-600/20",
    title: "text-indigo-300",
    checkIcon: "text-green-400",
    errorIcon: "text-red-400",
    definitionsSection:
      "border-indigo-400/10 bg-indigo-900/10 hover:bg-indigo-800/10 hover:border-indigo-400/50",
    definitionsTitle: "",
  },
  Sky: {
    section:
      "bg-sky-900/5 border border-sky-600/20 border-l-4 border-l-sky-600 hover:bg-sky-900/10 hover:border-sky-600 [&:hover>div]:border-b-sky-600",
    headerSection: "border-b border-b-sky-600/20",
    title: "text-sky-300",
    checkIcon: "text-green-400",
    errorIcon: "text-red-400",
    definitionsSection:
      "border-sky-400/10 bg-sky-900/10 hover:bg-sky-800/10 hover:border-sky-400/50",
    definitionsTitle: "",
  },
  Cyan: {
    section:
      "bg-cyan-900/5 border border-cyan-600/20 border-l-4 border-l-cyan-600 hover:bg-cyan-900/10 hover:border-cyan-600 [&:hover>div]:border-b-cyan-600",
    headerSection: "border-b border-b-cyan-600/20",
    title: "text-cyan-300",
    checkIcon: "",
    errorIcon: "",
    definitionsSection: "",
    definitionsTitle: "",
  },
  Fuchsia: {
    section:
      "bg-fuchsia-900/5 border border-fuchsia-600/20 border-l-4 border-l-fuchsia-600 hover:bg-fuchsia-900/10 hover:border-fuchsia-600 [&:hover>div]:border-b-fuchsia-600",
    headerSection: "border-b border-b-fuchsia-600/20",
    title: "text-fuchsia-300",
    checkIcon: "text-green-500",
    errorIcon: "text-red-500",
    definitionsSection: "",
    definitionsTitle: "",
  },
  Orange: {
    section:
      "bg-orange-900/5 border border-orange-600/20 border-l-4 border-l-orange-600 hover:bg-orange-900/10 hover:border-orange-600 [&:hover>div]:border-b-orange-600",
    headerSection: "border-b border-b-orange-600/20",
    title: "text-orange-300",
    checkIcon: "text-green-500",
    errorIcon: "text-red-500",
    definitionsSection: "",
    definitionsTitle: "",
  },
  Purple: {
    section:
      "bg-purple-900/5 border border-purple-600/20 border-l-4 border-l-purple-600 hover:bg-purple-900/10 hover:border-purple-600 [&:hover>div]:border-b-purple-600",
    headerSection: "border-b border-b-purple-600/20",
    title: "text-purple-300",
    checkIcon: "",
    errorIcon: "",
    definitionsSection: "",
    definitionsTitle: "",
  },
} as const;
