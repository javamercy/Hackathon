import { Step } from '../components/models/step.model';

export const conversationTree = (botName: string): Step => ({
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
                              options: [`👍`],
                              nextSteps: [
                                {
                                  text: `Emre, seninle paylaşmak istediğim harika bir etkinlik var! Gençlik ve Spor Bakanlığı’nın düzenlediği bir hackathon, tam da senin gibi yeteneklerini keşfetmek isteyen gençlere yönelik.`,
                                  options: [
                                    'Evet, dinlemek isterim!',
                                    'Belki sonra...',
                                    'Şu an ilgilenmiyorum.',
                                  ],
                                  nextSteps: [
                                    {
                                      text: `<div class="card bg-light p-3">
  <p><strong>Süper! Etkinliğin detayları şöyle:</strong></p>
  <ul>
    <li><strong>Etkinlik:</strong> Gençlik Bilgilendirme Servisi Hackathonu</li>
    <li><strong>Tarih:</strong> 27-29 Aralık 2024</li>
    <li><strong>Yer:</strong> İstanbul Ataköy Uluslararası Gençlik Merkezi</li>
    <li>
      <strong>Link:</strong>
      <a
        href="https://genclikhizmetleri.gov.tr/uluslararasi-genclik-bilgilendirme-servisi-zirvesi-ve-hackathonu-basliyor-genc-fikirler-istanbulda-bulusuyor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hackathon Başvuru Sayfası
      </a>
    </li>
  </ul>
  <p>
    Bu etkinlik, yazılım kariyerine başlamak için eşsiz bir fırsat olabilir.
    Mentorlarla tanışabilir, ekiplerle çalışabilir ve kendini geliştirme şansı
    bulabilirsin. Hatta bu süreçte seninle aynı tutkuyu paylaşan insanlarla
    tanışabilirsin! <strong>Katılmak ister misin?</strong>
  </p>
</div>

                                Bu etkinlik, yazılım kariyerine başlamak için eşsiz bir fırsat olabilir. Mentorlarla tanışabilir, ekiplerle çalışabilir ve kendini geliştirme şansı bulabilirsin. Hatta bu süreçte seninle aynı tutkuyu paylaşan insanlarla tanışabilirsin! Katılmak ister misin?`,
                                      options: [
                                        'Evet, harika bir fırsat. Başvuralım!',
                                        'Emin değilim, biraz daha düşünmek istiyorum.',
                                        'Hayır, bu seferlik katılmayacağım.',
                                      ],
                                      nextSteps: [
                                        {
                                          text: `Süper karar, Emre! O zaman hemen başvuralım. Senin için gereken bilgileri dolduruyorum. 😊`,
                                          options: [`♥️`],
                                          nextSteps: [
                                            {
                                              text: `Başvurun tamamlandı! Şimdi, 27 - 29 Aralık’ta güzel bir süreç seni bekliyor. Mentorlarla tanışacağın ve harika projeler geliştireceğin bu etkinlik, senin için büyük bir adım olacak!`,
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
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
