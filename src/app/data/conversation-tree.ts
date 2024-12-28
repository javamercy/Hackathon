import { Step } from '../components/models/step.model';

export const conversationTree = (botName: string):  Step => ({
  text: `Merhaba Emre! Ben ${botName}, senin rehberin. Az önce doldurduğun testi inceledim. Biraz seninle sohbet etmek istiyorum. Hangi alanda ilerlemek istediğin konusunda kafan net mi?`,
  options: [
    'Hayır, tam olarak değil.',
    'Biraz kararsızım.',
    'Aslında hiçbir fikrim yok.',
  ],
  nextSteps: [
    {
      text: 'Anladım. O zaman biraz geçmişten bahsedelim. Aşağıdakilerden hangisi sana daha yakın?',
      options: [
        'Bilimsel konulara ilgim var ama nereden başlayacağımı bilmiyorum.',
        'Problem çözmeyi seviyorum ama hangi alanda ilerleyeceğimi kestiremiyorum.',
        'Bazen başladığım şeylerin bana uygun olmadığını fark ediyorum.',
      ],
      nextSteps: [
        {
          text: 'Bu çok normal, Emre. Hangi alanlarda böyle bir his yaşadın? Daha önce ilgi duyup başladığın ama seni tatmin etmeyen bir şey oldu mu?',
          options: [
            'Tıp Fakültesi veya benzer bir alana girdim ama tatmin olmadım.',
            'Uzun süreli ezber ve teorik işler bana göre değil.',
            'Kendi ilgi alanımı keşfetmekte zorlanıyorum.',
          ],
          nextSteps: [
            {
              text: 'Bu önemli bir adım. Şimdi, hangi tür işler seni daha fazla heyecanlandırıyor? Aşağıdakilerden birini seçebilir misin?',
              options: [
                'Mantık ve analitik düşünmeyi gerektiren işler.',
                'Pratik çözümler üretmek ve elle bir şeyler yapmak.',
                'İnsanlarla çalışmayı ve sosyal projelerde yer almayı seviyorum.',
              ],
              nextSteps: [
                {
                  text: 'Mantık ve analitik düşünme… Bu çok kıymetli bir beceri, Emre. Peki, bu beceriyi kullanarak aşağıdakilerden hangisi seni daha çok mutlu ederdi?',
                  options: [
                    'Bir problemi çözmek ve ortaya bir sonuç çıkarmak.',
                    'Sistemi anlamak ve nasıl işlediğini keşfetmek.',
                    'İnsanlara rehberlik etmek ya da bir ekip yönetmek.',
                  ],
                  nextSteps: [
                    {
                      text: 'Hata bulmak ve çözmek… Emre, bu biraz bana yazılım dünyasından bahsediyormuşsun gibi geldi. Kodlama, algoritmalar veya teknik projelerde yer almak hiç aklına geldi mi?',
                      options: [
                        'Evet, denemeye değer.',
                        'Bilemiyorum ama denemek isterim.',
                      ],
                      nextSteps: [
                        {
                          text: 'O hâlde birlikte bir plan yapalım. Sana, yazılım dünyasında ilk adımlarını atabileceğin bir yol haritası hazırlayabilirim. Hem kurslar, hem de etkinliklerle dolu bir liste oluşturabiliriz. Hazır mısın?',
                          options: [
                            'Evet, başlayalım!',
                            'Biraz çekiniyorum ama denemeye hazırım.',
                            'Diğer',
                          ],
                          nextSteps: [
                            {
                              text: 'Harika! Hadi o zaman, birlikte bir roadmap oluşturalım. Bu yolculuk, senin için oldukça heyecan verici olacak. 😊',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: 'Kararsızlık normaldir. Hangi konular seni daha çok heyecanlandırıyor?',
      options: ['Bilimsel araştırmalar', 'Teknik projeler', 'Yaratıcı işler'],
    },
    {
      text: 'Hiç sorun değil. Hangi aktivitelerden daha çok keyif alıyorsun?',
      options: [
        'Kitap okumak',
        'Teknolojik aletlerle uğraşmak',
        'Sanatsal aktiviteler',
      ],
    },
  ],
});
