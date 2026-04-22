import { Fragment } from "react";
import { CONFIG_DATA, SECTION_COLOR_MAP } from "./config";
import { TriangleAlert } from "lucide-react";

import clsx from "clsx";
import { MathJax } from "better-react-mathjax";

const SectionContent = () => {
  return (
    <Fragment>
      {/* HERO */}
      <div className="w-full flex flex-col items-center justify-center text-center py-15 px-5">
        <span>Chính Thức · Cập Nhật 2026</span>
        <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-extrabold text-white leading-[1.2] tracking-[-0.01em] animate-[fadeDown_0.6s_ease_both]">
          Chính Sách Bảo Hành
          <br />
          <span className="text-(--blue) font-extrabold">& Hoàn Tiền</span>
        </h1>
        <p className="mt-3 text-[0.95rem] font-medium text-(--muted) animate-[fadeDown_0.6s_ease_both]">
          Việt Hà Premium Shop · Cam kết minh bạch – Phục vụ tận tâm
        </p>

        <div className="w-14 h-0.75 rounded-xs bg-linear-to-r from-(--blue) to-(--purple) mt-6 mx-auto"></div>
      </div>
      {/* ALERT */}
      <div className="relative px-6 py-4.5 w-full border rounded-xl  backdrop-blur-md flex flex-col gap-3 items-start animate-[fadeUp_0.5s_ease_both] bg-amber-900/5 border-amber-600/20 border-l-4 border-l-amber-600 hover:bg-amber-900/10 hover:border-amber-600 transition-colors duration-300">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-amber-500">
          <TriangleAlert className="size-30" />
        </div>
        <h2 className="text-amber-500 flex items-center gap-2 text-xl font-bold">
          <TriangleAlert className="size-7" /> Lưu Ý Quan Trọng
        </h2>
        <p className="w-[88%] text-lg">
          Quý khách vui lòng đọc kỹ hướng dẫn đăng nhập trước khi sử dụng dịch
          vụ.
          <span className="ml-1 mr-1 text-amber-600 font-bold uppercase">
            Đăng nhập sai hướng dẫn sẽ không được bảo hành.
          </span>
          Việc thanh toán đồng nghĩa với việc đã đọc, hiểu và đồng ý toàn bộ
          điều khoản dưới đây.
        </p>
      </div>

      {CONFIG_DATA.map((item) => {
        const color =
          SECTION_COLOR_MAP[item.color as keyof typeof SECTION_COLOR_MAP];
        return (
          <section
            key={item.id}
            className={clsx(color.section, "transition-colors duration-300")}
          >
            <div
              className={clsx(
                "px-6 pb-2.5 w-full transition-colors duration-300",
                color.headerSection,
              )}
            >
              <h2 className={clsx(color.title)}>
                <span>{item.sectionNumber}</span>
                {item.title}
              </h2>
            </div>
            <div className="px-6 pt-2.5 w-full space-y-2">
              {item.subTitle && <h3>{item.subTitle}</h3>}
              {item.content &&
                item.content.map((c) => {
                  return (
                    <div key={c.id} className="space-y-2">
                      <h4 className={clsx("font-bold text-lg", color.title)}>
                        {c.hierarchyNumber} {c.title}
                      </h4>
                      {c.subContents &&
                        c.subContents.map((sb, i) => {
                          const Icon = sb.icon;
                          const name = Icon?.displayName ?? "";

                          const checkIcons = [
                            "ShieldCheck",
                            "Check",
                            "CircleCheck",
                            "CircleCheckBig",
                          ];
                          const errorIcons = ["ShieldX", "Ban"];

                          const iconClass = checkIcons.includes(name)
                            ? color.checkIcon
                            : errorIcons.includes(name)
                              ? color.errorIcon
                              : color.title;
                          return (
                            <p key={i} className="flex items-center gap-2">
                              {Icon && <Icon className={iconClass} />}
                              {sb.description}
                            </p>
                          );
                        })}
                      {c.definitions && (
                        <div className="w-full grid grid-cols-2 grid-rows-1 gap-2">
                          {c.definitions.map((d, i) => {
                            const Icon = d.icon;
                            return (
                              <div
                                key={i}
                                className={clsx(
                                  "w-full rounded-lg px-2 py-3 border grid grid-cols-[0.2fr_1fr] grid-rows-2 gap-x-2 gap-y-0.5 transition-colors duration-300",
                                  color.definitionsSection,
                                )}
                              >
                                {Icon && (
                                  <Icon
                                    className={clsx(
                                      "size-10 row-start-1 row-end-3 col-start-1 col-end-2 place-self-center",
                                      color.title,
                                    )}
                                  />
                                )}
                                <p className="row-start-1 row-end-2 col-start-2 col-end-3 text-zinc-500 text-sm uppercase font-bold self-end">
                                  {d.tern}
                                </p>
                                <span className="row-start-2 row-end-3 col-start-2 col-end-3 text-lg font-extrabold uppercase text-white">
                                  {d.description}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {c.formula?.text?.trim() && (
                        <div
                          className={clsx(
                            "p-3 border rounded-lg pointer-events-none! select-none border-sky-400/40 bg-sky-900/10 border-t-4 border-t-sky-500",
                          )}
                        >
                          <div className="w-full border-b border-b-sky-400/40">
                            <MathJax
                              className="pointer-events-none! select-none"
                              dynamic
                            >{`$$${c.formula.text}$$`}</MathJax>
                          </div>

                          <div className="mt-2 space-y-1">
                            {c.formula.variables?.map((v, i) => (
                              <>
                                <p
                                  key={i}
                                  className=" flex items-center gap-1 text-lg"
                                >
                                  <span
                                    className={clsx(
                                      "uppercase font-bold",
                                      color.title,
                                    )}
                                  >
                                    {v.name}
                                  </span>
                                  {v.value}
                                </p>
                              </>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              {item.subContents &&
                item.subContents.map((c, i) => {
                  const Icon = c.icon;
                  const name = Icon?.displayName ?? "";

                  const checkIcons = [
                    "ShieldCheck",
                    "Check",
                    "CircleCheck",
                    "CircleCheckBig",
                  ];
                  const errorIcons = ["ShieldX", "Ban", "CircleX"];

                  const iconClass = checkIcons.includes(name)
                    ? color.checkIcon
                    : errorIcons.includes(name)
                      ? color.errorIcon
                      : color.title;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      {Icon && (
                        <span>
                          <Icon className={clsx("size-5", iconClass)} />
                        </span>
                      )}
                      <p>{c.description}</p>
                    </div>
                  );
                })}
              {item.definitions && (
                <div className="space-y-5">
                  {item.definitions.map((d, i) => {
                    const Icon = d.icon;
                    return (
                      <div
                        key={i}
                        className={clsx(
                          "flex flex-col gap-2 p-3 border rounded-lg transition-colors duration-300",
                          color.definitionsSection,
                        )}
                      >
                        <span
                          className={clsx(
                            "flex items-center gap-2 font-bold text-lg",
                            color.title,
                          )}
                        >
                          {Icon && <Icon />} {d.term}
                        </span>
                        <p>{d.description}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </Fragment>
  );
};

export default SectionContent;
