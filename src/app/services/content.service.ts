import { Injectable } from '@angular/core';

export interface Step {
  id: number;
  title: string;
  description: string;
  detail?: string;
  status: 'pending' | 'active' | 'completed';
}

export interface DocItem {
  id: number;
  category: string;
  title: string;
  description: string;
  isRequired: boolean;
  isChecked?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getRoadmap(): Step[] {
    return [
      {
        id: 1,
        title: 'iData Başvurusu (Randevu Kaydı)',
        description: 'iData sitesinden Ulusal Vize başvurusu yapın ve PNR numaranızı alın.',
        detail: 'Bu aşamada sadece sıraya giriyorsunuz. Atama bekleme süresi 6-12 ay sürebilir.',
        status: 'completed'
      },
      {
        id: 2,
        title: 'Dosyanın IOM\'e Devri ve "İptal" Görünümü',
        description: 'Dosyanız FAP (Aile Destek Programı) birimine aktarılır.',
        detail: 'ÖNEMLİ: iData sisteminde randevunuz "İPTAL EDİLDİ" olarak görünecektir. Bu normaldir, panik yapmayın. Dosyanız IOM yetkisindedir.',
        status: 'active'
      },
      {
        id: 3,
        title: 'IOM Evrak Talep Maili',
        description: 'info.fap.tr@iom.int adresinden mail alırsınız.',
        detail: 'Sizden Pasaport, Oturum Kartı ve BAMF kararını PDF olarak göndermeniz istenir. Spam/Gereksiz kutunuzu sık sık kontrol edin.',
        status: 'pending'
      },
      {
        id: 4,
        title: 'Telefonla Randevu Teyidi',
        description: '+90 212 401 02 50 numarasından aranırsınız.',
        detail: 'Evraklarınız tamamlandığında sizi arayıp İstanbul ofisi için gün verirler.',
        status: 'pending'
      },
      {
        id: 5,
        title: 'Görüşme Günü (İstanbul)',
        description: 'Gayrettepe ofisine şahsen başvuru.',
        detail: 'Tüm aile bireyleri (bebekler dahil) orada olmalıdır. Orijinal evraklar ve fotokopiler teslim edilir. 12 yaş üstü parmak izi verir.',
        status: 'pending'
      },
      {
        id: 6,
        title: 'Konsolosluk Değerlendirmesi',
        description: 'Dosya Alman Konsolosluğuna fiziksel olarak gönderilir.',
        detail: 'Bu süreçte IOM artık bilgi veremez. İşlem tamamen konsolosluktadır.',
        status: 'pending'
      },
      {
        id: 7,
        title: 'Pasaport Teslimi (UPS)',
        description: 'Pasaportunuz belirttiğiniz adrese kargolanır.',
        detail: 'Vizniz basılmışsa pasaportun içinde yer alır. Ret durumunda mektup ile bildirilir.',
        status: 'pending'
      }
    ];
  }

  getDocuments(): DocItem[] {
    return [
      { id: 1, category: 'Genel', title: 'Pasaportlar', description: 'En az 1 yıl geçerlilik süresi olan pasaportlar (Aslı + 2 Fotokopi)', isRequired: true },
      { id: 2, category: 'Almanya', title: 'BAMF Kararı (Bescheid)', description: 'Mülteci statüsünü gösteren Federal Daire yazısı (Tüm sayfalar)', isRequired: true },
      { id: 3, category: 'Almanya', title: 'Oturum Kartı', description: 'Arkalı önlü fotokopi', isRequired: true },
      { id: 4, category: 'Türkiye', title: 'Tam Tekmil Vukuatlı Nüfus Kayıt Örneği', description: 'Nüfus müdürlüğünden, "Düşünceler" kısmı dolu, aile seçeneği ile. (Tercüme Ettirilmeli)', isRequired: true },
      { id: 5, category: 'Türkiye', title: 'Formül B', description: 'Uluslararası Evlenme Kayıt Örneği (Çok dilli olduğu için tercüme gerekmez)', isRequired: true },
      { id: 6, category: 'Çocuklar', title: 'Formül A', description: 'Uluslararası Doğum Kayıt Örneği', isRequired: true },
      { id: 7, category: 'Genel', title: 'Biyometrik Fotoğraf', description: '3 adet, 35x45mm, son 6 ayda çekilmiş', isRequired: true },
      { id: 8, category: 'Genel', title: 'Sağlık Sigortası', description: 'Seyahat Sağlık Sigortası (Bazı durumlarda isteniyor, hazırlıklı olmakta fayda var)', isRequired: false },
      { id: 9, category: 'Kritik', title: 'Fristwahrende Anzeige', description: 'Eğer çocuk 18 yaşına girmek üzereyse veya girdiyse, süreyi koruyan bildirim belgesi.', isRequired: false }
    ];
  }

