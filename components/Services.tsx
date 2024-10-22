import React from "react";
import Service from "./Service";
export type Service = {
  name: string;
  description: string;
  icon: string;
};

const services = [
  {
    name: "Agricultural Inputs",
    description: "Supply of Agricultural Input supplies",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 64c0-35.3 28.7-64 64-64L266.3 0c26.2 0 49.7 15.9 59.4 40.2L373.7 160 480 160l0-33.8c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9l0 33.8 56 0c22.1 0 40 17.9 40 40l0 45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48l-80 0c0 17.7-14.3 32-32 32l-8.2 0c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8l0 8.2c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1L32 384c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l8.2 0c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6l0-.6 0-32 0-96zm170.3 0L160 64l0 96 32 0 112.7 0L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z"/></svg>',
  },
  {
    name: "Refrigeration Services",
    description:
      "Supply, installation and service of Refrigeration Systems such as Air conditioners, Cold rooms and more",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 0c17.7 0 32 14.3 32 32l0 30.1 15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49 0 70.3 61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7l0 70.3 49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15 0 30.1c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-30.1-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49 0-70.3-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3l0-70.3L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15L192 32c0-17.7 14.3-32 32-32z"/></svg>',
  },
  {
    name: "Computers and Accesories",
    description:
      "Supply of computers and accessories, installation anjd upgrading software",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg>',
  },
  {
    name: "Local Area Networks",
    description: "Supply and Installation of Local Area Networks(LAN)",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"/></svg>',
  },
  {
    name: "Wide Area Networks",
    description: "Supply and Installation of Wide are Networks(WAN)",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M80.3 44C69.8 69.9 64 98.2 64 128s5.8 58.1 16.3 84c6.6 16.4-1.3 35-17.7 41.7s-35-1.3-41.7-17.7C7.4 202.6 0 166.1 0 128S7.4 53.4 20.9 20C27.6 3.6 46.2-4.3 62.6 2.3S86.9 27.6 80.3 44zM555.1 20C568.6 53.4 576 89.9 576 128s-7.4 74.6-20.9 108c-6.6 16.4-25.3 24.3-41.7 17.7S489.1 228.4 495.7 212c10.5-25.9 16.3-54.2 16.3-84s-5.8-58.1-16.3-84C489.1 27.6 497 9 513.4 2.3s35 1.3 41.7 17.7zM352 128c0 23.7-12.9 44.4-32 55.4L320 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-296.6c-19.1-11.1-32-31.7-32-55.4c0-35.3 28.7-64 64-64s64 28.7 64 64zM170.6 76.8C163.8 92.4 160 109.7 160 128s3.8 35.6 10.6 51.2c7.1 16.2-.3 35.1-16.5 42.1s-35.1-.3-42.1-16.5c-10.3-23.6-16-49.6-16-76.8s5.7-53.2 16-76.8c7.1-16.2 25.9-23.6 42.1-16.5s23.6 25.9 16.5 42.1zM464 51.2c10.3 23.6 16 49.6 16 76.8s-5.7 53.2-16 76.8c-7.1 16.2-25.9 23.6-42.1 16.5s-23.6-25.9-16.5-42.1c6.8-15.6 10.6-32.9 10.6-51.2s-3.8-35.6-10.6-51.2c-7.1-16.2 .3-35.1 16.5-42.1s35.1 .3 42.1 16.5z"/></svg>',
  },
  {
    name: "VSAT",
    description: "Supply and Installation of VSAT",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 32c0-17.7 14.3-32 32-32C383.1 0 512 128.9 512 288c0 17.7-14.3 32-32 32s-32-14.3-32-32C448 164.3 347.7 64 224 64c-17.7 0-32-14.3-32-32zM60.6 220.6L164.7 324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4L291.4 451.4c14.5 14.5 11.8 38.8-7.3 46.3C260.5 506.9 234.9 512 208 512C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1c7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>',
  },
  {
    name: "Virtual Private Networks(VPN)",
    description: "Installation of Virtual Private Networks",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>',
  },
  {
    name: "Peer to Peer Networks",
    description: "Installation of Peer to Peer Networks",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"/></svg>',
  },
  {
    name: "Fibre Optics",
    description: "Installation of Fibre Optics",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z"/></svg>',
  },
  {
    name: "CCTV Systems",
    description:
      "Supply and Installation of Closed circuit television (CCTV) systems",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>',
  },
  {
    name: "PABX Systems",
    description: "Supply and installation of PABX Systems",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>',
  },
  {
    name: "Access Control Units",
    description: "Supply and Istallation of Access Control Units",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>',
  },
  {
    name: "Fire Suppression Systems",
    description: "Supply and Istallation of Fire Suppression Systems",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M500.3 7.3C507.7 13.3 512 22.4 512 32l0 96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32C301.5 124.9 292 115.7 289 104l-65 0 0 34.8c37.8 18 64 56.5 64 101.2l0 144L64 384l0-144c0-44.7 26.2-83.2 64-101.2l0-28.8c-36.2 11.1-66 36.9-82.3 70.5c-5.8 11.9-20.2 16.9-32.1 11.1S-3.3 171.4 2.5 159.5C26.7 109.8 72.7 72.6 128 60.4L128 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 24 65 0c3-11.7 12.5-20.9 24.7-23.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM288 416l0 32c0 35.3-28.7 64-64 64l-96 0c-35.3 0-64-28.7-64-64l0-32 224 0zM176 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>',
  },
  {
    name: "Solar Systems",
    description:
      "Supply and Istallation of Solar Systems and Solar Irrigation Systems",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4L8.3 307.4C.4 347 30.6 384 71 384l217 0 0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64 217 0c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0L122.2 0zM260.9 64l118.2 0 10.4 104-139 0L260.9 64zM202.3 168l-100.8 0L122.2 64l90.4 0L202.3 168zM91.8 216l105.6 0L187.1 320 71 320 91.8 216zm153.9 0l148.6 0 10.4 104-169.4 0 10.4-104zm196.8 0l105.6 0L569 320l-116 0L442.5 216zm96-48l-100.8 0L427.3 64l90.4 0 31.4-6.3L517.8 64l20.8 104z"/></svg>',
  },
  {
    name: "Sage Premier Payroll and HR software",
    description:
      "Supply, install, train and support of Sage Premier Payroll and HR software",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>',
  },
  {
    name: "Accounting Software",
    description:
      "Supply, install, train and support QuickBooks accounting package and Sage 50 Accounting package",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM272 192l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zM164 152l0 13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9l0 13.8c0 11-9 20-20 20s-20-9-20-20l0-14.6c-10.3-2.2-20-5.5-28.2-8.4c0 0 0 0 0 0s0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5l0-14c0-11 9-20 20-20s20 9 20 20z"/></svg>',
  },
  {
    name: "Computer Security Systems",
    description:
      "Supply, Install, train and support of different antivirus software \nSupply, server and client server security solutions",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>',
  },
  {
    name: "Mobile Mappers",
    description: "Supply of mobile GPS Mapping devices",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0c17.7 0 32 14.3 32 32l0 10.4c93.7 13.9 167.7 88 181.6 181.6l10.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.4 0c-13.9 93.7-88 167.7-181.6 181.6l0 10.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-10.4C130.3 455.7 56.3 381.7 42.4 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l10.4 0C56.3 130.3 130.3 56.3 224 42.4L224 32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6l0-20.6c0-17.7 14.3-32 32-32s32 14.3 32 32l0 20.6c58.3-12.5 104.1-58.4 116.6-116.6L384 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l20.6 0C392.1 165.7 346.3 119.9 288 107.4l0 20.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-20.6C165.7 119.9 119.9 165.7 107.4 224l20.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-20.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
  },
];

const Services = () => {
  return (
    <div
      className="py-12 mx-10 my-10"
      id="services"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl dark:text-white font-bold mb-2">
            What we offer
          </h2>
          <p className="">
            The following are some of the products and service provided at Yosa
            Limited.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Service
              key={service.name}
              service={service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
