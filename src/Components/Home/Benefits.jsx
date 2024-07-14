"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import image from "../../assets/images/benefits.jpg";

const Benefits = () => {
  return (
    <div className="lg:flex mt-20 md:w-[88%] mx-auto">
      <div className="lg:w-1/2 mx-auto shrink-0  shadow-none rounded-r-none flex justify-center items-center h-full">
        <div>
          <Typography className=" text-center lg:text-start text-[#00AF91] font-bold text-sm">
            Key Benefits
          </Typography>
          <Typography className="text-center lg:text-start text-[#263238] text-[40px] leading-tight md:text-[48px] font-medium">
            Your Savings,<br className="md:hidden"/> Our Priority
          </Typography>
          <Typography className="lg:w-11/12 hidden lg:flex mb-8 mt-3 font-normal text-lg">
            Start your savings journey today with our exclusive offers,
            easy-to-use app,  and trusted stores.
          </Typography>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-10 lg:gap-y-20 mt-10">
              <div className="w-[262px] lg:w-[16rem] mx-auto lg:mx-0">
                <svg
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex justify-center mx-auto md:mx-0"
                >
                  <path
                    d="M39.6176 61.2445C39.4087 61.2418 39.2091 61.1576 39.0613 61.0097C38.9136 60.8618 38.8294 60.662 38.8268 60.4528V55.9895C38.8268 55.7794 38.9101 55.578 39.0585 55.4294C39.2069 55.2809 39.4082 55.1974 39.618 55.1974C39.8279 55.1974 40.0291 55.2809 40.1775 55.4294C40.3259 55.578 40.4093 55.7794 40.4093 55.9895V60.452C40.4068 60.6615 40.3226 60.8616 40.1747 61.0097C40.0268 61.1578 39.8268 61.242 39.6176 61.2445ZM58.9724 70.1104C58.7634 70.113 58.5637 70.1972 58.4159 70.3452C58.2681 70.4931 58.1839 70.693 58.1813 70.9022V75.3642C58.1813 75.5742 58.2647 75.7757 58.4131 75.9242C58.5615 76.0728 58.7627 76.1562 58.9726 76.1562C59.1824 76.1562 59.3837 76.0728 59.5321 75.9242C59.6805 75.7757 59.7638 75.5742 59.7638 75.3642V70.9014C59.7612 70.6922 59.677 70.4922 59.5291 70.3442C59.3812 70.1963 59.1814 70.1121 58.9724 70.1096V70.1104ZM87.8911 67.0332C87.2425 76.5112 83.0274 85.3904 76.0958 91.8798C69.1643 98.3691 60.0322 101.986 50.5415 102C49.674 102 48.8034 101.97 47.9297 101.91C41.6835 101.479 35.6444 99.4903 30.3631 96.1241C25.0818 92.758 20.7263 88.1221 17.6937 82.639C14.661 77.1559 13.0478 71.0002 13.001 64.733C12.9543 58.4658 14.4755 52.2867 17.426 46.7589C17.4314 46.7483 17.4371 46.7379 17.443 46.7276C19.2388 43.4722 20.5718 36.8289 19.5334 33.4611C19.3737 32.9429 19.3606 32.3906 19.4956 31.8655C19.6306 31.3403 19.9083 30.8629 20.298 30.4862C20.6877 30.1095 21.174 29.8483 21.703 29.7316C22.232 29.615 22.783 29.6473 23.2948 29.8252C25.8095 30.7291 28.0502 32.2644 29.802 34.284C31.4285 31.0811 33.2288 28.5215 34.8859 26.1656C38.8608 20.5138 41.2599 17.1033 38.7098 8.79598C38.5511 8.27985 38.5379 7.72991 38.6716 7.20675C38.8052 6.68358 39.0805 6.2075 39.4672 5.83093C39.8538 5.45437 40.3368 5.19195 40.8629 5.07257C41.389 4.9532 41.9378 4.98151 42.4489 5.15438C55.6859 9.62947 64.1541 18.8744 68.2919 33.3903C68.611 31.3224 68.6945 29.2249 68.5408 27.1381C68.5021 26.5052 68.6692 25.8767 69.0172 25.3469C69.3652 24.8171 69.8754 24.4144 70.4713 24.1992C71.0671 23.984 71.7166 23.9678 72.3224 24.1532C72.9282 24.3385 73.4577 24.7154 73.8316 25.2273C78.5293 31.6601 82.1356 38.3342 84.5505 45.0639C87.2501 52.5874 88.3738 59.979 87.8911 67.0332ZM39.618 67.1114C41.3816 67.1094 43.0724 66.4072 44.3194 65.1589C45.5665 63.9107 46.268 62.2182 46.2701 60.4528V55.9895C46.2701 54.2234 45.5692 52.5297 44.3217 51.2809C43.0741 50.0321 41.3821 49.3305 39.6178 49.3305C37.8535 49.3305 36.1615 50.0321 34.914 51.2809C33.6665 52.5297 32.9656 54.2234 32.9656 55.9895V60.452C32.9674 62.2176 33.6687 63.9103 34.9158 65.1588C36.1629 66.4072 37.8539 67.1095 39.6176 67.1114H39.618ZM61.3152 54.2087C61.5426 53.8978 61.7065 53.5452 61.7977 53.1709C61.8889 52.7966 61.9056 52.408 61.8467 52.0272C61.7879 51.6465 61.6547 51.2811 61.4548 50.9519C61.2549 50.6226 60.9922 50.3361 60.6816 50.1085C60.3711 49.8809 60.0188 49.7168 59.6449 49.6255C59.271 49.5342 58.8828 49.5175 58.5024 49.5764C58.122 49.6353 57.757 49.7686 57.4281 49.9687C57.0992 50.1688 56.8129 50.4318 56.5856 50.7427L37.2752 77.1456C37.0479 77.4564 36.8839 77.809 36.7927 78.1833C36.7016 78.5576 36.6849 78.9461 36.7437 79.3268C36.8026 79.7075 36.9357 80.0729 37.1356 80.4021C37.3355 80.7313 37.5982 81.0178 37.9088 81.2454C38.2193 81.4729 38.5715 81.637 38.9454 81.7283C39.3193 81.8196 39.7075 81.8363 40.0878 81.7774C40.4681 81.7185 40.8331 81.5852 41.162 81.3851C41.4908 81.185 41.7771 80.922 42.0044 80.6112L61.3152 54.2087ZM65.6248 70.9022C65.6248 69.1361 64.9239 67.4424 63.6764 66.1936C62.4289 64.9448 60.7369 64.2433 58.9726 64.2433C57.2083 64.2433 55.5163 64.9448 54.2687 66.1936C53.0212 67.4424 52.3204 69.1361 52.3204 70.9022V75.3642C52.3204 77.1303 53.0212 78.824 54.2687 80.0728C55.5163 81.3216 57.2083 82.0231 58.9726 82.0231C60.7369 82.0231 62.4289 81.3216 63.6764 80.0728C64.9239 78.824 65.6248 77.1303 65.6248 75.3642V70.9022Z"
                    fill="url(#paint0_linear_28_2120)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_28_2120"
                      x1="18.0816"
                      y1="27.2386"
                      x2="79.4552"
                      y2="88.5502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9B8C" />
                      <stop offset="1" stop-color="#FD4D86" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="mt-5">
                  <h1 className="text-[#263238] text-[26px] lg:text-[24px] font-medium flex justify-center md:justify-start items-center">
                    Handpicked Deals
                  </h1>
                  <p className="font-normal text-lg lg:text-base text-center lg:text-start">
                    Carefully selected offers to ensure you get the best value.
                  </p>
                </div>
              </div>

              
              <div  className="w-[288px] lg:w-[16rem] mx-auto lg:mx-0">
                <svg
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex justify-center mx-auto md:mx-0"
                >
                  <g clip-path="url(#clip0_28_2131)">
                    <path
                      d="M5.35425 27.6624V97.1755C5.35425 97.6373 5.72876 98.0126 6.19135 98.0126H97.8087C98.2712 98.0126 98.6458 97.6373 98.6458 97.1755V27.6624H5.35425Z"
                      fill="#ED5176"
                    />
                    <path
                      d="M5.35425 27.6624V97.1755C5.35425 97.6373 5.72876 98.0126 6.19135 98.0126H97.8087C98.2712 98.0126 98.6458 97.6373 98.6458 97.1755V27.6624H5.35425Z"
                      fill="url(#paint0_linear_28_2131)"
                    />
                    <path
                      d="M40.8423 66.7408V98.0126H63.1575V66.7408C63.1575 65.5848 62.2204 64.6477 61.0643 64.6477H42.9346C41.7794 64.6477 40.8423 65.5848 40.8423 66.7408Z"
                      fill="#6A7193"
                    />
                    <path
                      d="M0.130127 42.1223V50.6646C0.130127 51.1272 0.504639 51.5017 0.967224 51.5017H103.033C103.495 51.5017 103.87 51.1272 103.87 50.6646V42.1223C103.87 41.6597 103.495 41.2852 103.033 41.2852H0.967224C0.504639 41.2852 0.130127 41.6597 0.130127 42.1223Z"
                      fill="#E5ECF0"
                    />
                    <path
                      d="M69.9963 69.775V86.9009C69.9963 87.8793 70.7898 88.6727 71.7681 88.6727H91.1904C92.1695 88.6727 92.9622 87.8793 92.9622 86.9009V69.775C92.9622 68.7958 92.1695 68.0032 91.1904 68.0032H71.7681C70.789 68.0024 69.9963 68.7958 69.9963 69.775Z"
                      fill="white"
                    />
                    <path
                      d="M11.0378 69.775V86.9009C11.0378 87.8793 11.8305 88.6727 12.8096 88.6727H32.2319C33.211 88.6727 34.0037 87.8793 34.0037 86.9009V69.775C34.0037 68.7958 33.2102 68.0032 32.2319 68.0032H12.8096C11.8305 68.0024 11.0378 68.7958 11.0378 69.775Z"
                      fill="white"
                    />
                    <path
                      d="M104 23.0516V19.2136H0V23.0516C2.5462 23.0516 4.61078 25.1161 4.61078 27.6624H99.3892C99.3892 25.1161 101.454 23.0516 104 23.0516Z"
                      fill="#E5ECF0"
                    />
                    <path
                      d="M32.239 12.1605V29.2849C32.239 32.6349 34.955 35.3517 38.3058 35.3517H65.6943C69.0443 35.3517 71.7611 32.6349 71.7611 29.2849V12.1605C71.7611 8.80975 69.0443 6.09375 65.6943 6.09375H38.3058C34.955 6.09375 32.239 8.80975 32.239 12.1605Z"
                      fill="url(#paint1_linear_28_2131)"
                    />
                    <path
                      d="M45.9316 82.8535H44.6755C43.8345 82.8535 43.1521 82.1711 43.1521 81.3301C43.1521 80.489 43.8345 79.8066 44.6755 79.8066H45.9316C46.7734 79.8066 47.455 80.489 47.455 81.3301C47.455 82.1711 46.7734 82.8535 45.9316 82.8535Z"
                      fill="white"
                    />
                    <path
                      d="M56.1305 25H49.5591C48.2572 25 47.1193 24.0772 46.853 22.8056L45.456 16.1436H44.0742C43.4806 16.1436 43 15.6635 43 15.0718C43 14.4801 43.4806 14 44.0742 14H45.456C46.4675 14 47.352 14.7173 47.559 15.7048L48.9555 22.3668C49.0148 22.6504 49.2688 22.8564 49.5591 22.8564H56.1305C56.3851 22.8564 56.6173 22.6962 56.7073 22.4584L58.6722 17.2685H49.9602C49.3667 17.2685 48.8861 16.7884 48.8861 16.1967C48.8861 15.6049 49.3667 15.1248 49.9602 15.1248H59.2534C59.8269 15.1248 60.364 15.4062 60.6901 15.8768C61.0163 16.3474 61.0901 16.948 60.8871 17.4834L58.7169 23.2159C58.313 24.2827 57.2735 25 56.1305 25Z"
                      fill="#6A7193"
                    />
                    <path
                      d="M49.681 28H49.319C48.5901 28 48 27.5526 48 27C48 26.4479 48.5901 26 49.319 26H49.681C50.4099 26 51 26.4479 51 27C51 27.5526 50.4099 28 49.681 28Z"
                      fill="#6A7193"
                    />
                    <path
                      d="M54.681 28H54.319C53.5901 28 53 27.5526 53 27C53 26.4479 53.5901 26 54.319 26H54.681C55.4099 26 56 26.4479 56 27C56 27.5526 55.4099 28 54.681 28Z"
                      fill="#6A7193"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_28_2131"
                      x1="11.6752"
                      y1="43.7912"
                      x2="50.4316"
                      y2="110.195"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9B8C" />
                      <stop offset="1" stop-color="#FD4D86" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_28_2131"
                      x1="52.0001"
                      y1="6.09375"
                      x2="52.0001"
                      y2="35.3517"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFE990" />
                      <stop offset="1" stop-color="#FDD52D" />
                    </linearGradient>
                    <clipPath id="clip0_28_2131">
                      <rect width="104" height="104" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="mt-5">
                  <h1 className="text-[#263238]  text-[26px] lg:text-[24px] font-medium flex justify-center md:justify-start items-center">
                    Trusted Stores
                  </h1>
                  <p className="font-normal text-lg lg:text-base text-center lg:text-start">
                    Only the best stores with the highest quality products.
                  </p>
                </div>
              </div>
              <div className="w-[310px] lg:w-[16rem] mx-auto lg:mx-0">
                <svg
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex justify-center mx-auto md:mx-0"
                >
                  <g clip-path="url(#clip0_28_2122)">
                    <path
                      d="M103.769 97.6926L90.8171 65.4997C90.581 64.9075 90.1722 64.4 89.644 64.0431C89.1157 63.6862 88.4923 63.4964 87.8547 63.4983H14.1084C13.441 63.4982 12.7903 63.7072 12.2478 64.096C11.7054 64.4849 11.2985 65.0339 11.0843 65.6661L0.168529 97.8587C0.00552989 98.3392 -0.0406238 98.8516 0.0338927 99.3535C0.108409 99.8553 0.30145 100.332 0.59702 100.745C0.89259 101.157 1.28218 101.493 1.7335 101.725C2.18482 101.957 2.68488 102.077 3.19225 102.077H100.806C101.329 102.077 101.843 101.949 102.304 101.704C102.766 101.459 103.16 101.105 103.452 100.672C103.745 100.239 103.926 99.7411 103.982 99.2216C104.037 98.7022 103.964 98.1772 103.769 97.6926Z"
                      fill="#78C68F"
                    />
                    <path
                      d="M103.769 97.6925L95.0872 76.1125C92.2016 77.1743 72.6274 83.3003 72.6274 83.3003C72.6274 83.3003 83.2915 99.1171 85.2494 102.077H100.806C101.329 102.077 101.843 101.949 102.304 101.704C102.766 101.459 103.16 101.105 103.452 100.672C103.745 100.239 103.926 99.741 103.982 99.2216C104.037 98.7022 103.964 98.1772 103.769 97.6925Z"
                      fill="#59DBA3"
                    />
                    <path
                      d="M40.8039 93.9835L19.766 63.4983H14.1084C13.441 63.4981 12.7903 63.7072 12.2479 64.096C11.7054 64.4849 11.2985 65.0339 11.0843 65.666L0.168529 97.8587C0.00552989 98.3392 -0.0406239 98.8516 0.0338927 99.3534C0.108409 99.8553 0.30145 100.332 0.59702 100.745C0.89259 101.157 1.28218 101.493 1.7335 101.725C2.18482 101.957 2.68488 102.077 3.19225 102.077H14.6993L40.8039 93.9835Z"
                      fill="#59DBA3"
                    />
                    <path
                      d="M27.9546 50.0737C33.2478 59.9551 41.5639 68.9454 48.9447 76.597L48.9963 76.6486C49.3556 76.9977 50.4374 78.0483 51.9737 78.0483H52.0253C53.5611 78.0483 54.6431 76.9975 55.0027 76.6486L55.0541 76.597C62.4342 68.9454 70.751 59.9551 76.0442 50.0737C79.0232 44.5128 80.7736 39.1143 81.2472 34.0281C81.8144 28.1516 80.6169 22.2394 77.8075 17.0468L77.7988 17.0308C72.8251 7.87592 62.9522 2.08706 52.033 1.92334H51.9995H51.966C41.0468 2.08706 31.1737 7.87592 26.1914 17.0468C23.3819 22.2393 22.1843 28.1515 22.7517 34.0281C23.2252 39.1143 24.9755 44.5128 27.9546 50.0737Z"
                      fill="#E03E36"
                    />
                    <path
                      d="M51.9999 46.8037C60.6762 46.8037 67.735 39.8269 67.735 31.2512C67.735 22.6755 60.6758 15.6987 51.9999 15.6987C43.3241 15.6987 36.2646 22.6755 36.2646 31.2512C36.2646 39.8269 43.323 46.8037 51.9999 46.8037Z"
                      fill="#EFEAEA"
                    />
                    <path
                      d="M27.955 50.0737C33.2482 59.9551 41.5644 68.9454 48.9451 76.597L48.9967 76.6486C49.3563 76.9977 50.4379 78.0483 51.9741 78.0483H52.0257C53.5618 78.0483 54.6436 76.9975 55.0031 76.6486L55.0547 76.597C62.4347 68.9454 70.7516 59.9551 76.0448 50.0737C79.0239 44.5128 80.7742 39.1143 81.2477 34.0281C81.815 28.1515 80.6174 22.2393 77.808 17.0468L77.7994 17.0308C72.8255 7.87592 62.9526 2.08706 52.0334 1.92334H51.9999H51.9664C41.0472 2.08706 31.1743 7.87592 26.1919 17.0468C23.3824 22.2393 22.1848 28.1515 22.7522 34.0281C23.2256 39.1143 24.9762 44.5128 27.955 50.0737Z"
                      fill="url(#paint0_linear_28_2122)"
                    />
                    <path
                      d="M52 46.8037C60.6765 46.8037 67.735 39.8269 67.735 31.2512C67.735 22.6755 60.6765 15.6987 52 15.6987C43.3235 15.6987 36.2649 22.6755 36.2649 31.2512C36.2649 39.8269 43.3235 46.8037 52 46.8037Z"
                      fill="white"
                    />
                    <path
                      d="M95.6907 77.613L94.0204 73.4608L42.4043 90.9575L22.5708 63.4983H17.0582L37.9762 92.4586L9.60083 102.077H23.521L71.0768 85.9568L82.7374 102.077H88.2529L75.5062 84.4553L95.6907 77.613Z"
                      fill="#F1E5B5"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_28_2122"
                      x1="26.5967"
                      y1="19.3761"
                      x2="74.7622"
                      y2="67.42"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9B8C" />
                      <stop offset="1" stop-color="#FD4D86" />
                    </linearGradient>
                    <clipPath id="clip0_28_2122">
                      <rect width="104" height="104" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="mt-5">
                  <h1 className="text-[#263238] text-[26px] lg:text-[24px] font-medium flex justify-center md:justify-start items-center">
                    Easy Navigation
                  </h1>
                  <p className="font-normal text-lg lg:text-base text-center lg:text-start">
                    User-friendly app design to make your shopping experience
                    seamless.
                  </p>
                </div>
              </div>
              <div className="w-[338px] lg:w-[16rem] mx-auto lg:mx-0">
                <svg
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex justify-center mx-auto md:mx-0"
                >
                  <path
                    d="M53.4111 7.81375L62.1956 25.4383L62.2095 25.4487L81.8516 28.2758C82.1391 28.3178 82.4091 28.4393 82.6312 28.6266C82.8534 28.8138 83.0188 29.0594 83.1089 29.3356C83.199 29.6118 83.2102 29.9077 83.1412 30.1899C83.0721 30.4722 82.9257 30.7295 82.7183 30.933L68.5049 44.6592L71.8624 64.0414C71.9097 64.3298 71.8757 64.6257 71.764 64.8959C71.6523 65.166 71.4674 65.3996 71.2302 65.5703C70.9929 65.7411 70.7128 65.8423 70.4211 65.8624C70.1295 65.8826 69.8381 65.821 69.5796 65.6846L52.3052 56.6903C52.2115 56.6417 52.1074 56.6163 52.0019 56.6163C51.8963 56.6163 51.7922 56.6417 51.6985 56.6903L34.4224 65.6932C34.1639 65.8297 33.8724 65.8913 33.5808 65.8711C33.2892 65.8509 33.009 65.7498 32.7718 65.579C32.5346 65.4082 32.3497 65.1746 32.238 64.9045C32.1263 64.6344 32.0922 64.3385 32.1396 64.05L35.4971 44.6679L21.2837 30.9416C21.0763 30.7382 20.9298 30.4808 20.8608 30.1986C20.7918 29.9164 20.803 29.6205 20.8931 29.3443C20.9831 29.068 21.1486 28.8225 21.3707 28.6352C21.5929 28.448 21.8629 28.3265 22.1504 28.2844L41.7856 25.4591C41.7906 25.4581 41.7954 25.456 41.7996 25.453C41.8038 25.45 41.8073 25.4462 41.8099 25.4418L50.5892 7.81375C50.7183 7.54955 50.919 7.3269 51.1684 7.17116C51.4179 7.01543 51.7061 6.93286 52.0001 6.93286C52.2942 6.93286 52.5823 7.01543 52.8318 7.17116C53.0812 7.3269 53.2819 7.54955 53.4111 7.81375Z"
                    fill="url(#paint0_linear_28_2152)"
                  />
                  <path
                    d="M21.6667 61.2109L27.04 72.0963H27.0487L39.0537 73.8417C39.2311 73.8682 39.3975 73.9437 39.5343 74.0595C39.6711 74.1754 39.7728 74.3272 39.8281 74.4977C39.8834 74.6682 39.89 74.8508 39.8472 75.0249C39.8044 75.199 39.7139 75.3577 39.5859 75.4832L30.8949 83.9609L32.9333 95.94C32.9625 96.1157 32.9422 96.296 32.8749 96.4609C32.8076 96.6258 32.6959 96.7687 32.5521 96.8738C32.4084 96.979 32.2383 97.0421 32.0608 97.0563C31.8832 97.0704 31.7053 97.035 31.5467 96.954L20.9907 91.3987C20.9334 91.3688 20.8698 91.3531 20.8052 91.3531C20.7406 91.3531 20.677 91.3688 20.6197 91.3987L10.0533 96.954C9.89475 97.035 9.71679 97.0704 9.53927 97.0563C9.36175 97.0421 9.19164 96.979 9.04789 96.8738C8.90414 96.7687 8.79239 96.6258 8.72508 96.4609C8.65778 96.296 8.63756 96.1157 8.66668 95.94L10.7189 83.9679L2.02454 75.4901C1.8965 75.3647 1.806 75.206 1.7632 75.0319C1.72041 74.8578 1.72704 74.6752 1.78232 74.5046C1.83761 74.3341 1.93937 74.1824 2.07616 74.0665C2.21296 73.9506 2.37937 73.8752 2.55668 73.8487L14.56 72.1067L14.5756 72.0963L19.9489 61.2144C20.0265 61.0526 20.1481 60.916 20.2999 60.8202C20.4516 60.7244 20.6273 60.6735 20.8067 60.6731C20.9862 60.6727 21.162 60.723 21.3142 60.8182C21.4663 60.9133 21.5885 61.0495 21.6667 61.2109Z"
                    fill="url(#paint1_linear_28_2152)"
                  />
                  <path
                    d="M84.0668 61.2109L89.4401 72.0963L101.445 73.8417C101.622 73.8682 101.789 73.9437 101.926 74.0595C102.062 74.1754 102.164 74.3272 102.22 74.4977C102.275 74.6682 102.281 74.8508 102.239 75.0249C102.196 75.199 102.105 75.3577 101.977 75.4832L93.2864 83.9609L95.3334 95.94C95.3626 96.1157 95.3423 96.296 95.275 96.4609C95.2077 96.6258 95.096 96.7687 94.9522 96.8738C94.8085 96.979 94.6384 97.0421 94.4608 97.0563C94.2833 97.0704 94.1054 97.035 93.9468 96.954L83.3908 91.3987C83.3335 91.3688 83.2699 91.3531 83.2053 91.3531C83.1407 91.3531 83.0771 91.3688 83.0198 91.3987L72.4534 96.954C72.2948 97.035 72.1169 97.0704 71.9394 97.0563C71.7618 97.0421 71.5917 96.979 71.448 96.8738C71.3042 96.7687 71.1925 96.6258 71.1252 96.4609C71.0579 96.296 71.0377 96.1157 71.0668 95.94L73.119 83.9679L64.4281 75.4901C64.3001 75.3647 64.2096 75.206 64.1668 75.0319C64.124 74.8578 64.1306 74.6752 64.1859 74.5046C64.2412 74.3341 64.3429 74.1824 64.4797 74.0665C64.6165 73.9506 64.7829 73.8752 64.9602 73.8487L76.9601 72.1067L76.9757 72.0963L82.349 61.2144C82.4266 61.0526 82.5482 60.916 82.7 60.8202C82.8517 60.7244 83.0274 60.6735 83.2068 60.6731C83.3862 60.6727 83.5621 60.723 83.7143 60.8182C83.8664 60.9133 83.9886 61.0495 84.0668 61.2109Z"
                    fill="url(#paint2_linear_28_2152)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_28_2152"
                      x1="52.001"
                      y1="6.93286"
                      x2="52.001"
                      y2="65.8749"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFE990" />
                      <stop offset="1" stop-color="#FDD52D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_28_2152"
                      x1="20.8052"
                      y1="60.6731"
                      x2="20.8052"
                      y2="97.0593"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFE180" />
                      <stop offset="1" stop-color="#F4B04A" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_28_2152"
                      x1="83.2027"
                      y1="60.6731"
                      x2="83.2027"
                      y2="97.0593"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFE180" />
                      <stop offset="1" stop-color="#F4B04A" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="mt-5">
                  <h1 className="text-[#263238] text-[26px] lg:text-[24px] font-medium flex justify-center md:justify-start items-center">
                    Quality Assurance
                  </h1>
                  <p className="font-normal text-lg lg:text-base text-center lg:text-start">
                    We partner with only the most trusted stores to ensure
                    top-quality products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CardImage  lg:w-1/2 mx-auto">
        <Image
          src={image}
          alt="banner"
          className="mt-7 lg:mt-o h-full lg:h-[700px] w-full  hidden lg:flex"
        />
      </div>
    </div>
  );
};

export default Benefits;
