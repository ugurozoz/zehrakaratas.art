import React from 'react';
import './CvContent.css';

const cvContent = (props) => {
  return (
    <div className='container cv-container'>
      <div className='st-con edu-div'>
        <strong className='gen-head'>Eğitim</strong>
        <div className='edu-div-row'>
          <strong>Üniversite</strong>
          <span>:</span>
          <p>
            Dokuz Eylül Üniversitesi; Güzel Sanatlar Fakültesi; Seramik ve Cam
            Tasarımı Bölümü(2003–2006)
          </p>
        </div>
        <div className='edu-div-row'>
          <strong>Üniversite </strong>
          <span>:</span>
          <p>
            Trakya Üniversitesi; Seramik Meslek Yüksekokulu; Seramik Bölümü
            (1989-1992)
          </p>
        </div>
        <div className='edu-div-row'>
          <strong>Lise</strong> <span>:</span>
          <p>İstanbul Kocasinan Lisesi; (1981-1985)</p>
        </div>
      </div>

      <div className='st-con job-div'>
        <strong className='gen-head'>İş Deneyimleri</strong>
        <div className='job-div-row'>
          <strong>
            VII SANAT SERAMİK HEYKEL CAM TASARIM ATOLYESİ; İSTANBUL (09.04.2007
            – 09.04.2011)
          </strong>
          <p>Birim: Tasarım ve Rölyef (Çamur Şekillendirme)</p>
        </div>

        <div className='job-div-row'>
          <strong>
            DİZİ FİLM, SİNEMA SAHNE DEKORU; İSTANBUL(12.2005 – 09.2006)
          </strong>
          <p>Birim: Sahne Dekoru</p>
        </div>

        <div className='job-div-row'>
          <strong>ŞERİF GÜNYAR ATOLYESİ; İSTANBUL(06.2005 – 09.2005)</strong>
          <p>Birim: Çamur Şekillendirme</p>
        </div>

        <div className='job-div-row'>
          <strong>CEM BAŞARIR REKLAM AJANSI; İZMİR(03.1997 – 05.1998)</strong>
          <p>Birim: Grafik Tasarım</p>
        </div>

        <div className='job-div-row'>
          <strong>ANIT REKLAM AJANSI; İSTANBUL(02.1995 – 12.1996)</strong>
          <p>Birim: Grafik Tasarım</p>
        </div>

        <div className='job-div-row'>
          <strong>ÇİZGE REKLAM AJANSI; İSTANBUL (04.1994 – 01.1995) </strong>
          <p>Birim: Grafik Tasarım</p>
        </div>
      </div>

      <div className='st-con prj-div'>
        <strong className='gen-head'>Projeler</strong>
        <div className='prj-div-row'>
          Fatih Üniversitesi, Dış Cephe Pano Tasarım Rölyef (Çamur
          Şekillendirilmesi)
        </div>
        <div className='prj-div-row'>
          Kahraman Maraş Sütçü İmam Üniversitesi, Seramik Panoları Rölyef
        </div>
        <div className='prj-div-row'>
          Antalya Tekirova Clup Ali Bey, Seramik Panoları Rölyef ve Montaj
        </div>
        <div className='prj-div-row'>
          Aba Dabi Türk Konsolosluğu, Panoları Rölyef
        </div>
        <div className='prj-div-row'>
          Fatih Belediyesi Bina İçi, Seramik Panoları Rölyef{' '}
        </div>
        <div className='prj-div-row'>
          Metro Levent İstasyonu, Panoları Rölyef
        </div>
        <div className='prj-div-row'>
          Ankara Büyük Şehir Belediyesi Alt Geçitleri, Seramik Panoları Rölyef,
          Tasarım
        </div>
        <div className='prj-div-row'>
          Gazi Antep Dedeman Oteli, Seramik Pano Montaj ve Uygulama
        </div>
        <div className='prj-div-row'>
          Dizi Film Dekoru; Paris Narko Terör, İç Mekan Dekoru Uygulama
        </div>
        <div className='prj-div-row'>Reklam Filmi; Eti Negro, Maket</div>
      </div>
    </div>
  );
};

export default cvContent;
