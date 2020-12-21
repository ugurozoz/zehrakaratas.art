import React from 'react';
import './ThesisContent.css';
import ThesisImages from './ThesisImages/ThesisImages';

const thesisContent = (props) => {
  return (
    <div className='container thesis-container'>
      <strong className='gen-head'>İfadeler</strong>
      <div className='thesis-container__inner'>
        <div className='thesis-text'>
          <p>
            Yüzlerin altında yatan travmaları görmeye çalışıyorum.
            İfadelerimizin bir anla diğer bir ana geçerken ki kazanım ve
            kaybedişlerini. Ve bu anlar arasında ki kayboluşları ceplerimde
            saklamak istiyorum.
          </p>
          <p>
            Mermerden bir kaide değildir hayatlarımız, izsiz sürüp giden,
            sanatçı da yaşadığı çağdan bağımsız değildir.
          </p>
          <p>
            Savaşlar, soykırımlar ve korkularımız ne varsa bu korku
            imparatorluklarında yaşatılan, üzerimize siner...
          </p>
          <p>
            Huzurlu bir gökyüzü altında uzanamazsınız , varsayalım ki
            uzanıyormuş gibi yaptınız...
          </p>
          <p>
            İşte tam da o anlarda sebebini bilmediğiniz, anlayamadığınız
            kasılmalarınız, baş ağrılarınız, tikleriniz başlar...
          </p>
          <p>
            Öğrendiklerinizin dışına çıkmaya çalışsanız da yok çıkamazsınız. Ve
            kendinizi bir otel odasında eşantiyon olarak verilen tek sıkımlık
            diş macunu kıvamında değersizleştirirken hiç bir şey öylesine gelip
            geçmez yanınızdan. Size dokunur ve bu dokunuşlar yaşanmışlıklar
            olarak genetiğinize işleyerek büyür.
          </p>
        </div>
        <div className='thesis-image-slider'>
          <ThesisImages />
        </div>
      </div>
    </div>
  );
};

export default thesisContent;
