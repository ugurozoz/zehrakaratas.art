import React from 'react';
import './CvContent.css'

const cvContent = (props) => {
  return (
    <div className='container'>
      <strong>Eğitim</strong>
      <div className='egtdiv'>
        <strong>Üniversite</strong><span>:</span><p>Dokuz Eylül Üniversitesi; Güzel Sanatlar Fakültesi; Seramik ve Cam Tasarımı Bölümü(2003–2006)</p>
        <strong>Üniversite </strong><span>:</span><p>Trakya Üniversitesi; Seramik Meslek Yüksekokulu; Seramik Bölümü		(1989-1992)</p>
        <strong>Lise</strong> <span>:</span><p>İstanbul Kocasinan  Lisesi; (1981-1985)</p>
      </div>
       
	

      
    </div>
  );
};

export default cvContent;



