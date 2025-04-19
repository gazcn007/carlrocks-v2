---
title: World Journey
date: 2015-4-30
sidebar_position: 1
hide_table_of_contents: true
hide_title: true
---

import { WorldMap, TreeChart, Timeline } from '@patternize/components';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { GlobeMap } from '@patternize/travel-map';

<BrowserOnly>
{() => <GlobeMap 
  width="100%"
  height={800}
  mapboxToken='pk.eyJ1IjoiZ2F6Y24wMDciLCJhIjoiY204ZnBvdHY1MGo0dzJrc2Q0d2JhcGYwdCJ9.JBPayAtWDII7oU1qcmvZRA'
  initialViewState={{
    longitude: 0,
    latitude: 20,
    zoom: 1.8
  }}
  markers={[
    {
      id: 1,
      longitude: 14.4378,
      latitude: 50.0755,
      size: 20,
      color: "#D80000",
      name: 'Prague, Czech Republic',
      description:
        'The capital city of the Czech Republic, I visited October 2024',
      images: [
        'https://carlrocks.com/assets/images/prague-4b46d4acfffd32f16965b4d2be2a210a.jpg',
        'https://carlrocks.com/assets/images/prague2-7cfa719e695cf5a70189a1f04e962fcb.jpg',
        'https://carlrocks.com/assets/images/bridge2-97fdff535d74995897b5e2af59f9e023.jpg',
        'https://carlrocks.com/assets/images/clock2-c6eb3e18a6a8197c40941e3fba671db2.jpg',
        'https://carlrocks.com/assets/images/church-842d95a972602c9b593446e924fc8eb0.JPG'
      ]
    },
    {
      id: 2,
      longitude: 151.2093,
      latitude: -33.8688,
      size: 20,
      color: "#00843D",
      name: 'Sydney, Australia',
      description: 'We visited Sydney in March 2025',
      images: [
        'https://carlrocks.com/assets/images/art-1b8062ce86472e5b21e0739ff3d77343.jpeg',
        'https://carlrocks.com/assets/images/bird-c33f1951b7c1e35e252062112c6b7dca.jpeg',
        'https://carlrocks.com/assets/images/beach-f3558776b7ecd7fa6205204baa48697b.jpeg',
        'https://carlrocks.com/assets/images/opera-5fb03aaba443766ae1130d62c1f06dd0.jpeg',
        'https://carlrocks.com/assets/images/opera3-c3bef01dc3908972b17f39f596865b4d.jpeg'
      ]
    },
    {
      id: 3,
      longitude: 114.1694,
      latitude: 22.3193,
      size: 20,
      color: "#DE2910",
      name: 'Hong Kong, China',
      description: 'We visited Hong Kong in March 2025',
      images: [
        'https://carlrocks.com/assets/images/hongkong-island3-49c5a18b8483923076970ba8f417316d.jpeg',
        'https://carlrocks.com/assets/images/building-c6327833ac1bfe65cc77a16ae59b7b77.jpeg',
        'https://carlrocks.com/assets/images/building2-a44a9a646c5132ccb8aa3eca9b9d9947.jpeg',
        'https://carlrocks.com/assets/images/hongkong-island-f60ecaca4bc1c2f134c4bac35a5b8ea4.jpeg',
        'https://carlrocks.com/assets/images/subway-058fccb7d05c42f0cc8a96f00f578a0b.jpg'
      ]
    },
    {
      id: 4,
      longitude: 121.4737,
      latitude: 31.2304,
      size: 20,
      color: "#DE2910",
      name: 'Shanghai, China',
      description: 'A global financial center and transport hub.',
      images: [
        'https://carlrocks.com/assets/images/1-2ecd87bd0ee214ba255ffeff2eb2472f.jpg',
        'https://carlrocks.com/assets/images/2-027e6c779ac84325929736b8d2bbda03.jpg'
      ]
    },
    {
      id: 5,
      longitude: 100.5018,
      latitude: 13.7563,
      size: 20,
      color: "#FF6B01",
      name: 'Bangkok, Thailand',
      description: 'The vibrant capital of Thailand, known for its ornate shrines, bustling street life, and delicious cuisine.',
      images: [
        'https://carlrocks.com/assets/images/1-59043e728ec7f03d3cbf5fb9f95fad84.jpg',
        'https://carlrocks.com/assets/images/3-5314bfa1277433e53f16dabfc9cc77b7.jpg',
        'https://carlrocks.com/assets/images/6-2fe3a963863e5cc592bad786e659690e.jpg',
        'https://carlrocks.com/assets/images/5-f4369457d310b32201069e3335ea07cb.jpg',
        'https://carlrocks.com/assets/images/4-61bb605f1c4987ae643eeb0330aca016.jpg'
      ]
    },
    {
      id: 6,
      longitude: 11.5820,
      latitude: 48.1351,
      size: 20,
      color: "#000000",
      name: 'Munich, Germany',
      description: 'The capital city of Bavaria, Germany, known for its beautiful architecture and Oktoberfest. I visited in October 2024',
      images: [
        'https://carlrocks.com/assets/images/1-e1393fd9eda009dcdb499af520415cb8.jpg',
        'https://carlrocks.com/assets/images/2-80c6e97c274126653e49873d47af9f5a.jpg',
        'https://carlrocks.com/assets/images/3-051dc2dfa57f99b499d590a7271b03e7.jpg',
        'https://carlrocks.com/assets/images/4-288d4fb3704d8364139285aa711d4694.jpg',
        'https://carlrocks.com/assets/images/7-576743a985357ba2ef766684a0830003.jpg'
      ]
    },
    {
      id: 7,
      longitude: 16.37208,
      latitude: 48.20849,
      size: 20,
      color: "#ED2939",
      name: 'Vienna, Austria',
      description: 'The capital city of Austria, known for its beautiful architecture and music. I visited in October 2024',
      images: [
        'https://carlrocks.com/assets/images/1-e2b4385f4b804ad60543f7376eff137d.jpg',
        'https://carlrocks.com/assets/images/2-846abf829b56ac3596521a89328a82c5.JPG',
        'https://carlrocks.com/assets/images/4-5ffe036b1a2315bd537da084486bbbd3.JPG',
        'https://carlrocks.com/assets/images/6-688e6a400e18ecdb8b9b90b629716ed8.JPG',
        'https://carlrocks.com/assets/images/8-84bc090cbc4a46d1aeef712d3e90342f.JPG'
      ]
    },
    {
      id: 8,
      longitude: 19.040235,
      latitude: 47.497912,
      size: 20,
      color: "#CE1126",
      name: 'Budapest, Hungary',
      description: 'The capital city of Hungary, known for its beautiful architecture and music. I visited in October 2024',
      images: [
        'https://carlrocks.com/assets/images/1-e2b4385f4b804ad60543f7376eff137d.jpg',
        'https://carlrocks.com/assets/images/2-846abf829b56ac3596521a89328a82c5.JPG',
        'https://carlrocks.com/assets/images/4-5ffe036b1a2315bd537da084486bbbd3.JPG',
        'https://carlrocks.com/assets/images/6-688e6a400e18ecdb8b9b90b629716ed8.JPG',
        'https://carlrocks.com/assets/images/8-84bc090cbc4a46d1aeef712d3e90342f.JPG'
      ]
    },
    {
      id: 9,
      longitude: 116.3912,
      latitude: 39.9087,
      size: 20,
      color: "#DE2910",
      name: 'Beijing, China',
      description: 'The capital city of China, known for its beautiful architecture and music. I visited in October 2024',
      images: [
        'https://carlrocks.com/assets/images/greatwall-winter-3f57bcec74fb081f4e272d3d7a91a528.jpg',
        'https://carlrocks.com/assets/images/greatwall-winter-2-2b18d66b1534ea153b1fc8da24054549.jpg',
        'https://carlrocks.com/assets/images/beijing-evening-3886416c34ec4975d1dc38ed2a80196f.jpg',
        'https://carlrocks.com/assets/images/forbidden-city-aa502204cba1cf0075cd479a1af13faf.jpg',
        'https://carlrocks.com/assets/images/mountains-4872e9a0fab5008fdc58a8911d9d961d.jpg'
      ]
    },
    {
      id: 10,
      longitude: 76.9283,
      latitude: 39.466,
      size: 20,
      color: "#DE2910",
      name: 'Kashgar, China',
      description: 'A historic city in western China, known for its Uyghur culture, ancient Old Town, and as a major stop on the Silk Road. I visited in October 2024',
      images: [
        'https://carlrocks.com/assets/images/3-1a3eec316ae23563bf028e25cf4026ab.jpg',
        'https://carlrocks.com/assets/images/5-9c2eb7f01d08e9c8b61395d58d795046.jpg',
        'https://carlrocks.com/assets/images/6-f017b8e19bf04270b4b5b94602db256c.jpg',
        'https://carlrocks.com/assets/images/7-1fd79da60cbf9e2fc08097103f1fdd1b.jpg',
        'https://carlrocks.com/assets/images/8-4e0394000e42fbc8712c9c79aa9c7176.jpg'
      ]
    },
    {
      id: 11,
      longitude: 14.3442,
      latitude: 48.8148,
      size: 20,
      color: "#D80000",
      name: 'Český Krumlov, Czech Republic',
      description: 'A historic city in Czech Republic, known for its beautiful architecture and music. I visited in October 2024',
      images: [
        'https://carlrocks.com/assets/images/1-50b2f3d67ae0f39fb1ba025610ee8bd1.jpg',
        'https://carlrocks.com/assets/images/2-33bc5cbb255eaff1bfff0ec7fc2a0411.jpg',
        'https://carlrocks.com/assets/images/3-955fbe42c36b814b5c2d12e8632769e3.jpg',
        'https://carlrocks.com/assets/images/4-d8fa7f5e9281251cb16e64ed66410755.jpg',
        'https://carlrocks.com/assets/images/5-e3d5a912f12ceeda3049f97a1bffe9fa.jpg'
      ]
    },
    {
      id: 12,
      longitude: 135.7727,
      latitude: 34.9912,
      size: 20,
      color: "#BC002D",
      name: 'Kyoto, Japan',
      description: 'A historic city in Japan, known for its traditional temples, beautiful gardens, and geisha culture. I visited in December 2023',
      images: [
        'https://carlrocks.com/assets/images/2-d6fd58a8953e420425cdc36166f7550e.jpg',
        'https://carlrocks.com/assets/images/5-6e116c9242083c11f45bf87e2897c510.jpg',
        'https://carlrocks.com/assets/images/6-8642ee0dbcfd870deedc0f60c5da1ec9.jpg',
        'https://carlrocks.com/assets/images/8-0bb4d31ff6d6b092c1fb32a32f830d60.jpg',
        'https://carlrocks.com/assets/images/9-29d7c79f0cc35bc9151222ee366cfb1c.jpg'
      ]
    },
    {
      id: 12,
      longitude: 135.5023,
      latitude: 34.6937,
      size: 20,
      color: "#BC002D",
      name: 'Osaka, Japan',
      description: 'Japan\'s vibrant street food capital and second-largest city, known for its modern architecture, lively entertainment districts, and friendly locals who embody the "kuidaore" (eat until you drop) philosophy. I visited in December 2023 and enjoyed the bustling Dotonbori area with its iconic Glico Man sign, sampled delicious takoyaki and okonomiyaki at street stalls, and experienced the energetic atmosphere of Osaka Castle and Shinsekai district.',
      images: [
        'https://carlrocks.com/assets/images/4-466b2525d72d0b2fb1e534872bf66bad.jpg',
        'https://carlrocks.com/assets/images/3-62edd1114fcec666d9cd53ed5b869d21.jpg',
        'https://carlrocks.com/assets/images/6-8642ee0dbcfd870deedc0f60c5da1ec9.jpg',
        'https://carlrocks.com/assets/images/8-0bb4d31ff6d6b092c1fb32a32f830d60.jpg',
        'https://carlrocks.com/assets/images/9-29d7c79f0cc35bc9151222ee366cfb1c.jpg'
      ]
    },
    {
      id: 13,
      longitude: -122.4194,
      latitude: 37.7749,
      size: 20,
      color: "#0A3161",
      name: 'San Francisco, USA',
      description: 'A vibrant city in California, known for its iconic Golden Gate Bridge, steep hills, diverse culture, and tech innovation. I visited in July 2022',
      images: [
        'https://carlrocks.com/assets/images/GoldenGate-db63117f1611619e138e8dc60298fc6d.jpg',
        'https://carlrocks.com/assets/images/SFDowntown-7872af262d167df80dd2f19968d27022.jpg',
        'https://carlrocks.com/assets/images/SFDowntown2-adb564032fc46efa3cf4e4694aac70e7.jpg',
        'https://carlrocks.com/assets/images/StreetArt-4643eae6cbc4cf540148cb2b9c4934ec.jpg',
        'https://carlrocks.com/assets/images/SFCoast-194f9bafb88b45a843fa4e5e2bd185e4.jpg'
      ]
    },
    {
      id: 14,
      longitude: -116.9158,
      latitude: 36.53,
      size: 20,
      color: "#0A3161",
      name: 'Death Valley, USA',
      description: 'A desert valley in Eastern California, known for its extreme heat, below-sea-level basin, and dramatic landscape features. I visited in August 2019',
      images: [
        'https://carlrocks.com/assets/images/Mojave-dune-84109280cd10d35b1817f219895bc94e.jpg',
        'https://carlrocks.com/assets/images/Mojave-dune2-cdf921be5ef7ae226c9254fdd66cbbe9.jpg',
        'https://carlrocks.com/assets/images/Mojave-Jeep-e3a6608ec65b43c4fbfa43835672baf4.jpg',
        'https://carlrocks.com/assets/images/Mojave-Jeep2-6d1c2428c87484b445f156b8e84decb3.jpg',
        'https://carlrocks.com/assets/images/Mojave-redrocks3-21de3279145ec0e0fac6902a6f309e52.jpg'
      ]
    },
    {
      id: 15,
      longitude: 110.35,
      latitude: 20.02,
      size: 20,
      color: "#DE2910",
      name: 'Hainan, China',
      description: 'A tropical island province in southern China, known for its beautiful beaches, lush rainforests, and resort destinations. I visited in May 2021',
      images: [
        'https://carlrocks.com/assets/images/Fish2-7b4b4b5ef21566169caaab6cd3609823.jpeg',
        'https://carlrocks.com/assets/images/Fish-b05c9fcd4a0405a572e331dd33e8e7a9.jpeg',
        'https://carlrocks.com/assets/images/Sanya3-ddfec5850add53c1a728fc38d9063c18.jpeg',
        'https://carlrocks.com/assets/images/Drone2-12a835a3ca3aa7a3b2b712547c8cb759.jpeg',
        'https://carlrocks.com/assets/images/Atlantis-742dc3909b9864141ce774dc7542d013.jpeg'
      ]
    },
    {
      id: 16,
      longitude: -115.1398,
      latitude: 36.1699,
      size: 20,
      color: "#0A3161",
      name: 'Las Vegas, USA',
      description: 'A vibrant resort city in Nevada, known for its casinos, entertainment, and nightlife along the Las Vegas Strip. I visited in June 2022',
      images: [
        'https://carlrocks.com/assets/images/LasVegas2-12d37f29f42d599f932d123966b3c4d1.jpg',
        'https://carlrocks.com/assets/images/VegasLake-b5203fad25f789aa367f23c62c626fac.jpg',
        'https://carlrocks.com/assets/images/Hotel-76c2e5a05fe44c13a7e8908c334eddae.jpg',
        'https://carlrocks.com/assets/images/LasVegas-999080ab6d2bc8c48096e5d6d8f388b4.jpg',
        'https://carlrocks.com/assets/images/HighWay-b713dfcd6b74f1dd8400d65a3ecd2354.jpg'
      ]
    },
    {
      id: 17,
      longitude: -123.1134,
      latitude: 49.2827,
      size: 20,
      color: "#FF0000",
      name: 'Vancouver, Canada',
      description: 'A coastal seaport city in British Columbia, known for its stunning mountains, diverse culture, and beautiful parks. I visited in August 2023',
      images: [
        'https://carlrocks.com/assets/images/Street-3f3f79443d53338a4299140156cbb848.jpg',
        'https://carlrocks.com/assets/images/StanleyPark-642fd1bede761f06cb6431ff74470866.jpg',
        'https://carlrocks.com/assets/images/FallLeaves3-1fd5ab0976fa0bb9159b0116487bc1c7.jpg',
        'https://carlrocks.com/assets/images/Granville2-4af422b5f564ce126ba007f619960396.jpg',
        'https://carlrocks.com/assets/images/Beach3-72845e5814d6b72089f895aa3f701e0a.jpg'
      ]
    },
    {
      id: 18,
      longitude: 11.2558,
      latitude: 43.7696,
      size: 20,
      color: "#009246",
      name: 'Florence, Italy',
      description: 'A historic city in Tuscany, Italy, known for its Renaissance art, architecture, and cultural heritage. I visited in May 2024',
      images: [
        'https://carlrocks.com/assets/images/1-b9d6039b4627659d65d1898c96f05be1.jpg',
        'https://carlrocks.com/assets/images/3-f5a57b6b33a8c241673978442c4dd016.jpg',
        'https://carlrocks.com/assets/images/4-0919a369f726acf9b896d9fe14de4eef.jpg',
        'https://carlrocks.com/assets/images/2-663126ea66e7908da622cc5e8bd384de.jpg'
      ]
    },
    {
      id: 19,
      longitude: 12.4964,
      latitude: 41.9033,
      size: 20,
      color: "#009246",
      name: 'Rome, Italy',
      description: 'The capital city of Italy, known for its ancient ruins including the Colosseum, Roman Forum, and Pantheon. I visited in May 2024',
      images: [
        'https://carlrocks.com/assets/images/1-6e69e52914e95e42df9cf6dc332d5b42.jpg',
        'https://carlrocks.com/assets/images/2-0fccbb73b1053f0c8e8da1586cf3d460.jpg',
        'https://carlrocks.com/assets/images/3-63b1d9866c6eaadcd8e15dad890c1282.jpg',
        'https://carlrocks.com/assets/images/4-c31e75c0fd1c2e4fa6350d9eef00edab.jpg',
        'https://carlrocks.com/assets/images/5-efda735a3b0352b0b824968fb3b0d320.jpg'
      ]
    },
    {
      id: 20,
      longitude: 13.4536,
      latitude: 47.7403,
      size: 20,
      color: "#ED2939",
      name: 'St. Wolfgang, Austria',
      description: 'A historic city in Italy, known for its beautiful canals, historic architecture, and unique gondola rides. I visited in May 2024',
      images: [
        'https://carlrocks.com/assets/images/1-6e69e52914e95e42df9cf6dc332d5b42.jpg',
        'https://carlrocks.com/assets/images/2-0fccbb73b1053f0c8e8da1586cf3d460.jpg',
        'https://carlrocks.com/assets/images/3-63b1d9866c6eaadcd8e15dad890c1282.jpg',
        'https://carlrocks.com/assets/images/4-c31e75c0fd1c2e4fa6350d9eef00edab.jpg',
        'https://carlrocks.com/assets/images/5-efda735a3b0352b0b824968fb3b0d320.jpg'
      ]
    },
    {
      id: 21,
      longitude: 96.4077,
      latitude: 35.7440,
      size: 20,
      color: "#DE2910",
      name: 'Qinghai, China',
      description: 'A breathtaking province in western China with stunning alpine lakes, vast grasslands, and snow-capped mountains. I trekked around Qinghai Lake and camped under the stars with nomadic herders in September 2021, experiencing the most incredible night sky I\'ve ever seen.',
      images: [
        'https://carlrocks.com/assets/images/Galaxy2-9910a66687e33658843faa71dfb1c856.jpg',
        'https://carlrocks.com/assets/images/Field-5fe1724cc0451c727b14022cb0dccfce.jpg',
        'https://carlrocks.com/assets/images/Horses-4f61a8bcb7b4425f0d3495895ec3f31e.jpg',
        'https://carlrocks.com/assets/images/Monks-368562bdd104469bf38e06c31d2db570.jpg',
        'https://carlrocks.com/assets/images/1-756e1d77d173c570dbce42969be81ddd.jpg',
        'https://carlrocks.com/assets/images/2-033ef4981bb46b318372142e252cba9d.jpg',
        'https://carlrocks.com/assets/images/3-3be4de6f81c1ddbe3237b80c4bab1cc6.jpg'
      ]
    },
    {
      id: 22,
      longitude: 104.0668,
      latitude: 30.5728,
      size: 20,
      color: "#DE2910",
      name: 'Chengdu, China',
      description: 'The capital of Sichuan province in southwestern China, known for its spicy cuisine, relaxed teahouse culture, and as home to the famous giant panda sanctuaries. I visited in August 2022 and enjoyed the laid-back atmosphere, delicious hotpot, and a day trip to see the adorable pandas at the Chengdu Research Base of Giant Panda Breeding.',
      images: [
        'https://carlrocks.com/assets/images/8-071826b3e2807a5e008268d60e51fec7.jpeg',
        'https://carlrocks.com/assets/images/9-b59112aaa2ec62045a046226cfead4e2.jpeg',
        'https://carlrocks.com/assets/images/7-4d784824e36ccc0485d71ad0ab7b4a58.jpeg',
        'https://carlrocks.com/assets/images/6-3a2e419bed846ce014c847ab89bca0dc.jpeg',
        'https://carlrocks.com/assets/images/5-9a137bc94286d13d64933e24df986c24.jpeg',
        'https://carlrocks.com/assets/images/1-22210177b648be6b5dbca8f4db1ab736.jpeg'
      ]
    },
    {
      id: 23,
      longitude: 106.5516,
      latitude: 29.5630,
      size: 20,
      color: "#DE2910",
      name: 'Chongqing, China',
      description: 'A sprawling megacity in southwestern China known for its futuristic cyberpunk aesthetic, with towering skyscrapers illuminated by neon lights that reflect off the Yangtze and Jialing rivers. I visited in October 2023 and was mesmerized by the city\'s vertical landscape, where elevators and escalators connect different levels of the city, creating a real-world Blade Runner atmosphere especially at night when the cityscape glows with countless LED displays.',
      images: [
        'https://carlrocks.com/assets/images/birds-269443fe25167a04018f289001ad056c.jpg',
        'https://carlrocks.com/assets/images/cable-5123c9909f6cd6dba04b0b57167e1f72.jpg',
        'https://carlrocks.com/assets/images/noodles-93f3c40a910147f49a17a77ca1f9a97f.jpg',
        'https://carlrocks.com/assets/images/1-2-2e8c294f9169f0725f618772e40b8d7d.jpeg',
        'https://carlrocks.com/assets/images/2-595bff54acae7b89687941fda00aba6f.jpeg',
        'https://carlrocks.com/assets/images/3-d5605cdfe3cdba7e909a551f701aeb9d.jpeg',
        'https://carlrocks.com/assets/images/4-cded964a74ffdf2294506c89c60d1d5f.jpeg'
      ]
    },
    {
      id: 24,
      longitude: 94.6618,
      latitude: 40.1421,
      size: 20,
      color: "#DE2910",
      name: 'Gobi Desert, China',
      description: 'One of the largest deserts in Asia spanning northern China and southern Mongolia. I embarked on an epic 150km trek across its vast, otherworldly landscape in July 2018, navigating between towering sand dunes, rocky outcrops, and rare oases. The journey took 7 days, camping under the most spectacular starry skies and experiencing extreme temperature fluctuations from scorching days to freezing nights. The isolation and raw beauty of this ancient desert landscape was a profound, life-changing experience.',
      images: [
        'https://carlrocks.com/assets/images/1-b00a13d210f027abe95c552cafe4bd0a.jpeg',
        'https://carlrocks.com/assets/images/2-85892d2fb19b004f7b97effd98b043a2.jpeg',
        'https://carlrocks.com/assets/images/3-00bcd9a7253aff726c4e6f304e1a9177.jpeg',
        'https://carlrocks.com/assets/images/4-a55dd1052203d2dec3954b65d5eb494e.jpeg',
        'https://carlrocks.com/assets/images/5-346c3b46d9aa17f69970ba015cf32a36.jpeg',
        'https://carlrocks.com/assets/images/6-9cccd670c89254e439cf79b590a881d6.jpeg',
        'https://carlrocks.com/assets/images/9-3b5307b27f6fcc910029a7f3524d5318.jpeg'
      ]
    },
    {
      id: 25,
      longitude: 99.7078,
      latitude: 27.8250,
      size: 20,
      color: "#DE2910",
      name: 'Shangri-La, China',
      description: 'A picturesque county in China\'s Yunnan province, renamed to evoke the mythical paradise from James Hilton\'s novel "Lost Horizon." I visited in September 2017 and was enchanted by its Tibetan Buddhist monasteries, snow-capped mountains, and pristine alpine meadows. The ancient town with its massive prayer wheel and the nearby Pudacuo National Park with its crystal-clear lakes offered a spiritual tranquility that truly lived up to its legendary name. The blend of Tibetan and Han Chinese cultures created a unique atmosphere that felt worlds away from modern China.',
      images: [
        'https://carlrocks.com/assets/images/1-5adce75ef17a2c406df2d9cb4629ef03.jpeg', // Urban street
        'https://carlrocks.com/assets/images/9-13292f29bf735d8bc2208216294c9ab7.jpeg', // Open book
        'https://carlrocks.com/assets/images/3-04b8da060a3f0f53c643110375133a6b.jpeg', // Deer in nature
        'https://carlrocks.com/assets/images/6-d1028ad2e60ff1bfb99084aab4ca2abc.jpeg',// Person on cliff
        'https://carlrocks.com/assets/images/7-7918c010dc14f5108631936309672764.jpeg',
        'https://carlrocks.com/assets/images/8-5dcc87579ccdb995eb75f5e2beafb5c1.jpeg',
        'https://carlrocks.com/assets/images/4-84ad15e05e6c3fef0d405707270257e1.jpeg'
      ]
    },
    {
      id: 26,
      longitude: -112.1129,
      latitude: 36.1069,
      size: 20,
      name: 'Grand Canyon, USA',
      color: "#0A3161",
      description: 'A breathtaking natural wonder in Arizona, known for its towering cliffs, deep canyons, and the Colorado River cutting through its heart. I hiked the South Rim and took a helicopter tour to see the canyon from above, experiencing the vastness and beauty of this natural wonder. I hiked across the Grand Canyon in October 2017.',
      images: [
        'https://carlrocks.com/assets/images/2-1-c166e6c6e4b00669d260284bd9d1def6.jpg', // Urban street
        'https://carlrocks.com/assets/images/2-2da33bca2b09bf48883cbe9b748e9ffa.jpeg', // Open book
        'https://carlrocks.com/assets/images/3-968ff2194345999a748591007dcf9736.jpg', // Deer in nature
        'https://carlrocks.com/assets/images/4-6cea76b9635ddeafacd7360c5c67c20d.jpeg',// Person on cliff
        'https://carlrocks.com/assets/images/8-059fda877adaf9a14afa0a909e91a00e.jpeg',
        'https://carlrocks.com/assets/images/9-3d95ff260a6ba760d6cdc9aa55a67132.jpeg'
      ]
    }
  ]}
  enableAnimation={false}
  interactiveMarkers={true}
  showBounceCards={true}
  onMarkerClick={(marker) => {
    console.log('Marker clicked:', marker);
  }}
/>}
</BrowserOnly>