  getFaqs(): FaqItem[] {
    return [
      { category: 'Süreç', question: 'İData randevum iptal edildi yazıyor, reddedildim mi?', answer: 'Hayır. Bu standart bir prosedürdür. Dosyanız IOM sistemine aktarıldığı için iData\'da iptal görünür. Beklemeye devam edin.' },
      { category: 'Belgeler', question: 'Tercüme noter onaylı mı olmalı?', answer: 'Genellikle yeminli tercüme yeterlidir. Ancak bazı memurlar noter onayı isteyebilir. Garanti olsun diye noter onayı yaptıranlar mevcuttur.' },
      { category: 'Çocuklar', question: 'Çocuğum 18 yaşına girmek üzere, ne yapmalıyım?', answer: 'Çok acil olarak "Fristwahrende Anzeige" (Süre koruyucu başvuru) yapmalısınız. Aksi takdirde çocuk reşit olduğunda aile birleşimi hakkını kaybedebilir.' },
      { category: 'Eş Durumu', question: 'Eşimle Almanya\'ya gittikten sonra evlendik, A1 lazım mı?', answer: 'Evet. Mülteci statüsü öncesi yapılan evliliklerde dil şartı yoktur. Ancak statü alındıktan sonraki evliliklerde A1 sertifikası istenir.' },
      { category: 'İletişim', question: 'IOM\'e ulaşamıyorum, ne yapmalıyım?', answer: 'Telefonlar çok yoğun. Sabah erken saatlerde (09:00 civarı) aramayı deneyin. Ayrıca info.fap.tr@iom.int adresine "ACİL" başlıklı mail atabilirsiniz.' },
      { category: 'Lojistik', question: 'İstanbul dışından geliyoruz, randevuya geç kalırsak ne olur?', answer: 'Randevu saati çok önemlidir. Geç kalırsanız içeri alınmayabilirsiniz. Şehir dışından gelenlerin bir gün önceden gelmesi tavsiye edilir.' },
      { category: 'Süreç', question: 'iData\'dan gelen ilk mail nedir? Randevu anlamına mı gelir?', answer: 'Hayır. İlk mail sadece "Randevu Kayıt Onayı"dır ve size özel PNR Numarası (Başvuru Takip Numarası) içerir. Bu mail randevunuzun verildiği anlamına gelmez, sadece bekleme listesine kaydınızın alındığını gösterir. Asıl randevu bildirimi aylarca sonra gelir.' },
      { category: 'Mülteci Statüsü', question: 'Mülteci olduğumu ne zaman ve nasıl bildirmeliyim?', answer: 'Üç aşamada bildirirsiniz: 1) iData\'da "Aile Birleşimi" vize türünü seçersiniz. 2) Dosyanız IOM\'e devredildiğinde BAMF Bescheid (mülteci kabul yazısı) belgenizi info.fap.tr@iom.int adresine PDF olarak gönderirsiniz. 3) ÇOK ÖNEMLİ: BAMF kararını aldıktan sonraki ilk 3 ay içinde mutlaka "Fristwahrende Anzeige" (Süresinde Bildirim) yapmalısınız. Bu bildirim, eşinizden maaş ve ev büyüklüğü şartının aranmaması için kritiktir.' },
      { category: 'Statü Farkı', question: 'Ayrıcalıklı vs Standart Aile Birleşimi nedir?', answer: 'Ayrıcalıklı (Privilegierter): Mülteci olmadan önce evlendiyseniz ve BAMF kararından sonraki 3 ay içinde bildirim yaptıysanız, maaş, ev ve dil şartı aranmaz. Standart: Mülteci olduktan sonra evlendiyseniz veya 3 ayı kaçırdıysanız, Almanya\'daki eşin yeterli maaşı, uygun evi olmalı ve Türkiye\'deki eş A1 Almanca bilmelidir.' },
      { category: 'Maddi Yetersizlik', question: 'Almanya\'daki eşin maaşı yetmiyorsa ne yapabilirim?', answer: 'Üç çözüm: 1) Verpflichtungserklärung (Garantör): Almanya\'da geliri yüksek bir yakınınız Ausländerbehörde\'ye gidip kefil olur. En etkili yöntem. 2) Minijob: Eşiniz 538 Euro\'luk ek iş bulur. 3) Härtefall (İstisna): Mülteci olduğunuz için ailenizin başka yerde birleşme şansı olmadığını belirterek gelir şartının esnetilmesini talep edersiniz (avukat gerekebilir).' },
      { category: 'Fristwahrende Anzeige', question: 'Fristwahrende Anzeige nedir ve nasıl yapılır?', answer: 'Süre Koruyucu Bildirim\'dir. BAMF kararından sonraki 3 ay içinde yapılmazsa maaş ve ev şartı aranır. Nasıl Yapılır: fap.diplo.de adresinden online yapılır ve PDF çıktısı alınır. Telegram grubumuzda detaylı adımlar mevcuttur.' }
    ];
  }
}
