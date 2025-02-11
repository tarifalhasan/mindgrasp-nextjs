import Image from "next/image";
import Link from "next/link";
import { IoCallSharp, IoLocationSharp, IoMail } from "react-icons/io5";
import { Button } from "../ui/button";

const Footer = () => {
  const lists = [
    {
      title: "Useful Links",
      links: [
        {
          href: "/",
          label: "Home",
        },
        {
          href: "/",
          label: "How to",
        },
        {
          href: "/blogs",
          label: "Blog",
        },
        {
          href: "/values",
          label: "Values",
        },
      ],
    },
    {
      title: "Quick links",
      links: [
        {
          href: "/",
          label: "Pricing",
        },
        {
          href: "/",
          label: "Terms and conditions",
        },
        {
          href: "/blogs",
          label: "Our Clients",
        },
        {
          href: "/values",
          label: "Gallery",
        },
        {
          href: "/values",
          label: "Contact Us",
        },
      ],
    },
  ];
  return (
    <div className=" relative">
      <footer className="  mt-[10rem] footer-clip bg-skin-dark-100 relative  x] ">
        <div className="container relative z-30 pt-[10rem] lg:pt-[17rem]">
          <div className=" flex items-start lg:flex-row flex-col justify-between gap-10 flex-wrap">
            <div>
              <Link href={"/"}>
                <Image
                  width={180}
                  height={40}
                  src={"/images/white-logo.svg"}
                  alt="mg"
                />
              </Link>
            </div>
            {lists.map((list, index) => (
              <div key={list.title}>
                <h4 className=" text-lg font-medium text-white sm:text-xl">
                  {list.title}
                </h4>
                <ul className=" pt-4 space-y-4">
                  {list.links.map((link, index) => (
                    <li key={link.label}>
                      <Link
                        className=" text-sm sm:text-lg text-white font-normal hover:underline transition-all hover:text-skin-blue"
                        href={"/"}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className=" text-lg font-medium text-white sm:text-xl">
                Contact info
              </h4>
              <ul className=" pt-4 space-y-4">
                <li className=" flex  gap-x-1">
                  <IoLocationSharp className=" text-2xl text-white" />
                  <span className=" text-sm sm:text-lg font-normal text-skin-gray-200">
                    6751 Columbia Gateway Dr <br /> STE 300 <br /> Columbia, MD
                    21045
                  </span>
                </li>
                <li className=" flex  gap-x-1">
                  <IoMail className=" text-2xl text-white" />
                  <span className=" text-sm sm:text-lg font-normal text-skin-gray-200">
                    contact@mindgrasp.ai
                  </span>
                </li>{" "}
                <li className=" flex  gap-x-1">
                  <IoCallSharp className=" text-2xl text-white" />
                  <span className=" text-sm sm:text-lg font-normal text-skin-gray-200">
                    +1(778) 451- 0000
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" mt-14 border-t border-white/[0.2] py-5  flex items-center justify-between">
            <p className=" text-xs lg:text-lg text-white font-normal]">
              © 2023. All rights reserved
            </p>
            <ul className=" inline-flex items-center gap-x-4">
              <Link href={"/"} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_1472)">
                    <path
                      d="M18.375 0.507812H5.625C2.5184 0.507812 0 3.02621 0 6.13281V18.8828C0 21.9894 2.5184 24.5078 5.625 24.5078H18.375C21.4816 24.5078 24 21.9894 24 18.8828V6.13281C24 3.02621 21.4816 0.507812 18.375 0.507812Z"
                      fill="url(#paint0_radial_0_1472)"
                    />
                    <path
                      d="M18.375 0.507812H5.625C2.5184 0.507812 0 3.02621 0 6.13281V18.8828C0 21.9894 2.5184 24.5078 5.625 24.5078H18.375C21.4816 24.5078 24 21.9894 24 18.8828V6.13281C24 3.02621 21.4816 0.507812 18.375 0.507812Z"
                      fill="url(#paint1_radial_0_1472)"
                    />
                    <path
                      d="M12.0008 3.13281C9.45478 3.13281 9.13519 3.14397 8.13525 3.18944C7.13719 3.23519 6.45591 3.39316 5.85984 3.625C5.24316 3.86444 4.72013 4.18478 4.19906 4.70603C3.67753 5.22719 3.35719 5.75022 3.117 6.36662C2.8845 6.96287 2.72634 7.64444 2.68144 8.64203C2.63672 9.64206 2.625 9.96175 2.625 12.5079C2.625 15.0541 2.63625 15.3726 2.68163 16.3726C2.72756 17.3706 2.88553 18.0519 3.11719 18.648C3.35681 19.2647 3.67716 19.7877 4.19841 20.3088C4.71938 20.8303 5.24241 21.1514 5.85862 21.3908C6.45516 21.6227 7.13653 21.7806 8.13441 21.8264C9.13444 21.8718 9.45375 21.883 11.9997 21.883C14.5461 21.883 14.8646 21.8718 15.8646 21.8264C16.8626 21.7806 17.5447 21.6227 18.1412 21.3908C18.7576 21.1514 19.2799 20.8303 19.8007 20.3088C20.3223 19.7877 20.6425 19.2647 20.8828 18.6483C21.1133 18.0519 21.2715 17.3704 21.3184 16.3727C21.3633 15.3728 21.375 15.0541 21.375 12.5079C21.375 9.96175 21.3633 9.64225 21.3184 8.64222C21.2715 7.64416 21.1133 6.96297 20.8828 6.36691C20.6425 5.75022 20.3223 5.22719 19.8007 4.70603C19.2793 4.18459 18.7578 3.86425 18.1406 3.62509C17.543 3.39316 16.8613 3.23509 15.8632 3.18944C14.8632 3.14397 14.5448 3.13281 11.9979 3.13281H12.0008ZM11.1598 4.82228C11.4095 4.82191 11.688 4.82228 12.0008 4.82228C14.5041 4.82228 14.8007 4.83128 15.7892 4.87619C16.7032 4.918 17.1994 5.07072 17.5298 5.19906C17.9674 5.36894 18.2793 5.57209 18.6072 5.90031C18.9353 6.22844 19.1384 6.54091 19.3088 6.97844C19.4371 7.30844 19.59 7.80456 19.6316 8.71863C19.6765 9.70694 19.6863 10.0037 19.6863 12.5057C19.6863 15.0077 19.6765 15.3047 19.6316 16.2929C19.5898 17.2069 19.4371 17.7031 19.3088 18.0332C19.1389 18.4707 18.9353 18.7822 18.6072 19.1102C18.2791 19.4383 17.9676 19.6413 17.5298 19.8113C17.1997 19.9402 16.7032 20.0926 15.7892 20.1344C14.8009 20.1793 14.5041 20.189 12.0008 20.189C9.49753 20.189 9.20081 20.1793 8.21259 20.1344C7.29853 20.0922 6.80241 19.9395 6.47166 19.8111C6.03422 19.6412 5.72166 19.4381 5.39353 19.11C5.06541 18.7818 4.86234 18.4701 4.692 18.0324C4.56366 17.7023 4.41075 17.2062 4.36913 16.2921C4.32422 15.3038 4.31522 15.007 4.31522 12.5034C4.31522 9.99991 4.32422 9.70459 4.36913 8.71628C4.41094 7.80222 4.56366 7.30609 4.692 6.97562C4.86197 6.53809 5.06541 6.22563 5.39363 5.8975C5.72175 5.56938 6.03422 5.36622 6.47175 5.19597C6.80222 5.06706 7.29853 4.91472 8.21259 4.87272C9.07744 4.83362 9.41259 4.82191 11.1598 4.81994V4.82228ZM17.0052 6.37891C16.3841 6.37891 15.8802 6.88234 15.8802 7.50353C15.8802 8.12463 16.3841 8.62853 17.0052 8.62853C17.6263 8.62853 18.1302 8.12463 18.1302 7.50353C18.1302 6.88244 17.6263 6.37853 17.0052 6.37853V6.37891ZM12.0008 7.69338C9.34209 7.69338 7.18641 9.84906 7.18641 12.5079C7.18641 15.1668 9.34209 17.3214 12.0008 17.3214C14.6597 17.3214 16.8146 15.1668 16.8146 12.5079C16.8146 9.84916 14.6595 7.69338 12.0007 7.69338H12.0008ZM12.0008 9.38284C13.7267 9.38284 15.1259 10.7819 15.1259 12.5079C15.1259 14.2338 13.7267 15.633 12.0008 15.633C10.2749 15.633 8.87588 14.2338 8.87588 12.5079C8.87588 10.7819 10.2749 9.38284 12.0008 9.38284Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial_0_1472"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(6.375 26.3563) rotate(-90) scale(23.7858 22.1227)"
                    >
                      <stop stopColor="#FFDD55" />
                      <stop offset="0.1" stopColor="#FFDD55" />
                      <stop offset="0.5" stopColor="#FF543E" />
                      <stop offset={1} stopColor="#C837AB" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_0_1472"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(-4.02009 2.23666) rotate(78.681) scale(10.6324 43.827)"
                    >
                      <stop stopColor="#3771C8" />
                      <stop offset="0.128" stopColor="#3771C8" />
                      <stop offset={1} stopColor="#6600FF" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clip0_0_1472">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(0 0.507812)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={"/"} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_1477)">
                    <path
                      d="M18.375 0.507812H5.625C2.5184 0.507812 0 3.02621 0 6.13281V18.8828C0 21.9894 2.5184 24.5078 5.625 24.5078H18.375C21.4816 24.5078 24 21.9894 24 18.8828V6.13281C24 3.02621 21.4816 0.507812 18.375 0.507812Z"
                      fill="white"
                    />
                    <path
                      d="M18.375 0.507812H5.625C2.5184 0.507812 0 3.02621 0 6.13281V18.8828C0 21.9894 2.5184 24.5078 5.625 24.5078H18.375C21.4816 24.5078 24 21.9894 24 18.8828V6.13281C24 3.02621 21.4816 0.507812 18.375 0.507812Z"
                      fill="#026AA2"
                    />
                    <path
                      d="M17.317 20.9158H20.0611C20.1605 20.9158 20.2559 20.8763 20.3262 20.806C20.3965 20.7357 20.4361 20.6403 20.4361 20.5409L20.4375 14.7432C20.4375 11.7129 19.7845 9.38369 16.2433 9.38369C14.8972 9.33363 13.6277 10.0276 12.9427 11.1863C12.9393 11.1919 12.9342 11.1963 12.9281 11.1988C12.9221 11.2012 12.9154 11.2016 12.909 11.1999C12.9027 11.1982 12.8971 11.1945 12.8931 11.1893C12.8891 11.1841 12.8869 11.1778 12.8869 11.1712V10.0384C12.8869 9.93898 12.8474 9.8436 12.777 9.77327C12.7067 9.70295 12.6113 9.66344 12.5119 9.66344H9.90778C9.80832 9.66344 9.71294 9.70295 9.64262 9.77327C9.57229 9.8436 9.53278 9.93898 9.53278 10.0384V20.5403C9.53278 20.6398 9.57229 20.7352 9.64262 20.8055C9.71294 20.8758 9.80832 20.9153 9.90778 20.9153H12.6517C12.7511 20.9153 12.8465 20.8758 12.9168 20.8055C12.9871 20.7352 13.0267 20.6398 13.0267 20.5403V15.3491C13.0267 13.8813 13.3051 12.4597 15.1249 12.4597C16.9188 12.4597 16.942 14.1393 16.942 15.4442V20.5408C16.942 20.6402 16.9815 20.7356 17.0519 20.8059C17.1222 20.8763 17.2176 20.9158 17.317 20.9158ZM3.5625 6.09784C3.5625 7.21019 4.47816 8.12537 5.5905 8.12537C6.70256 8.12528 7.61766 7.20953 7.61766 6.09747C7.61747 4.98541 6.70228 4.07031 5.59012 4.07031C4.47769 4.07031 3.5625 4.98559 3.5625 6.09784ZM4.21491 20.9158H6.96244C7.06189 20.9158 7.15728 20.8763 7.2276 20.8059C7.29793 20.7356 7.33744 20.6402 7.33744 20.5408V10.0384C7.33744 9.93898 7.29793 9.8436 7.2276 9.77327C7.15728 9.70295 7.06189 9.66344 6.96244 9.66344H4.21491C4.11545 9.66344 4.02007 9.70295 3.94974 9.77327C3.87942 9.8436 3.83991 9.93898 3.83991 10.0384V20.5408C3.83991 20.6402 3.87942 20.7356 3.94974 20.8059C4.02007 20.8763 4.11545 20.9158 4.21491 20.9158Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1477">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(0 0.507812)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>{" "}
              <Link href={"/"} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={25}
                  viewBox="0 0 22 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_1482)">
                    <path
                      d="M15.7025 9.14898C17.2483 10.2534 19.142 10.9032 21.1872 10.9032V6.9697C20.8001 6.96978 20.414 6.9294 20.0353 6.8492V9.94545C17.9903 9.94545 16.0969 9.29571 14.5508 8.19138V16.2186C14.5508 20.2343 11.2937 23.4894 7.27627 23.4894C5.77727 23.4894 4.38394 23.0365 3.22656 22.2596C4.54756 23.6096 6.38976 24.4471 8.42778 24.4471C12.4455 24.4471 15.7027 21.192 15.7027 17.1762V9.14898H15.7025ZM17.1235 5.18054C16.3335 4.31795 15.8147 3.20319 15.7025 1.97075V1.46484H14.611C14.8858 3.03122 15.823 4.36942 17.1235 5.18054ZM5.76758 19.1782C5.32622 18.5998 5.08764 17.8922 5.08871 17.1646C5.08871 15.3281 6.57845 13.8389 8.41644 13.8389C8.75891 13.8387 9.09937 13.8913 9.42585 13.9947V9.97326C9.04433 9.92104 8.65933 9.89878 8.27451 9.90697V13.0371C7.94788 12.9335 7.60724 12.881 7.2646 12.8813C5.4267 12.8813 3.93705 14.3703 3.93705 16.2071C3.93705 17.5059 4.68162 18.6304 5.76758 19.1782Z"
                      fill="#F79009"
                    />
                    <path
                      d="M14.5498 8.1913C16.096 9.29563 17.9893 9.94537 20.0344 9.94537V6.84912C18.8928 6.60606 17.8822 6.00986 17.1224 5.18054C15.8219 4.36934 14.8848 3.03113 14.6101 1.46484H11.743V17.176C11.7365 19.0076 10.2493 20.4906 8.41532 20.4906C7.33466 20.4906 6.3745 19.9758 5.76647 19.1781C4.68067 18.6304 3.93601 17.5059 3.93601 16.2072C3.93601 14.3706 5.42567 12.8814 7.26357 12.8814C7.61571 12.8814 7.9551 12.9362 8.27347 13.0371V9.90705C4.32655 9.98857 1.15234 13.2119 1.15234 17.1761C1.15234 19.155 1.94277 20.949 3.2257 22.2598C4.38307 23.0365 5.77632 23.4896 7.27541 23.4896C11.2929 23.4896 14.5499 20.2342 14.5499 16.2186V8.19138L14.5498 8.1913Z"
                      fill="#0C111D"
                    />
                    <path
                      d="M20.0338 6.84961V6.01258C19.0044 6.01414 17.9953 5.72601 17.1218 5.18111C17.895 6.02708 18.913 6.61046 20.0338 6.84977V6.84961ZM14.6094 1.46533C14.5832 1.31567 14.5631 1.16501 14.5491 1.01372V0.507812H10.5905V16.2191C10.5842 18.0506 9.09699 19.5336 7.2629 19.5336C6.74295 19.5344 6.2301 19.4128 5.76579 19.1788C6.37382 19.9764 7.33399 20.4911 8.41465 20.4911C10.2486 20.4911 11.7359 19.0083 11.7424 17.1766V1.46541H14.6094V1.46533ZM8.27305 9.90754V9.01631C7.94226 8.97109 7.60877 8.94847 7.2749 8.94861C3.25697 8.94861 0 12.2038 0 16.2191C0 18.7366 1.28003 20.9552 3.22519 22.2602C1.94226 20.9494 1.15183 19.1554 1.15183 17.1766C1.15183 13.2124 4.32596 9.98905 8.27305 9.90754Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1482">
                      <rect
                        width="21.1862"
                        height={24}
                        fill="white"
                        transform="translate(0 0.507812)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container">
        <div className=" absolute container max-w-[90%] xl:max-w-[1440px] top-[-12%] lg:top-[-24%] left-0 right-0 flex   rounded-[40px] lg:rounded-[80px] a flex-col sm:flex-row sm:items-center justify-between py-5 bg-primary shadow-s3 px-10">
          <div className="  max-w-[656px] space-y-6">
            <h3 className=" text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-[110%] capitalize  tracking-[-1.12px]">
              Get instant access to updates and support from our team
            </h3>
            <Button
              className=" h-12 gap-3 bg-skin-dark-100 hover:bg-skin-dark-100/80 text-white rounded-[16px] px-10"
              variant={"secondary"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M19.2701 5.83786C17.9401 5.21786 16.5001 4.76786 15.0001 4.50786C14.987 4.50744 14.9739 4.50991 14.9618 4.51509C14.9497 4.52027 14.9389 4.52805 14.9301 4.53786C14.7501 4.86786 14.5401 5.29786 14.4001 5.62786C12.8091 5.38786 11.1911 5.38786 9.60012 5.62786C9.46012 5.28786 9.25012 4.86786 9.06012 4.53786C9.05012 4.51786 9.02012 4.50786 8.99012 4.50786C7.49012 4.76786 6.06012 5.21786 4.72012 5.83786C4.71012 5.83786 4.70012 5.84786 4.69012 5.85786C1.97012 9.92786 1.22012 13.8879 1.59012 17.8079C1.59012 17.8279 1.60012 17.8479 1.62012 17.8579C3.42012 19.1779 5.15012 19.9779 6.86012 20.5079C6.89012 20.5179 6.92012 20.5079 6.93012 20.4879C7.33012 19.9379 7.69012 19.3579 8.00012 18.7479C8.02012 18.7079 8.00012 18.6679 7.96012 18.6579C7.39012 18.4379 6.85012 18.1779 6.32012 17.8779C6.28012 17.8579 6.28012 17.7979 6.31012 17.7679C6.42012 17.6879 6.53012 17.5979 6.64012 17.5179C6.66012 17.4979 6.69012 17.4979 6.71012 17.5079C10.1501 19.0779 13.8601 19.0779 17.2601 17.5079C17.2801 17.4979 17.3101 17.4979 17.3301 17.5179C17.4401 17.6079 17.5501 17.6879 17.6601 17.7779C17.7001 17.8079 17.7001 17.8679 17.6501 17.8879C17.1301 18.1979 16.5801 18.4479 16.0101 18.6679C15.9701 18.6779 15.9601 18.7279 15.9701 18.7579C16.2901 19.3679 16.6501 19.9479 17.0401 20.4979C17.0701 20.5079 17.1001 20.5179 17.1301 20.5079C18.8501 19.9779 20.5801 19.1779 22.3801 17.8579C22.4001 17.8479 22.4101 17.8279 22.4101 17.8079C22.8501 13.2779 21.6801 9.34786 19.3101 5.85786C19.3001 5.84786 19.2901 5.83786 19.2701 5.83786ZM8.52012 15.4179C7.49012 15.4179 6.63012 14.4679 6.63012 13.2979C6.63012 12.1279 7.47012 11.1779 8.52012 11.1779C9.58012 11.1779 10.4201 12.1379 10.4101 13.2979C10.4101 14.4679 9.57012 15.4179 8.52012 15.4179ZM15.4901 15.4179C14.4601 15.4179 13.6001 14.4679 13.6001 13.2979C13.6001 12.1279 14.4401 11.1779 15.4901 11.1779C16.5501 11.1779 17.3901 12.1379 17.3801 13.2979C17.3801 14.4679 16.5501 15.4179 15.4901 15.4179Z"
                  fill="#36BFFA"
                />
              </svg>
              Join Our Community
            </Button>
          </div>
          <Link className=" hidden xl:block" href={"/"}>
            <Image
              src={"/images/discord.webp"}
              alt="dfdfdf"
              width={413}
              height={413}
              className=" w-40 h-40 lg:w-80 lg:h-80"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
