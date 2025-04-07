
// 3)  stringin trim metodunu ozunuz yazmaga calisin
// function trim(str) {
//     let start = 0;
//     let end = str.length - 1;
  
//     while (str[start] === ' ') {
//       start++;
//     }
  
//     while (str[end] === ' ') {
//       end--;
//     }
  
//     let result = '';
//     for (let i = start; i <= end; i++) {
//       result += str[i];
//     }
  
//     return result;
//   }

//   console.log(trim("   Salam  Dünya    "));
  

//##################################################################################################

//4) 1. arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
// Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz)

// let arr= [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];

// let maxCut;  
// let minTek ;  
// let maxCutIndex = -1; 
// let minTekIndex = -1; 

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     if (arr[i] > maxCut) {
//       maxCut = arr[i];
//       maxCutIndex = i;
//     }
//   }
//   if (arr[i] % 2 !== 0) {
//     if ( arr[i] < minTek) {
//       minTek = arr[i];
//       minTekIndex = i;
//     }
//   }
// }
// if (maxCutIndex !== -1 && minTekIndex !== -1) {  
//   let yerdeyisme = arr[maxCutIndex];
//   arr[maxCutIndex] = arr[minTekIndex];
//   arr[minTekIndex] = yerdeyisme;
// }

// console.log(arr);


// ###############################################################################################
// 2. var arr = [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];
// Verilmis arrayin  daxilinde qiymeti  50 den cox olanlari array kimi qaytaran kod yaz  (array  methodlarina nezer yetir) 

// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// let expensiveProducts = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].fiyat > 50) {
//     expensiveProducts.push(arr[i]);
//   }
 
// }

// console.log(expensiveProducts);
// ###################################################################################################
// 3. yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari yanlizca ekrana cixaran kod yaz   (array  methodlarina nezer yetir)

// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// let meyveSebze = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].kategori === "Meyve ve Sebzeler") {
//     meyveSebze.push(arr[i]);
//   }
// }

// console.log(meyveSebze);

// ################################################################################################
// 4.   yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari   ve stokda  2 den cox olanlari   ekrana cixaran kod yaz   (array  methodlarina nezer yetir)
// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];


// let products = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].kategori === "Meyve ve Sebzeler" && arr[i].stok > 2) {
//     products.push(arr[i]); 
//   }
// }

// console.log(products);

// ################################################################################################3
// 5.  yuxaridaki arrayde   Sut adli mehsulun olub olmamasini yoxlayan   kod yaz    (array  methodlarina nezer yetir)


// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];


// let findSut = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].urunAdi === "Süt") {
//     findSut = true; 
//     break;
//   }
// }

// if (findSut) {
//   console.log("Süt adlı məhsul tapıldı.");
// } else {
//   console.log("Süt adlı məhsul yoxdur.");
// }


// ################################################################################################3
// 6.  yuxaridaki arrayde   Ton baliginin indexini tapan program yaz  (array  methodlarina nezer yetir)


// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// let tonBaligiIndex = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].urunAdi === "Ton Balığı") {
//         tonBaligiIndex = i;
//         break;
//     }
// }

// console.log("Ton Balığının indexi: " + tonBaligiIndex);
// #################################################################################################


// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// console.log(arr.filter(x=>x.stok>50));

// ######################################################################################################

// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// console.log(arr.filter(x=>x.kategori=="Meyve ve Sebzeler"));


// #################################################################################################
// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// console.log(arr.filter(x=>x.kategori=="Meyve ve Sebzeler"&&x.stok>2));

// #############################################################################################3

// let arr = [
//         { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//         { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//         { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//         { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//         { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//         { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//         { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//         { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//         { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//         { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
//     ];
    
//     console.log(arr.filter(x=>x.urunAdi=="Süt"&&x.stok>2));

// ###################################################################################################################

// let arr = [
//     { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//     { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
//     { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//     { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
//     { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
//     { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//     { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
// ];

// console.log(arr.filter(x=>x.urunAdi=="Süt"&&x.stok>2));

// ############################################################################################################3


let arr = [
    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
    { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
    { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
    { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
    { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
    { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
    { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
    { urunAdi: "Soda", fiyat: 51, stok: 100, kategori: "İçecekler" },
    { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
    { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
];

 console.log(arr.findIndex(x=>x.urunAdi=="Ton Balığı"));