## Timeline

<BrowserOnly>
{() => (
<Timeline events={[
  { year: 1994, title: 'Birthday', detail: 'Beijing, China' },
  {
    year: 2007,
    title: 'High School',
    detail: 'Calgary, Alberta'
  },
  {
    year: 2013,
    title: 'McGill University',
    detail: 'Montreal, Quebec'
  },
  {
    year: 2015,
    title: 'Metanautix',
    detail: 'Palo Alto, California'
  },
  {
    year: 2018,
    title: 'Tableau',
    detail: 'Seattle, Washington'
  },
  {
    year: 2020,
    title: 'Airbnb',
    detail: 'Beijing, China'
  },
  {
    year: 2022,
    title: 'Presence',
    detail: 'Bay Area, California'
  },
  {
    year: 2025,
    title: 'Stanford University',
    detail: 'Stanford, California'
  }
]}/>)
}
</BrowserOnly>

export const Backtracking = () => {
  const tree = {
    name: '👨🏻‍💻',
    children: [
      {
        name: 'Tech Stack',
        children: [
          {
            name: 'Client',
            children: [{ name: 'iOS' }, { name: 'Unity' }, { name: 'React' }]
          },
          {
            name: 'Backend',
            children: [
              { name: 'Java' },
              { name: 'Docker' },
              { name: 'Kafka' },
              { name: 'Kubernetes' }
            ]
          }
        ]
      },
      {
        name: 'Product',
        children: [{ name: 'Growth' }, { name: 'AI-Native' }]
      },
      {
        name: 'Hobby',
        children: [
          {
            name: 'Workout',
            children: [
              { name: 'Soccer ⚽️' },
              { name: 'Running 🏃🏻‍♀️' },
              { name: 'Gym 😅' }
            ]
          },
          {
            name: 'Music',
            children: [
              { name: 'Guitar 🎸' },
              { name: 'Piano 🎹' },
              { name: 'Music Tech 🎧' }
            ]
          }
        ]
      }
    ]
  };
  return <>{typeof window !== 'undefined' && <TreeChart data={tree}/>}</>
}

<!-- 
## Hobbies -->

<!-- <BrowserOnly>
{() => <Backtracking />}
</BrowserOnly> -->

<!-- 
## Visited Countries


<BrowserOnly>
{() => <WorldMap daysSpent={[
  { CHN: 6935 },
  { CAN: 3600 },
  { USA: 150 },
  { CZE: 4 },
  { DEU: 1 },
  { AUT: 10 },
  { THA: 15 },
  { JPN: 20 },
  { ITA: 10 },
  { HUN: 3 },
  { PRK: 3 },
  { AUS: 10 }
]} />}
</BrowserOnly> -->
