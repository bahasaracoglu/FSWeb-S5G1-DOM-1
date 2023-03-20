const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

//nav-a italic

const navSelector = document.querySelectorAll(".container a");

Object.values(siteContent["nav"]).forEach(
  (value, index) => (navSelector[index].textContent = value)
);

const imgSelector = document.querySelectorAll("img");

Object.values(siteContent["images"]).forEach(
  (value, index) => (imgSelector[index].src = value)
);

document.querySelector(".cta-text h1").textContent = siteContent["cta"].h1;
document.querySelector(".cta-text button").textContent =
  siteContent["cta"].button;

const contentSelector = document.querySelectorAll(".main-content h4, p");

Object.values(siteContent["ana-içerik"]).forEach(
  (value, index) => (contentSelector[index].textContent = value)
);

document.querySelector(".contact h4").textContent = Object.values(
  siteContent["iletisim"]
)[0];

const contactSelector = document.querySelectorAll(".contact p");

Object.values(siteContent["iletisim"]).forEach(
  (value, index) => (contactSelector[index].textContent = value)
);

const footer = documents.querySelectorAll("footer a");

footer.setAttribute("class", "bold");

footer.textContent = "Copyright Bir Şirket Sitesi 2022";

/*
const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "mocks/img/logo.png");

const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", "mocks/img/cta.png");
*/
